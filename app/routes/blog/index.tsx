import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useLoaderData, LoaderFunction } from "remix";
import { BlogCard } from "~/components/BlogCard";
import { getAppUser } from "~/db/appUsers/appUsers.server";
import { BlogPostWithId, getAllBlogPosts } from "~/db/blogPosts.server";
import { getUserId } from "~/utils/session.server";

interface LoaderData {
  posts: BlogPostWithId[];
  isAuthor: boolean;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const userId = await getUserId(request);
  console.log("userId", userId);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser?.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  const posts = await getAllBlogPosts();
  return { posts, isAuthor };
};

export default function Blog() {
  const { posts, isAuthor } = useLoaderData<LoaderData>();
  console.log("isAuthor", isAuthor);
  return (
    <>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "80%",
        }}
      >
        <Typography variant="h1" textAlign="center">
          Blog
        </Typography>
        {isAuthor ? (
          <Button component={Link} to="/blog/new">
            Add Blog Post
          </Button>
        ) : null}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "80%",
        }}
        justifyContent="space-around"
      >
        {posts.map((post) => (
          <Box
            key={post.id}
            sx={{
              flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
              margin: 2,
            }}
          >
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
