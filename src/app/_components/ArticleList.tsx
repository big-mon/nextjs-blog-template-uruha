import cn from "classnames";
import { Post } from "@interfaces/post";
import { SectionTitle } from "./SectionTitle";
import { ArticleCard } from "./ArticleCard";

type Props = {
  type: "all" | "category" | "tag";
  segment?: string;
  posts: Post[];
  isTopPage: boolean;
};

export const ArticleList = ({
  type,
  segment = "Latest Articles",
  posts,
  isTopPage,
}: Props) => {
  return (
    <section>
      <SectionTitle type={type} segment={segment} isTopPage={isTopPage} />

      <div
        className={cn(
          "mb-16",
          "grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3",
        )}
      >
        {posts.map((post) => (
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
