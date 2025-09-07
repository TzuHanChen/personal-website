import { Suspense } from "react";
import type { Metadata } from "next";
import Card, { Loading } from "@/app/ui/card";
import { getBaseUrl } from "@/lib/url";
import { Article } from "@/lib/types";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "文章 | 陳子涵",
  description: "陳子涵的文章",
  openGraph: {
    url: `${baseUrl}/article`,
    title: "文章 | 陳子涵",
    description: "陳子涵的文章",
    images: `${baseUrl}/image/personal-website.png`
  }
};

export const dynamic = 'force-dynamic';

async function ArticleCards() {
  const res = await fetch(`${baseUrl}/api/article/list`);
  const articles: Article[] = await res.json();

  return articles.map((article: Article, index) =>
    <Card key={index} linkHref={`/article/${article.slug}`}
      imageSrc={`/image/article/${article.key_visual}`}
      name={article.name} description={article.description} />
  )
}

export default function Articles() {
  return (
    <main className="bg-gray-50 py-24 px-6 flex flex-col gap-16 md:ml-20 md:px-24 lg:py-36 lg:gap-24">

      <section className="mx-auto w-full max-w-270 flex flex-col gap-6 lg:gap-9">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-gray-900 md:text-5xl">文章</h2>
        </div>

        <div className="flex justify-center gap-6 flex-wrap *:w-full *:max-w-96 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<Loading />}>
            <ArticleCards />
          </Suspense>
        </div>
      </section>
    </main>
  )
}