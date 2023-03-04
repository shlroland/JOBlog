import Link from "next/link";
import { LocaleTime } from "../LocaleTime";

export const ArticleRecommend = () => {
  return (
    <div className="mb-5 overflow-hidden rounded-sm bg-white leading-tight shadow-sm">
      <div className="text-primary-color border-color-light border border-solid p-4 font-bold">
        <span>推荐文章</span>
      </div>

      <ul className="px-4 pb-4">
        <li className="text-second-color flex flex-nowrap items-stretch pt-4">
          <Link
            href="/"
            className="truncate hover:text-primary-500 [&:hover>span:first-of-type]:text-primary-500"
          >
            <span className="text-primary-color hover:text-inherit">
              数据可视化
            </span>
            {" · "}
            <span>
              <LocaleTime date={"2023-01-01 08:00:00"} timeago={true} />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
