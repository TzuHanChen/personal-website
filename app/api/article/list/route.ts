import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db-init';

export async function GET(request: NextRequest) {
  try {
    const req = request.nextUrl.searchParams;
    const count = Number.parseInt(req.get('count') || '0');

    const limitClause = count > 0 ? `LIMIT ${count}` : '';
    const result = await sql.query(`
      SELECT slug, key_visual, name, description FROM articles
      ORDER BY id DESC ${limitClause}
    `);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error fetching article list:", error);
    return NextResponse.json({ error: "System error, please try again later" }, { status: 500 });
  }
}