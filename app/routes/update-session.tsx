import type { ActionFunction } from "remix";
import { createUserSession } from "~/utils/session.server";

// export let action: ActionFunction = async ({ request }) => {
//   return logout(request);
// };

// export let loader: LoaderFunction = async () => {
//   return redirect("/");
// };

export const action: ActionFunction = async ({ request, params }) => {
  console.log("THE SESSION IS DOWN");
  console.log("THE SESSION IS DOWN");
  console.log("THE SESSION IS DOWN");
  console.log("THE SESSION IS DOWN");
  console.log("THE SESSION IS DOWN");
  const form = await request.formData();
  const _method = form.get("_method");
  if(_method === "put"){
    const redirectTo = (form.get("redirectTo") || "/dashboard") as string
    const userToken = form.get("userToken") as string;
    if(!userToken){
      throw new Response("Could not sign in. Please try again.", {
        status: 404,
      });
    }
    return await createUserSession(userToken, redirectTo);
  }
}