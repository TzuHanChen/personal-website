import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "關於我 | 陳子涵",
  description: "陳子涵的自我介紹",
};

function Intro() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-6 md:flex-row">
        <Image src="/image/photo.jpg" alt="陳子涵的照片" title="陳子涵的照片"
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

function Career() {
  const content = [
    {
      title: '前端工程師',
      company: '樂倍達數位科技股份有限公司',
      timeline: '2023/09 ~ 現今',
      description: [
        '參與客戶公司的專案開發 (視訊會議網站)，使用 React + styled-components 調整介面與功能, 使用 Transifex 串接多語系字串。於新增功能之前，整合客戶需求和自己公司同事研究後得知的技術可行性，製作流程圖和線框圖，再實作畫面與功能、串接客戶提供的 API。原本手動回歸測試耗時 40 分鐘，撰寫 Playwright 自動化腳本，耗時縮減至 5 分鐘。',
        '參與客戶公司的新增功能開發(網路電話彈出視窗)，根據客戶需求和客戶公司提供的 Next.js + SIP.js 專案，製作流程圖和線框圖，再加入 Tailwind CSS + Headless UI + Web API (MediaStream, AudioContext) 實作畫面與功能。',
        '參與一個客戶專案開發（建商房客資訊管理網站），兩個公司產品開發（商品試用網站、電商自選服務平台），使用 HTML, Tailwind CSS, JavaScript 切版、實作功能。'
      ]
    },
    {
      title: '前端工程師',
      company: 'Teamie',
      timeline: '2022/09 ~ 現今',
      description: [
        'Teamie 是一個業餘專案，致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會。',
        '使用 Next.js + Tailwind CSS + TypeScript + clsx + Feather Icons + Headless UI 製作元件與頁面、實作各項功能。',
        '與後端夥伴合作規劃所需資料表、調整 API 規格，再根據 Swagger 文件，使用 React Hook Form 串接 RESTful API 實作各種表單、處理錯誤訊息。',
        '在 Zeabur 專案中新增兩個前端服務，設定相同 GitHub repo 的不同分支，分別自動部署到測試版與正式版網址。',
        '參與前期使用者訪談、需求分析、網站架構與功能操作流程規畫，針對介面設計稿提出前端技術可行性建議。',
        '撰寫前端 Markdown 文件，利用此文件與原始碼向新加入的前端夥伴說明，目前網站有使用的工具、已完成的功能、撰寫程式碼須注意的規範。'
      ]
    },
    {
      title: '前端網頁實習生',
      company: '亞瑞特數位社群行銷有限公司',
      timeline: '2022/11 ~ 2023/04',
      description: [
        '使用 JavaScript + SCSS + PHP，網頁切版、前後端分離、功能實作。',
        '獨立完成：製作公司的電子報模板、調整公司的內部報表產出網站、製作客戶的產品介紹頁面。',
        '協助正職員工：開發客戶的心理測驗網站。'
      ]
    },
    {
      title: 'UI/UX設計團隊-實習生',
      company: '眾匯智能健康股份有限公司',
      timeline: '2020/07 ~ 08',
      description: [
        '使用 XAMPP + MySQL + PHP，建置資料庫、實作各項功能。',
        '開發論壇網站的帳號、文章、留言、收藏、追蹤等功能。',
        '參與使用者體驗規劃，負責後端，與介面設計和前端的同學合作。'
      ]
    }
  ];

  return (
    <section className="mx-auto max-w-270 flex flex-col gap-6 lg:gap-9">
      <h2 className="text-4xl text-gray-900 lg:text-5xl">經歷</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-9">

        {content.map((item, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <h3 className="text-2xl">
                <span className="text-teal-600">{item.title}</span>
                <span>　</span>
                <span className="text-gray-900">{item.company}</span>
              </h3>
              <p className="text-gray-600">{item.timeline}</p>
              <ul className="list-disc pl-5 text-gray-600">
                {item.description.map((subitem, i) => {
                  return <li key={i}>{subitem}</li>
                })}
              </ul>
            </div>
          )
        })}

      </div>
    </section>
  )
}

function Skill() {
  const content = [
    {
      skill: '網站前端',
      tool: 'Next.js, React, Tailwind CSS, Headless UI, React Hook Form, styled-components, TypeScript'
    },
    {
      skill: '版本控制',
      tool: 'Git, GitHub, GitLab'
    },
    {
      skill: '部署',
      tool: 'Zeabur, Vercel'
    },
    {
      skill: '使用者體驗、介面設計',
      tool: 'FigJam, Figma, Penpot'
    }
  ]
  return (
    <section className="mx-auto flex flex-col gap-6 xl:max-w-144">
      <h2 className="text-4xl text-gray-900 lg:text-5xl">技能</h2>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-1/2">
          <h3 className="mb-3 text-2xl text-gray-900">{content[0].skill}</h3>
          <p className="text-gray-600">{content[0].tool}</p>
        </div>

        <div className="flex flex-col gap-6 md:w-1/2">
          <div>
            <h3 className="mb-3 text-2xl text-gray-900">{content[1].skill}</h3>
            <p className="text-gray-600">{content[1].tool}</p>
          </div>

          <div>
            <h3 className="mb-3 text-2xl text-gray-900">{content[2].skill}</h3>
            <p className="text-gray-600">{content[2].tool}</p>
          </div>

          <div>
            <h3 className="mb-3 text-2xl text-gray-900">{content[3].skill}</h3>
            <p className="text-gray-600">{content[3].tool}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Certificate() {
  return (
    <div>
      <h2 className="mb-6 text-4xl text-gray-900 lg:text-5xl">證書</h2>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl text-gray-900">Google 數位人才探索計畫　GA4 學程</h3>
        <p className="text-gray-600">2023/05</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Google Analytics (分析) 認證</li>
          <li>Google 數位人才結業證書</li>
        </ul>
      </div>
    </div>
  )
}

function Recognition() {
  return (
    <div>
      <h2 className="mb-6 text-4xl text-gray-900 lg:text-5xl">認可</h2>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl text-gray-900">放視大賞　入圍</h3>
        <p className="text-gray-600">2021/05</p>
        <p className="text-gray-600">
          畢業專題＂珍食力＂於 2021 放視大賞入圍行動應用類 - 軟體內容創意企劃組決賽。</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>使用者體驗、介面設計，Miro + Figma</li>
        </ul>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div>
      <h2 className="mb-6 text-4xl text-gray-900 lg:text-5xl">學歷</h2>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl text-gray-900">國立台中教育大學　學士</h3>
        <p className="text-gray-600">2017/09 ~ 2021/06</p>
        <p className="text-gray-600">就讀數位內容科技學系。</p>
        <p className="text-gray-600">選修兩個群組課程：數位技術應用、數位設計。</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24 selection:bg-teal-700 selection:text-teal-100">
      <Intro />
      <Career />
      <Skill />

      <section className="mx-auto w-full max-w-270 flex flex-col gap-16 xl:flex-row xl:gap-24 xl:*:w-1/3">
        <Certificate />
        <Recognition />
        <Education />
      </section>
    </main>
  )
}