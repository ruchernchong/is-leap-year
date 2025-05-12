import { BRAND_NAME } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="border-gray-800 border-b bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-xl">
          {BRAND_NAME}
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
