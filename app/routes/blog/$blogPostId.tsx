import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { compile, run } from "@mdx-js/mdx";
import { BlogPostWithId, getBlogPost } from "~/db/blogPosts.server";
import React, { Fragment, useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime.js";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface LoaderData extends BlogPostWithId {
  code: string;
}

export const loader: LoaderFunction = async ({
  params,
}): Promise<LoaderData> => {
  invariant(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  invariant(blogPost, "expected blogPost");
  const code = String(
    await compile(blogPost.markdown, {
      outputFormat: "function-body" /* …otherOptions */,
    })
  );
  return { ...blogPost, code };
};
interface ContentComponent {
  default: React.FC;
}
interface Props {
  components: Record<string, any>;
}
export default function PostSlug() {
  const { title, code } = useLoaderData();
  const [mdxModule, setMdxModule] = useState<ContentComponent | null>(null);
  const Content: React.FC<Props> | null = mdxModule ? mdxModule.default : null;
  useEffect(() => {
    (async () => {
      setMdxModule(await run(code, runtime));
    })();
  }, [code]);
  return (
    <Box sx={{ margin: "0 auto", maxWidth: "900px" }}>
      {Content ? (
        <Content
          components={{
            h1: (props) => <Typography variant="h1" {...props} />,
            h2: (props) => <Typography variant="h2" {...props} />,
            h3: (props) => <Typography variant="h3" {...props} />,
            h4: (props) => <Typography variant="h4" {...props} />,
            h5: (props) => <Typography variant="h5" {...props} />,
            h6: (props) => <Typography variant="h6" {...props} />,

            // em: (props) => <i style={{ color: "goldenrod" }} {...props} />,
            // wrapper: ({ components, ...rest }) => <main {...rest} />,
            // Planet: () => "Neptune",
            // theme: {
            //   text: (props) => <span style={{ color: "grey" }} {...props} />,
            // },
          }}
        />
      ) : null}
    </Box>
  );
}
