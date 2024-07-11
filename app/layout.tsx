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
    <html lang="en">
      <head></head>
      <body className={`relative ${NotoSansTC.className}`}>
        <Header />
        <main className="bg-gray-100 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
