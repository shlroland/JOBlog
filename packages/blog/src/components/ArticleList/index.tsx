import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "../Divider";
import { LocaleTime } from "../LocaleTime";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

export const ArticleList = () => {
  return (
    <div className="w-full overflow-hidden rounded-sm bg-white p-4 shadow-sm">
      {["1", "2"].map((article) => {
        return (
          <div
            key={article}
            className={cx(
              "[&+div]:mt-8",
              "relative after:absolute after:-bottom-4 after:left-0 after:h-[1px] after:w-full after:bg-gray-200",
              "last-of-type:after:h-0"
            )}
          >
            <Link href={"/"}>
              <header className="flex items-center">
                <h3 className="text-primary-color overflow-hidden truncate text-base font-semibold ">
                  富文本编辑器构成
                </h3>
                <div>
                  <Divider type="vertical" />
                  <span className="text-second-color">
                    <LocaleTime date={"2022-08-01 18:00:00"} timeago={true} />
                  </span>
                  <Divider type="vertical" />
                  <span className="text-second-color">前端</span>
                </div>
              </header>
              <main className="flex flex-nowrap pt-3">
                <div className="flex shrink grow basis-auto flex-col justify-between">
                  <div className="text-primary-color flex max-w-full text-sm line-clamp-3">
                    一个理想的富文本编辑器产生结构化的、语义化的、有意义的文档的同时还要能够让用户能够容易的理解与使用。ProseMirror
                    试着在Markdown 编辑体验和传统的WYSIWYG 编辑
                  </div>
                  <div className="text-second-color mt-3 w-full leading-5">
                    <span className="inline-flex items-center">
                      <HiOutlineHeart className="text-base text-gray-400" />
                      <span className="ml-1.5">25</span>
                    </span>
                    <span className="mx-1 inline-flex">
                      <BsDot />
                    </span>
                    <span className="inline-flex items-center">
                      <HiOutlineEye className="text-base text-gray-400" />
                      <span className="ml-1.5">25</span>
                    </span>
                  </div>
                </div>
                <div className="min-h-28 relative max-h-[112px] min-h-[96px] w-32 grow-0 shrink-0 basis-auto overflow-hidden rounded">
                  <Image
                    src="https://dummyimage.com/1200x800/556e64/fff"
                    alt="fff"
                    width={800}
                    height={1200}
                    className="absolute top-1/2 left-1/2 h-full w-full -translate-y-1/2 -translate-x-1/2"
                  />
                </div>
              </main>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
