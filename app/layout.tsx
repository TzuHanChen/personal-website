import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { NotoSansTC } from "@/app/ui/fonts";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  icons: "/image/logo.svg",
  openGraph: {
    type: "website",
    siteName: "陳子涵",
  }
};

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW">
      <head>
        <GoogleAnalytics gaId="G-L1VLJWN6YZ" />
      </head>
      <body className={`relative ${NotoSansTC.variable} font-noto-sans-tc selection:bg-teal-700 selection:text-teal-100`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
