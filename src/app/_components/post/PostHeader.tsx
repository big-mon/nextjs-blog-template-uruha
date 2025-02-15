import cn from "classnames";
import Link from "next/link";
import CoverImage from "@components/CoverImage";
import DateFormatter from "@components/DateFormatter";
import PostTitle from "@components/post/PostTitle";
import { getCloudinaryBlurredSrc } from "@lib/cloudinary";
import { type Author } from "@interfaces/author";

type Props = {
  title: string;
  category: string;
  tags: string[];
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = async ({
  title,
  category,
  tags,
  coverImage,
  date,
  author,
}: Props) => {
  const imageBlurUrl = await getCloudinaryBlurredSrc(coverImage);

  return (
    <header
      className={cn(
        "mb-20 max-w-6xl md:mx-auto",
        "grid-cols-2 items-center gap-6 md:grid",
      )}
    >
      <div
        className={cn(
          "relative col-span-1",
          "mx-5 mb-4 md:mx-0 md:mb-0 md:px-0 md:py-20",
        )}
      >
        <Link
          href={"/category/" + category.toLowerCase() + "/1"}
          className={cn(
            "hover:text-primary mb-2 inline-block tracking-wide uppercase",
          )}
        >
          {category}
        </Link>

        <div className={cn("mb-6")}>
          <PostTitle>{title}</PostTitle>
        </div>

        <div className={cn("md:absolute md:bottom-6")}>
          <div className={cn("mb-2 text-xs")}>
            <DateFormatter dateString={date} />
          </div>

          {tags.length > 0 && (
            <div className={cn("mb-3 text-xs md:mb-4")}>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={"/tag/" + tag.toLowerCase() + "/1"}
                  className={cn("hover:text-primary md:mr-4")}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={cn("col-span-1")}>
        <CoverImage
          title={title}
          src={coverImage}
          size={"large"}
          blurredSrc={imageBlurUrl}
        />
      </div>
    </header>
  );
};

export default PostHeader;
