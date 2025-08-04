import type { Metadata } from "next";
// import { projectData } from "@/app/api/project-data/project-data";
import { Project } from "@/lib/types";
import NotFound from "@/app/not-found";
import PageButton from "@/app/ui/page-button";
import { getBaseUrl } from "@/lib/url";

type Params = Promise<{ slug: string }>;

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const slug = (await params).slug;
  const res = await fetch(`${baseUrl}/api/project/content?slug=${slug}`);
  const project: Project = await res.json();

  if (project) {
    return {
      title: `${project.name} | 陳子涵`,
      description: project.description,
      openGraph: {
        url: `${baseUrl}/project/${slug}`,
        title: `${project.name} | 陳子涵`,
        description: project.description,
        images: `${baseUrl}/image/${project.key_visual}`
      }
    }
  } else {
    return {
      title: "404 | 陳子涵",
      description: "404 Not Found",
    }
  }
}

function ProjectSideBar({ name, description, skills, link }:
  Pick<Project, 'name' | 'description' | 'skills' | 'link'>) {
  const linkType = link.startsWith('https://github.com') ? 'CODE'
    : link.startsWith('https://') ? 'SITE' : 'PAGE';

  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:top-0 lg:w-96 lg:h-screen lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">{name}</h1>
      <p className="text-gray-700">{description}</p>
      <p className="mb-6 text-gray-900">{skills.map((skill) => skill.name).join(' + ')}</p>
      {link != "" &&
        <PageButton title={linkType === 'CODE' ? '原始碼' : linkType === 'SITE' ? '開啟網站' : '開啟網頁'}
          subtitle={linkType} href={link} outside={linkType !== 'PAGE'} />}
    </div>
  )
}

export default async function ProjectLayout({ children, params }:
  { children: React.ReactNode, params: Params }) {
  const { slug } = await params;
  const res = await fetch(`${baseUrl}/api/project/content?slug=${slug}`);
  const project: Project = await res.json();

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