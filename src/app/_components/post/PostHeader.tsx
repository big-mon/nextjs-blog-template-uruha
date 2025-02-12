import CoverImage from "@components/CoverImage";
import { getCloudinaryBlurredSrc } from "@lib/cloudinary";
import DateFormatter from "@components/DateFormatter";
import PostTitle from "@components/post/PostTitle";
import { type Author } from "@interfaces/author";
import Link from "next/link";

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
    <header className="px-5 py-5">
      <div className="mx-auto mb-2 max-w-2xl text-sm text-gray-500 md:flex">
        <Link
          href={"/category/" + category.toLowerCase() + "/1"}
          className="hover:text-teal-500"
        >
          {category}
        </Link>
      </div>

      <div className="mx-auto max-w-2xl text-xs text-gray-500">
        <DateFormatter dateString={date} />
      </div>

      <div className="mx-auto max-w-2xl break-words break-keep">
        <PostTitle>{title}</PostTitle>
      </div>

      {tags.length > 0 && (
        <div className="mx-auto mb-3 max-w-2xl text-xs text-gray-500 md:mb-4">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={"/tag/" + tag.toLowerCase() + "/1"}
              className="ml-4 hover:text-teal-500 md:mr-4 md:ml-0"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      <div className="mb-8">
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
