import { type NextRequest } from 'next/server';
import { Project } from "@/app/type";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const slug = req.get('slug');

  if (!slug) {
    return Response.json({ message: "slug not provided" }, { status: 404 });
  } else {
    const res = await fetch(
      process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/project-data',
      { headers: { 'Content-Type': 'application/json' } }
    ).then(res => res.json());

    const projectIndex = res.findIndex((project: Project) => {
      return project.slug === slug;
    });

    if (projectIndex !== null) {
      const prevIndex = (projectIndex > 0) ? projectIndex - 1 : res.length - 1;
      const nextIndex = (projectIndex < res.length - 1) ? projectIndex + 1 : 0;

      return Response.json({
        prev: {
          name: res[prevIndex].name,
          slug: res[prevIndex].slug
        },
        next: {
          name: res[nextIndex].name,
          slug: res[nextIndex].slug
        }
      });
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}