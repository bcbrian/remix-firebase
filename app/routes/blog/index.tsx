import { Box, Stack, Typography } from "@mui/material";
import { Link, useLoaderData } from "remix";
import { BlogCard } from "~/components/BlogCard";
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

  return (
    <>
    <Typography variant="h1" textAlign="center">Blog</Typography>
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}
      justifyContent="space-around"
    >
      {posts.map((post) => (
        <Box key={post.id} sx={{ flex: {xs:"0 0 80%", md:"0 0 40%", lg:"0 0 30%"}, margin: 2 }}>
          <BlogCard
            title={post.title}
            description={post.description}
            imageUrl={
              "https://images.unsplash.com/photo-1645625436473-f48f07b704ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
            }
            imageAlt={"a view of canyons from above"}
            url={`/blog/${post.slug}`}
            // imageUrl={post.imageUrl || ""}
            // imageAlt={post.imageAlt || ""}
          />
        </Box>
      ))}
    </Stack>
    </>
  );
}
