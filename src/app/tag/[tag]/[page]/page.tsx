import { ArticleList } from "@components/ArticleList";
import { Pagination } from "@components/Pagination";
import { getAllPosts, howTotalPages } from "@lib/blogService";
import { PER_PAGE } from "@lib/constants";

type Params = {
  params: Promise<{
    tag: string;
    page: number;
  }>;
};

export default async function Page(props: Params) {
  const tag = decodeURIComponent((await props.params).tag);
  const page = (await props.params).page;
  const allPosts = getAllPosts().filter((post) => post.tags.includes(tag));
  const pagePosts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPage = howTotalPages(allPosts);

  return (
    <main className="container mx-auto max-w-7xl">
      <ArticleList
        type={"tag"}
        segment={tag}
        posts={pagePosts}
        isTopPage={false}
      />

      <div className="mb-16">
        <Pagination
          type={"tag"}
          currentPage={page}
          totalPage={totalPage}
          prefix={tag}
        />
      </div>
    </main>
  );
}
