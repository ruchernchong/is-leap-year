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
              <Link href="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tools" className="text-gray-600 hover:text-black">
                Tools
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-gray-600 hover:text-black">
                API Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
