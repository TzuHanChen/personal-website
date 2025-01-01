import Image from "next/image";
import Members from "@/app/project/[slug]/members";
import Timeline from "@/app/project/[slug]/timeline";
import Outputs from "@/app/project/[slug]/output";
import PageButton from "@/app/ui/page-button";
import ReactMarkdown from 'react-markdown'

type Params = Promise<{ slug: string }>;

async function Content({ slug }: { slug: string }) {
  const markdown = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-markdown' + `?slug=${slug}`
  ).then(res => res.text());

  return (
    <div className="mx-auto w-full max-w-192
      [&>h2]:my-6 [&>h2]:text-gray-900 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:lg:text-4xl
      [&>h3]:my-4 [&>h3]:text-gray-900 [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:lg:text-2xl
      [&>p]:my-2 [&>p]:text-gray-600">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default async function ProjectPage({ params }: { params: Params }) {
  const slug = (await params).slug;

  const res = await fetch(
    process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/get-project-content' + `?slug=${slug}`
  );
  const project = await res.json();

  return (
    <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:flex-1 lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
      <Image src={`/image/${project.keyVisual}`} width={768} height={432} priority
        alt={`${project.name} 專案主視覺`} title={`${project.name} 專案主視覺`}
        className="mx-auto w-full max-w-192 aspect-video rounded-3xl bg-gray-300" />

      <Members members={project.members} />

      <Timeline timeline={project.timeline} />

      <Outputs outputs={project.outputs} />

      <Content slug={slug} />

      <div className="mx-auto w-full max-w-192 flex flex-col gap-6 md:flex-row *:flex-1">
        <PageButton title="專案名稱" subtitle="上一個專案" align="left" href="" />
        <PageButton title="專案名稱" subtitle="下一個專案" align="right" href="" />
      </div>
    </section>
  )
}