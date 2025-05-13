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
  metadataBase: new URL(`https://${DOMAIN_NAME}`),
  title: {
    default: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
  keywords:
    "leap year, leap year api, date calculation, calendar api, leap year detection, gregorian calendar, julian calendar, february 29",
  authors: [{ name: `${BRAND_NAME} Team` }],
  category: "Technology",
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  applicationName: BRAND_NAME,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
    siteName: BRAND_NAME,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - Leap Year Detection API`,
      },
    ],
    locale: "en_SG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
    images: ["/opengraph-image.png"],
    creator: "@isleapyearapp",
    site: "@isleapyearapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
