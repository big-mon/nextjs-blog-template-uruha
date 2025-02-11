import cn from "classnames";
import { Jost } from "next/font/google";
const mainFont = Jost({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return (
    <h2
      className={cn(
        mainFont.className,
        "relative mb-8",
        "text-3xl font-medium tracking-wide uppercase antialiased",
        "after:absolute after:top-1/2 after:right-0 after:-z-10 after:h-0.5 after:w-full after:-translate-y-1/2 after:bg-black",
      )}
    >
      <span className="bg-background pr-3">{title}</span>
    </h2>
  );
};
