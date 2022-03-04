// import { useLoaderData, Link as RouterLink } from "remix";
// import type { LoaderFunction } from "remix";
// import invariant from "tiny-invariant";
// import { compile, run } from "@mdx-js/mdx";
// import { BlogPostWithId, getBlogPost } from "~/db/blogPosts.server";
// import React, { Fragment, useEffect, useState } from "react";
// import * as runtime from "react/jsx-runtime.js";
// import { Fab, Link, Paper, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { CodeBlock } from "~/components/CodeBlock";
// import { getAppUser } from "~/db/appUsers/appUsers.server";
// import { getUserId } from "~/utils/session.server";
// import EditIcon from "@mui/icons-material/Edit";

// interface LoaderData extends BlogPostWithId {
//   code: string;
//   isAuthor: boolean;
// }

// export const loader: LoaderFunction = async ({
//   request,
//   params,
// }): Promise<LoaderData> => {
//   const userId = await getUserId(request);
//   let isAuthor = false;
//   if (userId) {
//     const appUser = await getAppUser(userId);
//     if (appUser?.permissions.includes("author")) {
//       isAuthor = true;
//     }
//   }
//   invariant(params.blogPostId, "expected params.slug");
//   const blogPost = await getBlogPost(params.blogPostId);
//   invariant(blogPost, "expected blogPost");
//   const code = String(
//     await compile(blogPost.markdown, {
//       outputFormat: "function-body" /* …otherOptions */,
//     })
//   );
//   return { ...blogPost, code, isAuthor };
// };
// interface ContentComponent {
//   default: React.FC;
// }
// interface Props {
//   components: Record<string, any>;
// }
// export default function PostSlug() {
//   const { isAuthor, code } = useLoaderData();
//   const [mdxModule, setMdxModule] = useState<ContentComponent | null>(null);
//   const Content: React.FC<Props> | null = mdxModule ? mdxModule.default : null;
//   useEffect(() => {
//     (async () => {
//       setMdxModule(await run(code, runtime));
//     })();
//   }, [code]);
//   return (
//     <Box
//       sx={{
//         margin: "0 auto",
//         maxWidth: "900px",
//         position: "relative",
//         padding: 3,
//       }}
//     >
//       <Fab
//         color="secondary"
//         aria-label="edit"
//         component={RouterLink}
//         to="edit"
//         sx={{ position: "absolute", top: 20, right: 20 }}
//       >
//         <EditIcon />
//       </Fab>
//       {Content ? (
//         <Content
//           components={{
//             h1: (props) => (
//               <Typography variant="h1" sx={{ marginBottom: 3 }} {...props} />
//             ),
//             h2: (props) => (
//               <Typography variant="h2" sx={{ marginBottom: 3 }} {...props} />
//             ),
//             h3: (props) => (
//               <Typography variant="h3" sx={{ marginBottom: 3 }} {...props} />
//             ),
//             h4: (props) => (
//               <Typography variant="h4" sx={{ marginBottom: 3 }} {...props} />
//             ),
//             h5: (props) => (
//               <Typography variant="h5" sx={{ marginBottom: 3 }} {...props} />
//             ),
//             h6: (props) => (
//               <Typography variant="h6" sx={{ marginBottom: 3 }} {...props} />
//             ),
//             p: (props) => (
//               <Typography variant="body" component="p" {...props} />
//             ),
//             blockquote: (props) => (
//               <Typography
//                 variant="h6"
//                 component={Paper}
//                 sx={{
//                   padding: 2,
//                   margin: 2,
//                   borderLeft: ({ palette }) =>
//                     `2px solid${palette.primary.main}`,
//                 }}
//                 {...props}
//               />
//             ),
//             pre: (props) => <div {...props} />,
//             code: (props) => <CodeBlock {...props} />,
//             a: (props) => <Link {...props} />,

//             // em: (props) => <i style={{ color: "goldenrod" }} {...props} />,
//             // wrapper: ({ components, ...rest }) => <main {...rest} />,
//             Planet: () => "Neptune",
//             // theme: {
//             //   text: (props) => <span style={{ color: "grey" }} {...props} />,
//             // },
//           }}
//         />
//       ) : null}
//     </Box>
//   );
// }
export default function PostSlug() {
  return <div>coming soon</div>;
}
