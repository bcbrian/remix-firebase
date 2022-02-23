import { Link, useLoaderData } from "remix";
import { BlogPostWithId, getAllBlogPosts } from "~/db/blogPosts.server";

interface LoaderData {
  posts: BlogPostWithId[];
}

export async function loader<LoaderData>() {
  const posts = await getAllBlogPosts();
  return { posts };
}

export default function Blog() {
  const { posts } = useLoaderData<LoaderData>();
  console.log("posts", posts);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
