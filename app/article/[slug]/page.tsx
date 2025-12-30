import type { Metadata } from "next";
import Image from "next/image";
import PageButton from "@/app/ui/page-button";
import NotFound from "@/app/not-found";
import { Markdown } from "@/app/ui/markdown";
import { Article } from "@/lib/types";
import { getBaseUrl } from "@/lib/url";
import { formatDate } from "@/lib/date";

type Params = Promise<{ slug: string }>;

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const slug = (await params).slug;
  const res = await fetch(`${baseUrl}/api/article/content?slug=${slug}`);
  const article: Article = await res.json();

  if (article) {
    return {
      title: `${article.name} | 陳子涵`,
      description: article.description,
      openGraph: {
        url: `${baseUrl}/article/${slug}`,
        title: `${article.name} | 陳子涵`,
        description: article.description,
        images: `${baseUrl}/image/article/${article.key_visual}`
      }
    }
  } else {
    return {
      title: "404 | 陳子涵",
      description: "404 Not Found",
    }
  }
}

function ArticleSideBar({ name, description, tag, created_at, updated_at }:
  Pick<Article, 'name' | 'description' | 'tag' | 'created_at' | 'updated_at'>) {

  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:top-0 lg:w-96 lg:h-screen lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-800 md:text-4xl lg:text-5xl">{name}</h1>
      <p className="text-gray-600">{description}</p>
      <div className="flex gap-1.5 flex-wrap">
        <span className="rounded-full py-1 px-3 bg-gray-100 text-gray-700">{tag}</span>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-gray-600">新增日期：{formatDate(created_at)}</p>
        <p className="text-gray-600">更新日期：{formatDate(updated_at)}</p>
      </div>
    </div>
  )
}

function ArticleContent({ key_visual, name, slug, prev, next }:
  Pick<Article, 'key_visual' | 'name' | 'slug' | 'prev' | 'next'>) {

  return (
    <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:w-[calc(100%-24rem)] lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
      <Image src={`/image/article/${key_visual}`} width={768} height={432} priority
        alt={`${name} 文章主視覺`} title={`${name} 文章主視覺`}
        className="mx-auto w-full max-w-192 aspect-video object-cover rounded-3xl bg-gray-300" />

      <Markdown slug={`article/${slug}`} />

      <div className="mx-auto w-full max-w-192 flex flex-col gap-6 md:flex-row *:flex-1">
        {prev && <PageButton title={prev.name} subtitle="上一篇文章" align="left"
          href={`/article/${prev.slug}`} />}
        {next && <PageButton title={next.name} subtitle="下一篇文章" align="right"
          href={`/article/${next.slug}`} />}
      </div>
    </section>
  )
}

export default async function ArticlePage({ params }: { params: Params }) {
  const slug = (await params).slug;
  const res = await fetch(`${baseUrl}/api/article/content?slug=${slug}`);

  if (res.ok) {
    const article: Article = await res.json();
    return (
      <main className="min-h-screen bg-gray-50 md:ml-20 lg:flex">
        <ArticleSideBar {...article} />
        <ArticleContent {...article} />
      </main>
    )
  } else {
    return <NotFound />
  }
}