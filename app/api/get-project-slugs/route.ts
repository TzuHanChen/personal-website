import { Project } from "@/app/type";

export async function GET(request: Request) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/project-data',
    { headers: { 'Content-Type': 'application/json' } }
  ).then(res => res.json());

  const slugs = res.map((project: Project) => {
    return { slug: project.slug }
  });

  return Response.json(slugs);
}