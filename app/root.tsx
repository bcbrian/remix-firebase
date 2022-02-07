import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { Links, LiveReload, Outlet, useCatch, Meta, Scripts } from "remix";
import globalStylesUrl from "~/styles/global.css";
import { AuthProvider } from "~/firebase/AuthProvider";
import { ThemeProvider } from "@mui/material";
import { AppBar } from "~/components/AppBar";
import { theme } from "./theme";
import { AuthUser, getAuthUser } from "./utils/session.server";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
  ];
}

export const meta: MetaFunction = () => {
  const description = `Code Sagas is a place to learn a million and one ways to code.`;
  return {
    description,
    keywords: "code,sagas,learn",
    "twitter:image": "https://codesagas.com/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@codesagas",
    "twitter:site": "@codesagas",
    "twitter:title": "Code Sagas",
    "twitter:description": description,
  };
};

function Document({
  children,
  title = `Code Sagas | Copy/Pasta/Twerk`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

type LoaderData = { user: AuthUser|null };

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getAuthUser(request);

  const data: LoaderData = {
    user,
  };
  return data;
};

function Providers({
  user,
  children,
}: {
  user: AuthUser | null;
  children: React.ReactNode;
}) {
  return (
    <AuthProvider user={user}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
}

export default function App() {
  const { user } = useLoaderData<LoaderData>();

  return (
    <Document>
      <Providers user={user}>
        <AppBar />
        <Outlet />
      </Providers>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
