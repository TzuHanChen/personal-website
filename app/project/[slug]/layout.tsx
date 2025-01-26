import type { Metadata } from "next";
import { Project } from "@/app/type";
import NotFound from "@/app/not-found";
import PageButton from "@/app/ui/page-button";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const slug = (await params).slug;

  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-content' + `?slug=${slug}`
  );
  const project = await res.json();

  if (res.ok) {
    return {
      title: `${project.name} | 陳子涵`,
      description: project.description,
      openGraph: {
        images: process.env.NEXT_PUBLIC_FRONTEND_URL + '/' + project.keyVisual
      }
    }
  } else {
    return {
      title: "404 | 陳子涵",
      description: "404 Not Found",
    }
  }
}

function ProjectSideBar({ name, description, skill, link }: Project) {
  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:top-0 lg:w-96 lg:h-screen lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">{name}</h1>
      <p className="text-gray-700">{description}</p>
      <p className="mb-6">{skill}</p>
      {link.title != "" &&
        <PageButton title={link.title} subtitle={link.subtitle} href={link.href} />}
    </div>
  )
}

export default async function ProjectLayout({ children, params }:
  { children: React.ReactNode, params: Params }) {
  const { slug } = await params;

  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-content' + `?slug=${slug}`
  );
  const project = await res.json();

  if (res.ok) {
    return (
      <main className="min-h-screen bg-gray-50 md:ml-20 lg:flex">
        <ProjectSideBar {...project} />
        {children}
      </main>
    )
  } else {
    return <NotFound />
  }
}