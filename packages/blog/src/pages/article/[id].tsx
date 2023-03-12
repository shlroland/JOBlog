import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTag } from "react-icons/ai";
import { DoubleColumnLayout } from "~/components/Layouts/DoubleColumnLayout";
// import { LocaleTime } from "~/components/LocaleTime";

const Article: NextPage<{ article: string }> = () => {
  return (
    <DoubleColumnLayout>
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
          <p className="text-second-color mb-5 italic">
            <span>
              {/* 发布于 <LocaleTime date={new Date()} /> */}
            </span>
            <span> · </span>
            <span>阅读量 250</span>
          </p>
        </div>

        <div className="text-second-color border-color-light mt-7 border-t border-dashed py-5 leading-7">
          <div className="mb-5 text-center text-xs leading-[22px] text-neutral-500">
            {/* 发布于 <LocaleTime date={new Date()} /> | 版权信息{" "} */}
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
            <div className="text-second-color border-color-light mt-2 inline-flex items-center rounded border border-solid bg-white px-2 text-sm leading-7 hover:border-primary-500 hover:bg-primary-500 hover:text-white [&_svg]:inline">
              <Link href={"/"}>
                <AiOutlineTag />
                <span className="ml-2">富文本</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </DoubleColumnLayout>
  );
};

export default Article;
