import cn from "classnames";
import { MarkdownRenderer } from "@lib/markdown/markdownRenderer";

type Props = {
  content: string;
};

const PostBody = async ({ content }: Props) => {
  const { toc, body } = await MarkdownRenderer({ children: content });

  return (
    <div className={cn("justify-between md:flex")}>
      <div className={cn("order-last hidden min-w-3xs md:block")}>{toc}</div>
      <div
        className={cn(
          "leading-relaxed tracking-wider",
          "mx-auto w-full max-w-3xl px-5 md:mx-0 md:px-0",
          "flex-none",
        )}
      >
        {body}
      </div>
    </div>
  );
};

export default PostBody;
