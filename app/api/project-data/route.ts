const data = [
  {
    "slug": "teamie",
    "name": "Teamie",
    "description": "Teamie 致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會。",
    "skill": "Next.js, Tailwind CSS, TypeScript, clsx, Feather Icons, Headless UI, Swagger, React Hook Form, RESTful API, Zeabur",
    "keyVisual": "teamie.png",
    "members": [
      { name: "我", role: "網站前端" },
      { name: "夥伴", role: "行政管理" },
      { name: "夥伴", role: "財務會計" },
      { name: "夥伴", role: "網站後端" },
      { name: "夥伴", role: "網站前端" },
    ],
    "timeline": {
      "start": "2022/09",
      "period": "進行中",
      "end": "進行中"
    },
    "outputs": ["uxr", "flow", "ui", "site"]
  }
];

export async function GET(request: Request) {
  return Response.json(data);
}