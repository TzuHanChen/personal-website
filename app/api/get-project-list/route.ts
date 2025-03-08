import { type NextRequest } from 'next/server';
import { Project } from "@/app/type";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const count = req.get('count');

  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/project-data',
    { headers: { 'Content-Type': 'application/json' } }
  ).then(res => res.json());

  const limit = (count && count < res.length) ? count : res.length;
  let data = [];
  for (let i = 0; i < limit; i++) {
    const project: Project = res[i];
    data.push({
      slug: project.slug,
      keyVisual: project.keyVisual,
      name: project.name,
      description: project.description,
      skill: project.skill
    });
  }

  return Response.json(data);
}