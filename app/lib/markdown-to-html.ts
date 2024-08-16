import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { read } from 'to-vfile'
import { unified } from 'unified'

export default async function getHTML(url: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read(url));

  return String(file);
}