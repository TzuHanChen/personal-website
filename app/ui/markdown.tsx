import ReactMarkdown from 'react-markdown';
import { getBaseUrl } from "@/lib/url";

export async function Markdown({ slug }: { slug: string }) {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/markdown/${slug}.md`);
  let markdown = 'markdown file does not exist';
  if (res.ok) markdown = await res.text();

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