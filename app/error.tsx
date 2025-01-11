'use client';

import PageButton from "@/app/ui/page-button";

export default function Error() {
  return (
    <main className="min-h-screen bg-gray-50 py-36 px-6 md:ml-20 flex justify-center items-center selection:bg-teal-700 selection:text-teal-100">
      <div className="mx-auto w-max flex flex-col gap-12">
        <h1 className="text-4xl font-bold text-center md:text-6xl">500 Internal Server Error</h1>
        <p className="text-center">網站出現錯誤了。你可以嘗試重新整理頁面，或是回到首頁</p>
        <div className="mx-auto w-40">
          <PageButton title="首頁" href="/" align="left" />
        </div>
      </div>
    </main>
  )
}