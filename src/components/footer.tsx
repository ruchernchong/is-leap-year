import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-gray-800 border-t bg-gray-900 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold text-lg">IsLeapYear.com</h3>
            <p className="text-gray-400 text-sm">
              Providing reliable leap year detection since 2025. Our mission is
              to eliminate date calculation errors from the world.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-lg">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/docs" className="hover:text-white">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-white">
                  System Status
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-lg">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-gray-800 border-t pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} IsLeapYear Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
