import Image from "next/image";
import Members from "@/app/project/[slug]/members";
import Timeline from "@/app/project/[slug]/timeline";
import Outputs from "@/app/project/[slug]/output";
import ReactMarkdown from 'react-markdown';
import PageButton from "@/app/ui/page-button";
import { Project } from "@/app/type";
import { getBaseUrl } from "@/lib/url";

type Params = Promise<{ slug: string }>;

const baseUrl = getBaseUrl();

async function Content({ slug }: { slug: string }) {
  const markdown = await fetch(
    // `${baseUrl}/api/get-project-markdown?slug=${slug}`
    `${baseUrl}/markdown/${slug}.md`
  ).then(res => res.text());

  return (
    <ReactMarkdown className="mx-auto mb-12 lg:mb-24 w-full max-w-192
      [&>h2]:my-6 [&>h2]:text-gray-900 [&>h2]:text-2xl
      md:[&>h2]:text-3xl lg:[&>h2]:my-12 lg:[&>h2]:text-4xl
      [&>h3]:my-4 [&>h3]:text-gray-900 [&>h3]:text-lg
      md:[&>h3]:text-xl lg:[&>h3]:my-8 lg:[&>h3]:text-2xl
      [&>p]:my-2 [&>p]:text-gray-600
      [&>ul]:pl-5 [&>ul>li]:list-disc [&>ul>li]:text-gray-600
      [&>hr]:my-8 [&>hr]:mx-auto [&>hr]:border-gray-300 [&>hr]:w-1/3 lg:[&>hr]:my-16
      [&>p>img]:my-12 [&>p>img]:mx-auto
      [&_a]:underline active:[&_a]:text-teal-600 [&_a]:transition-colors [&_a]:duration-300">
      {markdown}
    </ReactMarkdown>
  )
}

async function PrevNext({ slug }: { slug: string }) {
  const data = await fetch(
    `${baseUrl}/api/get-project-prevnext?slug=${slug}`
  ).then(res => res.json());

  return (
    <div className="mx-auto w-full max-w-192 flex flex-col gap-6 md:flex-row *:flex-1">
      <PageButton title={data.prev.name} subtitle="上一個專案" align="left"
        href={`/project/${data.prev.slug}`} />
      <PageButton title={data.next.name} subtitle="下一個專案" align="right"
        href={`/project/${data.next.slug}`} />
    </div>
  )
}

export default async function ProjectPage({ params }: { params: Params }) {
  const slug = (await params).slug;

  const res = await fetch(
    `${baseUrl}/api/get-project-content?slug=${slug}`
  );
  const project: Project = await res.json();

  return (
    <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:flex-1 lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
      <Image src={`/image/${project.keyVisual}`} width={768} height={432} priority
        alt={`${project.name} 專案主視覺`} title={`${project.name} 專案主視覺`}
        className="mx-auto w-full max-w-192 aspect-video rounded-3xl bg-gray-300" />

      <Members members={project.members} />

      <Timeline timeline={project.timeline} />

      <Outputs outputs={project.outputs} />

      <Content slug={slug} />

      <PrevNext slug={slug} />
    </section>
  )
}