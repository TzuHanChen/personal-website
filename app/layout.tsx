/* eslint-disable @next/next/no-page-custom-font */
import { NotoSansTC, NotoSerifTC } from "@/ui/fonts";
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head></head>
      <body className={`relative ${NotoSansTC.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
