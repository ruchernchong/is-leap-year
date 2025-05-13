import { BRAND_NAME } from "@/constants";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer sm:footer-horizontal container mx-auto bg-base-200 p-10 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M19 3h-2v2h2v15h-14v-15h2v-2h-2c-1.654 0-3 1.346-3 3v15c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-15c0-1.654-1.346-3-3-3zm-10 2h6v-2h-6v2zm2 8c0 .552-.448 1-1 1s-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3zm4 5c0 .552-.448 1-1 1s-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1zm0-4c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v4z" />
          </svg>
          <p className="font-bold">{BRAND_NAME}</p>
          <p className="max-w-xs">
            Providing reliable leap year detection since 2025. Our mission is to
            eliminate date calculation errors from the world.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <Link href="/docs" className="link link-hover">
            API Documentation
          </Link>
          <Link href="/status" className="link link-hover">
            System Status
          </Link>
          <a
            href="https://github.com/ruchernchong/is-leap-year"
            className="link link-hover"
          >
            GitHub Repository
          </a>
          <Link href="/tools" className="link link-hover">
            Tools
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Connect</h6>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            GitHub
          </a>
          <Link href="/contact" className="link link-hover">
            Contact Us
          </Link>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-200 p-4 text-base-content">
        <aside className="container mx-auto max-w-7xl">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-bold">{BRAND_NAME}</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};
