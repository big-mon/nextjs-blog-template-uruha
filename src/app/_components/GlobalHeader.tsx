import cn from "classnames";
import Link from "next/link";
import Logo from "@components/Logo";
import Menu from "@components/Menu";

const GlobalHeader = () => {
  return (
    <header
      className={cn(
        "mx-5 mb-6 max-w-7xl py-4 md:mx-auto",
        "flex flex-wrap items-center justify-between",
        "border-b-2 border-b-gray-300 md:border-b-0",
      )}
    >
      <Link href="/">
        <Logo />
      </Link>
      <Menu />
    </header>
  );
};

export default GlobalHeader;
