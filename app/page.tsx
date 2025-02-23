import type { Metadata } from "next";
import Image from "next/image";
import PageButton from "@/app/ui/page-button"
import Card from "@/app/ui/card";
import { Project } from "@/app/type";

export const metadata: Metadata = {
  title: "陳子涵",
  description: "陳子涵的個人網站",
  openGraph: {
    images: process.env.NEXT_PUBLIC_FRONTEND_URL + '/image/personal-website.png'
  }
};

export const dynamic = 'force-dynamic';

function Hero() {
  return (
    <section className="rounded-4xl bg-white py-12 px-6 flex flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-6 md:flex-row">
        <Image src="/image/icon.svg" alt="陳子涵的圖示" title="陳子涵的圖示"
          width={96} height={96} className="size-24 rounded-full" />
        <div>
          <h1 className="mb-1 text-2xl text-center text-gray-900 md:text-3xl">
            你好，我是陳子涵</h1>
          <p className="text-2xl text-center text-gray-900 md:text-3xl">
            現在是前端工程師</p>
        </div>
      </div>
      <p className="mx-auto w-full max-w-144 text-gray-600">
        {"　　"}我目前使用 Next.js, React, Tailwind CSS, React Hook Form 等工具，完成公司任務與業餘專案的各項畫面與功能。之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用過往經歷，與負責這些職位的夥伴討論、溝通與合作。如果你想找我聊聊新的合作機會，請聯繫我！
      </p>
    </section>
  )
}

async function Projects() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-list' + '?count=5'
  );
  const projects: Project[] = await res.json();

  return (
    <section className="mx-auto w-full max-w-270 flex flex-col gap-6 lg:gap-9">
      <h2 className="text-4xl text-gray-900 md:text-5xl">專案</h2>

      <div className="flex justify-center gap-6 flex-wrap *:w-full *:max-w-96 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project, index) => {
          return (
            <Card key={project.slug} href={`/project/${project.slug}`}
              imageUrl={`/image/${project.keyVisual}`} first={index === 0}
              title={project.name} description={project.description} tags={project.skill} />
          )
        })}

        <PageButton title="所有專案" href="/project" />
      </div>

    </section>
  )
}

function About() {
  return (
    <section className="mx-auto max-w-144 flex flex-col gap-6 lg:gap-9">
      <h2 className="text-4xl text-gray-900 md:text-5xl">關於我</h2>
      <p className="text-gray-700">
        參與過產品開發流程的各項工作後，我選擇以前端工程作為本人職業。<br />
        期許自己能夠利用過往經驗，與來自各領域的同事順利合作。</p>
      <PageButton title="自我介紹" href="/about" />
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24">
      <Hero />
      <Projects />
      <About />
    </main>
  )
}
