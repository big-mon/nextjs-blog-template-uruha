import cn from "classnames";
import ArticleList from "@components/ArticleList";
import Pagination from "@components/Pagination";
import { getAllPosts, howTotalPages } from "@lib/blogService";
import { PER_PAGE } from "@lib/constants";

export default async function Page() {
  const page = 1;
  const allPosts = getAllPosts();
  const pagePosts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPage = howTotalPages(allPosts);

  const categoryPosts1 = getAllPosts().filter(
    (post) => post.category.toLowerCase() === "Travel".toLowerCase(),
  );
  const categoryPosts2 = getAllPosts().filter(
    (post) => post.category.toLowerCase() === "Technology".toLowerCase(),
  );

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

      <div className="mb-16">
        <Pagination
          type={"all"}
          currentPage={page}
          totalPage={totalPage}
          prefix={""}
        />
      </div>
    </main>
  );
}
