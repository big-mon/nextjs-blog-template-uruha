"use client";

import cn from "classnames";
import React from "react";
import { usePathname } from "next/navigation";
import { Jost } from "next/font/google";
import { SITE_NAME } from "@lib/constants";

const logoFont = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const Logo = () => {
  const pathname = usePathname();
  const isTopPage = pathname === "/";

  return isTopPage ? (
    <h1
      className={cn(
        logoFont.className,
        "text-xl font-medium tracking-wide antialiased",
      )}
    >
      {SITE_NAME}
    </h1>
  ) : (
    <div
      className={cn(
        logoFont.className,
        "text-xl font-medium tracking-wide antialiased",
      )}
    >
      {SITE_NAME}
    </div>
  );
};
