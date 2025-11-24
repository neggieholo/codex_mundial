"use client";

import React from "react";

export default function HomeError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-100 text-center p-4">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Something went wrong!</h1>
            <p className="mb-4">{error.message}</p>
            <button
                onClick={() => reset()}
                className="btn btn-primary"
            >
                Try Again
            </button>
        </div>
    );
}
