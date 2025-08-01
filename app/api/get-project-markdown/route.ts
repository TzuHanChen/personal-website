import { type NextRequest } from 'next/server';
import { getBaseUrl } from "@/lib/url";

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const slug = req.get('slug');

  if (!slug) {
    return Response.json({ message: "slug not provided" }, { status: 404 });
  } else {
    const baseUrl = getBaseUrl();
    const file = await fetch(`${baseUrl}/markdown/${slug}.md`, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Encoding': 'identity',
      },
    });
    if (file) {
      return file;
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}