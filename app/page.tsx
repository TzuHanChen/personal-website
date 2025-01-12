import type { Metadata } from "next";
import PageButton from "@/app/ui/page-button"
import Card from "@/app/ui/card";
import { Project } from "@/app/type";

export const metadata: Metadata = {
  title: "陳子涵",
  description: "陳子涵的個人網站",
};

export const dynamic = 'force-dynamic';

function Hero() {
  return (
    <section className="mx-auto w-full max-w-270 rounded-3xl bg-white py-12 px-6 text-gray-900">
      <h1 className="mb-2 text-2xl text-center md:mb-4 md:text-3xl">你好，我是陳子涵</h1>
      <p className="text-2xl text-center md:text-3xl">現在是前端工程師</p>
    </section>
  )
}

async function Projects() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-list' + '?count=5'
  );
  const projects = await res.json();

  return (
    <section className="mx-auto w-full max-w-270 flex flex-col gap-6 lg:gap-9">
      <h2 className="text-4xl text-gray-900 md:text-5xl">專案</h2>

      <div className="flex justify-center gap-6 flex-wrap *:w-full *:max-w-96 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => {
          return (
            <Card key={project.slug} href={`/project/${project.slug}`}
              imageUrl={`/image/${project.keyVisual}`}
              title={project.name} description={project.description} />
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
