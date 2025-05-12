import { BRAND_NAME } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-gray-800 border-t py-8">
      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-bold text-lg">{BRAND_NAME}</h3>
          <p className="text-gray-600 text-sm">
            Providing reliable leap year detection since 2025. Our mission is to
            eliminate date calculation errors from the world.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Resources</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/docs" className="hover:text-black">
                API Documentation
              </Link>
            </li>
            <li>
              <Link href="/status" className="hover:text-black">
                System Status
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/ruchernchong/is-leap-year"
                className="hover:text-black"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Changelog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Connect</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                GitHub
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-gray-800 border-t pt-6 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
