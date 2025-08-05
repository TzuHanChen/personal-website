import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db-init';
// import { getBaseUrl } from "@/lib/url";
// import { Project } from "@/lib/types";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const count = Number.parseInt(req.get('count') || '0');

  const limitClause = count > 0 ? `LIMIT ${count}` : '';
  const result = await sql.query(`
    SELECT slug, key_visual, name, description FROM projects
    ORDER BY id DESC ${limitClause}
  `);

  return NextResponse.json(result, { status: 200 });

  // const baseUrl = getBaseUrl();
  // const res = await fetch(`${baseUrl}/api/project-data`,
  //   { headers: { 'Content-Type': 'application/json' } }
  // ).then(res => res.json());

  // const limit = (count && count < res.length) ? count : res.length;
  // let data = [];
  // for (let i = 0; i < limit; i++) {
  //   const project: Project = res[i];
  //   data.push({
  //     slug: project.slug,
  //     keyVisual: project.keyVisual,
  //     name: project.name,
  //     description: project.description,
  //     skill: project.skill
  //   });
  // }

  // return Response.json(data);
}