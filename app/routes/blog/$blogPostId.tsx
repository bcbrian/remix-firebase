import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getBlogPost } from "~/db/blogPosts.server";



export const loader: LoaderFunction = async ({
  params,
}) => {
  invariant(params.blogPostId, "expected params.slug");
  return getBlogPost(params.blogPostId);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}