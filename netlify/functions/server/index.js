var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache2) => {
  return (module2, temp) => {
    return cache2 && cache2.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache2 && cache2.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:~/db/appUsers/appUsers.client
var require_appUsers = __commonJS({
  "empty-module:~/db/appUsers/appUsers.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:~/db/dataPoints.client
var require_dataPoints = __commonJS({
  "empty-module:~/db/dataPoints.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var React2 = __toESM(require("react"));
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());

// app/utils/createEmotionCache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/theme/index.ts
init_react();
var import_material = require("@mui/material");

// app/theme/colors.ts
init_react();
var COLORS = {
  PRIMARY: "#8500FF",
  SECONDARY: "#00FFB8",
  ERROR: "#ff2f00",
  WARNING: "#FFA500",
  INFO: "#00E7FF",
  SUCCESS: "#00FF7E",
  BACKGROUND: {
    DEFAULT: "#0F0F15",
    PAPER: "#070319"
  }
};

// app/theme/index.ts
var theme = (0, import_material.createTheme)({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY
    },
    secondary: {
      main: COLORS.SECONDARY
    },
    error: {
      main: COLORS.ERROR
    },
    warning: {
      main: COLORS.WARNING
    },
    info: {
      main: COLORS.INFO
    },
    success: {
      main: COLORS.SUCCESS
    },
    background: {
      default: COLORS.BACKGROUND.DEFAULT,
      paper: COLORS.BACKGROUND.PAPER
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      },
      styleOverrides: {
        root: {
          whiteSpace: "nowrap"
        }
      }
    }
  }
});

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_styles = require("@mui/material/styles");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache2 = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache2);
  const MuiRemixServer = () => /* @__PURE__ */ React2.createElement(import_react.CacheProvider, {
    value: cache2
  }, /* @__PURE__ */ React2.createElement(import_styles.ThemeProvider, {
    theme
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/root/projects/remix-starter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App2,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_remix7 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-N3DBETZ4.css";

// app/state/AuthProvider.tsx
init_react();
var import_auth = require("firebase/auth");
var import_react3 = require("react");
var import_remix3 = __toESM(require_remix());

// app/components/LogoutForm.tsx
init_react();
var import_react2 = require("react");
var import_remix2 = __toESM(require_remix());
var LogoutForm = (0, import_react2.forwardRef)((props, ref) => /* @__PURE__ */ React.createElement(import_remix2.Form, __spreadValues({
  ref,
  action: "/logout",
  method: "post"
}, props)));

// app/state/AuthProvider.tsx
var import_appUsers = __toESM(require_appUsers());
var AuthContext = (0, import_react3.createContext)(null);
function AuthProvider({
  children,
  user: userProp,
  userToken: userTokenProp
}) {
  const [searchParams] = (0, import_remix3.useSearchParams)();
  const [user, setUser] = (0, import_react3.useState)(userProp);
  const logoutFormRef = (0, import_react3.useRef)(null);
  const [userToken, setUserToken] = (0, import_react3.useState)(userTokenProp || "");
  const userTokenForm = (0, import_react3.useRef)(null);
  const fetcher = (0, import_remix3.useFetcher)();
  (0, import_react3.useEffect)(() => {
    setUser(userProp);
  }, [userProp]);
  const { pathname } = (0, import_remix3.useLocation)();
  const redirectTo = pathname.includes("/sign/") ? "/dashboard" : pathname;
  function sendUserToken() {
    if (!userTokenForm.current)
      return;
    const formData = new FormData(userTokenForm.current);
    fetcher.submit(formData, { method: "post", action: "/update-session" });
  }
  (0, import_react3.useEffect)(() => {
    const auth3 = (0, import_auth.getAuth)();
    return auth3.onIdTokenChanged(async (userFromChange) => {
      if (userFromChange === null && user !== null) {
        setUser(null);
        if (!logoutFormRef.current)
          return;
        logoutFormRef.current.submit();
      } else if (userFromChange) {
        const token = await userFromChange.getIdToken();
        if (token !== userToken) {
          setUser(userFromChange);
          setUserToken(token);
          await (0, import_appUsers.addAppUser)(userFromChange.uid);
          sendUserToken();
        }
      }
    });
  }, [user]);
  (0, import_react3.useEffect)(() => {
    const handle = setInterval(async () => {
      const auth3 = (0, import_auth.getAuth)();
      const user2 = auth3.currentUser;
      if (user2)
        await user2.getIdToken(true);
    }, 10 * 60 * 1e3);
    return () => clearInterval(handle);
  }, []);
  return /* @__PURE__ */ React.createElement(AuthContext.Provider, {
    value: user
  }, /* @__PURE__ */ React.createElement(LogoutForm, {
    ref: logoutFormRef
  }), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post",
    ref: userTokenForm,
    action: "/update-session"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "put"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "userToken",
    value: userToken
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? redirectTo
  })), children);
}
var useAuth = () => {
  return (0, import_react3.useContext)(AuthContext);
};

// route:/root/projects/remix-starter/app/root.tsx
var import_material2 = require("@mui/material");

// app/components/AppBar.tsx
init_react();
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_AppBar = __toESM(require("@mui/material/AppBar"));
var import_Toolbar = __toESM(require("@mui/material/Toolbar"));

// app/components/AuthControls.tsx
init_react();
var import_Box = __toESM(require("@mui/material/Box"));
var import_Button2 = __toESM(require("@mui/material/Button"));
var import_remix4 = __toESM(require_remix());

// app/components/SignOutButton.tsx
init_react();
var import_react4 = __toESM(require("react"));

// app/firebase/auth.ts
init_react();

// app/firebase/firebase.ts
init_react();
var import_app = require("firebase/app");
var import_auth2 = require("firebase/auth");
var import_firestore = require("firebase/firestore");
var app;
var auth;
var db;
if (!(0, import_app.getApps)().length) {
  const firebaseConfig = {
    apiKey: "AIzaSyA34ZWGXJfZlR6u8zsfK5nbsHpigr_aM58",
    authDomain: "codesagas.firebaseapp.com",
    projectId: "codesagas",
    storageBucket: "codesagas.appspot.com",
    messagingSenderId: "434743911554",
    appId: "1:434743911554:web:4c4b74f039bb5f2a98809b",
    measurementId: "G-RFN47JK38N"
  };
  app = (0, import_app.initializeApp)(firebaseConfig);
  auth = (0, import_auth2.getAuth)();
  db = (0, import_firestore.getFirestore)();
  if (true) {
    (0, import_firestore.connectFirestoreEmulator)(db, "localhost", 8080);
    (0, import_auth2.connectAuthEmulator)(auth, "http://localhost:9099");
  }
}

// app/firebase/auth.ts
var import_auth3 = require("firebase/auth");
async function emailAndPasswordSignUp({
  email,
  password
}) {
  const auth3 = (0, import_auth2.getAuth)();
  const userCredential = await (0, import_auth3.createUserWithEmailAndPassword)(auth3, email, password);
  const user = userCredential.user;
  return user;
}
async function emailAndPasswordSignIn({
  email,
  password
}) {
  const auth3 = (0, import_auth2.getAuth)();
  const userCredential = await (0, import_auth3.signInWithEmailAndPassword)(auth3, email, password);
  const user = userCredential.user;
  return user;
}
function signOut() {
  const auth3 = (0, import_auth2.getAuth)();
  auth3.signOut().then(function() {
  }).catch(function(error) {
  });
}

// app/components/SignOutButton.tsx
var import_Button = __toESM(require("@mui/material/Button"));
var SignOutButton = (props) => /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(import_Button.default, __spreadValues({
  onClick: () => signOut()
}, props), "sign out"));

// app/components/AuthControls.tsx
function SignInUp() {
  const user = useAuth();
  return user === null ? /* @__PURE__ */ React.createElement(import_Box.default, null, /* @__PURE__ */ React.createElement(import_Button2.default, {
    component: import_remix4.Link,
    to: "/sign/in"
  }, "sign in"), /* @__PURE__ */ React.createElement(import_Button2.default, {
    sx: { marginLeft: 2 },
    component: import_remix4.Link,
    to: "/sign/up",
    color: "secondary"
  }, "sign up")) : /* @__PURE__ */ React.createElement(import_Box.default, null, /* @__PURE__ */ React.createElement(LogoutForm, null, /* @__PURE__ */ React.createElement(SignOutButton, {
    type: "submit",
    color: "secondary"
  }, "sign out")));
}

// app/components/AppBar.tsx
var import_Typography = __toESM(require("@mui/material/Typography"));
function AppBar() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_AppBar.default, null, /* @__PURE__ */ React.createElement(import_Toolbar.default, {
    sx: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement(import_Typography.default, {
    variant: "h4",
    noWrap: true,
    sx: (theme2) => ({
      background: `linear-gradient(to right, ${theme2.palette.primary.main}, ${theme2.palette.secondary.main})`,
      backgroundClip: "text",
      textFillColor: "transparent"
    })
  }, "CODE SAGAS"), /* @__PURE__ */ React.createElement(SignInUp, null))), /* @__PURE__ */ React.createElement(import_Box2.default, {
    sx: { marginBottom: "64px" }
  }));
}

// app/utils/session.server.ts
init_react();
var import_remix5 = __toESM(require_remix());

// app/firebase/firebaseAdmin.server.ts
init_react();
var import_app2 = require("firebase-admin/app");
var import_auth5 = require("firebase-admin/auth");
var import_firestore2 = require("firebase-admin/firestore");
var app2;
var auth2;
var db2;
if (!(0, import_app2.getApps)().length) {
  if (true) {
    process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
    process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
  }
  const encodedKey = process.env.FIREBASE_PRIVATE_KEY_BASE64 || "";
  const decodedKey = Buffer.from(encodedKey, "base64").toString("utf8");
  app2 = (0, import_app2.initializeApp)({
    credential: (0, import_app2.cert)({
      privateKey: decodedKey,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });
  auth2 = (0, import_auth5.getAuth)();
  db2 = (0, import_firestore2.getFirestore)();
}

// app/utils/session.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix5.createCookieSessionStorage)({
  cookie: {
    name: "cs_session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserToken(request) {
  let session = await getUserSession(request);
  let userToken = session.get("userToken");
  if (!userToken || typeof userToken !== "string")
    return null;
  return userToken;
}
async function getAuthUser(request) {
  let userToken = await getUserToken(request);
  if (typeof userToken !== "string") {
    return null;
  }
  try {
    const authedUser = await (0, import_auth5.getAuth)().verifyIdToken(userToken);
    return authedUser;
  } catch (e) {
    console.log("getAuthUser error", e);
    return null;
  }
}
async function getUserId(request) {
  try {
    let authUser = await getAuthUser(request);
    return (authUser == null ? void 0 : authUser.uid) || null;
  } catch (error) {
    console.log("getUserId error", error);
    return null;
  }
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix5.redirect)(`/sign/in?${searchParams}`);
  }
  return userId;
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_remix5.redirect)("/sign/in", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userToken, redirectTo) {
  let session = await storage.getSession();
  session.set("userToken", userToken);
  return (0, import_remix5.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/components/AppPaper.tsx
init_react();
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Paper = __toESM(require("@mui/material/Paper"));
function AppPaper({
  children,
  leftColor = "primary",
  rightColor = "secondary",
  sx = {}
}) {
  return /* @__PURE__ */ React.createElement(import_Stack.default, {
    component: import_Paper.default,
    spacing: 2,
    sx: (theme2) => __spreadValues({
      padding: 4,
      position: "relative",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      border: "solid 5px transparent",
      borderRadius: "1em",
      "&:before ": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        margin: "-5px",
        borderRadius: "inherit",
        background: `linear-gradient(to right, ${theme2.palette[leftColor].main}, ${theme2.palette[rightColor].main})`
      }
    }, sx)
  }, children);
}

// route:/root/projects/remix-starter/app/root.tsx
var import_material3 = require("@mui/material");
var import_react6 = require("@emotion/react");
var import_material4 = require("@mui/material");
var import_react7 = require("react");

// app/theme/ClientStyleContext.ts
init_react();
var import_react5 = require("react");
var ClientStyleContext_default = (0, import_react5.createContext)({
  reset: () => {
  }
});

// route:/root/projects/remix-starter/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
}
var meta = () => {
  const description = `Code Sagas is a place to learn a million and one ways to code.`;
  return {
    description,
    keywords: "code,sagas,learn",
    "twitter:image": "https://codesagas.com/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@codesagas",
    "twitter:site": "@codesagas",
    "twitter:title": "Code Sagas",
    "twitter:description": description
  };
};
var Document = (0, import_react6.withEmotionCache)(({ children, title }, emotionCache) => {
  const clientStyleData = (0, import_react7.useContext)(ClientStyleContext_default);
  (0, import_material4.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: theme.palette.primary.main
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix7.Meta, null), /* @__PURE__ */ React.createElement(import_remix7.Links, null), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React.createElement(import_remix7.LiveReload, null)));
});
var loader = async ({ request }) => {
  const user = await getAuthUser(request);
  const userToken = await getUserToken(request);
  const data = {
    user,
    userToken
  };
  return data;
};
var cache = createEmotionCache();
function Providers({
  user,
  children,
  userToken
}) {
  return /* @__PURE__ */ React.createElement(AuthProvider, {
    user,
    userToken
  }, /* @__PURE__ */ React.createElement(import_react6.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_material2.ThemeProvider, {
    theme
  }, children)));
}
function App2() {
  const { user, userToken } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Providers, {
    user,
    userToken
  }, /* @__PURE__ */ React.createElement(AppBar, null), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)));
}
function RootError({
  docTitle = "Oops!",
  title = "Something went wrong. \u{1F625}",
  message = "Please try again later."
}) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: docTitle
  }, /* @__PURE__ */ React.createElement(import_material2.ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(import_material2.Stack, {
    justifyContent: "center",
    alignItems: "center",
    sx: { height: "100vh", padding: 5 }
  }, /* @__PURE__ */ React.createElement(AppPaper, {
    leftColor: "error",
    rightColor: "warning"
  }, /* @__PURE__ */ React.createElement(import_material3.Typography, {
    variant: "h1",
    textAlign: "center"
  }, title), /* @__PURE__ */ React.createElement(import_material3.Typography, null, message)))));
}
function CatchBoundary() {
  const caught = (0, import_remix7.useCatch)();
  const title = `${caught.status} ${caught.statusText}`;
  return /* @__PURE__ */ React.createElement(RootError, {
    docTitle: title,
    title,
    message: "Well this is embarsing. \u{1F605} Have you tried turning it off and back on again?"
  });
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(RootError, {
    message: error.message
  });
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.edit.tsx
var blogPostId_edit_exports = {};
__export(blogPostId_edit_exports, {
  action: () => action,
  default: () => NewPost,
  loader: () => loader2
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/db/blogPosts.server.ts
init_react();
var BLOG_POSTS_COLLECTION = "blogPosts";
var getCollectionRef = () => (0, import_firestore2.getFirestore)().collection(BLOG_POSTS_COLLECTION);
var getDocReference = (blogPostId) => getCollectionRef().doc(blogPostId);
var getQuery = () => getCollectionRef();
async function getAllBlogPosts() {
  const queryRef = getQuery();
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getBlogPost(blogPostId) {
  const docRef = getDocReference(blogPostId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return __spreadValues({ id: docRef.id }, docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addBlogPost(blogPost) {
  try {
    const docRef = await getDocReference(blogPost.slug).set(blogPost);
    const newBlogPost = await getBlogPost(blogPost.slug);
    if (!newBlogPost) {
      throw new Error("Failed to get new data point");
    }
    return newBlogPost;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// app/db/appUsers/appUsers.server.ts
init_react();

// app/db/appUsers/types.ts
init_react();
var APP_USERS_COLLECTION = "appUsers";

// app/db/appUsers/appUsers.server.ts
var getCollectionRef2 = () => (0, import_firestore2.getFirestore)().collection(APP_USERS_COLLECTION);
var getDocReference2 = (appUserId) => getCollectionRef2().doc(appUserId);
async function getAppUser(appUserId) {
  const docRef = getDocReference2(appUserId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return (docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.edit.tsx
var import_material5 = require("@mui/material");
var import_system = require("@mui/system");
var import_react8 = require("react");

// app/components/DateTimePicker.tsx
init_react();
var import_TextField = __toESM(require("@mui/material/TextField"));
var import_AdapterDateFns = __toESM(require("@mui/lab/AdapterDateFns"));
var import_LocalizationProvider = __toESM(require("@mui/lab/LocalizationProvider"));
var import_DateTimePicker = __toESM(require("@mui/lab/DateTimePicker"));
function DateTimePicker(_a) {
  var _b = _a, { date, setDate } = _b, textFieldProps = __objRest(_b, ["date", "setDate"]);
  return /* @__PURE__ */ React.createElement(import_LocalizationProvider.default, {
    dateAdapter: import_AdapterDateFns.default
  }, /* @__PURE__ */ React.createElement(import_DateTimePicker.default, {
    renderInput: (props) => /* @__PURE__ */ React.createElement(import_TextField.default, __spreadValues(__spreadValues({
      fullWidth: true
    }, props), textFieldProps)),
    label: "DateTimePicker",
    value: date,
    onChange: (newDate) => {
      setDate(newDate);
    }
  }));
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.edit.tsx
var loader2 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
      return (0, import_remix8.redirect)("/blog");
    }
  }
  (0, import_tiny_invariant.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant.default)(blogPost, "expected blogPost");
  return __spreadProps(__spreadValues({}, blogPost), { isAuthor });
};
var action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(formData.get("publishDate") || "0", 10);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!description)
    errors.description = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant.default)(typeof title === "string");
  (0, import_tiny_invariant.default)(typeof slug === "string");
  (0, import_tiny_invariant.default)(typeof markdown === "string");
  (0, import_tiny_invariant.default)(typeof description === "string");
  (0, import_tiny_invariant.default)(typeof authorId === "string");
  (0, import_tiny_invariant.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant.default)(typeof publishDate === "number");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description
  });
  return (0, import_remix8.redirect)("/blog");
};
function NewPost() {
  const {
    authorId,
    isPublished: initIsPublished,
    title,
    slug,
    markdown,
    publishDate,
    description
  } = (0, import_remix8.useLoaderData)();
  const [date, setDate] = (0, import_react8.useState)(new Date(publishDate));
  const [isPublished, setIsPublished] = (0, import_react8.useState)(initIsPublished);
  const errors = (0, import_remix8.useActionData)();
  return /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authorId",
    value: authorId
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "isPublished",
    value: isPublished.toString()
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "publishDate",
    value: date == null ? void 0 : date.getTime().toString()
  }), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: { maxWidth: "450px", margin: "0 auto" }
  }, /* @__PURE__ */ React.createElement(import_system.Box, null, /* @__PURE__ */ React.createElement(import_material5.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material5.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_system.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_system.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_system.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description
  })), /* @__PURE__ */ React.createElement(import_system.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true,
    defaultValue: slug
  })), /* @__PURE__ */ React.createElement(import_system.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.markdown,
    id: "markdown",
    label: "Markdown",
    helperText: (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null,
    variant: "filled",
    multiline: true,
    rows: 10,
    name: "markdown",
    fullWidth: true,
    defaultValue: markdown
  })), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_material5.Button, {
    component: import_remix8.Link,
    to: `/blog/${slug}`,
    target: "_blank",
    color: "secondary"
  }, "Preview"), /* @__PURE__ */ React.createElement(import_material5.Button, {
    type: "submit",
    variant: "contained"
  }, "Save Post"))));
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.tsx
var blogPostId_exports = {};
__export(blogPostId_exports, {
  default: () => PostSlug,
  loader: () => loader3
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_client = require("mdx-bundler/client");
var import_react9 = require("react");
var import_material7 = require("@mui/material");
var import_system3 = require("@mui/system");

// app/components/CodeBlock.tsx
init_react();
var import_material6 = require("@mui/material");
var import_system2 = require("@mui/system");
var import_prism_react_renderer = __toESM(require("prism-react-renderer"));
var import_dracula = __toESM(require("prism-react-renderer/themes/dracula"));
var Line = (0, import_system2.styled)("div")({
  display: "table-row"
});
var LineNo = (0, import_system2.styled)("span")({
  display: "table-cell",
  textAlign: "right",
  paddingRight: "1em",
  userSelect: "none",
  opacity: "0.5"
});
var LineContent = (0, import_system2.styled)("span")({
  display: "table-cell",
  fontFamily: "'Fira Code', monospace"
});
var CodeBlock = ({ children }) => {
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    code: children,
    language: "jsx",
    theme: import_dracula.default
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(import_material6.Paper, {
    className,
    sx: __spreadProps(__spreadValues({}, style), {
      padding: 2,
      margin: 2,
      bgcolor: "background.paper"
    })
  }, tokens.map((line, i) => /* @__PURE__ */ React.createElement(Line, __spreadValues({
    key: i
  }, getLineProps({ line, key: i })), /* @__PURE__ */ React.createElement(LineNo, null, i + 1), /* @__PURE__ */ React.createElement(LineContent, null, line.map((token, key) => /* @__PURE__ */ React.createElement("span", __spreadValues({
    key
  }, getTokenProps({ token, key })))))))));
};

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.tsx
var import_Edit = __toESM(require("@mui/icons-material/Edit"));

// app/utils/mdx.server.ts
init_react();
var import_mdx_bundler = require("mdx-bundler");
async function getMdx(source) {
  const result = await (0, import_mdx_bundler.bundleMDX)({
    source
  });
  return result;
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.tsx
var loader3 = async ({
  request,
  params
}) => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser == null ? void 0 : appUser.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  (0, import_tiny_invariant2.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant2.default)(blogPost, "expected blogPost");
  const { code, frontmatter } = await getMdx(blogPost.markdown);
  return __spreadProps(__spreadValues({}, blogPost), { code, isAuthor });
};
var H1 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h1",
  sx: { marginBottom: 3 }
}, props));
var H2 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h2",
  sx: { marginBottom: 3 }
}, props));
var H3 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h3",
  sx: { marginBottom: 3 }
}, props));
var H4 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h4",
  sx: { marginBottom: 3 }
}, props));
var H5 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h5",
  sx: { marginBottom: 3 }
}, props));
var H6 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h6",
  sx: { marginBottom: 3 }
}, props));
var P = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "body",
  component: "p"
}, props));
var Blockquote = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h6",
  component: import_material7.Paper,
  sx: {
    padding: 2,
    margin: 2,
    borderLeft: ({ palette }) => `2px solid${palette.primary.main}`
  }
}, props));
var Pre = (props) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, props));
var Code = (props) => /* @__PURE__ */ React.createElement(CodeBlock, __spreadValues({}, props));
var A = (props) => /* @__PURE__ */ React.createElement(import_material7.Link, __spreadValues({}, props));
function PostSlug() {
  const { isAuthor, code } = (0, import_remix9.useLoaderData)();
  const Component = (0, import_react9.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(import_system3.Box, {
    sx: {
      margin: "0 auto",
      maxWidth: "900px",
      position: "relative",
      padding: 3
    }
  }, /* @__PURE__ */ React.createElement(import_material7.Fab, {
    color: "secondary",
    "aria-label": "edit",
    component: import_remix9.Link,
    to: "edit",
    sx: { position: "absolute", top: 20, right: 20 }
  }, /* @__PURE__ */ React.createElement(import_Edit.default, null)), Component ? /* @__PURE__ */ React.createElement(Component, {
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      blockquote: Blockquote,
      pre: Pre,
      code: Code,
      a: A
    }
  }) : null);
}

// route:/root/projects/remix-starter/app/routes/sign.$authType.tsx
var sign_authType_exports = {};
__export(sign_authType_exports, {
  AUTH_TYPES: () => AUTH_TYPES,
  default: () => Login,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var import_Stack2 = __toESM(require("@mui/material/Stack"));
var import_Paper2 = __toESM(require("@mui/material/Paper"));
var import_Button3 = __toESM(require("@mui/material/Button"));
var import_TextField2 = __toESM(require("@mui/material/TextField"));
var import_ToggleButton = __toESM(require("@mui/material/ToggleButton"));
var import_ToggleButtonGroup = __toESM(require("@mui/material/ToggleButtonGroup"));
var import_remix10 = __toESM(require_remix());
var import_react10 = require("react");
var import_material8 = require("@mui/material");
var meta2 = () => {
  return {
    title: "Code Sagas | Sign In",
    description: "Sign in to start your own code journey!"
  };
};
var AUTH_TYPES = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up"
};
var loader4 = async ({ request, params }) => {
  const data = {
    authType: params.authType === "in" ? AUTH_TYPES.SIGN_IN : AUTH_TYPES.SIGN_UP
  };
  return data;
};
function validateEmail(email) {
  if (typeof email !== "string" || email.match(/.+@.+\..+/) === null) {
    return `Emails must look like example@example.com`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { authType: initAuthType } = (0, import_remix10.useLoaderData)();
  const [actionData, setActionData] = (0, import_react10.useState)({});
  const [authType, setAuthType] = (0, import_react10.useState)(initAuthType);
  const handleAuthType = (event, newAuthType) => {
    if (!newAuthType)
      return;
    setAuthType(newAuthType);
  };
  (0, import_react10.useEffect)(() => {
    if (initAuthType !== authType) {
      setAuthType(initAuthType);
    }
  }, [initAuthType]);
  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const form = new FormData(target);
    const authType2 = form.get("authType");
    const email = form.get("email");
    const password = form.get("password");
    if (typeof authType2 !== "string" || typeof email !== "string" || typeof password !== "string") {
      return setActionData({
        formError: `Form not submitted correctly.`
      });
    }
    const fields = { authType: authType2, email, password };
    const fieldErrors = {
      email: validateEmail(email),
      password: validatePassword(password)
    };
    if (Object.values(fieldErrors).some(Boolean))
      return setActionData({ fieldErrors, fields });
    switch (authType2) {
      case AUTH_TYPES.SIGN_IN: {
        try {
          const user = await emailAndPasswordSignIn({ email, password });
          if (!user || !user.email) {
            return setActionData({
              fields,
              formError: `Email/Password combination is incorrect`
            });
          }
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Email/Password combination is incorrect`
          });
        }
      }
      case AUTH_TYPES.SIGN_UP: {
        try {
          const user = await emailAndPasswordSignUp({ email, password });
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Something went wrong trying to create a new user.`
          });
        }
      }
      default: {
        return setActionData({
          fields,
          formError: `Login type invalid`
        });
      }
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Stack2.default, {
    sx: {
      maxWidth: "500px",
      margin: "200px auto"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material8.Typography, {
    variant: "h1",
    textAlign: "center"
  }, authType), /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "post",
    onSubmit: handleSubmit,
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement(import_Stack2.default, {
    component: import_Paper2.default,
    spacing: 2
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authType",
    value: authType
  }), /* @__PURE__ */ React.createElement(import_ToggleButtonGroup.default, {
    value: authType,
    exclusive: true,
    onChange: handleAuthType,
    "aria-label": "Sign In or Sign Up",
    color: "secondary",
    fullWidth: true
  }, /* @__PURE__ */ React.createElement(import_ToggleButton.default, {
    value: AUTH_TYPES.SIGN_IN,
    "aria-label": AUTH_TYPES.SIGN_IN,
    color: "primary"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_ToggleButton.default, {
    value: AUTH_TYPES.SIGN_UP,
    "aria-label": AUTH_TYPES.SIGN_UP
  }, "Sign Up")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    label: "Email",
    variant: "filled",
    fullWidth: true,
    color: authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary",
    id: "email-input",
    name: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email,
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email),
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) ? "email-error" : void 0
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email) ? /* @__PURE__ */ React.createElement(import_material8.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "email-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.email) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    label: "Password",
    variant: "filled",
    fullWidth: true,
    color: authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary",
    id: "password-input",
    name: "password",
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.password,
    type: "password",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.password) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) ? "password-error" : void 0
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.password) ? /* @__PURE__ */ React.createElement(import_material8.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement(import_material8.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "form-error"
  }, actionData == null ? void 0 : actionData.formError) : null), /* @__PURE__ */ React.createElement(import_Button3.default, {
    type: "submit",
    variant: "contained",
    size: "large",
    color: AUTH_TYPES.SIGN_IN === authType ? "primary" : "secondary"
  }, authType))))));
}

// route:/root/projects/remix-starter/app/routes/update-session.tsx
var update_session_exports = {};
__export(update_session_exports, {
  action: () => action2
});
init_react();
var action2 = async ({ request, params }) => {
  switch (request.method) {
    case "POST":
      const form = await request.formData();
      const redirectTo = form.get("redirectTo");
      const userToken = form.get("userToken");
      if (!userToken) {
        throw new Response("Could not update session. Please try again.", {
          status: 404
        });
      }
      return await createUserSession(userToken, redirectTo);
    default:
      console.log("REQUEST NOT HANDLED");
  }
};

// route:/root/projects/remix-starter/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader5
});
init_react();
var import_material10 = require("@mui/material");
var import_remix12 = __toESM(require_remix());

// app/components/BlogCard.tsx
init_react();
var import_Card = __toESM(require("@mui/material/Card"));
var import_CardContent = __toESM(require("@mui/material/CardContent"));
var import_CardMedia = __toESM(require("@mui/material/CardMedia"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material9 = require("@mui/material");
var import_remix11 = __toESM(require_remix());
function BlogCard({
  title,
  description,
  url,
  imageUrl,
  imageAlt
}) {
  return /* @__PURE__ */ React.createElement(AppPaper, {
    sx: { padding: 0 }
  }, /* @__PURE__ */ React.createElement(import_Card.default, {
    sx: { borderRadius: "10px", overflow: "hidden" }
  }, /* @__PURE__ */ React.createElement(import_material9.CardActionArea, {
    component: import_remix11.Link,
    to: url
  }, /* @__PURE__ */ React.createElement(import_CardMedia.default, {
    component: "img",
    height: "140",
    image: imageUrl,
    alt: imageAlt
  }), /* @__PURE__ */ React.createElement(import_CardContent.default, null, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, title), /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "body2",
    color: "text.secondary"
  }, description)))));
}

// route:/root/projects/remix-starter/app/routes/blog/index.tsx
var loader5 = async ({
  request,
  params
}) => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser == null ? void 0 : appUser.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  const posts = await getAllBlogPosts();
  return { posts, isAuthor };
};
function Blog() {
  const { posts, isAuthor } = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material10.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(import_material10.Typography, {
    variant: "h1",
    textAlign: "center"
  }, "Blog"), isAuthor ? /* @__PURE__ */ React.createElement(import_material10.Button, {
    component: import_remix12.Link,
    to: "/blog/new"
  }, "Add Blog Post") : null), /* @__PURE__ */ React.createElement(import_material10.Stack, {
    direction: { xs: "column", md: "row" },
    sx: {
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    },
    justifyContent: "space-around"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(import_material10.Box, {
    key: post.id,
    sx: {
      flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
      margin: 2
    }
  }, /* @__PURE__ */ React.createElement(BlogCard, {
    title: post.title,
    description: post.description,
    imageUrl: "https://images.unsplash.com/photo-1645625436473-f48f07b704ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
    imageAlt: "a view of canyons from above",
    url: `/blog/${post.slug}`
  })))));
}

// route:/root/projects/remix-starter/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action3,
  default: () => DashBoard,
  loader: () => loader6
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_Button4 = __toESM(require("@mui/material/Button"));
var import_Box3 = __toESM(require("@mui/material/Box"));
var import_Stack3 = __toESM(require("@mui/material/Stack"));
var import_Paper3 = __toESM(require("@mui/material/Paper"));

// app/db/dataPoints.server.ts
init_react();
var DATA_POINTS_COLLECTION = "dataPoints";
var getCollectionRef3 = () => (0, import_firestore2.getFirestore)().collection(DATA_POINTS_COLLECTION);
var getDocReference3 = (dataPointId) => getCollectionRef3().doc(dataPointId);
var getQuery2 = (userId) => getCollectionRef3().where("userId", "==", userId);
async function getAllDataPoints(userId) {
  const queryRef = getQuery2(userId);
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getDataPoint(dataPointId) {
  const docRef = getDocReference3(dataPointId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return (docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addDataPoint(dataPoint) {
  try {
    const docRef = await getCollectionRef3().add(dataPoint);
    const newDataPoint = await getDataPoint(docRef.id);
    if (!newDataPoint) {
      throw new Error("Failed to get new data point");
    }
    return newDataPoint;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// route:/root/projects/remix-starter/app/routes/dashboard.tsx
var import_dataPoints2 = __toESM(require_dataPoints());
var import_material11 = require("@mui/material");
var import_react12 = require("react");

// app/hooks/useFirebaseLoaderData.ts
init_react();
var import_react11 = require("react");
var import_remix13 = __toESM(require_remix());
function useFirebaseLoaderData(clientUpdater) {
  const loaderData = (0, import_remix13.useLoaderData)();
  const [data, setData] = (0, import_react11.useState)(loaderData);
  function updater(data2) {
    setData(data2);
  }
  (0, import_react11.useEffect)(() => clientUpdater(updater), [loaderData]);
  return data;
}

// route:/root/projects/remix-starter/app/routes/dashboard.tsx
var loader6 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const data = {
    dataPoints: await getAllDataPoints(userId)
  };
  return data;
};
var action3 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const point = Number(form.get("point"));
  const timestamp = Number(form.get("timestamp"));
  if (!point || !timestamp) {
    throw new Response("Could not add this data point. Please try again.", {
      status: 404
    });
  }
  return await addDataPoint({
    userId,
    point,
    timestamp
  });
};
function DashBoard() {
  const user = (0, import_react12.useContext)(AuthContext);
  const userId = user == null ? void 0 : user.uid;
  const { dataPoints } = useFirebaseLoaderData((updater) => (0, import_dataPoints2.getAllDataPointsLive)(userId, (dataPoints2) => updater({ dataPoints: dataPoints2 })));
  return /* @__PURE__ */ React.createElement(import_Stack3.default, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Stack3.default, {
    component: import_Paper3.default,
    elevation: 3,
    direction: "row",
    sx: { height: "120px", padding: "12px", margin: "12px", width: "80%" },
    justifyContent: "space-around",
    alignItems: "flex-end"
  }, dataPoints.length ? dataPoints.sort((a, b) => a.timestamp - b.timestamp).map(({ point }, i) => /* @__PURE__ */ React.createElement(import_Box3.default, {
    component: import_Paper3.default,
    key: i,
    sx: {
      height: `${point * 10}px`,
      bgcolor: "primary.main",
      width: `calc(100% / ${dataPoints.length} - 10px)`,
      minWidth: "5px"
    }
  })) : /* @__PURE__ */ React.createElement(import_material11.Typography, {
    variant: "h3"
  }, "Add some data!")), /* @__PURE__ */ React.createElement(import_Box3.default, null, /* @__PURE__ */ React.createElement(import_remix14.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "point",
    value: Math.floor(Math.random() * 10) + 1
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "timestamp",
    value: Date.now()
  }), /* @__PURE__ */ React.createElement(import_Button4.default, {
    type: "submit",
    variant: "contained"
  }, "add data"))));
}

// route:/root/projects/remix-starter/app/routes/blog/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => NewPost2,
  loader: () => loader7
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_material12 = require("@mui/material");
var import_system4 = require("@mui/system");
var import_react13 = require("react");
var loader7 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
    return (0, import_remix15.redirect)("/blog");
  }
  const data = {
    authorId: userId
  };
  return data;
};
var action4 = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(formData.get("publishDate") || "0", 10);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!description)
    errors.description = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof slug === "string");
  (0, import_tiny_invariant3.default)(typeof markdown === "string");
  (0, import_tiny_invariant3.default)(typeof description === "string");
  (0, import_tiny_invariant3.default)(typeof authorId === "string");
  (0, import_tiny_invariant3.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant3.default)(typeof publishDate === "number");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description
  });
  return (0, import_remix15.redirect)("/blog");
};
function NewPost2() {
  const [date, setDate] = (0, import_react13.useState)(new Date());
  const [isPublished, setIsPublished] = (0, import_react13.useState)(true);
  const { authorId } = (0, import_remix15.useLoaderData)();
  const errors = (0, import_remix15.useActionData)();
  return /* @__PURE__ */ React.createElement(import_remix15.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authorId",
    value: authorId
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "isPublished",
    value: isPublished.toString()
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "publishDate",
    value: date == null ? void 0 : date.getTime().toString()
  }), /* @__PURE__ */ React.createElement(import_material12.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: { maxWidth: "450px", margin: "0 auto" }
  }, /* @__PURE__ */ React.createElement(import_system4.Box, null, /* @__PURE__ */ React.createElement(import_material12.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material12.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_system4.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_system4.Box, null, /* @__PURE__ */ React.createElement(import_material12.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_system4.Box, null, /* @__PURE__ */ React.createElement(import_material12.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_system4.Box, null, /* @__PURE__ */ React.createElement(import_material12.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_system4.Box, null, /* @__PURE__ */ React.createElement(import_material12.TextField, {
    error: errors == null ? void 0 : errors.markdown,
    id: "markdown",
    label: "Markdown",
    helperText: (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null,
    variant: "filled",
    multiline: true,
    rows: 10,
    name: "markdown",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_material12.Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_material12.Button, {
    type: "submit",
    color: "secondary"
  }, "Preview"), /* @__PURE__ */ React.createElement(import_material12.Button, {
    type: "submit",
    variant: "contained"
  }, "Create Post"))));
}

// mdx:/root/projects/remix-starter/app/routes/blog/a.mdx
var a_exports = {};
__export(a_exports, {
  attributes: () => attributes,
  default: () => a_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta3
});
init_react();
var import_react14 = __toESM(require("react"));
var attributes = {
  "meta": "test a",
  "title": "test a",
  "description": "test a"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(_components.h1, null, "What A!"));
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var a_default = MDXContent;
var filename = "a.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta3 = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// mdx:/root/projects/remix-starter/app/routes/blog/b.mdx
var b_exports = {};
__export(b_exports, {
  attributes: () => attributes2,
  default: () => b_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links3,
  meta: () => meta4
});
init_react();
var import_react15 = __toESM(require("react"));
var attributes2 = {
  "meta": "test b",
  "title": "test b",
  "description": "test b"
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.h1, null, "What B!"));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var b_default = MDXContent2;
var filename2 = "b.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta4 = typeof attributes2 !== "undefined" && attributes2.meta;
var links3 = void 0;

// mdx:/root/projects/remix-starter/app/routes/blog/c.mdx
var c_exports = {};
__export(c_exports, {
  attributes: () => attributes3,
  default: () => c_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links4,
  meta: () => meta5
});
init_react();
var import_react16 = __toESM(require("react"));
var attributes3 = {
  "meta": "test c",
  "title": "test c",
  "description": "test c"
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.h1, null, "What C!"));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var c_default = MDXContent3;
var filename3 = "c.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta5 = typeof attributes3 !== "undefined" && attributes3.meta;
var links4 = void 0;

// route:/root/projects/remix-starter/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  loader: () => loader8
});
init_react();
var import_remix16 = __toESM(require_remix());
var action5 = async ({ request }) => {
  return logout(request);
};
var loader8 = async () => {
  return (0, import_remix16.redirect)("/");
};

// route:/root/projects/remix-starter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta6
});
init_react();
var import_Button5 = __toESM(require("@mui/material/Button"));
var import_Stack4 = __toESM(require("@mui/material/Stack"));
var import_Typography3 = __toESM(require("@mui/material/Typography"));
var import_remix17 = __toESM(require_remix());
var meta6 = () => {
  return {
    title: "Code Sagas: Copy/Pasta/Twerk",
    description: "Codes Sagas a place to learn a million and one ways to code."
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(import_Stack4.default, {
    sx: {
      maxWidth: "700px",
      margin: "80px auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h3",
    textAlign: "center"
  }, "Learning to code simplified and with some humor."), /* @__PURE__ */ React.createElement(import_Button5.default, {
    component: import_remix17.Link,
    to: "/sign/in",
    size: "large",
    variant: "contained"
  }, "SIGN IN")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "78555fd9", "entry": { "module": "/build/entry.client-OEUTFVVQ.js", "imports": ["/build/_shared/chunk-2QGN6UNF.js", "/build/_shared/chunk-4A6GO5TL.js", "/build/_shared/chunk-JXGX37BW.js", "/build/_shared/chunk-IPXQKRLW.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-J2UJXBDK.js", "imports": ["/build/_shared/chunk-AUBZFB34.js", "/build/_shared/chunk-JA5WZC4Z.js", "/build/_shared/chunk-CY6IBNYY.js", "/build/_shared/chunk-2RBHVDHY.js", "/build/_shared/chunk-QKYJV5QJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-O6ELEFBQ.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-UNDDVSG2.js", "imports": ["/build/_shared/chunk-JWATFBH3.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-TLGLUDFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-2HC3NM5Z.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-M4AUVWWE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-TY22EO2H.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-BV2RTDBS.js", "imports": ["/build/_shared/chunk-JWATFBH3.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-M6KR5J4Q.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SAZ5MLIK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-VBLDPNHH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-E4TRSSXN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-XTUUAOSR.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-78555FD9.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$blogPostId.edit": {
    id: "routes/blog/$blogPostId.edit",
    parentId: "root",
    path: "blog/:blogPostId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_edit_exports
  },
  "routes/blog/$blogPostId": {
    id: "routes/blog/$blogPostId",
    parentId: "root",
    path: "blog/:blogPostId",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_exports
  },
  "routes/sign.$authType": {
    id: "routes/sign.$authType",
    parentId: "root",
    path: "sign/:authType",
    index: void 0,
    caseSensitive: void 0,
    module: sign_authType_exports
  },
  "routes/update-session": {
    id: "routes/update-session",
    parentId: "root",
    path: "update-session",
    index: void 0,
    caseSensitive: void 0,
    module: update_session_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/blog/new": {
    id: "routes/blog/new",
    parentId: "root",
    path: "blog/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/blog/a": {
    id: "routes/blog/a",
    parentId: "root",
    path: "blog/a",
    index: void 0,
    caseSensitive: void 0,
    module: a_exports
  },
  "routes/blog/b": {
    id: "routes/blog/b",
    parentId: "root",
    path: "blog/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports
  },
  "routes/blog/c": {
    id: "routes/blog/c",
    parentId: "root",
    path: "blog/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3N0YXRlL0F1dGhQcm92aWRlci50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTG9nb3V0Rm9ybS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwQmFyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BdXRoQ29udHJvbHMudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NpZ25PdXRCdXR0b24udHN4IiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9hdXRoLnRzIiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9maXJlYmFzZS50cyIsICIuLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0FwcFBhcGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0LnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9ibG9nUG9zdHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2RiL2FwcFVzZXJzL3R5cGVzLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0RhdGVUaW1lUGlja2VyLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29kZUJsb2NrLnRzeCIsICIuLi8uLi8uLi9hcHAvdXRpbHMvbWR4LnNlcnZlci50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2dDYXJkLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICIuLi8uLi8uLi9hcHAvZGIvZGF0YVBvaW50cy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUZpcmViYXNlTG9hZGVyRGF0YS50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9uZXcudHN4IiwgIm1keDovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9hLm1keCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvYi5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2MubWR4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9kYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvYS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvYi5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2MubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZC9lZGl0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nLyRibG9nUG9zdElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRibG9nUG9zdElkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvOmJsb2dQb3N0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3NpZ24uJGF1dGhUeXBlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaWduLiRhdXRoVHlwZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaWduLzphdXRoVHlwZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvdXBkYXRlLXNlc3Npb25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3VwZGF0ZS1zZXNzaW9uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInVwZGF0ZS1zZXNzaW9uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2dcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9hXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2FcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9hXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvYlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL2JcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvY1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9jXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvY1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9XG4gIH07IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVtb3Rpb25DYWNoZSB9IGZyb20gXCJ+L3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZVwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwifi90aGVtZVwiO1xuXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gXCJAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcbiAgY29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cbiAgY29uc3QgTXVpUmVtaXhTZXJ2ZXIgPSAoKSA9PiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9DYWNoZVByb3ZpZGVyPlxuICApO1xuXG4gIC8vIFJlbmRlciB0aGUgY29tcG9uZW50IHRvIGEgc3RyaW5nLlxuICBjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoPE11aVJlbWl4U2VydmVyIC8+KTtcblxuICAvLyBHcmFiIHRoZSBDU1MgZnJvbSBlbW90aW9uXG4gIGNvbnN0IHsgc3R5bGVzIH0gPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhodG1sKTtcblxuICBsZXQgc3R5bGVzSFRNTCA9IFwiXCI7XG5cbiAgc3R5bGVzLmZvckVhY2goKHsga2V5LCBpZHMsIGNzcyB9KSA9PiB7XG4gICAgY29uc3QgZW1vdGlvbktleSA9IGAke2tleX0gJHtpZHMuam9pbihcIiBcIil9YDtcbiAgICBjb25zdCBuZXdTdHlsZVRhZyA9IGA8c3R5bGUgZGF0YS1lbW90aW9uPVwiJHtlbW90aW9uS2V5fVwiPiR7Y3NzfTwvc3R5bGU+YDtcbiAgICBzdHlsZXNIVE1MID0gYCR7c3R5bGVzSFRNTH0ke25ld1N0eWxlVGFnfWA7XG4gIH0pO1xuXG4gIC8vIEFkZCB0aGUgZW1vdGlvbiBzdHlsZSB0YWdzIGFmdGVyIHRoZSBpbnNlcnRpb24gcG9pbnQgbWV0YSB0YWdcbiAgY29uc3QgbWFya3VwID0gaHRtbC5yZXBsYWNlKFxuICAgIC88bWV0YShcXHMpKm5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIoXFxzKSpcXC8+LyxcbiAgICBgPG1ldGEgbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIgY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIvPiR7c3R5bGVzSFRNTH1gXG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGA8IURPQ1RZUEUgaHRtbD4ke21hcmt1cH1gLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnIH0pO1xufSIsICJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tIFwifi90aGVtZS9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogXCJkYXJrXCIsXG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogQ09MT1JTLlBSSU1BUlksXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46IENPTE9SUy5TRUNPTkRBUlksXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogQ09MT1JTLkVSUk9SLFxuICAgIH0sXG4gICAgd2FybmluZzoge1xuICAgICAgbWFpbjogQ09MT1JTLldBUk5JTkcsXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBtYWluOiBDT0xPUlMuSU5GTyxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIG1haW46IENPTE9SUy5TVUNDRVNTLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogQ09MT1JTLkJBQ0tHUk9VTkQuREVGQVVMVCxcbiAgICAgIHBhcGVyOiBDT0xPUlMuQkFDS0dST1VORC5QQVBFUixcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gTmFtZSBvZiB0aGUgY29tcG9uZW50IFx1MjY5Qlx1RkUwRlxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAvLyBUaGUgZGVmYXVsdCBwcm9wcyB0byBjaGFuZ2VcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSwgLy8gTm8gbW9yZSByaXBwbGUsIG9uIHRoZSB3aG9sZSBhcHBsaWNhdGlvbiBcdUQ4M0RcdURDQTMhXG4gICAgICAgIC8vIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAvLyBUaGUgZGVmYXVsdCBwcm9wcyB0byBjaGFuZ2VcbiAgICAgICAgdmFyaWFudDogXCJvdXRsaW5lZFwiLFxuICAgICAgfSxcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pOyIsICJleHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICBQUklNQVJZOiBcIiM4NTAwRkZcIixcbiAgU0VDT05EQVJZOiBcIiMwMEZGQjhcIixcbiAgLy8gRVJST1I6IFwiI0ZGMDA0N1wiLFxuICBFUlJPUjogXCIjZmYyZjAwXCIsXG4gIFdBUk5JTkc6IFwiI0ZGQTUwMFwiLFxuICBJTkZPOiBcIiMwMEU3RkZcIixcbiAgU1VDQ0VTUzogXCIjMDBGRjdFXCIsXG4gIEJBQ0tHUk9VTkQ6IHtcbiAgICBERUZBVUxUOiBcIiMwRjBGMTVcIixcbiAgICBQQVBFUjogXCIjMDcwMzE5XCIsXG4gIH0sXG59O1xuIiwgImltcG9ydCB7XG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBPdXRsZXQsIHVzZUNhdGNoLCBNZXRhLCBTY3JpcHRzIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IFN0YWNrLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcEJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwQmFyXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBBdXRoVXNlciwgZ2V0QXV0aFVzZXIsIGdldFVzZXJUb2tlbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgd2l0aEVtb3Rpb25DYWNoZSB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRW1vdGlvbkNhY2hlIH0gZnJvbSBcIn4vdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlXCI7XG5pbXBvcnQgeyB1bnN0YWJsZV91c2VFbmhhbmNlZEVmZmVjdCBhcyB1c2VFbmhhbmNlZEVmZmVjdCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gXCJ+L3RoZW1lL0NsaWVudFN0eWxlQ29udGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldEAxLjQuMC9kaXN0L3Jlc2V0Lm1pbi5jc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBnbG9iYWxTdHlsZXNVcmwsXG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgQ29kZSBTYWdhcyBpcyBhIHBsYWNlIHRvIGxlYXJuIGEgbWlsbGlvbiBhbmQgb25lIHdheXMgdG8gY29kZS5gO1xuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uLFxuICAgIGtleXdvcmRzOiBcImNvZGUsc2FnYXMsbGVhcm5cIixcbiAgICBcInR3aXR0ZXI6aW1hZ2VcIjogXCJodHRwczovL2NvZGVzYWdhcy5jb20vc29jaWFsLnBuZ1wiLFxuICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuICAgIFwidHdpdHRlcjpjcmVhdG9yXCI6IFwiQGNvZGVzYWdhc1wiLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQGNvZGVzYWdhc1wiLFxuICAgIFwidHdpdHRlcjp0aXRsZVwiOiBcIkNvZGUgU2FnYXNcIixcbiAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjogZGVzY3JpcHRpb24sXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG4gICh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcbiAgICBjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cbiAgICAvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuICAgIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcbiAgICAgIC8vIHJlLWluamVjdCB0YWdzXG4gICAgICBjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcbiAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcbiAgICAgIGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG4gICAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgICAgY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxuKTtcblxudHlwZSBMb2FkZXJEYXRhID0geyB1c2VyOiBBdXRoVXNlciB8IG51bGw7IHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbCB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHVzZXIsXG4gICAgdXNlclRva2VuLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5mdW5jdGlvbiBQcm92aWRlcnMoe1xuICB1c2VyLFxuICBjaGlsZHJlbixcbiAgdXNlclRva2VuLFxufToge1xuICB1c2VyOiBBdXRoVXNlciB8IG51bGw7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbDtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyIHVzZXI9e3VzZXJ9IHVzZXJUb2tlbj17dXNlclRva2VufT5cbiAgICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+e2NoaWxkcmVufTwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHVzZXIsIHVzZXJUb2tlbiB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPFByb3ZpZGVycyB1c2VyPXt1c2VyfSB1c2VyVG9rZW49e3VzZXJUb2tlbn0+XG4gICAgICAgIDxBcHBCYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9Qcm92aWRlcnM+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUm9vdEVycm9yKHtcbiAgZG9jVGl0bGUgPSBcIk9vcHMhXCIsXG4gIHRpdGxlID0gXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gXHVEODNEXHVERTI1XCIsXG4gIG1lc3NhZ2UgPSBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtkb2NUaXRsZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICAgIHN4PXt7IGhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nOiA1IH19XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwUGFwZXIgbGVmdENvbG9yPVwiZXJyb3JcIiByaWdodENvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PnttZXNzYWdlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0FwcFBhcGVyPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICBjb25zdCB0aXRsZSA9IGAke2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YDtcbiAgcmV0dXJuIChcbiAgICA8Um9vdEVycm9yXG4gICAgICBkb2NUaXRsZT17dGl0bGV9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBtZXNzYWdlPXtcbiAgICAgICAgXCJXZWxsIHRoaXMgaXMgZW1iYXJzaW5nLiBcdUQ4M0RcdURFMDUgSGF2ZSB5b3UgdHJpZWQgdHVybmluZyBpdCBvZmYgYW5kIGJhY2sgb24gYWdhaW4/XCJcbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgcmV0dXJuIDxSb290RXJyb3IgbWVzc2FnZT17ZXJyb3IubWVzc2FnZX0gLz47XG59XG4iLCAiaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIHVzZUZldGNoZXIsIHVzZUxvY2F0aW9uLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IExvZ291dEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL0xvZ291dEZvcm1cIjtcbmltcG9ydCB7IGFkZEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQXV0aFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhVc2VyIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgdXNlcjogdXNlclByb3AsXG4gIHVzZXJUb2tlbjogdXNlclRva2VuUHJvcCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdXNlcjogQXV0aFVzZXIgfCBudWxsO1xuICB1c2VyVG9rZW46IHN0cmluZyB8IG51bGw7XG59KSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPEF1dGhVc2VyIHwgbnVsbD4odXNlclByb3ApO1xuICBjb25zdCBsb2dvdXRGb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt1c2VyVG9rZW4sIHNldFVzZXJUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KHVzZXJUb2tlblByb3AgfHwgXCJcIik7XG4gIGNvbnN0IHVzZXJUb2tlbkZvcm0gPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVc2VyKHVzZXJQcm9wKTtcbiAgfSwgW3VzZXJQcm9wXSk7XG5cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IHBhdGhuYW1lLmluY2x1ZGVzKFwiL3NpZ24vXCIpID8gXCIvZGFzaGJvYXJkXCIgOiBwYXRobmFtZTtcblxuICBmdW5jdGlvbiBzZW5kVXNlclRva2VuKCkge1xuICAgIGlmICghdXNlclRva2VuRm9ybS5jdXJyZW50KSByZXR1cm47XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodXNlclRva2VuRm9ybS5jdXJyZW50KTtcbiAgICBmZXRjaGVyLnN1Ym1pdChmb3JtRGF0YSwge21ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjpcIi91cGRhdGUtc2Vzc2lvblwifSlcbiAgfVxuXG4gIC8vIGxpc3RlbiBmb3IgdG9rZW4gY2hhbmdlc1xuICAvLyBjYWxsIHNldFVzZXIgYW5kIHdyaXRlIG5ldyB0b2tlbiBhcyBhIGNvb2tpZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgcmV0dXJuIGF1dGgub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlckZyb21DaGFuZ2UpID0+IHtcbiAgICAgIGlmICh1c2VyRnJvbUNoYW5nZSA9PT0gbnVsbCAmJiB1c2VyICE9PSBudWxsKSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIGlmICghbG9nb3V0Rm9ybVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxvZ291dEZvcm1SZWYuY3VycmVudC5zdWJtaXQoKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlckZyb21DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyRnJvbUNoYW5nZS5nZXRJZFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdXNlclRva2VuKSB7XG4gICAgICAgICAgc2V0VXNlcih1c2VyRnJvbUNoYW5nZSk7XG4gICAgICAgICAgc2V0VXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgICBhd2FpdCBhZGRBcHBVc2VyKHVzZXJGcm9tQ2hhbmdlLnVpZCk7XG4gICAgICAgICAgc2VuZFVzZXJUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgLy8gZm9yY2UgcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTAgbWludXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgfSwgMTAgKiA2MCAqIDEwMDApO1xuXG4gICAgLy8gY2xlYW4gdXAgc2V0SW50ZXJ2YWxcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICB9LCBbXSk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgPExvZ291dEZvcm0gcmVmPXtsb2dvdXRGb3JtUmVmfSAvPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17dXNlclRva2VuRm9ybX0gYWN0aW9uPVwiL3VwZGF0ZS1zZXNzaW9uXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cInB1dFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJUb2tlblwiIHZhbHVlPXt1c2VyVG9rZW59IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gcmVkaXJlY3RUb31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiIsICJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtUHJvcHMgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IExvZ291dEZvcm0gPSBmb3J3YXJkUmVmPEhUTUxGb3JtRWxlbWVudCwgRm9ybVByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxGb3JtIHJlZj17cmVmfSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIHsuLi5wcm9wc30gLz5cbik7XG4iLCAiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQXV0aENvbnRyb2xzIGZyb20gXCJ+L2NvbXBvbmVudHMvQXV0aENvbnRyb2xzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNdWlBcHBCYXI+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcbiAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0sICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0pYCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICB0ZXh0RmlsbENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDT0RFIFNBR0FTXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgPEF1dGhDb250cm9scyAvPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L011aUFwcEJhcj5cbiAgICAgIDxCb3ggc3g9e3sgbWFyZ2luQm90dG9tOiBcIjY0cHhcIiB9fSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IHsgU2lnbk91dEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvblwiO1xuaW1wb3J0IHsgTG9nb3V0Rm9ybSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTG9nb3V0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5VcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUF1dGgoKTtcbiAgcmV0dXJuIHVzZXIgPT09IG51bGwgPyAoXG4gICAgPEJveD5cbiAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9zaWduL2luXCI+XG4gICAgICAgIHNpZ24gaW5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzeD17eyBtYXJnaW5MZWZ0OiAyIH19XG4gICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgdG89XCIvc2lnbi91cFwiXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgID5cbiAgICAgICAgc2lnbiB1cFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gICkgOiAoXG4gICAgPEJveD5cbiAgICAgIDxMb2dvdXRGb3JtPlxuICAgICAgICA8U2lnbk91dEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICBzaWduIG91dFxuICAgICAgICA8L1NpZ25PdXRCdXR0b24+XG4gICAgICA8L0xvZ291dEZvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIi4uL2ZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnbk91dEJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0gey4uLnByb3BzfT5zaWduIG91dDwvQnV0dG9uPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgb25JZFRva2VuQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAoe1xyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG59KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGF1dGgsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkXHJcbiAgKTtcclxuICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oe1xyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG59KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGF1dGgsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGF1dGhcclxuICAgIC5zaWduT3V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWduZWQgb3V0IVwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdXRoU3RhdGVDaGFuZ2VkKGNiKSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVJZFRva2VuQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbklkVG9rZW5DaGFuZ2VkKGF1dGgsIGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICBjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiAmJiBjYih1c2VyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCl7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIGF1dGguY3VycmVudFVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmlnZ2VyVG9rZW5SZWZyZXNoKCl7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKHVzZXIpIGF3YWl0IHVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgY29ubmVjdEF1dGhFbXVsYXRvciwgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsIGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmxldCBhcHAsIGF1dGgsIGRiO1xyXG5cclxuaWYgKCFnZXRBcHBzKCkubGVuZ3RoKSB7XHJcbiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QTM0WldHWEpmWmxSNnU4enNmSzVuYnNIcGlncl9hTTU4XCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImNvZGVzYWdhcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJjb2Rlc2FnYXNcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29kZXNhZ2FzLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MzQ3NDM5MTE1NTRcIixcclxuICAgIGFwcElkOiBcIjE6NDM0NzQzOTExNTU0OndlYjo0YzRiNzRmMDM5YmI1ZjJhOTg4MDliXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctUkZONDdKSzM4TlwiLFxyXG4gIH07XHJcbiAgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgYXV0aCA9IGdldEF1dGgoKTtcclxuICBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IoZGIsIFwibG9jYWxob3N0XCIsIDgwODApO1xyXG4gICAgY29ubmVjdEF1dGhFbXVsYXRvcihhdXRoLCBcImh0dHA6Ly9sb2NhbGhvc3Q6OTA5OVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFwcCwgYXV0aCwgZGIsIGdldEF1dGgsIGdldEZpcmVzdG9yZSB9O1xyXG4iLCAiaW1wb3J0IHsgRGVjb2RlZElkVG9rZW4gfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vbGliL2F1dGgvdG9rZW4tdmVyaWZpZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEF1dGhVc2VyID0gRGVjb2RlZElkVG9rZW4gfCBVc2VyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pOiBQcm9taXNlPFVzZXI+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkIH0pO1xuICByZXR1cm4gdXNlcjtcbn1cblxubGV0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxubGV0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiY3Nfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRva2VuKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgbGV0IHVzZXJUb2tlbiA9IHNlc3Npb24uZ2V0KFwidXNlclRva2VuXCIpO1xuICBpZiAoIXVzZXJUb2tlbiB8fCB0eXBlb2YgdXNlclRva2VuICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJUb2tlbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPEF1dGhVc2VyIHwgbnVsbD4ge1xuICBsZXQgdXNlclRva2VuID0gYXdhaXQgZ2V0VXNlclRva2VuKHJlcXVlc3QpO1xuICBpZiAodHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoZWRVc2VyID0gYXdhaXQgZ2V0QXV0aCgpLnZlcmlmeUlkVG9rZW4odXNlclRva2VuKTtcbiAgICByZXR1cm4gYXV0aGVkVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXV0aFVzZXIgZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgbGV0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gICAgcmV0dXJuIGF1dGhVc2VyPy51aWQgfHwgbnVsbDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJZCBlcnJvclwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgbGV0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9zaWduL2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9zaWduL2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbjogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VyVG9rZW5cIiwgdXNlclRva2VuKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGNlcnQsIGdldEFwcHMsIEFwcCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcbmltcG9ydCB7IEF1dGgsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5cbmxldCBhcHA6IEFwcCwgYXV0aDogQXV0aCwgZGI6IEZpcmVzdG9yZTtcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHByb2Nlc3MuZW52LkZJUkVTVE9SRV9FTVVMQVRPUl9IT1NUID0gXCJsb2NhbGhvc3Q6ODA4MFwiO1xuICAgIHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjkwOTlcIjtcbiAgfVxuICBjb25zdCBlbmNvZGVkS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVlfQkFTRTY0IHx8IFwiXCI7XG4gIGNvbnN0IGRlY29kZWRLZXkgPSBCdWZmZXIuZnJvbShlbmNvZGVkS2V5LCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0ZjhcIik7XG4gIGFwcCA9IGluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGNlcnQoe1xuICAgICAgcHJpdmF0ZUtleTogZGVjb2RlZEtleSxcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0uZmlyZWJhc2Vpby5jb21gLFxuICB9KTtcbiAgYXV0aCA9IGdldEF1dGgoKTtcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IHsgYXBwLCBhdXRoLCBnZXRBdXRoLCBkYiwgZ2V0RmlyZXN0b3JlIH07XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGVmdENvbG9yPzogc3RyaW5nO1xuICByaWdodENvbG9yPzogc3RyaW5nO1xuICBzeD86IG9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBQYXBlcih7XG4gIGNoaWxkcmVuLFxuICBsZWZ0Q29sb3IgPSBcInByaW1hcnlcIixcbiAgcmlnaHRDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHN4ID0ge30sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgc3BhY2luZz17Mn1cbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHBhZGRpbmc6IDQsXG5cbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgYm9yZGVyOiBcInNvbGlkIDVweCB0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMWVtXCIsXG5cbiAgICAgICAgXCImOmJlZm9yZSBcIjoge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgIG1hcmdpbjogXCItNXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGVbbGVmdENvbG9yXS5tYWlufSwgJHt0aGVtZS5wYWxldHRlW3JpZ2h0Q29sb3JdLm1haW59KWAsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN4LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDbGllbnRTdHlsZUNvbnRleHREYXRhIHtcbiAgcmVzZXQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQ8Q2xpZW50U3R5bGVDb250ZXh0RGF0YT4oe1xuICByZXNldDogKCkgPT4ge30sXG59KTsiLCAiaW1wb3J0IHtcbiAgcmVkaXJlY3QsXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VBY3Rpb25EYXRhLFxuICBMaW5rLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7XG4gIGFkZEJsb2dQb3N0LFxuICBCbG9nUG9zdFdpdGhJZCxcbiAgZ2V0QmxvZ1Bvc3QsXG59IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgVGV4dEZpZWxkLFxuICBTd2l0Y2gsXG4gIFN0YWNrLFxuICBCdXR0b24sXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRGF0ZVRpbWVQaWNrZXJcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBCbG9nUG9zdFdpdGhJZCB7XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKCFhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG4gICAgfVxuICB9XG4gIGludmFyaWFudChwYXJhbXMuYmxvZ1Bvc3RJZCwgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKTtcbiAgY29uc3QgYmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChwYXJhbXMuYmxvZ1Bvc3RJZCk7XG4gIGludmFyaWFudChibG9nUG9zdCwgXCJleHBlY3RlZCBibG9nUG9zdFwiKTtcbiAgcmV0dXJuIHsgLi4uYmxvZ1Bvc3QsIGlzQXV0aG9yIH07XG59O1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBzbHVnPzogYm9vbGVhbjtcbiAgbWFya2Rvd24/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgYXV0aG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJhdXRob3JJZFwiKTtcbiAgY29uc3QgaXNQdWJsaXNoZWQgPSBmb3JtRGF0YS5nZXQoXCJpc1B1Ymxpc2hlZFwiKSA9PT0gXCJ0cnVlXCI7XG4gIGNvbnN0IHB1Ymxpc2hEYXRlID0gcGFyc2VJbnQoXG4gICAgKGZvcm1EYXRhLmdldChcInB1Ymxpc2hEYXRlXCIpIGFzIHN0cmluZykgfHwgXCIwXCIsXG4gICAgMTBcbiAgKTtcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHt9O1xuICBpZiAoIXRpdGxlKSBlcnJvcnMudGl0bGUgPSB0cnVlO1xuICBpZiAoIXNsdWcpIGVycm9ycy5zbHVnID0gdHJ1ZTtcbiAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBhdXRob3JJZCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaXNQdWJsaXNoZWQgPT09IFwiYm9vbGVhblwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwdWJsaXNoRGF0ZSA9PT0gXCJudW1iZXJcIik7XG5cbiAgYXdhaXQgYWRkQmxvZ1Bvc3Qoe1xuICAgIGF1dGhvcklkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd24sXG4gICAgaXNQdWJsaXNoZWQsXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3Qge1xuICAgIGF1dGhvcklkLFxuICAgIGlzUHVibGlzaGVkOiBpbml0SXNQdWJsaXNoZWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKHB1Ymxpc2hEYXRlKSk7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUoaW5pdElzUHVibGlzaGVkKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF1dGhvcklkXCIgdmFsdWU9e2F1dGhvcklkfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaXNQdWJsaXNoZWRcIiB2YWx1ZT17aXNQdWJsaXNoZWQudG9TdHJpbmcoKX0gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgbmFtZT1cInB1Ymxpc2hEYXRlXCJcbiAgICAgICAgdmFsdWU9e2RhdGU/LmdldFRpbWUoKS50b1N0cmluZygpfVxuICAgICAgLz5cbiAgICAgIDxTdGFja1xuICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgIHN4PXt7IG1heFdpZHRoOiBcIjQ1MHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElzUHVibGlzaGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcImNvbnRyb2xsZWRcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e2lzUHVibGlzaGVkID8gXCJJcyBQdWJsaXNoZWRcIiA6IFwiTm90IFB1Ymxpc2hlZFwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxEYXRlVGltZVBpY2tlciBkYXRlPXtkYXRlfSBzZXREYXRlPXtzZXREYXRlfSB2YXJpYW50PVwiZmlsbGVkXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGl0bGV9XG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy50aXRsZSA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5kZXNjcmlwdGlvbiA/IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uc2x1Z31cbiAgICAgICAgICAgIGlkPVwic2x1Z1wiXG4gICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5zbHVnID8gXCJTbHVnIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2x1Z31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5tYXJrZG93bn1cbiAgICAgICAgICAgIGlkPVwibWFya2Rvd25cIlxuICAgICAgICAgICAgbGFiZWw9XCJNYXJrZG93blwiXG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/Lm1hcmtkb3duID8gPGVtPk1hcmtkb3duIGlzIHJlcXVpcmVkPC9lbT4gOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgbmFtZT1cIm1hcmtkb3duXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttYXJrZG93bn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gc3BhY2luZz17Mn0ganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPXtgL2Jsb2cvJHtzbHVnfWB9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICBTYXZlIFBvc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBCTE9HX1BPU1RTX0NPTExFQ1RJT04gPSBcImJsb2dQb3N0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2dQb3N0IHtcbiAgYXV0aG9ySWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBtYXJrZG93bjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpc1B1Ymxpc2hlZDogYm9vbGVhbjtcbiAgcHVibGlzaERhdGU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3RXaXRoSWQgZXh0ZW5kcyBCbG9nUG9zdCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEJMT0dfUE9TVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYmxvZ1Bvc3RJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhibG9nUG9zdElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxCbG9nUG9zdD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKCkgPT4gZ2V0Q29sbGVjdGlvblJlZigpIGFzIFF1ZXJ5PEJsb2dQb3N0PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJsb2dQb3N0cygpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSgpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3RJZCk6IFByb21pc2U8QmxvZ1Bvc3RXaXRoSWQgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShibG9nUG9zdElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIHsgaWQ6IGRvY1JlZi5pZCwgLi4uZG9jU25hcD8uZGF0YSgpIGFzIEJsb2dQb3N0IH0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEJsb2dQb3N0KGJsb2dQb3N0OiBCbG9nUG9zdCk6IFByb21pc2U8QmxvZ1Bvc3Q+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3Quc2x1Zykuc2V0KGJsb2dQb3N0KTtcblxuICAgIGNvbnN0IG5ld0Jsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3Quc2x1Zyk7XG4gICAgaWYgKCFuZXdCbG9nUG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Jsb2dQb3N0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEFwcFVzZXIsIEFwcFVzZXJXaXRoSWQsIEFQUF9VU0VSU19DT0xMRUNUSU9OIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgQVBQX1VTRVJTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYXBwVXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGFwcFVzZXJJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QXBwVXNlcj47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxBcHBVc2VyPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFwcFVzZXJzKHVzZXJJZCk6IFByb21pc2U8QXBwVXNlcldpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFwcFVzZXIoYXBwVXNlcklkKTogUHJvbWlzZTxBcHBVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQXBwVXNlcihcbiAgYXBwVXNlcklkOiBzdHJpbmdcbik6IFByb21pc2U8QXBwVXNlcj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nQXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoZXhpc3RpbmdBcHBVc2VyKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdBcHBVc2VyO1xuICAgIH1cbiAgICBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKS5zZXQoe3Blcm1pc3Npb25zOiBbXX0pO1xuXG4gICAgY29uc3QgbmV3QXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoIW5ld0FwcFVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcHBVc2VyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIEFwcFVzZXIge1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcFVzZXJXaXRoSWQgZXh0ZW5kcyBBcHBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9VU0VSU19DT0xMRUNUSU9OID0gXCJhcHBVc2Vyc1wiOyIsICJpbXBvcnQgVGV4dEZpZWxkLCB7QmFzZVRleHRGaWVsZFByb3BzfSBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgQWRhcHRlckRhdGVGbnMgZnJvbSAnQG11aS9sYWIvQWRhcHRlckRhdGVGbnMnO1xuaW1wb3J0IExvY2FsaXphdGlvblByb3ZpZGVyIGZyb20gJ0BtdWkvbGFiL0xvY2FsaXphdGlvblByb3ZpZGVyJztcbmltcG9ydCBNVUlEYXRlVGltZVBpY2tlciBmcm9tICdAbXVpL2xhYi9EYXRlVGltZVBpY2tlcic7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJhc2VUZXh0RmllbGRQcm9wcyB7XG4gIGRhdGU6IERhdGUgfCBudWxsO1xuICBzZXREYXRlOiAobmV3RGF0ZTogRGF0ZSB8IG51bGwpID0+IHZvaWRcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXIoe2RhdGUsIHNldERhdGUsIC4uLnRleHRGaWVsZFByb3BzfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXRlRm5zfT5cbiAgICAgIDxNVUlEYXRlVGltZVBpY2tlclxuICAgICAgICByZW5kZXJJbnB1dD17KHByb3BzKSA9PiA8VGV4dEZpZWxkIGZ1bGxXaWR0aCB7Li4ucHJvcHN9IHsuLi50ZXh0RmllbGRQcm9wc30vPn1cbiAgICAgICAgbGFiZWw9XCJEYXRlVGltZVBpY2tlclwiXG4gICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICBvbkNoYW5nZT17KG5ld0RhdGUpID0+IHtcbiAgICAgICAgICBzZXREYXRlKG5ld0RhdGUpO1xuICAgICAgICB9fVxuICAgICAgICBcbiAgICAgIC8+XG4gICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgZ2V0TURYQ29tcG9uZW50IH0gZnJvbSBcIm1keC1idW5kbGVyL2NsaWVudFwiO1xuaW1wb3J0IHsgQmxvZ1Bvc3RXaXRoSWQsIGdldEJsb2dQb3N0IH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFiLCBMaW5rLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IENvZGVCbG9jayB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIjtcbmltcG9ydCB7IGdldE1keCB9IGZyb20gXCJ+L3V0aWxzL21keC5zZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBCbG9nUG9zdFdpdGhJZCB7XG4gIGNvZGU6IHN0cmluZztcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIGlzQXV0aG9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaW52YXJpYW50KHBhcmFtcy5ibG9nUG9zdElkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBibG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KHBhcmFtcy5ibG9nUG9zdElkKTtcbiAgaW52YXJpYW50KGJsb2dQb3N0LCBcImV4cGVjdGVkIGJsb2dQb3N0XCIpO1xuICBjb25zdCB7IGNvZGUsIGZyb250bWF0dGVyIH0gPSBhd2FpdCBnZXRNZHgoYmxvZ1Bvc3QubWFya2Rvd24pO1xuICByZXR1cm4geyAuLi5ibG9nUG9zdCwgY29kZSwgaXNBdXRob3IgfTtcbn07XG5cbmNvbnN0IEgxID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuY29uc3QgSDIgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBIMyA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IEg0ID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuY29uc3QgSDUgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBINiA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IFAgPSAocHJvcHMpID0+IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5XCIgY29tcG9uZW50PVwicFwiIHsuLi5wcm9wc30gLz47XG5jb25zdCBCbG9ja3F1b3RlID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg2XCJcbiAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgIHN4PXt7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgbWFyZ2luOiAyLFxuICAgICAgYm9yZGVyTGVmdDogKHsgcGFsZXR0ZSB9KSA9PiBgMnB4IHNvbGlkJHtwYWxldHRlLnByaW1hcnkubWFpbn1gLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IFByZSA9IChwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQ29kZSA9IChwcm9wcykgPT4gPENvZGVCbG9jayB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQSA9IChwcm9wcykgPT4gPExpbmsgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgaXNBdXRob3IsIGNvZGUgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBDb21wb25lbnQgPSB1c2VNZW1vKCgpID0+IGdldE1EWENvbXBvbmVudChjb2RlKSwgW2NvZGVdKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGYWJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdFwiXG4gICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgdG89XCJlZGl0XCJcbiAgICAgICAgc3g9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAyMCwgcmlnaHQ6IDIwIH19XG4gICAgICA+XG4gICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgPC9GYWI+XG4gICAgICB7Q29tcG9uZW50ID8gKFxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgaDE6IEgxLFxuICAgICAgICAgICAgaDI6IEgyLFxuICAgICAgICAgICAgaDM6IEgzLFxuICAgICAgICAgICAgaDQ6IEg0LFxuICAgICAgICAgICAgaDU6IEg1LFxuICAgICAgICAgICAgaDY6IEg2LFxuICAgICAgICAgICAgcDogUCxcbiAgICAgICAgICAgIGJsb2NrcXVvdGU6IEJsb2NrcXVvdGUsXG4gICAgICAgICAgICBwcmU6IFByZSxcbiAgICAgICAgICAgIGNvZGU6IENvZGUsXG4gICAgICAgICAgICBhOiBBLFxuXG4gICAgICAgICAgICAvLyBlbTogKHByb3BzKSA9PiA8aSBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICAgICAgLy8gd3JhcHBlcjogKHsgY29tcG9uZW50cywgLi4ucmVzdCB9KSA9PiA8bWFpbiB7Li4ucmVzdH0gLz4sXG4gICAgICAgICAgICAvLyBQbGFuZXQ6ICgpID0+IFwiTmVwdHVuZVwiLFxuICAgICAgICAgICAgLy8gdGhlbWU6IHtcbiAgICAgICAgICAgIC8vICAgdGV4dDogKHByb3BzKSA9PiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJncmV5XCIgfX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IFBhcGVyLCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQm94LCBzdHlsZWQgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XG5pbXBvcnQgZHJhY3VsYSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2RyYWN1bGFcIjtcblxuY29uc3QgTGluZSA9IHN0eWxlZChcImRpdlwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtcm93XCIsXG59KTtcblxuY29uc3QgTGluZU5vID0gc3R5bGVkKFwic3BhblwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiLFxuICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxuICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgb3BhY2l0eTogXCIwLjVcIixcbn0pO1xuXG5jb25zdCBMaW5lQ29udGVudCA9IHN0eWxlZChcInNwYW5cIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIixcbiAgZm9udEZhbWlseTogXCInRmlyYSBDb2RlJywgbW9ub3NwYWNlXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvZGVCbG9jayA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGNvZGU9e2NoaWxkcmVufSBsYW5ndWFnZT1cImpzeFwiIHRoZW1lPXtkcmFjdWxhfT5cbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgIDxQYXBlclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5lIGtleT17aX0gey4uLmdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KX0+XG4gICAgICAgICAgICAgIDxMaW5lTm8+e2kgKyAxfTwvTGluZU5vPlxuICAgICAgICAgICAgICA8TGluZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2tleX0gey4uLmdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0xpbmVDb250ZW50PlxuICAgICAgICAgICAgPC9MaW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BhcGVyPlxuICAgICAgKX1cbiAgICA8L0hpZ2hsaWdodD5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZHgoc291cmNlOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYnVuZGxlTURYKHtcbiAgICBzb3VyY2UsXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSIsICJpbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvblwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gXCJAbXVpL21hdGVyaWFsL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XG5pbXBvcnQgeyBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHtcbiAgZW1haWxBbmRQYXNzd29yZFNpZ25JbixcbiAgZW1haWxBbmRQYXNzd29yZFNpZ25VcCxcbn0gZnJvbSBcIn4vZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWRkQXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLmNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNvZGUgU2FnYXMgfCBTaWduIEluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2lnbiBpbiB0byBzdGFydCB5b3VyIG93biBjb2RlIGpvdXJuZXkhXCIsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQVVUSF9UWVBFUyA9IHtcbiAgU0lHTl9JTjogXCJTaWduIEluXCIsXG4gIFNJR05fVVA6IFwiU2lnbiBVcFwiLFxufTtcblxudHlwZSBMb2FkZXJEYXRhID0geyBhdXRoVHlwZTogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgLy8gVE9ETzogaWYgYSB1c2VyIHRoZW4gcmVkaXJlY3QgdG8gL2Rhc2hib2FyZFxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGF1dGhUeXBlOlxuICAgICAgcGFyYW1zLmF1dGhUeXBlID09PSBcImluXCIgPyBBVVRIX1RZUEVTLlNJR05fSU4gOiBBVVRIX1RZUEVTLlNJR05fVVAsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgZW1haWwgIT09IFwic3RyaW5nXCIgfHwgZW1haWwubWF0Y2goLy4rQC4rXFwuLisvKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBgRW1haWxzIG11c3QgbG9vayBsaWtlIGV4YW1wbGVAZXhhbXBsZS5jb21gO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBGb3JtRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICBlbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICBhdXRoVHlwZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCB7IGF1dGhUeXBlOiBpbml0QXV0aFR5cGUgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW2FjdGlvbkRhdGEsIHNldEFjdGlvbkRhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHt9KTtcbiAgY29uc3QgW2F1dGhUeXBlLCBzZXRBdXRoVHlwZV0gPSB1c2VTdGF0ZShpbml0QXV0aFR5cGUpO1xuXG4gIGNvbnN0IGhhbmRsZUF1dGhUeXBlID0gKGV2ZW50LCBuZXdBdXRoVHlwZSkgPT4ge1xuICAgIGlmICghbmV3QXV0aFR5cGUpIHJldHVybjtcbiAgICBzZXRBdXRoVHlwZShuZXdBdXRoVHlwZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdEF1dGhUeXBlICE9PSBhdXRoVHlwZSkge1xuICAgICAgc2V0QXV0aFR5cGUoaW5pdEF1dGhUeXBlKTtcbiAgICB9XG4gIH0sIFtpbml0QXV0aFR5cGVdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoXG4gICAgZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG4gICAgY29uc3QgYXV0aFR5cGUgPSBmb3JtLmdldChcImF1dGhUeXBlXCIpO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgYXV0aFR5cGUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgIHR5cGVvZiBlbWFpbCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IHsgYXV0aFR5cGUsIGVtYWlsLCBwYXNzd29yZCB9O1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgICAgZW1haWw6IHZhbGlkYXRlRW1haWwoZW1haWwpLFxuICAgICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuICAgIH07XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cbiAgICBzd2l0Y2ggKGF1dGhUeXBlKSB7XG4gICAgICBjYXNlIEFVVEhfVFlQRVMuU0lHTl9JTjoge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5lbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICAgIGZvcm1FcnJvcjogYEVtYWlsL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYEVtYWlsL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgQVVUSF9UWVBFUy5TSUdOX1VQOiB7XG4gICAgICAgIC8vIGlmICh1c2VyRXhpc3RzKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAvLyAgICAgZmllbGRzLFxuICAgICAgICAvLyAgICAgZm9ybUVycm9yOiBgVXNlciB3aXRoIGVtYWlsICR7ZW1haWx9IGFscmVhZHkgZXhpc3RzYCxcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IHVzZXIuYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgZmllbGRzLFxuICAgICAgICAgIGZvcm1FcnJvcjogYExvZ2luIHR5cGUgaW52YWxpZGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogXCI1MDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIyMDBweCBhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAge2F1dGhUeXBlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZvcm1FcnJvciA/IFwiZm9ybS1lcnJvci1tZXNzYWdlXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RhY2sgY29tcG9uZW50PXtQYXBlcn0gc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF1dGhUeXBlXCIgdmFsdWU9e2F1dGhUeXBlfSAvPlxuICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aFR5cGV9XG4gICAgICAgICAgICAgICAgZXhjbHVzaXZlXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUF1dGhUeXBlfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWduIEluIG9yIFNpZ24gVXBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtBVVRIX1RZUEVTLlNJR05fSU59XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtBVVRIX1RZUEVTLlNJR05fSU59XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17QVVUSF9UWVBFUy5TSUdOX1VQfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17QVVUSF9UWVBFUy5TSUdOX1VQfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgYXV0aFR5cGUgPT09IEFVVEhfVFlQRVMuU0lHTl9JTiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCl9XG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gXCJlbWFpbC1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBhdXRoVHlwZSA9PT0gQVVUSF9UWVBFUy5TSUdOX0lOID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1lcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybS1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICBBVVRIX1RZUEVTLlNJR05fSU4gPT09IGF1dGhUeXBlID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2F1dGhUeXBlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0FwcFBhcGVyPlxuICAgICAgPC9TdGFjaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgICAgXG4gICAgICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IHVzZXJUb2tlbiA9IGZvcm0uZ2V0KFwidXNlclRva2VuXCIpIGFzIHN0cmluZztcbiAgICAgIGlmICghdXNlclRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkIG5vdCB1cGRhdGUgc2Vzc2lvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyVG9rZW4sIHJlZGlyZWN0VG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhcIlJFUVVFU1QgTk9UIEhBTkRMRURcIik7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgQm94LCBCdXR0b24sIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEsIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBCbG9nQ2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQmxvZ0NhcmRcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IEJsb2dQb3N0V2l0aElkLCBnZXRBbGxCbG9nUG9zdHMgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHBvc3RzOiBCbG9nUG9zdFdpdGhJZFtdO1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKGFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICBpc0F1dGhvciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsQmxvZ1Bvc3RzKCk7XG4gIHJldHVybiB7IHBvc3RzLCBpc0F1dGhvciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3QgeyBwb3N0cywgaXNBdXRob3IgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiMTIwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge2lzQXV0aG9yID8gKFxuICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9ibG9nL25ld1wiPlxuICAgICAgICAgICAgQWRkIEJsb2cgUG9zdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIH19XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgID5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXg6IHsgeHM6IFwiMCAwIDgwJVwiLCBtZDogXCIwIDAgNDAlXCIsIGxnOiBcIjAgMCAzMCVcIiB9LFxuICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCbG9nQ2FyZFxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltYWdlVXJsPXtcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQ1NjI1NDM2NDczLWY0OGYwN2I3MDRiYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Nzc1JnE9ODBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGltYWdlQWx0PXtcImEgdmlldyBvZiBjYW55b25zIGZyb20gYWJvdmVcIn1cbiAgICAgICAgICAgICAgdXJsPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw9e3Bvc3QuaW1hZ2VVcmwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLy8gaW1hZ2VBbHQ9e3Bvc3QuaW1hZ2VBbHQgfHwgXCJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmRBY3Rpb25BcmVhLCBDYXJkQWN0aW9ucyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEJsb2dDYXJkKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB1cmwsXG4gIGltYWdlVXJsLFxuICBpbWFnZUFsdCxcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcFBhcGVyIHN4PXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICA8Q2FyZCBzeD17eyBib3JkZXJSYWRpdXM6IFwiMTBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgPENhcmRBY3Rpb25BcmVhIGNvbXBvbmVudD17TGlua30gdG89e3VybH0+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE0MFwiXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XG4gICAgICAgICAgICBhbHQ9e2ltYWdlQWx0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICB7LyogVE9ETzogaW1wbGVtZW50IHNoYXJlIGFjdGlvbiBidXR0b25zICovfVxuICAgICAgICB7LyogPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBTaGFyZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPiAqL31cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0FwcFBhcGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XHJcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZERhdGFQb2ludCxcclxuICBEYXRhUG9pbnQsXHJcbiAgZ2V0QWxsRGF0YVBvaW50cyxcclxufSBmcm9tIFwifi9kYi9kYXRhUG9pbnRzLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBEYXRhUG9pbnRXaXRoSWQsIGdldEFsbERhdGFQb2ludHNMaXZlIH0gZnJvbSBcIn4vZGIvZGF0YVBvaW50cy5jbGllbnRcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgdXNlRmlyZWJhc2VMb2FkZXJEYXRhIH0gZnJvbSBcIn4vaG9va3MvdXNlRmlyZWJhc2VMb2FkZXJEYXRhXCI7XHJcblxyXG50eXBlIExvYWRlckRhdGEgPSB7IGRhdGFQb2ludHM6IERhdGFQb2ludFdpdGhJZFtdIH07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcclxuXHJcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcclxuICAgIGRhdGFQb2ludHM6IGF3YWl0IGdldEFsbERhdGFQb2ludHModXNlcklkKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgcG9pbnQgPSBOdW1iZXIoZm9ybS5nZXQoXCJwb2ludFwiKSk7XHJcbiAgY29uc3QgdGltZXN0YW1wID0gTnVtYmVyKGZvcm0uZ2V0KFwidGltZXN0YW1wXCIpKTtcclxuICBpZiAoIXBvaW50IHx8ICF0aW1lc3RhbXApIHtcclxuICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkIG5vdCBhZGQgdGhpcyBkYXRhIHBvaW50LiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7XHJcbiAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGREYXRhUG9pbnQoe1xyXG4gICAgdXNlcklkLFxyXG4gICAgcG9pbnQsXHJcbiAgICB0aW1lc3RhbXAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoQm9hcmQoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZXI/LnVpZDtcclxuICBjb25zdCB7IGRhdGFQb2ludHMgfSA9IHVzZUZpcmViYXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigodXBkYXRlcikgPT5cclxuICAgIGdldEFsbERhdGFQb2ludHNMaXZlKHVzZXJJZCwgKGRhdGFQb2ludHMpID0+IHVwZGF0ZXIoeyBkYXRhUG9pbnRzIH0pKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XHJcbiAgICAgIDxTdGFja1xyXG4gICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XHJcbiAgICAgICAgZWxldmF0aW9uPXszfVxyXG4gICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cclxuICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTIwcHhcIiwgcGFkZGluZzogXCIxMnB4XCIsIG1hcmdpbjogXCIxMnB4XCIsIHdpZHRoOiBcIjgwJVwiIH19XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYXJvdW5kXCJ9XHJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJmbGV4LWVuZFwifVxyXG4gICAgICA+XHJcbiAgICAgICAge2RhdGFQb2ludHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgZGF0YVBvaW50c1xyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcClcclxuICAgICAgICAgICAgLm1hcCgoeyBwb2ludCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7cG9pbnQgKiAxMH1weGAsXHJcbiAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwicHJpbWFyeS5tYWluXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC8gJHtkYXRhUG9pbnRzLmxlbmd0aH0gLSAxMHB4KWAsXHJcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9Cb3g+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkFkZCBzb21lIGRhdGEhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cInBvaW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGltZXN0YW1wXCIgdmFsdWU9e0RhdGUubm93KCl9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgIGFkZCBkYXRhXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxuY29uc3QgREFUQV9QT0lOVFNfQ09MTEVDVElPTiA9IFwiZGF0YVBvaW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBwb2ludDogbnVtYmVyO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50V2l0aElkIGV4dGVuZHMgRGF0YVBvaW50IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgREFUQV9QT0lOVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8RGF0YVBvaW50PjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGRhdGFQb2ludElkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGRhdGFQb2ludElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxEYXRhUG9pbnQ+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICh1c2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8RGF0YVBvaW50PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhdGFQb2ludHModXNlcklkKTogUHJvbWlzZTxEYXRhUG9pbnRXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KHVzZXJJZCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhUG9pbnQoZGF0YVBvaW50SWQpOiBQcm9taXNlPERhdGFQb2ludCB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGRhdGFQb2ludElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRGF0YVBvaW50KGRhdGFQb2ludDogRGF0YVBvaW50KTogUHJvbWlzZTxEYXRhUG9pbnQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVmKCkuYWRkKGRhdGFQb2ludCk7XG5cbiAgICBjb25zdCBuZXdEYXRhUG9pbnQgPSBhd2FpdCBnZXREYXRhUG9pbnQoZG9jUmVmLmlkKTtcbiAgICBpZiAoIW5ld0RhdGFQb2ludCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGFQb2ludDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgdHlwZSBVc2VFZmZlY3RVbnN1YmNyaWJlciA9ICgpID0+IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyZWJhc2VMb2FkZXJEYXRhPFQ+KFxuICBjbGllbnRVcGRhdGVyOiAoXG4gICAgdXBkYXRlcjogKGRhdGE6IFQpID0+IHZvaWRcbiAgKSA9PiBVc2VFZmZlY3RVbnN1YmNyaWJlclxuKTogVCB7XG4gIC8vIGdldCB0aGUgZGF0YSBmb3JtIHRoZSBzZXZlciB2aWEgZmlyZWJhc2UgYWRtaW5cbiAgY29uc3QgbG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGE8VD4oKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VD4obG9hZGVyRGF0YSk7XG5cbiAgLy8gd2hlbiB0aGUgY2xpZW50IGdldHMgYW4gdXBkYXRlIGFsbG93XG4gIC8vIHRoZSBjbGllbnQgdG8gdXBkYXRlIHRoZSBkYXRhXG4gIGZ1bmN0aW9uIHVwZGF0ZXIoZGF0YTogVCkge1xuICAgIHNldERhdGEoZGF0YSk7XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IGNsaWVudFVwZGF0ZXIodXBkYXRlciksIFtsb2FkZXJEYXRhXSk7XG4gIHJldHVybiBkYXRhO1xufSIsICJpbXBvcnQge1xuICByZWRpcmVjdCxcbiAgRm9ybSxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZUFjdGlvbkRhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgYWRkQmxvZ1Bvc3QgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sTGFiZWwsXG4gIFRleHRGaWVsZCxcbiAgU3dpdGNoLFxuICBTdGFjayxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0RhdGVUaW1lUGlja2VyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aG9ySWQ6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICBpZiAoIWFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG4gIH1cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRob3JJZDogdXNlcklkLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgc2x1Zz86IGJvb2xlYW47XG4gIG1hcmtkb3duPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIik7XG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGF1dGhvcklkID0gZm9ybURhdGEuZ2V0KFwiYXV0aG9ySWRcIik7XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgYXV0aG9ySWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuXG4gIGF3YWl0IGFkZEJsb2dQb3N0KHtcbiAgICBhdXRob3JJZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duLFxuICAgIGlzUHVibGlzaGVkLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsPihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW2lzUHVibGlzaGVkLCBzZXRJc1B1Ymxpc2hlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBhdXRob3JJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXV0aG9ySWRcIiB2YWx1ZT17YXV0aG9ySWR9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpc1B1Ymxpc2hlZFwiIHZhbHVlPXtpc1B1Ymxpc2hlZC50b1N0cmluZygpfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICBuYW1lPVwicHVibGlzaERhdGVcIlxuICAgICAgICB2YWx1ZT17ZGF0ZT8uZ2V0VGltZSgpLnRvU3RyaW5nKCl9XG4gICAgICAvPlxuICAgICAgPFN0YWNrXG4gICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgc3g9e3sgbWF4V2lkdGg6IFwiNDUwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XG4gICAgICA+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17aXNQdWJsaXNoZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SXNQdWJsaXNoZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsXCI6IFwiY29udHJvbGxlZFwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD17aXNQdWJsaXNoZWQgPyBcIklzIFB1Ymxpc2hlZFwiIDogXCJOb3QgUHVibGlzaGVkXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPERhdGVUaW1lUGlja2VyIGRhdGU9e2RhdGV9IHNldERhdGU9e3NldERhdGV9IHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnRpdGxlID8gXCJUaXRsZSBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uZGVzY3JpcHRpb24gPyBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uc2x1Z31cbiAgICAgICAgICAgIGlkPVwic2x1Z1wiXG4gICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5zbHVnID8gXCJTbHVnIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5tYXJrZG93bn1cbiAgICAgICAgICAgIGlkPVwibWFya2Rvd25cIlxuICAgICAgICAgICAgbGFiZWw9XCJNYXJrZG93blwiXG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/Lm1hcmtkb3duID8gPGVtPk1hcmtkb3duIGlzIHJlcXVpcmVkPC9lbT4gOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgbmFtZT1cIm1hcmtkb3duXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsyfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICBDcmVhdGUgUG9zdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGFcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgYVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBhXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQSFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBiXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgYlwiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEIhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImIubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgY1wiLFxuICBcInRpdGxlXCI6IFwidGVzdCBjXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGNcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBDIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGxvZ291dChyZXF1ZXN0KTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbn07IiwgImltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJDb2RlIFNhZ2FzOiBDb3B5L1Bhc3RhL1R3ZXJrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29kZXMgU2FnYXMgYSBwbGFjZSB0byBsZWFybiBhIG1pbGxpb24gYW5kIG9uZSB3YXlzIHRvIGNvZGUuXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCI4MHB4IGF1dG9cIixcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgICBMZWFybmluZyB0byBjb2RlIHNpbXBsaWZpZWQgYW5kIHdpdGggc29tZSBodW1vci5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvc2lnbi9pblwiIHNpemU9e1wibGFyZ2VcIn0gdmFyaWFudD17XCJjb250YWluZWRcIn0+U0lHTiBJTjwvQnV0dG9uPlxuICAgICAgPC9BcHBQYXBlcj5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6Jzc4NTU1ZmQ5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1PRVVURlZWUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMlFHTjZVTkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00QTZHTzVUTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpYR1gzN0JXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVBYUUtSTFcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SEFTUFFWRC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSjJVSlhCREsuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFVQlpGQjM0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSkE1V1pDNFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DWTZJQk5ZWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJSQkhWREhZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUtZSlY1UUouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQnOnsnaWQnOidyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQtTzZFTEVGQlEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdCc6eydpZCc6J3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy86YmxvZ1Bvc3RJZC9lZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdC1VTkREVlNHMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSldBVEZCSDMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZaTkdERy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYSc6eydpZCc6J3JvdXRlcy9ibG9nL2EnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9hJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYS1UTEdMVURGSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYic6eydpZCc6J3JvdXRlcy9ibG9nL2InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYi0ySEMzTk01Wi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYyc6eydpZCc6J3JvdXRlcy9ibG9nL2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9jJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYy1NNEFVVldXRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LVRZMjJFTzJILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZaTkdERy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL25ldyc6eydpZCc6J3JvdXRlcy9ibG9nL25ldycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL25ldy1CVjJSVERCUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSldBVEZCSDMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZaTkdERy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1NNktSNUo0US5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1TQVo1TUxJSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1WQkxEUE5ISC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWduLiRhdXRoVHlwZSc6eydpZCc6J3JvdXRlcy9zaWduLiRhdXRoVHlwZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWduLzphdXRoVHlwZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWduLiRhdXRoVHlwZS1FNFRSU1NYTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdXBkYXRlLXNlc3Npb24nOnsnaWQnOidyb3V0ZXMvdXBkYXRlLXNlc3Npb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondXBkYXRlLXNlc3Npb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24tWFRVVUFPU1IuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC03ODU1NUZEOS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7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VUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEN0dkLHdCQUF3QixPQUFPLFNBQVM7QUFDdEMsTUFBSTtBQUNKLE1BQUk7QUFFSixNQUFJLE1BQU0saUJBQWlCLE1BQU07QUFDL0Isd0JBQW9CLE1BQU07QUFBQTtBQUc1QixRQUFNLGFBQWEsTUFBTSxRQUFRO0FBQ2pDLFFBQU0sdUJBQXVCLE1BQU0sUUFBUTtBQUUzQyxNQUFJLGNBQWMsUUFBUSxZQUFZLEtBQUssYUFBYTtBQUN0RCw2QkFBeUIsV0FBVyxNQUFNLEtBQUs7QUFBQTtBQUdqRCxRQUFNLGNBQWM7QUFBQSxJQUNsQiwrQkFBK0I7QUFBQSxJQUMvQjtBQUFBLElBQ0EsdUJBQXVCO0FBQUE7QUFJekIsU0FBTyxLQUFLLGFBQWEsUUFBUSxTQUFPO0FBQ3RDLFFBQUksWUFBWSxRQUFRLE1BQU07QUFDNUIsYUFBTyxZQUFZO0FBQUE7QUFBQTtBQUl2QixTQUFPO0FBQUE7QUFHRixJQUFNLFVBQVUseUNBQXFCO0FBQUEsRUFDMUM7QUFBQSxFQUNBO0FBQUEsRUFDQSxNQUFNO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
