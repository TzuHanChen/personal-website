import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const req = request.nextUrl.searchParams;
  const slug = req.get('slug');

  if (!slug) {
    return Response.json({ message: "slug not provided" }, { status: 404 });
  } else {
    const file = await fetch(
      process.env.NEXT_PUBLIC_FRONTEND_URL + '/markdown/' + slug + '.md', {
        headers: {
          'Content-Type': 'text/markdown',
          'Content-Encoding': 'identity',
        },
      }
    );
    if (file) {
      return file;
    } else {
      return Response.json({ message: "slug does not exist" }, { status: 404 });
    }
  }
}