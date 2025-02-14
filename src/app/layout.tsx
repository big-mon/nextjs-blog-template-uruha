import type { Metadata } from "next";
import type { Viewport } from "next";
import cn from "classnames";
import GlobalHeader from "@components/GlobalHeader";
import GlobalFooter from "@components/GlobalFooter";
import { Noto_Sans_JP } from "next/font/google";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  TWITTER,
  SITE_IMAGE,
} from "@lib/constants";
import "@styles/globals.css";

const mainFont = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={cn(
          mainFont.className,
          "bg-background text-neutral overflow-x-hidden",
        )}
      >
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | " + SITE_NAME,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: SITE_NAME,
    images: SITE_IMAGE,
    creator: "@" + TWITTER,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [SITE_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#242526",
  colorScheme: "only light",
};
