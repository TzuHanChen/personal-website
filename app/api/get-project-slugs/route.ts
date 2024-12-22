import { Project } from "@/app/type";

export async function GET() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/project-data.json',
    { headers: { 'Content-Type': 'application/json' } }
  ).then(res => res.json());

  const slugs = res.map((project: Project) => {
    return { slug: project.slug }
  });

  return Response.json(slugs);
}