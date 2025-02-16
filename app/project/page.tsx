import type { Metadata } from "next";
import Card from "@/app/ui/card";
import { Project } from "@/app/type";
import Link from "next/link";
import PageButton from "@/app/ui/page-button";

export const metadata: Metadata = {
  title: "專案 | 陳子涵",
  description: "陳子涵的專案",
};

export const dynamic = 'force-dynamic';

export default async function Projects() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-list'
  );
  const projects: Project[] = await res.json();

  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24">

      <section className="mx-auto w-full max-w-270 flex flex-col gap-6 lg:gap-9">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-gray-900 md:text-5xl">專案</h2>
          {/* <p className="text-gray-900">篩選、排序、版面</p> */}
        </div>

        <div className="flex justify-center gap-6 flex-wrap *:w-full *:max-w-96 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project) => {
            return (
              <Card key={project.slug} href={`/project/${project.slug}`}
                imageUrl={`/image/${project.keyVisual}`}
                title={project.name} description={project.description} />
            )
          })}

          <div className="rounded-3xl min-h-80 bg-white p-6 flex flex-col justify-center gap-3">
            <p className="mb-3 text-2xl">持續更新中 ...</p>
            <p className="text-gray-700">這裡是新版的個人網站，未來預計更新</p>
            <ol className="pl-5 list-decimal text-gray-700">
              <li>加入舊版網站沒有的新專案</li>
              <li>加入舊版網站的舊專案</li>
              <li>加入舊版網站的文章</li>
              {/* <li>使用各種分析工具（Google Analytics, Google Search Console, PageSpeed Insights...）</li> */}
              <li>新增各種功能（專案的篩選排序搜尋、深色模式 ...）</li>
              <li>製作全新的小作品或專案</li>
            </ol>
          </div>
          
          <PageButton title="前往舊版網站" outside href="https://tzuhanchen.vercel.app/" />
        </div>
      </section>
    </main>
  )
}