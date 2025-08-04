import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db-init';
import { getBaseUrl } from "@/lib/url";
import { Project } from "@/lib/types";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const slug = req.get('slug');

  if (!slug) {
    return NextResponse.json({ message: "slug not provided" }, { status: 404 });
  } else {
    const result = await sql`
      SELECT * FROM projects WHERE slug = ${slug}
    `;

    // const baseUrl = getBaseUrl();
    // const res = await fetch(`${baseUrl}/api/project-data`,
    //   { headers: { 'Content-Type': 'application/json' } }
    // ).then(res => res.json());

    // const project = res.find((project: Project) => {
    //   return project.slug === slug;
    // });

    if (result.length > 0) {
      const project = result[0];
      const skills = await sql`
        SELECT skills.id, skills.name FROM project_skill
        INNER JOIN skills ON skills.id = project_skill.skill_id
        WHERE project_id = ${project.id}
      `;
      return Response.json({ ...result[0], skills }, { status: 200 });
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}