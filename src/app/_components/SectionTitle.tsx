import cn from "classnames";
import { Jost } from "next/font/google";
import Link from "next/link";
import ArrowIcon from "@components/icon/arrow";

const mainFont = Jost({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  title: string;
  category?: string;
};

export const SectionTitle = ({ title, category }: Props) => {
  return (
    <h2
      className={cn(
        mainFont.className,
        "relative mb-8",
        "flex items-center justify-between",
        "text-3xl font-medium tracking-wide uppercase antialiased",
        "after:absolute after:top-1/2 after:right-0 after:-z-10 after:h-0.5 after:w-full after:-translate-y-1/2 after:bg-black",
      )}
    >
      <span className={cn("bg-background flex-none pr-3")}>{title}</span>
      <Link
        className={cn(
          "bg-background hover:text-tertiary text-primary flex flex-none items-center px-3 text-sm tracking-wide uppercase duration-500",
        )}
        href={
          category
            ? "/category/" + decodeURIComponent(category).toLowerCase() + "/1"
            : "/1"
        }
      >
        <span className={cn("pr-2")}>see more</span>
        <ArrowIcon />
      </Link>
    </h2>
  );
};
