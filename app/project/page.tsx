import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "專案 | 陳子涵",
  description: "陳子涵的專案",
};

export default function Project() {
  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24 selection:bg-teal-600 selection:text-gray-50">
      <div className="text-gray-900 flex flex-col gap-6">
        <h2 className="text-4xl font-bold md:text-5xl">專案</h2>
        <p>篩選、排序、版面</p>
        <div>卡片</div>
      </div>
    </main>
  )
}