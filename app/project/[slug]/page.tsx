import type { Metadata } from "next";
import Image from "next/image";
import PageButton from "@/app/ui/page-button";
import NotFound from "@/app/not-found";
import { Markdown } from "@/app/ui/markdown";
import { Project } from "@/lib/types";
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
        images: `${baseUrl}/image/project/${project.key_visual}`
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
  const skillTags = skills.map((skill) => {
    return <span key={skill.id}
      className="rounded-full py-1 px-3 bg-gray-100 text-gray-700">
      {skill.name}</span>
  })
  const linkType = link.startsWith('https://github.com') ? 'CODE'
    : link.startsWith('https://') ? 'SITE' : 'PAGE';
  const linkTitle = (linkType === 'CODE') ? '原始碼'
    : (linkType === 'SITE') ? '開啟網站' : '開啟網頁';

  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:top-0 lg:w-96 lg:h-screen lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-800 md:text-4xl lg:text-5xl">{name}</h1>
      <p className="text-gray-600">{description}</p>
      <div className="flex gap-1.5 flex-wrap">{skillTags}</div>
      {link !== "" &&
        <PageButton title={linkTitle} subtitle={linkType}
          href={link} outside={linkType !== 'PAGE'} />}
    </div>
  )
}

function ProjectContent({ key_visual, name, members, timeline, output, slug, prev, next }:
  Pick<Project, 'key_visual' | 'name' | 'members' | 'timeline' | 'output' | 'slug' | 'prev' | 'next'>) {
  const membersList = members.map(role => {
    return <li key={role.id} className="text-gray-600">
      {role.role_name}：{role.members_name}</li>
  })

  return (
    <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:flex-1 lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
      <Image src={`/image/project/${key_visual}`} width={768} height={432} priority
        alt={`${name} 專案主視覺`} title={`${name} 專案主視覺`}
        className="mx-auto w-full max-w-192 aspect-video object-cover rounded-3xl bg-gray-300" />

      <div className="block md:flex gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="mb-4 text-gray-800 text-lg md:text-xl lg:text-2xl">成員</h3>
          <ol className="pl-5 list-disc text-gray-600">{membersList}</ol>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="mb-4 text-gray-800 text-lg md:text-xl lg:text-2xl">時間</h3>
          <p className="text-gray-600">{timeline}</p>
          <h3 className="mt-8 mb-4 text-gray-800 text-lg md:text-xl lg:text-2xl">產出</h3>
          <p className="text-gray-600">{output}</p>
        </div>
      </div>

      <Markdown slug={`project/${slug}`} />

      <div className="mx-auto w-full max-w-192 flex flex-col gap-6 md:flex-row *:flex-1">
        {prev && <PageButton title={prev.name} subtitle="上一個專案" align="left"
          href={`/project/${prev.slug}`} />}
        {next && <PageButton title={next.name} subtitle="下一個專案" align="right"
          href={`/project/${next.slug}`} />}
      </div>
    </section>
  )
}

export default async function ProjectPage({ params }: { params: Params }) {
  const slug = (await params).slug;
  const res = await fetch(`${baseUrl}/api/project/content?slug=${slug}`);

  if (res.ok) {
    const project: Project = await res.json();
    return (
      <main className="min-h-screen bg-gray-50 md:ml-20 lg:flex">
        <ProjectSideBar {...project} />
        <ProjectContent {...project} />
      </main>
    )
  } else {
    return <NotFound />
  }
}