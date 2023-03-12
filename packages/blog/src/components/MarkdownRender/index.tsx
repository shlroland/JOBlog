import { useRef, type FC } from "react";

export const MarkdownRender: FC<{ content: string }> = ({  }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="markdownRender prose prose-slate lg:prose-lg"
    ></div>
  );
};
