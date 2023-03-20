import { type NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineTag } from "react-icons/ai"

import { DoubleColumnLayout } from "~/components/Layouts/DoubleColumnLayout"
import { LocaleTime } from "~/components/LocaleTime"
import { MarkdownRender } from "~/components/MarkdownRender"
// import { api } from "~/utils/api"
import md from "./Youdao_Note_Markdown_Template.md"

const Article: NextPage<{ article: string }> = () => {
  // const article = api.example.getArticle.useQuery()

  // console.log(md)

  return (
    <DoubleColumnLayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-dark.min.css"
        />
      </Head>
      <article className="rounded-sm bg-white p-4 shadow-sm">
        <div className="w-full">
          <Image
            src="https://dummyimage.com/1200x500/556e64/fff"
            width={1200}
            height={500}
            alt="ff"
          ></Image>
        </div>

        <div className="text-center">
          <h1 className="mt-2.5 text-4xl font-bold leading-normal">
            富文本编辑器
          </h1>
          <p className="text-second-color mb-5 italic leading-loose">
            <span>
              发布于 <LocaleTime date={"2023-03-13 22:00:00"} />
            </span>
            <span> · </span>
            <span>阅读量 250</span>
          </p>
        </div>
        <MarkdownRender content={md} />
        <div className="text-second-color border-color-light mt-7 border-t border-dashed py-5 leading-7">
          <div className="mb-5 text-center text-xs leading-[22px] text-neutral-500">
            发布于 <LocaleTime date={"2023-03-13 22:00:00"} /> | 版权信息{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh"
              target="_blank"
              rel="noreferrer"
            >
              非商用-署名-自由转载
            </a>
          </div>
        </div>

        <div className="-mx-2 text-xs">
          <div className="inline-block px-2">
            <div className="text-second-color border-color-light hover:border-primary-500 hover:bg-primary-500 mt-2 inline-flex items-center rounded border border-solid bg-white px-2 text-sm leading-7 hover:text-white [&_svg]:inline">
              <Link href={"/"}>
                <AiOutlineTag />
                <span className="ml-2">富文本</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </DoubleColumnLayout>
  )
}

export default Article
