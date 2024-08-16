import getHTML from '@/app/lib/markdown-to-html';

export default async function Content({ filename }: { filename: string }) {
  let content = '';
  try {
    content = await getHTML(`app/markdown/${filename}.md`);
  } catch (error) {
    content = '沒有文字內容';
  }

  return (
    <div className="
    [&>h2]:my-6 [&>h2]:text-gray-900 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:lg:text-4xl
    [&>h3]:my-4 [&>h3]:text-gray-900 [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:lg:text-2xl
    [&>p]:my-2 [&>p]:text-gray-600"
      dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}