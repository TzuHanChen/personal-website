import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我 | 陳子涵",
  description: "陳子涵的自我介紹",
};

export default function About() {
  return (
    <div className="text-gray-900 flex flex-col gap-6">
      <h1 className="text-2xl text-center md:text-4xl">你好，我是陳子涵</h1>
      <p className="text-2xl text-center md:text-4xl">現在是前端工程師</p>

      <br />

      <p className="mx-auto w-full max-w-144">　　我目前使用 Next.js, React, Tailwind CSS, styled-components, TypeScript 等工具，完成公司與新創的各項專案功能。之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用過往經歷，與負責這些職位的夥伴討論、溝通與合作。如果你想找我聊聊新的合作機會，請聯繫我！</p>
    </div>
  )
}