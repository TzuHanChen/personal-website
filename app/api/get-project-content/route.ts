import { type NextRequest } from 'next/server';
import { Project } from "@/lib/types";
import { getBaseUrl } from "@/lib/url";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const slug = req.get('slug');

  if (!slug) {
    return Response.json({ message: "slug not provided" }, { status: 404 });
  } else {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/project-data`,
      { headers: { 'Content-Type': 'application/json' } }
    ).then(res => res.json());

    const project = res.find((project: Project) => {
      return project.slug === slug;
    });

    if (project) {
      return Response.json(project);
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}