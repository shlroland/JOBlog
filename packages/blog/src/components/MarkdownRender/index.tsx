import { type FC } from "react"
import { useMemoizedFn } from "ahooks"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import { rehypeSlug, type GetHeadings } from "@roland/utils"

import Refractor from "../Refractor"

export const MarkdownRender: FC<{
  content: string
  onTocsChange: GetHeadings
}> = ({ content, onTocsChange }) => {
  const getHeadings = useMemoizedFn<GetHeadings>((headings) => {
    setTimeout(() => onTocsChange(headings), 0)
  })
  return (
    <ReactMarkdown
      className="markdownRender prose prose-zinc lg:prose-lg max-w-none"
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeSlug(getHeadings)]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <Refractor
              value={String(children).replace(/\n$/, "")}
              language={match[1] ?? "plainText"}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
