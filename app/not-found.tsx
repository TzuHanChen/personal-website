import type { Metadata } from "next";
import PageButton from "@/app/ui/page-button";

export const metadata: Metadata = {
  title: "404 | 陳子涵",
  description: "404 Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 py-36 px-6 md:ml-20 flex justify-center items-center selection:bg-teal-600 selection:text-gray-50">
      <div className="mx-auto w-max flex flex-col gap-12">
        <h1 className="text-4xl font-bold text-center md:text-6xl">404 Not Found</h1>
        <p className="text-center">此網址不存在。請編輯網址，或者回到首頁</p>
        <div className="mx-auto w-40">
          <PageButton title="首頁" href="/" align="left" />
        </div>
      </div>
    </main>
  )
}