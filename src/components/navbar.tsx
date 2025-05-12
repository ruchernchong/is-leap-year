import { BRAND_NAME } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-xl">
          {BRAND_NAME}
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-red-500 hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tools" className="text-red-500 hover:text-red-600">
                Tools
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-red-500 hover:text-red-600">
                API Docs
              </Link>
            </li>
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="dim"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
