import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db-init';

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const count = Number.parseInt(req.get('count') || '0');

  const limitClause = count > 0 ? `LIMIT ${count}` : '';
  const result = await sql.query(`
    SELECT slug, key_visual, name, description FROM projects
    ORDER BY id DESC ${limitClause}
  `);

  return NextResponse.json(result, { status: 200 });
}