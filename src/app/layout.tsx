import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BRAND_NAME, DOMAIN_NAME } from "@/constants";
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
  title: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
  description:
    "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
  keywords:
    "leap year, leap year api, date calculation, calendar api, leap year detection, gregorian calendar, julian calendar, february 29",
  authors: [{ name: `${BRAND_NAME} Team` }],
  category: "Technology",
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  applicationName: BRAND_NAME,
  openGraph: {
    type: "website",
    url: `https://${DOMAIN_NAME}`,
    title: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
