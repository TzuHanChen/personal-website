import { type NextRequest } from 'next/server';
import { Project } from "@/app/type";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  console.log(req);

  if (!req.get('slug')) {
    return Response.json({ message: "slug not provided" }, { status: 404 });
  } else {
    const res = await fetch(
      process.env.NEXT_PUBLIC_FRONTEND_URL + '/project-data.json',
      { headers: { 'Content-Type': 'application/json' } }
    ).then(res => res.json());

    const project = res.find((project: Project) => {
      return project.slug === req.get('slug');
    });

    if (project) {
      return Response.json(project);
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}