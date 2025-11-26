"use client";

import React from "react";

interface HomeErrorProps {
  error: Error;
  reset?: () => void; // optional now
}

export default function HomeError({ error, reset }: HomeErrorProps) {
  const handleRetry = () => {
    if (reset) {
      reset(); // works if provided by error boundary
    } else {
      // fallback: reload the page
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold text-red-600 mb-4">
          ⚠️ Oops! Something went wrong
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={handleRetry}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-colors duration-200"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
