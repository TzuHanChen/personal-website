import Members from "@/app/ui/member";
import Timeline from "@/app/ui/timeline";
import Output from "@/app/ui/output";
import PageButton from "@/app/ui/page-button";

import getHTML from '@/app/lib/markdown-to-html';

async function Content({ filename }: { filename: string }) {
  let content = '';
  try {
    content = await getHTML(`app/markdown/${filename}.md`);
  } catch (error) {
    content = '沒有文字內容';
  }

  return (
    <div className="
    [&>h2]:my-6 [&>h2]:text-gray-900 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:lg:text-4xl
    [&>h3]:my-4 [&>h3]:text-gray-900 [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:lg:text-2xl
    [&>p]:my-2 [&>p]:text-gray-600"
      dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const memberData = [
    { name: "我", role: "網站後端", skill: "XAMPP, PHP, MySQL" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
  ];

  return (
    <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:flex-1 lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
      <img src="" alt="專案主視覺" title="專案主視覺"
        className="mx-auto w-full max-w-192 aspect-video rounded-3xl bg-gray-300" />

      <Members data={memberData} />

      <Timeline start="2020/07" period="一個月" end="2020/08" />

      <Output items={["uxr", "flow", "ui", "pro", "page", "site"]} />

      <Content filename={params.id} />

      <div className="w-full flex flex-col gap-6 md:flex-row *:flex-1">
        <PageButton title="專案名稱" subtitle="上一個專案" align="left" href="" />
        <PageButton title="專案名稱" subtitle="下一個專案" align="right" href="" />
      </div>
    </section>
  )
}