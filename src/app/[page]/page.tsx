import cn from "classnames";
import { ArticleList } from "@components/ArticleList";
import { Pagination } from "@components/Pagination";
import { getAllPosts, howTotalPages } from "@lib/blogService";
import { PER_PAGE } from "@lib/constants";

type Params = {
  params: Promise<{
    page: number;
  }>;
};

export default async function Page(props: Params) {
  const page = (await props.params).page;
  const allPosts = getAllPosts();
  const pagePosts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPage = howTotalPages(allPosts);

  return (
    <main className={cn("mx-5 mb-12 max-w-7xl py-4 md:mx-auto")}>
      <ArticleList type={"all"} posts={pagePosts} isTopPage={false} />

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
