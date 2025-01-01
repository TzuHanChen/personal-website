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

    const project = res.find((project: Project) => {
      return project.slug === slug;
    });

    if (project) {
      const file = await fetch(
        process.env.NEXT_PUBLIC_FRONTEND_URL + '/markdown/' + slug + '.md',
      );
      return file;
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}