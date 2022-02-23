import {
  redirect,
  Form,
  LoaderFunction,
  useLoaderData,
  useActionData,
} from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { addBlogPost } from "~/db/blogPosts.server";
import { requireUserId } from "~/utils/session.server";
import { getAppUser } from "~/db/appUsers/appUsers.server";

type LoaderData = { authorId: string };

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  console.log("appUser", appUser);
  if (!appUser?.permissions.includes("author")) {
    console.log("REDIRECTING");
    return redirect("/blog");
  }
  const data: LoaderData = {
    authorId: userId,
  };

  return data;
};

type PostError = {
  title?: boolean;
  slug?: boolean;
  markdown?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(
    (formData.get("publishDate") as string) || "0",
    10
  );

  const errors: PostError = {};
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");
  invariant(typeof description === "string");
  invariant(typeof authorId === "string");
  invariant(typeof isPublished === "boolean");
  invariant(typeof publishDate === "number");

  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
  });

  return redirect("/blog");
};
export default function NewPost() {
  const { authorId } = useLoaderData<LoaderData>();
  const errors = useActionData();
  return (
    <Form method="post">
      <input type="hidden" name="authorId" value={authorId} />
      <input type="hidden" name="isPublished" value="true" />
      <input type="hidden" name="publishDate" value={Date.now().toString()} />
      <input type="hidden" name="description" value="A cool description!" />
      <p>
        <label>
          Post Title: {errors?.title ? <em>Title is required</em> : null}
          <input type="text" name="title" />
        </label>
      </p>
      <p>
        <label>
          Post Slug: {errors?.slug ? <em>Slug is required</em> : null}
          <input type="text" name="slug" />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>{" "}
        {errors?.markdown ? <em>Markdown is required</em> : null}
        <br />
        <textarea id="markdown" rows={20} name="markdown" />
      </p>
      <p>
        <button type="submit">Create Post</button>
      </p>
    </Form>
  );
}
