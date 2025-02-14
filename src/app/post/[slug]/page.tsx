import cn from "classnames";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PostBody from "@components/post/PostBody";
import PostHeader from "@components/post/PostHeader";
import { getAllPosts, getPostBySlug } from "@lib/blogService";
import { getCloudinaryImageUrl } from "@lib/cloudinary";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className={cn("mb-12 max-w-5xl md:mx-auto")}>
      <article className={cn("mb-32")}>
        <PostHeader
          title={post.title}
          category={post.category}
          tags={post.tags}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      images: [
        post.ogImage
          ? getCloudinaryImageUrl(post.ogImage, "ogp")
          : getCloudinaryImageUrl(post.coverImage, "ogp"),
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
