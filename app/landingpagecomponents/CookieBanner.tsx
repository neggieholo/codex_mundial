"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check if the user already made a choice
        const choice = localStorage.getItem("cookiesChoice");
        if (!choice) setVisible(true);
    }, []);

    const acceptAll = () => {
        localStorage.setItem("cookiesChoice", "all");
        setVisible(false);
    };

    const acceptNecessary = () => {
        localStorage.setItem("cookiesChoice", "necessary");
        setVisible(false);
    };

    if (!visible) return null; // Banner hidden

    return (
        <div
            className="fixed bottom-0 left-0 w-full bg-base-100 shadow-lg border-t border-base-300 z-50 transition-transform duration-500"
            style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
                <p className="text-sm sm:text-base text-center sm:text-left">
                    We use cookies to improve your experience. By using FixMate, you agree to our{" "}
                    <a href="#" className="link link-primary">Privacy Policy</a>.
                </p>
                <div className="flex gap-2">
                    <button onClick={acceptAll} className="btn btn-primary btn-sm sm:btn-md">Accept All</button>
                    <button onClick={acceptNecessary} className="btn btn-ghost btn-sm sm:btn-md">Necessary Only</button>
                </div>
            </div>
        </div>
    );
}
