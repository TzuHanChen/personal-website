import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我 | 陳子涵",
  description: "陳子涵的自我介紹",
};

function Intro() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-6 md:flex-row">
        <img src="photo.png" alt="photo" className="size-28 rounded-full bg-gray-200" />
        <div>
          <h1 className="mb-1 text-2xl text-center text-gray-900 md:text-4xl">你好，我是陳子涵</h1>
          <p className="text-2xl text-center text-gray-900 md:text-4xl">現在是前端工程師</p>
        </div>
      </div>
      <p className="mx-auto w-full max-w-144 text-gray-700">　　我目前使用 Next.js, React, Tailwind CSS, styled-components, TypeScript 等工具，完成公司與新創的各項專案功能。之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用過往經歷，與負責這些職位的夥伴討論、溝通與合作。如果你想找我聊聊新的合作機會，請聯繫我！</p>
    </section>
  )
}

function Career() {
  const content = [
    {
      title: '前端工程師',
      company: '樂倍達數位科技股份有限公司',
      timeline: '2023/09 ~ 現今',
      description: [
        '參與客戶公司的專案開發（視訊會議網站），使用 styled-components + Transifex 調整介面與功能，撰寫 Playwright 自動化測試腳本。',
        '於客戶公司專案新增功能之前，整合客戶需求和自己公司同事研究後得知的技術可行性，製作流程圖和線框圖，再實作前端畫面與功能。',
        '參與自己公司的兩個產品開發（商品試用網站、電商服務平台），針對介面設計稿提出前端技術可行性建議，使用 Tailwind CSS + JavaScript 切版、實作功能。'
      ]
    }
  ];

  return (
    <section className="mx-auto max-w-270 flex flex-col gap-6">
      <h2 className="text-4xl font-bold text-gray-900 md:text-4xl">經歷</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl">
            <span className="text-teal-600">前端工程師</span>　
            <span className="text-gray-900">樂倍達數位科技股份有限公司</span>
          </h3>
          <p className="text-gray-700">2023/09 ~ 現今</p>
          <ul className="list-disc pl-4 text-gray-700">
            <li>參與客戶公司的專案開發（視訊會議網站），使用 styled-components + Transifex 調整介面與功能，撰寫 Playwright 自動化測試腳本。</li>
            <li>於客戶公司專案新增功能之前，整合客戶需求和自己公司同事研究後得知的技術可行性，製作流程圖和線框圖，再實作前端畫面與功能。</li>
            <li>參與自己公司的兩個產品開發（商品試用網站、電商服務平台），針對介面設計稿提出前端技術可行性建議，使用 Tailwind CSS + JavaScript 切版、實作功能。</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default function About() {
  return <>
    <Intro />
    <Career />
  </>
}