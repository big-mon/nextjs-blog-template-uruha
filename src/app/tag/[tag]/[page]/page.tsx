import cn from "classnames";
import { Metadata } from "next";
import ArticleList from "@components/ArticleList";
import Pagination from "@components/Pagination";
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
  const currentPage = (await props.params).page;
  const allPosts = getAllPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
  );
  const pagePosts = allPosts.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );
  const totalPage = howTotalPages(allPosts);

  return (
    <main className={cn("mx-5 mb-12 max-w-5xl py-4 md:mx-auto")}>
      <ArticleList
        type={"tag"}
        segment={tag}
        posts={pagePosts}
        isTopPage={false}
      />

      <div className="mb-16">
        <Pagination
          urlPrefix={"/tag/" + tag + "/"}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;

  return {
    title: "Tags: " + params.tag.toUpperCase(),
    openGraph: { title: "Tags: " + params.tag.toUpperCase() },
  };
}
