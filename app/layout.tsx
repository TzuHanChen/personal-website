import { NotoSansTC } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "./globals.css";

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW">
      <head></head>
      <body className={`relative ${NotoSansTC.className} selection:bg-teal-700 selection:text-teal-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
