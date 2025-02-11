import cn from "classnames";
import Link from "next/link";
import CoverImage from "@components/image/cover-image";
import { getCloudinaryBlurredSrc } from "@lib/cloudinary";

type Props = {
  title: string;
  slug: string;
  coverImage: string;
  category: string;
};

export const ArticleCard = async ({
  title,
  slug,
  coverImage,
  category,
}: Props) => {
  // blur画像用のBase64を取得
  const imageBlurUrl = await getCloudinaryBlurredSrc(coverImage);

  return (
    <article className={cn("py-5")}>
      <Link
        href={`/post/${slug}`}
        className={cn("mb-4 block", "group hover:text-primary duration-400")}
      >
        <div
          className={cn(
            "relative mb-4 block h-auto overflow-hidden",
            "before:absolute before:z-10 before:content-['']",
            "before:opacity-0 before:duration-400 group-hover:before:opacity-50",
            "before:block before:size-full before:bg-black",
            "after:absolute after:top-1/2 after:left-1/2 after:z-30 after:-translate-x-1/2 after:-translate-y-1/2 after:content-['READ_MORE']",
            "after:opacity-0 after:duration-400 group-hover:after:opacity-100",
            "after:text-background after:border-background after:block after:border after:px-5 after:py-2",
          )}
        >
          <CoverImage
            title={title}
            src={coverImage}
            size={"small"}
            blurredSrc={imageBlurUrl}
          />
        </div>

        <div
          className={cn(
            "mb-2",
            "text-primary text-xs tracking-widest uppercase",
          )}
        >
          {category}
        </div>

        <h3 className={cn("text-lg font-semibold")}>{title}</h3>
      </Link>
    </article>
  );
};
