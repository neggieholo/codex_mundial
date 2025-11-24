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
          <a
            href="#features"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
        </li>

        <li className="w-full border-b border-base-300">
          {/* About Us with plus and submenu */}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer py-4 px-2 hover:bg-primary hover:text-primary-content transition-all">
              About Us
            </summary>
            <ul className="pl-4 flex flex-col bg-base-100">
              <li>
                <Link href="/about/company" onClick={() => setOpen(false)} className="block py-3 hover:text-primary">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/about/team" onClick={() => setOpen(false)} className="block py-3 hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about/mission" onClick={() => setOpen(false)} className="block py-3 hover:text-primary">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/about/careers" onClick={() => setOpen(false)} className="block py-3 hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </details>
        </li>

        <li className="w-full border-b border-base-300">
          <a
            href="#products"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            Products
          </a>
        </li>

        <li className="w-full border-b border-base-300">
          <a
            href="#contact"
            className="block w-full py-4 hover:bg-primary hover:text-primary-content transition-all"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </details>
  );
};

export default MobileDropdownMenu;
