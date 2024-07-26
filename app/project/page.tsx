import type { Metadata } from "next";
import Card from "@/app/ui/card";

export const metadata: Metadata = {
  title: "專案 | 陳子涵",
  description: "陳子涵的專案",
};

export default function Project() {
  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24 selection:bg-teal-600 selection:text-gray-50">

      <section className="mx-auto w-full  flex flex-col gap-6 lg:gap-9">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-gray-900 md:text-5xl">專案</h2>
          {/* <p className="text-gray-900">篩選、排序、版面</p> */}
        </div>

        <div className="flex justify-center gap-6 flex-wrap *:w-full *:max-w-96 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <Card imageUrl="" title="標題" description="這是一段描述，這是一段描述，這是一段描述，這是一段描述" />
          <Card imageUrl="" title="標題" description="這是一段描述，這是一段描述，這是一段描述，這是一段描述" skill="技能 1, 技能 2, 技能 3, 技能 4, 技能 5" direction="titleFirst" />
          <Card imageUrl="" title="標題" description="這是一段描述，這是一段描述，這是一段描述，這是一段描述" />
          <Card imageUrl="" title="標題" description="這是一段描述，這是一段描述，這是一段描述，這是一段描述" skill="技能 1, 技能 2, 技能 3, 技能 4, 技能 5" direction="titleFirst" />
          <Card imageUrl="" title="標題" description="這是一段描述，這是一段描述，這是一段描述，這是一段描述" skill="技能 1, 技能 2, 技能 3, 技能 4, 技能 5" />

        </div>

      </section>
    </main>
  )
}