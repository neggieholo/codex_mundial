"use client";
import { useEffect, useState } from "react";

export default function CookieBannerMobile() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
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

    if (!visible) return null;

    return (
        <div
            id="cookie-banner"
            className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] max-w-full bg-base-100 shadow-lg border-t border-base-300 transition-transform duration-500 z-50 rounded-t-xl"
            style={{
                transform: visible ? "translateY(0)" : "translateY(100%)",
                paddingBottom: "env(safe-area-inset-bottom)",
            }}
        >
            <div className="px-4 py-3 flex flex-col items-center gap-3 text-center">
                <p className="text-sm text-base-content/80">
                    We use cookies to improve your experience. By using FixMate, you agree to our{" "}
                    <a href="#" className="link link-primary">Privacy Policy</a>.
                </p>
                <div className="flex gap-2">
                    <button onClick={acceptAll} className="btn btn-primary btn-sm">
                        Accept All
                    </button>
                    <button onClick={acceptNecessary} className="btn btn-ghost btn-sm">
                        Necessary Only
                    </button>
                </div>
            </div>
        </div>
    );
}
