type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = [{ slug: '1' }, { slug: 'teamie' }];
  // const slugs = await fetch('/get-project-slugs').then((res) => res.json());

  // return projects.map((project) => ({
  //   slug: project.slug,
  // }));
  return slugs;
}

export const dynamicParams = false;

function ProjectSideBar({ slug }: { slug: string }) {
  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:top-0 lg:w-96 lg:h-screen lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">
        Teamie</h1>
      <p className="text-gray-700">Teamie 致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會。</p>
      <p>Next.js, Tailwind CSS, TypeScript, clsx, Feather Icons, Headless UI, Swagger, React Hook Form, RESTful API, Zeabur</p>
      <button className="w-max self-end">DEMO</button>
    </div>
  )
}

export default async function ProjectLayout({ children, params }:
  { children: React.ReactNode, params: Params }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-gray-50 md:ml-20 selection:bg-teal-600 selection:text-gray-50 lg:flex">
      <ProjectSideBar slug={slug} />
      {children}
    </main>
  )
}