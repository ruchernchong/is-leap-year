import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IsLeapYear.com - The Ultimate Leap Year Detection API",
  description:
    "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
  keywords:
    "leap year, leap year api, date calculation, calendar api, leap year detection, gregorian calendar, julian calendar, february 29",
  authors: [{ name: "IsLeapYear.com Team" }],
  category: "Technology",
  creator: "IsLeapYear.com",
  publisher: "IsLeapYear.com",
  applicationName: "IsLeapYear",
  openGraph: {
    type: "website",
    url: "https://isleapyear.com",
    title: "IsLeapYear.com - The Ultimate Leap Year Detection API",
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
    siteName: "IsLeapYear.com",
    images: [
      {
        url: "https://isleapyear.com/api-banner.png",
        width: 1200,
        height: 630,
        alt: "IsLeapYear.com API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IsLeapYear.com - The Ultimate Leap Year Detection API",
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
    images: ["https://isleapyear.com/api-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://isleapyear.com" />
        <meta name="theme-color" content="#111827" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="flex min-h-screen flex-col bg-gray-950 text-white">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
