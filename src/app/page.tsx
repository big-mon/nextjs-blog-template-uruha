import cn from "classnames";
import ArticleList from "@components/ArticleList";
import { getAllPosts } from "@lib/blogService";

export default async function Page() {
  const allPosts = getAllPosts();

  const categoryPosts1 = getAllPosts()
    .filter((post) => post.category.toLowerCase() === "Travel".toLowerCase())
    .slice(0, 6);
  const categoryPosts2 = getAllPosts()
    .filter(
      (post) => post.category.toLowerCase() === "Technology".toLowerCase(),
    )
    .slice(0, 6);

  return (
    <main className={cn("mx-5 mb-12 max-w-7xl py-4 md:mx-auto")}>
      <ArticleList type={"all"} posts={allPosts.slice(0, 3)} isTopPage={true} />

      <ArticleList
        type={"category"}
        segment={"Travel"}
        posts={categoryPosts1}
        isTopPage={true}
      />

      <ArticleList
        type={"category"}
        segment={"Technology"}
        posts={categoryPosts2}
        isTopPage={true}
      />
    </main>
  );
}
