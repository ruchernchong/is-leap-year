import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          IsLeapYear.com
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tools" className="text-gray-400 hover:text-white">
                Tools
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-gray-400 hover:text-white">
                API Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
