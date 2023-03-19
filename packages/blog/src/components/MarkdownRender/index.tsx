import { type FC } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export const MarkdownRender: FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      className="markdownRender prose prose-neutral lg:prose-lg max-w-none"
      remarkPlugins={[remarkGfm,remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {content}
    </ReactMarkdown>
  )
}
