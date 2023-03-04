import cx from "classnames";
import Link from "next/link";

export const Tags = () => {
  return (
    <div className="mb-5 rounded-sm bg-white leading-tight shadow-sm">
      <div className="text-primary-color border-color-light border border-solid p-4 font-bold">
        <span>文章标签</span>
      </div>

      <ul className="p-4">
        <li
          className={cx(
            "text-second-color border-color border-color-light mr-2 mb-2 inline-block rounded-sm border border-solid py-0.5 px-2 leading-6 transition-all",
            "hover:border-primary-500 hover:text-primary-500"
          )}
        >
          <Link href={"/"}>
            {"Git"} [{1}]
          </Link>
        </li>
      </ul>
    </div>
  );
};
