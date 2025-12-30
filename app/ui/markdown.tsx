import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getBaseUrl } from "@/lib/url";

export async function Markdown({ slug }: { slug: string }) {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/markdown/${slug}.md`);
  let markdown = 'markdown file does not exist';
  if (res.ok) markdown = await res.text();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
        table: ({ node, ...props }) => <div className='overflow-auto'><table {...props}>{props.children}</table></div>
      }}
      className="mx-auto mb-12 lg:mb-24 w-full max-w-192
      [&>h2]:my-6 [&>h2]:text-gray-900 [&>h2]:text-2xl
      md:[&>h2]:text-3xl lg:[&>h2]:my-12 lg:[&>h2]:text-4xl
      [&>h3]:my-4 [&>h3]:text-gray-900 [&>h3]:text-lg
      md:[&>h3]:text-xl lg:[&>h3]:my-8 lg:[&>h3]:text-2xl
      [&>p]:my-2 [&>p]:text-gray-600
      [&>ul]:pl-5 [&>ul>li]:list-disc [&>ul>li]:text-gray-600
      [&>ol]:pl-5 [&>ol>li]:list-decimal [&>ol>li]:text-gray-600
      [&>hr]:my-8 [&>hr]:mx-auto [&>hr]:border-gray-300 [&>hr]:w-1/3 lg:[&>hr]:my-16
      [&>p>img]:my-12 [&>p>img]:mx-auto [&>p>img]:max-h-120
      [&_a]:underline [&_a]:active:text-teal-600 [&_a]:transition-colors [&_a]:duration-300
      [&_table]:my-6 [&_table]:border-collapse
      [&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-200 [&_th]:p-2
      [&_td]:border [&_td]:border-gray-200 [&_td]:p-2
      [&>blockquote]:my-6 [&>blockquote]:border-l-6 [&>blockquote]:border-gray-300 [&>blockquote]:bg-gray-100 [&>blockquote]:p-3
      [&>pre]:my-2 [&>pre]:overflow-auto">
      {markdown}
    </ReactMarkdown>
  )
}