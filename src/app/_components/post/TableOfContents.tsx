import cn from "classnames";
import { simplifyText } from "@lib/url";

type Props = {
  toc: { tag: string; text: string; id: string }[];
};

const TableOfContents = ({ toc }: Props) => {
  return (
    <nav className={cn("sticky top-10 max-h-[90svh] overflow-y-auto")}>
      <p
        className={cn(
          "relative z-10 mb-2 inline-block text-lg font-semibold",
          "before:bg-secondary before:absolute before:top-1/2 before:right-0 before:-z-10 before:h-0.5 before:w-full",
        )}
      >
        <span className={cn("bg-background ml-6 pl-4")}>Table of Contents</span>
      </p>

      <ul className={cn("text-sm")}>
        {toc.map((item) => {
          const simplifiedId = simplifyText(item.text);

          return item.tag === "h1" ? (
            <li
              key={simplifiedId}
              className={cn(
                "truncate border-t border-t-neutral-300 py-2 first-of-type:border-t-0",
              )}
            >
              <a
                href={`#${simplifiedId}`}
                className={cn("hover:text-secondary")}
              >
                {item.text}
              </a>
            </li>
          ) : (
            <li
              key={simplifiedId}
              className={cn("text-neutral/50 truncate py-2")}
            >
              <a
                href={`#${simplifiedId}`}
                className={cn("hover:text-secondary")}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
