import type { Metadata } from "next";
import PageButton from "@/ui/page-button"

export const metadata: Metadata = {
  title: "陳子涵",
  description: "陳子涵的個人網站",
};

function Hero() {
  return (
    <section className="mx-auto w-full max-w-270 rounded-3xl bg-white py-12 px-6 text-gray-900">
      <h1 className="mb-2 text-2xl text-center md:mb-4 md:text-4xl">你好，我是陳子涵</h1>
      <p className="text-2xl text-center md:text-4xl">現在是前端工程師</p>
    </section>
  )
}

function Project() {
  return (
    <section className="mx-auto w-full max-w-270">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">專案</h2>

        <div>卡片</div>

        <PageButton text="所有專案" href="/project" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="mx-auto max-w-144 text-gray-900 flex flex-col gap-6">
      <h2 className="text-4xl font-bold md:text-5xl">關於我</h2>
      <p>參與過產品開發流程的各項工作後，我選擇以前端工程作為本人職業。<br />
        期許自己能夠利用過往經驗，與來自各領域的同事順利合作。</p>
      <PageButton text="自我介紹" href="/about" />
    </section>
  )
}

export default function Home() {
  return <>
    <Hero />
    <Project />
    <About />
  </>
}
