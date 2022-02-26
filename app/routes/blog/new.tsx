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
import { FormControlLabel, TextField, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { DateTimePicker } from "~/components/DateTimePicker"

type LoaderData = { authorId: string };

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!appUser?.permissions.includes("author")) {
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
  const [ date, setDate] = useState<Date | null>(new Date())
  const [isPublished, setIsPublished] = useState(true);
  const { authorId } = useLoaderData<LoaderData>();
  const errors = useActionData();
  return (
    <Form method="post">
      <input type="hidden" name="authorId" value={authorId} />
      <input type="hidden" name="isPublished" value={isPublished.toString()} />
      <input type="hidden" name="publishDate" value={date?.getTime().toString()} />
      <Box>
        <DateTimePicker date={date} setDate={setDate} variant="filled"/>
        <FormControlLabel
          control={
            <Switch
              checked={isPublished}
              onChange={(event) => setIsPublished(event.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={isPublished ? "Is Published" : "Not Published"}
        />
        <TextField
          error={errors?.title}
          id="title"
          label="Title"
          helperText={errors?.title ? "Title is required" : null}
          variant="filled"
        />
        <TextField
          error={errors?.description}
          id="description"
          label="Description"
          helperText={errors?.description ? "Description is required" : null}
          variant="filled"
        />
      </Box>
      <Box>
        <TextField
          error={errors?.slug}
          id="slug"
          label="Slug"
          helperText={errors?.slug ? "Slug is required" : null}
          variant="filled"
        />
      </Box>
      <Box>
        <TextField
          error={errors?.markdown}
          id="markdown"
          label="Markdown"
          helperText={errors?.markdown ? <em>Markdown is required</em> : null}
          variant="filled"
          multiline
          rows={10}
          name="markdown"
        />
      </Box>
      <p>
        <button type="submit">Create Post</button>
      </p>
    </Form>
  );
}
