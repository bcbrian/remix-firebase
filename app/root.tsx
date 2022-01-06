import type { LinksFunction, MetaFunction } from "remix";
import { Links, LiveReload, Outlet, useCatch, Meta, Scripts } from "remix";

import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";
import {
  AUTHENTICATING,
  onAuthStateChanged,
  UserContext,
} from "~/firebase/auth";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { COLORS } from "~/theme/colors";
import { AppBar } from "~/components/AppBar";

export const links: LinksFunction = () => {
  return [
    // {
    //   rel: "stylesheet",
    //   href: globalStylesUrl,
    // },
    // {
    //   rel: "stylesheet",
    //   href: globalMediumStylesUrl,
    //   media: "print, (min-width: 640px)",
    // },
    // {
    //   rel: "stylesheet",
    //   href: globalLargeStylesUrl,
    //   media: "screen and (min-width: 1024px)",
    // },
  ];
};

export const meta: MetaFunction = () => {
  const description = `Learn Remix and laugh at the same time!`;
  return {
    description,
    keywords: "Remix,jokes",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@remix_run",
    "twitter:site": "@remix_run",
    "twitter:title": "Remix Jokes",
    "twitter:description": description,
  };
};

function Document({
  children,
  title = `Remix: So great, it's funny!`,
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

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    error: {
      main: COLORS.ERROR,
    },
    warning: {
      main: COLORS.WARNING,
    },
    info: {
      main: COLORS.INFO,
    },
    success: {
      main: COLORS.SUCCESS,
    },
    background: {
      default: COLORS.BACKGROUND.DEFAULT,
      paper: COLORS.BACKGROUND.PAPER,
    },
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
        // variant: "outlined",
      },
    },
    MuiButton: {
      defaultProps: {
        // The default props to change
        variant: "outlined",
      },
    },
  },
});

export default function App() {
  const [user, setUser] = useState<string | null>(AUTHENTICATING);

  useEffect(() => {
    onAuthStateChanged((user) => {
      return user ? setUser(user) : setUser(null);
    });
  }, []);
  console.log("user", user);
  if (user === AUTHENTICATING) {
    return (
      <Document>
        <Box />
      </Document>
    );
  }
  return (
    <Document>
      <UserContext.Provider value={user}>
        <ThemeProvider theme={theme}>
          <AppBar />
          <Outlet />
        </ThemeProvider>
      </UserContext.Provider>
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

{
  /* <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard-old" component={DashBoard} />
            <PrivateRoute path="/dashboard" component={TDADashBoard} />
            <AuthRoute path="/auth" component={Auth} />
            <Route path="/" exact component={Index} />
            <Route render={() => <Box>404</Box>} />
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider> */
}
