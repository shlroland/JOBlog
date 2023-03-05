import { type FC } from "react";
import cx from "classnames";

interface DividerProps {
  type?: "horizontal" | "vertical";
}

export const Divider: FC<DividerProps> = ({ type = "horizontal" }) => {
  return (
    <div
      className={cx(
        "text-primary-color border-t border-solid border-gray-200 leading-[1.5715]",
        type === "horizontal" && "clear-both my-6 mx-0 flex w-full min-w-full",
        type === "vertical" &&
          "relative top-[-0.06em] my-0 mx-2 inline-block h-[0.9em] border-t-0 align-middle border-l "
      )}
    ></div>
  );
};
