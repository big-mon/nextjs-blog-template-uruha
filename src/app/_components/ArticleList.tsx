import cn from "classnames";
import { Post } from "@interfaces/post";
import { SectionTitle } from "./SectionTitle";
import { ArticleCard } from "./ArticleCard";

type Props = {
  type: "all" | "category";
  category?: string;
  posts: Post[];
};

export const ArticleList = ({ type, category, posts }: Props) => {
  const label =
    type === "all" ? "Latest Articles" : category || "Default Category";

  const displayPosts = category
    ? posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase(),
      )
    : posts;

  return (
    <section>
      <SectionTitle title={label} category={category} />

      <div
        className={cn(
          "mb-16",
          "grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3",
        )}
      >
        {displayPosts.map((post) => (
          <ArticleCard
            key={post.slug}
            title={post.title}
            slug={post.slug}
            coverImage={post.coverImage}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
};
