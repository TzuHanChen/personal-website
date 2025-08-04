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
      const project = result[0], projectId = Number.parseInt(result[0].id);
      const skills = await sql`
        SELECT skills.id, skills.name FROM project_skill
        INNER JOIN skills ON skills.id = project_skill.skill_id
        WHERE project_id = ${projectId}
      `;
      const members = await sql`
        SELECT project_member.id, roles.name, members_name FROM project_member
        INNER JOIN roles ON roles.id = project_member.role_id
        WHERE project_id = ${projectId}
      `;
      const projectCount = await sql`SELECT COUNT(*) FROM projects`;
      const count = Number.parseInt(projectCount[0].count);
      const nextId = (projectId < count - 1) ? projectId + 1 : 1;
      const next = await sql`
        SELECT slug, name FROM projects WHERE id = ${nextId}
      `;
      const prevId = (projectId > 0) ? projectId - 1 : count - 1;
      const prev = await sql`
        SELECT slug, name FROM projects WHERE id = ${prevId}
      `;
      return Response.json({ ...project, skills, members, next: next[0], prev: prev[0] }, { status: 200 });
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}