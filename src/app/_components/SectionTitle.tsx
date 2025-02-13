import cn from "classnames";
import { Jost } from "next/font/google";
import Link from "next/link";
import ArrowIcon from "@components/icon/arrow";

const mainFont = Jost({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  type: "all" | "category" | "tag";
  segment: string;
  isTopPage: boolean;
};

const SectionTitle = ({ type, segment, isTopPage }: Props) => {
  let seeMoreHref = "/1";
  switch (type) {
    case "category":
      seeMoreHref =
        "/category/" + decodeURIComponent(segment).toLowerCase() + "/1";
      break;
    case "tag":
      seeMoreHref = "/tag/" + decodeURIComponent(segment).toLowerCase() + "/1";
      break;
  }

  return isTopPage ? (
    <h2
      className={cn(
        mainFont.className,
        "relative mb-8",
        "flex items-center justify-between",
        "text-3xl font-medium tracking-wide uppercase antialiased",
        "after:absolute after:top-1/2 after:right-0 after:-z-10 after:h-0.5 after:w-full after:-translate-y-1/2 after:bg-black",
      )}
    >
      <Link
        className={cn("bg-background hover:text-neutral")}
        href={seeMoreHref}
      >
        <span className={cn("pr-3")}>{segment}</span>
      </Link>

      <Link
        className={cn(
          "bg-background hover:text-tertiary text-primary hidden items-center px-3 text-sm duration-300 md:flex",
        )}
        href={seeMoreHref}
      >
        <span className={cn("pr-2")}>see more</span>
        <ArrowIcon />
      </Link>
    </h2>
  ) : (
    <h2
      className={cn(
        mainFont.className,
        "text-center text-5xl font-medium tracking-wide uppercase antialiased",
        "border-b-2",
        "mt-6 mb-8",
        "pt-0 pb-16 md:pb-10",
      )}
    >
      {segment}
    </h2>
  );
};

export default SectionTitle;
