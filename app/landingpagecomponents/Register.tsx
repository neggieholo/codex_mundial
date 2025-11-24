"use client";

import React, { useState } from "react";
import ToastTrigger from "../utlis/ToastTrigger";

const Register = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toastMsg, setToastMsg] = useState<{ message: string; type: any } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name }),
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok) {
                setToastMsg({ message: data.error || "Registration failed", type: "error" });
                return;
            }

            console.log(data.user);

            setToastMsg({ message: "Registration successful!", type: "success" });
            window.location.href = "/home/dashboard";
            setName("");
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error(err);
            setToastMsg({ message: "Something went wrong. Please try again.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            // Optional: do any client-side checks before redirect
            // e.g., disable the button or track clicks

            window.location.href = `${BASE_URL}/api/auth/google`;
        } catch (err) {
            console.error("Google login failed:", err);
            // Show toast if needed
            setToastMsg({ message: "Unable to start Google login. Please try again.", type: "error" });
        }
    };


    return (
        <section className="flex flex-1 flex-col justify-center min-h-screen items-center px-6 py-12 bg-linear-to-r from-primary/40 to-secondary/20">
            {toastMsg && <ToastTrigger message={toastMsg.message} type={toastMsg.type} />}
            <div className="w-full max-w-md bg-base-100/80 rounded-2xl shadow-lg p-8 space-y-6 backdrop-blur-sm border border-base-300">
                <h2 className="text-3xl font-bold text-center text-primary mb-2">
                    Create an Account
                </h2>
                <p className="text-center text-base-content/70 mb-6">
                    Sign up with your email or Google account
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-1 text-base-content/80"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1 text-base-content/80"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium mb-1 text-base-content/80"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-4">
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Registering...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>

                <div className="divider">OR</div>

                <button className="btn btn-outline w-full flex items-center justify-center gap-2 hover:bg-base-200"
                    onClick={handleGoogleLogin}>
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                <p className="text-center text-xs text-base-content/60 mt-2">
                    By signing up, I accept the{" "}
                    <a href="#" className="link link-primary hover:underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="link link-primary hover:underline">
                        Privacy Notice
                    </a>
                    .
                </p>

                <p className="text-center text-sm text-base-content/70">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="link text-blue-500 font-medium hover:text-blue-700"
                    >
                        Login
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Register;
