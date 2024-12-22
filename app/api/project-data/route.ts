const data = [
  {
    "slug": "teamie",
    "name": "Teamie",
    "description": "Teamie 致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會。",
    "skill": "Next.js, Tailwind CSS, TypeScript, clsx, Feather Icons, Headless UI, Swagger, React Hook Form, RESTful API, Zeabur",
    "keyVisual": "teamie.png"
  }
];

export async function GET() {
  return Response.json(data);
}