import { type FC } from "react"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import Refractor from "../Refractor"

export const MarkdownRender: FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      className="markdownRender prose prose-neutral lg:prose-lg max-w-none"
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code({  inline, className, children, ...props }) {
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
