import { type ReactNode, type FCWithChildren } from "react";
import cx from "classnames";

export interface DoubleColumnLayoutProps {
  minHeight?: string | number;
  leftClassname?: string;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  isRightNodeMobileHidden?: boolean;
}

export const DoubleColumnLayout: FCWithChildren<DoubleColumnLayoutProps> = ({
  minHeight = "100vh",
  leftClassname,
  leftNode,
  children,
  rightNode,
  isRightNodeMobileHidden = true,
}) => {

  return (
    <div style={{ minHeight }}>
      <div className="layout">
        <div className="flex flex-wrap justify-center">
          <section
            className={cx([
              "md:w-[calc(100% - 20rem - 1rem)] w-full md:grow pt-4 md:pb-4",
              leftClassname,
            ])}
          >
            {leftNode || children}
          </section>
          <aside
            className={cx([
              "ml-0 md:ml-4 md:w-72 md:pt-4 md:pb-4",
              isRightNodeMobileHidden && "hidden w-0",
            ])}
          >
            {rightNode}
          </aside>
        </div>
      </div>
    </div>
  );
};
