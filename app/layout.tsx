/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { NotoSansTC, NotoSerifTC } from "@/ui/fonts";
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "陳子涵",
  description: "陳子涵的個人網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`relative ${NotoSansTC.className}`}>
        <Header />
        <main className="md:pl-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
