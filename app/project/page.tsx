import { Suspense } from "react";
import type { Metadata } from "next";
import Card, { Loading } from "@/app/ui/card";
import { getBaseUrl } from "@/lib/url";
import { Project } from "@/lib/types";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "專案 | 陳子涵",
  description: "陳子涵的專案",
  openGraph: {
    url: `${baseUrl}/project`,
    title: "專案 | 陳子涵",
    description: "陳子涵的專案",
    images: `${baseUrl}/image/project/personal-website.png`
  }
};

export const dynamic = 'force-dynamic';

async function ProjectCards() {
  const res = await fetch(`${baseUrl}/api/project/list`);
  const projects: Project[] = await res.json();

  return projects.map((project: Project, index) =>
    <Card key={index} linkHref={`/project/${project.slug}`}
      imageSrc={`/image/project/${project.key_visual}`}
      name={project.name} description={project.description} />
  )
}

export default function Projects() {
  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24">

      <section className="mx-auto w-full max-w-270 flex flex-col gap-6 lg:gap-9">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-gray-900 md:text-5xl">專案</h2>
        </div>

        <div className="flex justify-center gap-6 flex-wrap *:w-full *:max-w-96 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<Loading />}>
            <ProjectCards />
          </Suspense>
        </div>
      </section>
    </main>
  )
}