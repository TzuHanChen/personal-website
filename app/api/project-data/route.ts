const data = [
  {
    "slug": "teamie",
    "name": "Teamie",
    "description": "Teamie 致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會。",
    "skill": "Next.js, Tailwind CSS, TypeScript, clsx, Feather Icons, Headless UI, React Hook Form, Zeabur, Swagger, RESTful API",
    "link": {
      "title": "",
      "subtitle": "",
      "href": "",
      "outside": false
    },
    "keyVisual": "teamie.png",
    "members": [
      { name: "夥伴", role: "行政財務" },
      { name: "夥伴", role: "設計行銷" },
      { name: "我", role: "網站前端" },
      { name: "夥伴", role: "網站後端" },
      { name: "夥伴", role: "網站前端" },
    ],
    "timeline": {
      "start": "2022/09",
      "period": "進行中",
      "end": "進行中"
    },
    "outputs": ["uxr", "flow", "ui", "site"]
  },
  {
    "slug": "personal-website",
    "name": "個人網站",
    "description": "我為自己設計與開發的個人網站",
    "skill": "Next.js, Tailwind CSS, TypeScript, clsx, Heroicons, RESTful API",
    "link": {
      "title": "原始碼",
      "subtitle": "GitHub repo",
      "href": "https://github.com/tzuhanchen/personal-website",
      "outside": true
    },
    "keyVisual": "personal-website.png",
    "members": [
      { name: "我", role: "使用者體驗" },
      { name: "我", role: "介面設計" },
      { name: "我", role: "網站前端" },
    ],
    "timeline": {
      "start": "2024/04",
      "period": "進行中",
      "end": "進行中"
    },
    "outputs": ["flow", "ui", "pro", "site"]
  },
  {
    "slug": "dashboard",
    "name": "儀表板",
    "description": "依照 Next.js 官方教學課程實作的網站",
    "skill": "Next.js, Tailwind CSS, clsx, TypeScript, Zod, Auth.js",
    "link": {
      "title": "瀏覽網站",
      "subtitle": "DEMO",
      "href": "https://nextjs-dashboard-tzuhanchen.vercel.app/",
      "outside": true
    },
    "keyVisual": "dashboard.png",
    "members": [
      { name: "我", role: "網站前端" },
    ],
    "timeline": {
      "start": "2023/12",
      "period": "兩個月",
      "end": "2024/02"
    },
    "outputs": ["site"]
  }
];

export async function GET(request: Request) {
  return Response.json(data);
}