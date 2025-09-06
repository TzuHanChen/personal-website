import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db-init';

export async function GET(request: NextRequest) {
  try {
    const req = request.nextUrl.searchParams;
    const slug = req.get('slug');

    if (!slug) {
      return NextResponse.json({ message: "slug not provided" }, { status: 404 });
    }

    const result = await sql`SELECT * FROM articles WHERE slug = ${slug}`;

    if (result.length === 0) {
      return NextResponse.json({ message: "slug does not exist" }, { status: 404 });
    }

    const article = result[0], articleId = Number.parseInt(article.id);
    const tags = await sql`
      SELECT tags.id, tags.name FROM article_tag
      INNER JOIN tags ON tags.id = article_tag.tag_id
      WHERE article_id = ${articleId}
    `;
    const articleCount = await sql`SELECT COUNT(*) FROM articles`;
    const count = Number.parseInt(articleCount[0].count);
    const prevId = (articleId < count) ? articleId + 1 : 1;
    const prev = await sql`
      SELECT slug, name FROM articles WHERE id = ${prevId}
    `;
    const nextId = (articleId > 1) ? articleId - 1 : count;
    const next = await sql`
      SELECT slug, name FROM articles WHERE id = ${nextId}
    `;
    return NextResponse.json({ ...article, tag: tags[0].name, next: next[0], prev: prev[0] }, { status: 200 });
  } catch (error) {
    console.error("Error fetching article content:", error);
    return NextResponse.json({ error: "System error, please try again later" }, { status: 500 });
  }
}