import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">IsLeapYear.com</h3>
            <p className="text-gray-400 text-sm">
              Providing reliable leap year detection since 2025.
              Our mission is to eliminate date calculation errors from the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
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
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
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
        
        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} IsLeapYear Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
