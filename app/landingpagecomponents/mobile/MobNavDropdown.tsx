"use client";
import React, { useState } from "react";
import Link from "next/link";

const MobileDropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <details className="dropdown dropdown-end ml-auto" open={open}>
      <summary
        className="btn btn-ghost btn-square"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>

      <ul className="menu dropdown-content mt-3 shadow bg-base-100 rounded-box w-[340px] flex flex-col text-center font-semibold text-lg right-0 left-auto mx-auto">
        <li className="w-full border-b border-base-300">
          <Link
            href="/"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </li>

        <li className="w-full border-b border-base-300">
          <Link
            href="/products"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
        </li>
        
        <li className="w-full border-b border-base-300">
          <Link
            href="/aboutUs"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
        </li>

        <li className="w-full border-b border-base-300">
          <Link
            href="/contactUs"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </details>
  );
};

export default MobileDropdownMenu;
