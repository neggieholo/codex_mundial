"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
        
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoginLoading(true);
            try {
                const res = await fetch(`${BASE_URL}/api/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                    credentials: "include",
                });
    
                const data = await res.json();
    
                if (!res.ok) {
                    toast.error(data.error || "Login failed");
                    return;
                }
    
                // toast.success(`Welcome, ${data.user.name}!`);
                // redirect to dashboard
                window.location.href = "/home/dashboard";
            } catch (err) {
                console.error(err);
                toast.error("Something went wrong. Try again.");
            } finally {
                setLoginLoading(false);
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
            toast.error("Unable to start Google login. Please try again.");
        }
    };

    return (
        <section className="flex-1 flex flex-col min-h-screen justify-center items-center px-6 py-10 bg-linear-to-r from-primary/30 to-secondary/20">
            <div className="w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 bg-base-100/80">
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
                    Welcome Back
                </h2>
                <p className="text-center text-base-content/70 mb-6">
                    Sign in with your email or Google account
                </p>

                {/* Email form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4">
                        {loginLoading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <div className="divider">OR</div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full flex items-center justify-center gap-2"
                >
                    <Image
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-base-content/70">
                    Don’t have an account?{" "}
                    <a href="/register" className="link text-blue-500 font-semibold">
                        Register
                    </a>
                </p>
            </div>
        </section>
    );
}
