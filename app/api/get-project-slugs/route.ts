export async function GET(request: Request) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/project-data.json',
    { headers: { 'Content-Type': 'application/json' } }
  );
  const data = await res.json();

  const slugs = data.map((project: { slug: string }) => {
    return { slug: project.slug }
  });

  return Response.json(slugs);
}