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
  default: () => PostSlug
});
init_react();
function PostSlug() {
  return /* @__PURE__ */ React.createElement("div", null, "coming soon");
}

// route:/root/projects/remix-starter/app/routes/sign.$authType.tsx
var sign_authType_exports = {};
__export(sign_authType_exports, {
  AUTH_TYPES: () => AUTH_TYPES,
  default: () => Login,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_Stack2 = __toESM(require("@mui/material/Stack"));
var import_Paper2 = __toESM(require("@mui/material/Paper"));
var import_Button3 = __toESM(require("@mui/material/Button"));
var import_TextField2 = __toESM(require("@mui/material/TextField"));
var import_ToggleButton = __toESM(require("@mui/material/ToggleButton"));
var import_ToggleButtonGroup = __toESM(require("@mui/material/ToggleButtonGroup"));
var import_remix9 = __toESM(require_remix());
var import_react9 = require("react");
var import_material6 = require("@mui/material");
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
var loader3 = async ({ request, params }) => {
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
  const { authType: initAuthType } = (0, import_remix9.useLoaderData)();
  const [actionData, setActionData] = (0, import_react9.useState)({});
  const [authType, setAuthType] = (0, import_react9.useState)(initAuthType);
  const handleAuthType = (event, newAuthType) => {
    if (!newAuthType)
      return;
    setAuthType(newAuthType);
  };
  (0, import_react9.useEffect)(() => {
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
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h1",
    textAlign: "center"
  }, authType), /* @__PURE__ */ React.createElement(import_remix9.Form, {
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
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email) ? /* @__PURE__ */ React.createElement(import_material6.Typography, {
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
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.password) ? /* @__PURE__ */ React.createElement(import_material6.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement(import_material6.Typography, {
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
  loader: () => loader4
});
init_react();
var import_material8 = require("@mui/material");
var import_remix11 = __toESM(require_remix());

// app/components/BlogCard.tsx
init_react();
var import_Card = __toESM(require("@mui/material/Card"));
var import_CardContent = __toESM(require("@mui/material/CardContent"));
var import_CardMedia = __toESM(require("@mui/material/CardMedia"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material7 = require("@mui/material");
var import_remix10 = __toESM(require_remix());
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
  }, /* @__PURE__ */ React.createElement(import_material7.CardActionArea, {
    component: import_remix10.Link,
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
var loader4 = async ({
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
  const { posts, isAuthor } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material8.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(import_material8.Typography, {
    variant: "h1",
    textAlign: "center"
  }, "Blog"), isAuthor ? /* @__PURE__ */ React.createElement(import_material8.Button, {
    component: import_remix11.Link,
    to: "/blog/new"
  }, "Add Blog Post") : null), /* @__PURE__ */ React.createElement(import_material8.Stack, {
    direction: { xs: "column", md: "row" },
    sx: {
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    },
    justifyContent: "space-around"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(import_material8.Box, {
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
  loader: () => loader5
});
init_react();
var import_remix13 = __toESM(require_remix());
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
var import_material9 = require("@mui/material");
var import_react11 = require("react");

// app/hooks/useFirebaseLoaderData.ts
init_react();
var import_react10 = require("react");
var import_remix12 = __toESM(require_remix());
function useFirebaseLoaderData(clientUpdater) {
  const loaderData = (0, import_remix12.useLoaderData)();
  const [data, setData] = (0, import_react10.useState)(loaderData);
  function updater(data2) {
    setData(data2);
  }
  (0, import_react10.useEffect)(() => clientUpdater(updater), [loaderData]);
  return data;
}

// route:/root/projects/remix-starter/app/routes/dashboard.tsx
var loader5 = async ({ request, params }) => {
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
  const user = (0, import_react11.useContext)(AuthContext);
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
  })) : /* @__PURE__ */ React.createElement(import_material9.Typography, {
    variant: "h3"
  }, "Add some data!")), /* @__PURE__ */ React.createElement(import_Box3.default, null, /* @__PURE__ */ React.createElement(import_remix13.Form, {
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
  loader: () => loader6
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_material10 = require("@mui/material");
var import_system2 = require("@mui/system");
var import_react12 = require("react");
var loader6 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
    return (0, import_remix14.redirect)("/blog");
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
  (0, import_tiny_invariant2.default)(typeof title === "string");
  (0, import_tiny_invariant2.default)(typeof slug === "string");
  (0, import_tiny_invariant2.default)(typeof markdown === "string");
  (0, import_tiny_invariant2.default)(typeof description === "string");
  (0, import_tiny_invariant2.default)(typeof authorId === "string");
  (0, import_tiny_invariant2.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant2.default)(typeof publishDate === "number");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description
  });
  return (0, import_remix14.redirect)("/blog");
};
function NewPost2() {
  const [date, setDate] = (0, import_react12.useState)(new Date());
  const [isPublished, setIsPublished] = (0, import_react12.useState)(true);
  const { authorId } = (0, import_remix14.useLoaderData)();
  const errors = (0, import_remix14.useActionData)();
  return /* @__PURE__ */ React.createElement(import_remix14.Form, {
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
  }), /* @__PURE__ */ React.createElement(import_material10.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: { maxWidth: "450px", margin: "0 auto" }
  }, /* @__PURE__ */ React.createElement(import_system2.Box, null, /* @__PURE__ */ React.createElement(import_material10.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material10.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_system2.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_system2.Box, null, /* @__PURE__ */ React.createElement(import_material10.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_system2.Box, null, /* @__PURE__ */ React.createElement(import_material10.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_system2.Box, null, /* @__PURE__ */ React.createElement(import_material10.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_system2.Box, null, /* @__PURE__ */ React.createElement(import_material10.TextField, {
    error: errors == null ? void 0 : errors.markdown,
    id: "markdown",
    label: "Markdown",
    helperText: (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null,
    variant: "filled",
    multiline: true,
    rows: 10,
    name: "markdown",
    fullWidth: true
  })), /* @__PURE__ */ React.createElement(import_material10.Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_material10.Button, {
    type: "submit",
    color: "secondary"
  }, "Preview"), /* @__PURE__ */ React.createElement(import_material10.Button, {
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
var import_react13 = __toESM(require("react"));
var attributes = {
  "meta": "test a",
  "title": "test a",
  "description": "test a"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(_components.h1, null, "What A!"));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
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
var import_react14 = __toESM(require("react"));
var attributes2 = {
  "meta": "test b",
  "title": "test b",
  "description": "test b"
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(_components.h1, null, "What B!"));
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
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
var import_react15 = __toESM(require("react"));
var attributes3 = {
  "meta": "test c",
  "title": "test c",
  "description": "test c"
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.h1, null, "What C!"));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
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
  loader: () => loader7
});
init_react();
var import_remix15 = __toESM(require_remix());
var action5 = async ({ request }) => {
  return logout(request);
};
var loader7 = async () => {
  return (0, import_remix15.redirect)("/");
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
var import_remix16 = __toESM(require_remix());
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
    component: import_remix16.Link,
    to: "/sign/in",
    size: "large",
    variant: "contained"
  }, "SIGN IN")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "1919c719", "entry": { "module": "/build/entry.client-TJQD2EXC.js", "imports": ["/build/_shared/chunk-4XZFBMJC.js", "/build/_shared/chunk-TI3LOCGR.js", "/build/_shared/chunk-CGTVLEGA.js", "/build/_shared/chunk-O2DVCDQS.js", "/build/_shared/chunk-5TFQ3ZYS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3LPSMJYN.js", "imports": ["/build/_shared/chunk-SKANYTLV.js", "/build/_shared/chunk-5WHSHUO4.js", "/build/_shared/chunk-XQ2ORWJ6.js", "/build/_shared/chunk-TKSZ7W74.js", "/build/_shared/chunk-LPD4FUO4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-M45WBLCD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-UVB43MAC.js", "imports": ["/build/_shared/chunk-2HOA4GJ3.js", "/build/_shared/chunk-ZATZW735.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-EP3V47KV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-VSMIXBV4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-QLJU5BNW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-RT3LZHGP.js", "imports": ["/build/_shared/chunk-ZATZW735.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-WB6GHQ5O.js", "imports": ["/build/_shared/chunk-2HOA4GJ3.js", "/build/_shared/chunk-ZATZW735.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-U3SHSJOP.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-3WLEOWSN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-R2A2HPGM.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-7MTLMREE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-2C52BCJK.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1919C719.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3N0YXRlL0F1dGhQcm92aWRlci50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTG9nb3V0Rm9ybS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwQmFyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BdXRoQ29udHJvbHMudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NpZ25PdXRCdXR0b24udHN4IiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9hdXRoLnRzIiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9maXJlYmFzZS50cyIsICIuLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0FwcFBhcGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0LnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9ibG9nUG9zdHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2RiL2FwcFVzZXJzL3R5cGVzLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0RhdGVUaW1lUGlja2VyLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9CbG9nQ2FyZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Rhc2hib2FyZC50c3giLCAiLi4vLi4vLi4vYXBwL2RiL2RhdGFQb2ludHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9ob29rcy91c2VGaXJlYmFzZUxvYWRlckRhdGEudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvbmV3LnRzeCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvYS5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2IubWR4IiwgIm1keDovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9jLm1keCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgImltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbmV0bGlmeVwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG4vKlxuICogUmV0dXJucyBhIGNvbnRleHQgb2JqZWN0IHdpdGggYXQgbW9zdCAzIGtleXM6XG4gKiAgLSBgbmV0bGlmeUdyYXBoVG9rZW5gOiByYXcgYXV0aGVudGljYXRpb24gdG9rZW4gdG8gdXNlIHdpdGggTmV0bGlmeSBHcmFwaFxuICogIC0gYGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuYDogRm9yIHVzZSB3aXRoIEpXVHMgZ2VuZXJhdGVkIGJ5XG4gKiAgICBgbmV0bGlmeS1ncmFwaC1hdXRoYC5cbiAqICAtIGBuZXRsaWZ5R3JhcGhTaWduYXR1cmVgOiBhIHNpZ25hdHVyZSBmb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gV2lsbCBiZVxuICogICAgcHJlc2VudCBpZiBhIHNlY3JldCBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldExvYWRDb250ZXh0KGV2ZW50LCBjb250ZXh0KSB7XG4gIGxldCByYXdBdXRob3JpemF0aW9uU3RyaW5nO1xuICBsZXQgbmV0bGlmeUdyYXBoVG9rZW47XG5cbiAgaWYgKGV2ZW50LmF1dGhsaWZ5VG9rZW4gIT0gbnVsbCkge1xuICAgIG5ldGxpZnlHcmFwaFRva2VuID0gZXZlbnQuYXV0aGxpZnlUb2tlbjtcbiAgfVxuXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgY29uc3QgZ3JhcGhTaWduYXR1cmVIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wieC1uZXRsaWZ5LWdyYXBoLXNpZ25hdHVyZVwiXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdChcIiBcIilbMV07XG4gIH1cblxuICBjb25zdCBsb2FkQ29udGV4dCA9IHtcbiAgICBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbjogcmF3QXV0aG9yaXphdGlvblN0cmluZyxcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbjogbmV0bGlmeUdyYXBoVG9rZW4sXG4gICAgbmV0bGlmeUdyYXBoU2lnbmF0dXJlOiBncmFwaFNpZ25hdHVyZUhlYWRlclxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChsb2FkQ29udGV4dFtrZXldID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBsb2FkQ29udGV4dFtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvYWRDb250ZXh0O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgYnVpbGQsXG4gIGdldExvYWRDb250ZXh0LFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2EubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9jLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvOmJsb2dQb3N0SWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nLzpibG9nUG9zdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zaWduLiRhdXRoVHlwZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbi86YXV0aFR5cGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3VwZGF0ZS1zZXNzaW9uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ1cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9hXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvYVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvY1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL2NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfVxuICB9OyIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbW90aW9uQ2FjaGUgfSBmcm9tIFwifi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIn4vdGhlbWVcIjtcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGNvbnN0IE11aVJlbWl4U2VydmVyID0gKCkgPT4gKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcblxuICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudCB0byBhIHN0cmluZy5cbiAgY29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKDxNdWlSZW1peFNlcnZlciAvPik7XG5cbiAgLy8gR3JhYiB0aGUgQ1NTIGZyb20gZW1vdGlvblxuICBjb25zdCB7IHN0eWxlcyB9ID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cbiAgbGV0IHN0eWxlc0hUTUwgPSBcIlwiO1xuXG4gIHN0eWxlcy5mb3JFYWNoKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4ge1xuICAgIGNvbnN0IGVtb3Rpb25LZXkgPSBgJHtrZXl9ICR7aWRzLmpvaW4oXCIgXCIpfWA7XG4gICAgY29uc3QgbmV3U3R5bGVUYWcgPSBgPHN0eWxlIGRhdGEtZW1vdGlvbj1cIiR7ZW1vdGlvbktleX1cIj4ke2Nzc308L3N0eWxlPmA7XG4gICAgc3R5bGVzSFRNTCA9IGAke3N0eWxlc0hUTUx9JHtuZXdTdHlsZVRhZ31gO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIGVtb3Rpb24gc3R5bGUgdGFncyBhZnRlciB0aGUgaW5zZXJ0aW9uIHBvaW50IG1ldGEgdGFnXG4gIGNvbnN0IG1hcmt1cCA9IGh0bWwucmVwbGFjZShcbiAgICAvPG1ldGEoXFxzKSpuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKmNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqXFwvPi8sXG4gICAgYDxtZXRhIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiLz4ke3N0eWxlc0hUTUx9YFxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIn4vdGhlbWUvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6IFwiZGFya1wiLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IENPTE9SUy5QUklNQVJZLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuU0VDT05EQVJZLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IENPTE9SUy5FUlJPUixcbiAgICB9LFxuICAgIHdhcm5pbmc6IHtcbiAgICAgIG1haW46IENPTE9SUy5XQVJOSU5HLFxuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgbWFpbjogQ09MT1JTLklORk8sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBtYWluOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IENPTE9SUy5CQUNLR1JPVU5ELkRFRkFVTFQsXG4gICAgICBwYXBlcjogQ09MT1JTLkJBQ0tHUk9VTkQuUEFQRVIsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBcdTI2OUJcdUZFMEZcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsIC8vIE5vIG1vcmUgcmlwcGxlLCBvbiB0aGUgd2hvbGUgYXBwbGljYXRpb24gXHVEODNEXHVEQ0EzIVxuICAgICAgICAvLyB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTsiLCAiZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgUFJJTUFSWTogXCIjODUwMEZGXCIsXG4gIFNFQ09OREFSWTogXCIjMDBGRkI4XCIsXG4gIC8vIEVSUk9SOiBcIiNGRjAwNDdcIixcbiAgRVJST1I6IFwiI2ZmMmYwMFwiLFxuICBXQVJOSU5HOiBcIiNGRkE1MDBcIixcbiAgSU5GTzogXCIjMDBFN0ZGXCIsXG4gIFNVQ0NFU1M6IFwiIzAwRkY3RVwiLFxuICBCQUNLR1JPVU5EOiB7XG4gICAgREVGQVVMVDogXCIjMEYwRjE1XCIsXG4gICAgUEFQRVI6IFwiIzA3MDMxOVwiLFxuICB9LFxufTtcbiIsICJpbXBvcnQge1xuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgT3V0bGV0LCB1c2VDYXRjaCwgTWV0YSwgU2NyaXB0cyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIn4vc3RhdGUvQXV0aFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBTdGFjaywgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBCYXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcEJhclwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgQXV0aFVzZXIsIGdldEF1dGhVc2VyLCBnZXRVc2VyVG9rZW4gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIsIHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUVtb3Rpb25DYWNoZSB9IGZyb20gXCJ+L3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZVwiO1xuaW1wb3J0IHsgdW5zdGFibGVfdXNlRW5oYW5jZWRFZmZlY3QgYXMgdXNlRW5oYW5jZWRFZmZlY3QgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsaWVudFN0eWxlQ29udGV4dCBmcm9tIFwifi90aGVtZS9DbGllbnRTdHlsZUNvbnRleHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL21vZGVybi1jc3MtcmVzZXRAMS40LjAvZGlzdC9yZXNldC5taW4uY3NzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZ2xvYmFsU3R5bGVzVXJsLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYENvZGUgU2FnYXMgaXMgYSBwbGFjZSB0byBsZWFybiBhIG1pbGxpb24gYW5kIG9uZSB3YXlzIHRvIGNvZGUuYDtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBrZXl3b3JkczogXCJjb2RlLHNhZ2FzLGxlYXJuXCIsXG4gICAgXCJ0d2l0dGVyOmltYWdlXCI6IFwiaHR0cHM6Ly9jb2Rlc2FnYXMuY29tL3NvY2lhbC5wbmdcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBjb2Rlc2FnYXNcIixcbiAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBjb2Rlc2FnYXNcIixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJDb2RlIFNhZ2FzXCIsXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuICAoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG4gICAgY29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXG4gICAgLy8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcbiAgICB1c2VFbmhhbmNlZEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICAvLyByZS1pbmplY3QgdGFnc1xuICAgICAgY29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG4gICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgKGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcbiAgICAgIH0pO1xuICAgICAgLy8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG4gICAgICBjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxuICAgICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbik7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgdXNlcjogQXV0aFVzZXIgfCBudWxsOyB1c2VyVG9rZW46IHN0cmluZyB8IG51bGwgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldEF1dGhVc2VyKHJlcXVlc3QpO1xuICBjb25zdCB1c2VyVG9rZW4gPSBhd2FpdCBnZXRVc2VyVG9rZW4ocmVxdWVzdCk7XG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICB1c2VyLFxuICAgIHVzZXJUb2tlbixcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuZnVuY3Rpb24gUHJvdmlkZXJzKHtcbiAgdXNlcixcbiAgY2hpbGRyZW4sXG4gIHVzZXJUb2tlbixcbn06IHtcbiAgdXNlcjogQXV0aFVzZXIgfCBudWxsO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB1c2VyVG9rZW46IHN0cmluZyB8IG51bGw7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlciB1c2VyPXt1c2VyfSB1c2VyVG9rZW49e3VzZXJUb2tlbn0+XG4gICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgeyB1c2VyLCB1c2VyVG9rZW4gfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxQcm92aWRlcnMgdXNlcj17dXNlcn0gdXNlclRva2VuPXt1c2VyVG9rZW59PlxuICAgICAgICA8QXBwQmFyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvUHJvdmlkZXJzPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvb3RFcnJvcih7XG4gIGRvY1RpdGxlID0gXCJPb3BzIVwiLFxuICB0aXRsZSA9IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFx1RDgzRFx1REUyNVwiLFxuICBtZXNzYWdlID0gXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17ZG9jVGl0bGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcFBhcGVyIGxlZnRDb2xvcj1cImVycm9yXCIgcmlnaHRDb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57bWVzc2FnZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgdGl0bGUgPSBgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWA7XG4gIHJldHVybiAoXG4gICAgPFJvb3RFcnJvclxuICAgICAgZG9jVGl0bGU9e3RpdGxlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgbWVzc2FnZT17XG4gICAgICAgIFwiV2VsbCB0aGlzIGlzIGVtYmFyc2luZy4gXHVEODNEXHVERTA1IEhhdmUgeW91IHRyaWVkIHR1cm5pbmcgaXQgb2ZmIGFuZCBiYWNrIG9uIGFnYWluP1wiXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8Um9vdEVycm9yIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+O1xufVxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VGZXRjaGVyLCB1c2VMb2NhdGlvbiwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMb2dvdXRGb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvdXRGb3JtXCI7XG5pbXBvcnQgeyBhZGRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEF1dGhVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoVXNlciB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHVzZXI6IHVzZXJQcm9wLFxuICB1c2VyVG9rZW46IHVzZXJUb2tlblByb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxBdXRoVXNlciB8IG51bGw+KHVzZXJQcm9wKTtcbiAgY29uc3QgbG9nb3V0Rm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPih1c2VyVG9rZW5Qcm9wIHx8IFwiXCIpO1xuICBjb25zdCB1c2VyVG9rZW5Gb3JtID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyUHJvcCk7XG4gIH0sIFt1c2VyUHJvcF0pO1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBwYXRobmFtZS5pbmNsdWRlcyhcIi9zaWduL1wiKSA/IFwiL2Rhc2hib2FyZFwiIDogcGF0aG5hbWU7XG5cbiAgZnVuY3Rpb24gc2VuZFVzZXJUb2tlbigpIHtcbiAgICBpZiAoIXVzZXJUb2tlbkZvcm0uY3VycmVudCkgcmV0dXJuO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHVzZXJUb2tlbkZvcm0uY3VycmVudCk7XG4gICAgZmV0Y2hlci5zdWJtaXQoZm9ybURhdGEsIHttZXRob2Q6IFwicG9zdFwiLCBhY3Rpb246XCIvdXBkYXRlLXNlc3Npb25cIn0pXG4gIH1cblxuICAvLyBsaXN0ZW4gZm9yIHRva2VuIGNoYW5nZXNcbiAgLy8gY2FsbCBzZXRVc2VyIGFuZCB3cml0ZSBuZXcgdG9rZW4gYXMgYSBjb29raWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHJldHVybiBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoYXN5bmMgKHVzZXJGcm9tQ2hhbmdlKSA9PiB7XG4gICAgICBpZiAodXNlckZyb21DaGFuZ2UgPT09IG51bGwgJiYgdXNlciAhPT0gbnVsbCkge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICBpZiAoIWxvZ291dEZvcm1SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBsb2dvdXRGb3JtUmVmLmN1cnJlbnQuc3VibWl0KCk7XG4gICAgICB9IGVsc2UgaWYgKHVzZXJGcm9tQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlckZyb21DaGFuZ2UuZ2V0SWRUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4gIT09IHVzZXJUb2tlbikge1xuICAgICAgICAgIHNldFVzZXIodXNlckZyb21DaGFuZ2UpO1xuICAgICAgICAgIHNldFVzZXJUb2tlbih0b2tlbik7XG4gICAgICAgICAgYXdhaXQgYWRkQXBwVXNlcih1c2VyRnJvbUNoYW5nZS51aWQpO1xuICAgICAgICAgIHNlbmRVc2VyVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbdXNlcl0pO1xuXG4gIC8vIGZvcmNlIHJlZnJlc2ggdGhlIHRva2VuIGV2ZXJ5IDEwIG1pbnV0ZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XG4gICAgICBpZiAodXNlcikgYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xuICAgIH0sIDEwICogNjAgKiAxMDAwKTtcblxuICAgIC8vIGNsZWFuIHVwIHNldEludGVydmFsXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgfSwgW10pO1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyfT5cbiAgICAgIDxMb2dvdXRGb3JtIHJlZj17bG9nb3V0Rm9ybVJlZn0gLz5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiByZWY9e3VzZXJUb2tlbkZvcm19IGFjdGlvbj1cIi91cGRhdGUtc2Vzc2lvblwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbWV0aG9kXCIgdmFsdWU9XCJwdXRcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VyVG9rZW5cIiB2YWx1ZT17dXNlclRva2VufSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHJlZGlyZWN0VG99XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iLCAiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybVByb3BzIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBMb2dvdXRGb3JtID0gZm9yd2FyZFJlZjxIVE1MRm9ybUVsZW1lbnQsIEZvcm1Qcm9wcz4oXG4gIChwcm9wcywgcmVmKSA9PiA8Rm9ybSByZWY9e3JlZn0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIiB7Li4ucHJvcHN9IC8+XG4pO1xuIiwgImltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xuaW1wb3J0IEF1dGhDb250cm9scyBmcm9tIFwifi9jb21wb25lbnRzL0F1dGhDb250cm9sc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwQmFyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXVpQXBwQmFyPlxuICAgICAgICA8VG9vbGJhclxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59LCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59KWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDbGlwOiBcInRleHRcIixcbiAgICAgICAgICAgICAgdGV4dEZpbGxDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ09ERSBTQUdBU1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxBdXRoQ29udHJvbHMgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9NdWlBcHBCYXI+XG4gICAgICA8Qm94IHN4PXt7IG1hcmdpbkJvdHRvbTogXCI2NHB4XCIgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IFNpZ25PdXRCdXR0b24gfSBmcm9tIFwifi9jb21wb25lbnRzL1NpZ25PdXRCdXR0b25cIjtcbmltcG9ydCB7IExvZ291dEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL0xvZ291dEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluVXAoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VBdXRoKCk7XG4gIHJldHVybiB1c2VyID09PSBudWxsID8gKFxuICAgIDxCb3g+XG4gICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvc2lnbi9pblwiPlxuICAgICAgICBzaWduIGluXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc3g9e3sgbWFyZ2luTGVmdDogMiB9fVxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgIHRvPVwiL3NpZ24vdXBcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHNpZ24gdXBcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApIDogKFxuICAgIDxCb3g+XG4gICAgICA8TG9nb3V0Rm9ybT5cbiAgICAgICAgPFNpZ25PdXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgc2lnbiBvdXRcbiAgICAgICAgPC9TaWduT3V0QnV0dG9uPlxuICAgICAgPC9Mb2dvdXRGb3JtPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ25PdXRCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8PlxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IHsuLi5wcm9wc30+c2lnbiBvdXQ8L0J1dHRvbj5cclxuICA8Lz5cclxuKTtcclxuXHJcbiIsICJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIG9uSWRUb2tlbkNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICBhdXRoXHJcbiAgICAuc2lnbk91dCgpXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dCFcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0aFN0YXRlQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiKHVzZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWRUb2tlbkNoYW5nZWQoY2IpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICByZXR1cm4gb25JZFRva2VuQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpe1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclRva2VuUmVmcmVzaCgpe1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG4gIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBdXRoRW11bGF0b3IsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdEZpcmVzdG9yZUVtdWxhdG9yLCBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5sZXQgYXBwLCBhdXRoLCBkYjtcclxuXHJcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xyXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUEzNFpXR1hKZlpsUjZ1OHpzZks1bmJzSHBpZ3JfYU01OFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjb2Rlc2FnYXMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY29kZXNhZ2FzXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImNvZGVzYWdhcy5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDM0NzQzOTExNTU0XCIsXHJcbiAgICBhcHBJZDogXCIxOjQzNDc0MzkxMTU1NDp3ZWI6NGM0Yjc0ZjAzOWJiNWYyYTk4ODA5YlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVJGTjQ3SkszOE5cIixcclxuICB9O1xyXG4gIGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgY29ubmVjdEZpcmVzdG9yZUVtdWxhdG9yKGRiLCBcImxvY2FsaG9zdFwiLCA4MDgwKTtcclxuICAgIGNvbm5lY3RBdXRoRW11bGF0b3IoYXV0aCwgXCJodHRwOi8vbG9jYWxob3N0OjkwOTlcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBhcHAsIGF1dGgsIGRiLCBnZXRBdXRoLCBnZXRGaXJlc3RvcmUgfTtcclxuIiwgImltcG9ydCB7IERlY29kZWRJZFRva2VuIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2xpYi9hdXRoL3Rva2VuLXZlcmlmaWVyXCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBlbWFpbEFuZFBhc3N3b3JkU2lnbkluLFxuICBlbWFpbEFuZFBhc3N3b3JkU2lnblVwLFxufSBmcm9tIFwifi9maXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxudHlwZSBMb2dpbkZvcm0gPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBdXRoVXNlciA9IERlY29kZWRJZFRva2VuIHwgVXNlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgZW1haWwsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25VcCh7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKTogUHJvbWlzZTxVc2VyPiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmxldCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIik7XG59XG5cbmxldCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcImNzX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJUb2tlbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGxldCB1c2VyVG9rZW4gPSBzZXNzaW9uLmdldChcInVzZXJUb2tlblwiKTtcbiAgaWYgKCF1c2VyVG9rZW4gfHwgdHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VyVG9rZW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoVXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxBdXRoVXNlciB8IG51bGw+IHtcbiAgbGV0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcbiAgaWYgKHR5cGVvZiB1c2VyVG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYXV0aGVkVXNlciA9IGF3YWl0IGdldEF1dGgoKS52ZXJpZnlJZFRva2VuKHVzZXJUb2tlbik7XG4gICAgcmV0dXJuIGF1dGhlZFVzZXI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldEF1dGhVc2VyIGVycm9yXCIsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGxldCBhdXRoVXNlciA9IGF3YWl0IGdldEF1dGhVc2VyKHJlcXVlc3QpO1xuICAgIHJldHVybiBhdXRoVXNlcj8udWlkIHx8IG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRVc2VySWQgZXJyb3JcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGxldCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pO1xuICAgIHRocm93IHJlZGlyZWN0KGAvc2lnbi9pbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvc2lnbi9pblwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyVG9rZW46IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG4gIHNlc3Npb24uc2V0KFwidXNlclRva2VuXCIsIHVzZXJUb2tlbik7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBjZXJ0LCBnZXRBcHBzLCBBcHAgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXBwXCI7XG5pbXBvcnQgeyBBdXRoLCBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgRmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuXG5sZXQgYXBwOiBBcHAsIGF1dGg6IEF1dGgsIGRiOiBGaXJlc3RvcmU7XG5pZiAoIWdldEFwcHMoKS5sZW5ndGgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBwcm9jZXNzLmVudi5GSVJFU1RPUkVfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjgwODBcIjtcbiAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0VNVUxBVE9SX0hPU1QgPSBcImxvY2FsaG9zdDo5MDk5XCI7XG4gIH1cbiAgY29uc3QgZW5jb2RlZEtleSA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BSSVZBVEVfS0VZX0JBU0U2NCB8fCBcIlwiO1xuICBjb25zdCBkZWNvZGVkS2V5ID0gQnVmZmVyLmZyb20oZW5jb2RlZEtleSwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGY4XCIpO1xuICBhcHAgPSBpbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBjZXJ0KHtcbiAgICAgIHByaXZhdGVLZXk6IGRlY29kZWRLZXksXG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xJRU5UX0VNQUlMLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxuICAgIH0pLFxuICAgIGRhdGFiYXNlVVJMOiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUR9LmZpcmViYXNlaW8uY29tYCxcbiAgfSk7XG4gIGF1dGggPSBnZXRBdXRoKCk7XG4gIGRiID0gZ2V0RmlyZXN0b3JlKCk7XG59XG5cbmV4cG9ydCB7IGFwcCwgYXV0aCwgZ2V0QXV0aCwgZGIsIGdldEZpcmVzdG9yZSB9O1xuIiwgImltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxlZnRDb2xvcj86IHN0cmluZztcbiAgcmlnaHRDb2xvcj86IHN0cmluZztcbiAgc3g/OiBvYmplY3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gQXBwUGFwZXIoe1xuICBjaGlsZHJlbixcbiAgbGVmdENvbG9yID0gXCJwcmltYXJ5XCIsXG4gIHJpZ2h0Q29sb3IgPSBcInNlY29uZGFyeVwiLFxuICBzeCA9IHt9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBwYWRkaW5nOiA0LFxuXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXG4gICAgICAgIGJvcmRlcjogXCJzb2xpZCA1cHggdHJhbnNwYXJlbnRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFlbVwiLFxuXG4gICAgICAgIFwiJjpiZWZvcmUgXCI6IHtcbiAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICBtYXJnaW46IFwiLTVweFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHt0aGVtZS5wYWxldHRlW2xlZnRDb2xvcl0ubWFpbn0sICR7dGhlbWUucGFsZXR0ZVtyaWdodENvbG9yXS5tYWlufSlgLFxuICAgICAgICB9LFxuICAgICAgICAuLi5zeCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50U3R5bGVDb250ZXh0RGF0YSB7XG4gIHJlc2V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0PENsaWVudFN0eWxlQ29udGV4dERhdGE+KHtcbiAgcmVzZXQ6ICgpID0+IHt9LFxufSk7IiwgImltcG9ydCB7XG4gIHJlZGlyZWN0LFxuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgTGluayxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQge1xuICBhZGRCbG9nUG9zdCxcbiAgQmxvZ1Bvc3RXaXRoSWQsXG4gIGdldEJsb2dQb3N0LFxufSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sTGFiZWwsXG4gIFRleHRGaWVsZCxcbiAgU3dpdGNoLFxuICBTdGFjayxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0RhdGVUaW1lUGlja2VyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIGV4dGVuZHMgQmxvZ1Bvc3RXaXRoSWQge1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgbGV0IGlzQXV0aG9yID0gZmFsc2U7XG4gIGlmICh1c2VySWQpIHtcbiAgICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICAgIGlmICghYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xuICAgIH1cbiAgfVxuICBpbnZhcmlhbnQocGFyYW1zLmJsb2dQb3N0SWQsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XG4gIGNvbnN0IGJsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QocGFyYW1zLmJsb2dQb3N0SWQpO1xuICBpbnZhcmlhbnQoYmxvZ1Bvc3QsIFwiZXhwZWN0ZWQgYmxvZ1Bvc3RcIik7XG4gIHJldHVybiB7IC4uLmJsb2dQb3N0LCBpc0F1dGhvciB9O1xufTtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgc2x1Zz86IGJvb2xlYW47XG4gIG1hcmtkb3duPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIik7XG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGF1dGhvcklkID0gZm9ybURhdGEuZ2V0KFwiYXV0aG9ySWRcIik7XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgYXV0aG9ySWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuXG4gIGF3YWl0IGFkZEJsb2dQb3N0KHtcbiAgICBhdXRob3JJZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duLFxuICAgIGlzUHVibGlzaGVkLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IHtcbiAgICBhdXRob3JJZCxcbiAgICBpc1B1Ymxpc2hlZDogaW5pdElzUHVibGlzaGVkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd24sXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsPihuZXcgRGF0ZShwdWJsaXNoRGF0ZSkpO1xuICBjb25zdCBbaXNQdWJsaXNoZWQsIHNldElzUHVibGlzaGVkXSA9IHVzZVN0YXRlKGluaXRJc1B1Ymxpc2hlZCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdXRob3JJZFwiIHZhbHVlPXthdXRob3JJZH0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlzUHVibGlzaGVkXCIgdmFsdWU9e2lzUHVibGlzaGVkLnRvU3RyaW5nKCl9IC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgIG5hbWU9XCJwdWJsaXNoRGF0ZVwiXG4gICAgICAgIHZhbHVlPXtkYXRlPy5nZXRUaW1lKCkudG9TdHJpbmcoKX1cbiAgICAgIC8+XG4gICAgICA8U3RhY2tcbiAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIlxuICAgICAgICBzeD17eyBtYXhXaWR0aDogXCI0NTBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX1cbiAgICAgID5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJc1B1Ymxpc2hlZChldmVudC50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJjb250cm9sbGVkXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPXtpc1B1Ymxpc2hlZCA/IFwiSXMgUHVibGlzaGVkXCIgOiBcIk5vdCBQdWJsaXNoZWRcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8RGF0ZVRpbWVQaWNrZXIgZGF0ZT17ZGF0ZX0gc2V0RGF0ZT17c2V0RGF0ZX0gdmFyaWFudD1cImZpbGxlZFwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnRpdGxlfVxuICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8udGl0bGUgPyBcIlRpdGxlIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uZGVzY3JpcHRpb24gPyBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnNsdWd9XG4gICAgICAgICAgICBpZD1cInNsdWdcIlxuICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NsdWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8ubWFya2Rvd259XG4gICAgICAgICAgICBpZD1cIm1hcmtkb3duXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWFya2Rvd25cIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5tYXJrZG93biA/IDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIG5hbWU9XCJtYXJrZG93blwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWFya2Rvd259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezJ9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgU2F2ZSBQb3N0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxuY29uc3QgQkxPR19QT1NUU19DT0xMRUNUSU9OID0gXCJibG9nUG9zdHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCbG9nUG9zdCB7XG4gIGF1dGhvcklkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgbWFya2Rvd246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaXNQdWJsaXNoZWQ6IGJvb2xlYW47XG4gIHB1Ymxpc2hEYXRlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsb2dQb3N0V2l0aElkIGV4dGVuZHMgQmxvZ1Bvc3Qge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBCTE9HX1BPU1RTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEJsb2dQb3N0PjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGJsb2dQb3N0SWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoYmxvZ1Bvc3RJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICgpID0+IGdldENvbGxlY3Rpb25SZWYoKSBhcyBRdWVyeTxCbG9nUG9zdD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCbG9nUG9zdHMoKTogUHJvbWlzZTxCbG9nUG9zdFdpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkoKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJsb2dQb3N0KGJsb2dQb3N0SWQpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3RJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiB7IGlkOiBkb2NSZWYuaWQsIC4uLmRvY1NuYXA/LmRhdGEoKSBhcyBCbG9nUG9zdCB9IHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCbG9nUG9zdChibG9nUG9zdDogQmxvZ1Bvc3QpOiBQcm9taXNlPEJsb2dQb3N0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGJsb2dQb3N0LnNsdWcpLnNldChibG9nUG9zdCk7XG5cbiAgICBjb25zdCBuZXdCbG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KGJsb2dQb3N0LnNsdWcpO1xuICAgIGlmICghbmV3QmxvZ1Bvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdCbG9nUG9zdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBVc2VyLCBBcHBVc2VyV2l0aElkLCBBUFBfVVNFUlNfQ09MTEVDVElPTiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEFQUF9VU0VSU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxBcHBVc2VyPjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGFwcFVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhhcHBVc2VySWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICh1c2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8QXBwVXNlcj47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBcHBVc2Vycyh1c2VySWQpOiBQcm9taXNlPEFwcFVzZXJXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KHVzZXJJZCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBVc2VyKGFwcFVzZXJJZCk6IFByb21pc2U8QXBwVXNlciB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGFwcFVzZXJJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiBkb2NTbmFwPy5kYXRhKCkgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcFVzZXIoXG4gIGFwcFVzZXJJZDogc3RyaW5nXG4pOiBQcm9taXNlPEFwcFVzZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ0FwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKGFwcFVzZXJJZCk7XG4gICAgaWYgKGV4aXN0aW5nQXBwVXNlcikge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwVXNlcjtcbiAgICB9XG4gICAgYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGFwcFVzZXJJZCkuc2V0KHtwZXJtaXNzaW9uczogW119KTtcblxuICAgIGNvbnN0IG5ld0FwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKGFwcFVzZXJJZCk7XG4gICAgaWYgKCFuZXdBcHBVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXBwVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBcHBVc2VyIHtcbiAgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBVc2VyV2l0aElkIGV4dGVuZHMgQXBwVXNlciB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBUFBfVVNFUlNfQ09MTEVDVElPTiA9IFwiYXBwVXNlcnNcIjsiLCAiaW1wb3J0IFRleHRGaWVsZCwge0Jhc2VUZXh0RmllbGRQcm9wc30gZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEFkYXB0ZXJEYXRlRm5zIGZyb20gJ0BtdWkvbGFiL0FkYXB0ZXJEYXRlRm5zJztcbmltcG9ydCBMb2NhbGl6YXRpb25Qcm92aWRlciBmcm9tICdAbXVpL2xhYi9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTVVJRGF0ZVRpbWVQaWNrZXIgZnJvbSAnQG11aS9sYWIvRGF0ZVRpbWVQaWNrZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCYXNlVGV4dEZpZWxkUHJvcHMge1xuICBkYXRlOiBEYXRlIHwgbnVsbDtcbiAgc2V0RGF0ZTogKG5ld0RhdGU6IERhdGUgfCBudWxsKSA9PiB2b2lkXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGVUaW1lUGlja2VyKHtkYXRlLCBzZXREYXRlLCAuLi50ZXh0RmllbGRQcm9wc306IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF0ZUZuc30+XG4gICAgICA8TVVJRGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPFRleHRGaWVsZCBmdWxsV2lkdGggey4uLnByb3BzfSB7Li4udGV4dEZpZWxkUHJvcHN9Lz59XG4gICAgICAgIGxhYmVsPVwiRGF0ZVRpbWVQaWNrZXJcIlxuICAgICAgICB2YWx1ZT17ZGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdEYXRlKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgICAvPlxuICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XG4gICk7XG59IiwgIi8vIGltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZW1peFwiO1xuLy8gaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuLy8gaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbi8vIGltcG9ydCB7IGNvbXBpbGUsIHJ1biB9IGZyb20gXCJAbWR4LWpzL21keFwiO1xuLy8gaW1wb3J0IHsgQmxvZ1Bvc3RXaXRoSWQsIGdldEJsb2dQb3N0IH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgKiBhcyBydW50aW1lIGZyb20gXCJyZWFjdC9qc3gtcnVudGltZS5qc1wiO1xuLy8gaW1wb3J0IHsgRmFiLCBMaW5rLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG4vLyBpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbi8vIGltcG9ydCB7IENvZGVCbG9jayB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG4vLyBpbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG4vLyBpbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuLy8gaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIjtcblxuLy8gaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBCbG9nUG9zdFdpdGhJZCB7XG4vLyAgIGNvZGU6IHN0cmluZztcbi8vICAgaXNBdXRob3I6IGJvb2xlYW47XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbi8vICAgcmVxdWVzdCxcbi8vICAgcGFyYW1zLFxuLy8gfSk6IFByb21pc2U8TG9hZGVyRGF0YT4gPT4ge1xuLy8gICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4vLyAgIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuLy8gICBpZiAodXNlcklkKSB7XG4vLyAgICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbi8vICAgICBpZiAoYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbi8vICAgICAgIGlzQXV0aG9yID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgaW52YXJpYW50KHBhcmFtcy5ibG9nUG9zdElkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuLy8gICBjb25zdCBibG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KHBhcmFtcy5ibG9nUG9zdElkKTtcbi8vICAgaW52YXJpYW50KGJsb2dQb3N0LCBcImV4cGVjdGVkIGJsb2dQb3N0XCIpO1xuLy8gICBjb25zdCBjb2RlID0gU3RyaW5nKFxuLy8gICAgIGF3YWl0IGNvbXBpbGUoYmxvZ1Bvc3QubWFya2Rvd24sIHtcbi8vICAgICAgIG91dHB1dEZvcm1hdDogXCJmdW5jdGlvbi1ib2R5XCIgLyogXHUyMDI2b3RoZXJPcHRpb25zICovLFxuLy8gICAgIH0pXG4vLyAgICk7XG4vLyAgIHJldHVybiB7IC4uLmJsb2dQb3N0LCBjb2RlLCBpc0F1dGhvciB9O1xuLy8gfTtcbi8vIGludGVyZmFjZSBDb250ZW50Q29tcG9uZW50IHtcbi8vICAgZGVmYXVsdDogUmVhY3QuRkM7XG4vLyB9XG4vLyBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICBjb21wb25lbnRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4vLyAgIGNvbnN0IHsgaXNBdXRob3IsIGNvZGUgfSA9IHVzZUxvYWRlckRhdGEoKTtcbi8vICAgY29uc3QgW21keE1vZHVsZSwgc2V0TWR4TW9kdWxlXSA9IHVzZVN0YXRlPENvbnRlbnRDb21wb25lbnQgfCBudWxsPihudWxsKTtcbi8vICAgY29uc3QgQ29udGVudDogUmVhY3QuRkM8UHJvcHM+IHwgbnVsbCA9IG1keE1vZHVsZSA/IG1keE1vZHVsZS5kZWZhdWx0IDogbnVsbDtcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAoYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgc2V0TWR4TW9kdWxlKGF3YWl0IHJ1bihjb2RlLCBydW50aW1lKSk7XG4vLyAgICAgfSkoKTtcbi8vICAgfSwgW2NvZGVdKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Qm94XG4vLyAgICAgICBzeD17e1xuLy8gICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4vLyAgICAgICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4vLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4vLyAgICAgICAgIHBhZGRpbmc6IDMsXG4vLyAgICAgICB9fVxuLy8gICAgID5cbi8vICAgICAgIDxGYWJcbi8vICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuLy8gICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdFwiXG4vLyAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbi8vICAgICAgICAgdG89XCJlZGl0XCJcbi8vICAgICAgICAgc3g9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAyMCwgcmlnaHQ6IDIwIH19XG4vLyAgICAgICA+XG4vLyAgICAgICAgIDxFZGl0SWNvbiAvPlxuLy8gICAgICAgPC9GYWI+XG4vLyAgICAgICB7Q29udGVudCA/IChcbi8vICAgICAgICAgPENvbnRlbnRcbi8vICAgICAgICAgICBjb21wb25lbnRzPXt7XG4vLyAgICAgICAgICAgICBoMTogKHByb3BzKSA9PiAoXG4vLyAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgICAgaDI6IChwcm9wcykgPT4gKFxuLy8gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgICAgIGgzOiAocHJvcHMpID0+IChcbi8vICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgICAgICBoNDogKHByb3BzKSA9PiAoXG4vLyAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4vLyAgICAgICAgICAgICApLFxuLy8gICAgICAgICAgICAgaDU6IChwcm9wcykgPT4gKFxuLy8gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgICAgIGg2OiAocHJvcHMpID0+IChcbi8vICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgICAgICBwOiAocHJvcHMpID0+IChcbi8vICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHlcIiBjb21wb25lbnQ9XCJwXCIgey4uLnByb3BzfSAvPlxuLy8gICAgICAgICAgICAgKSxcbi8vICAgICAgICAgICAgIGJsb2NrcXVvdGU6IChwcm9wcykgPT4gKFxuLy8gICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuLy8gICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4vLyAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cbi8vICAgICAgICAgICAgICAgICBzeD17e1xuLy8gICAgICAgICAgICAgICAgICAgcGFkZGluZzogMixcbi8vICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbi8vICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6ICh7IHBhbGV0dGUgfSkgPT5cbi8vICAgICAgICAgICAgICAgICAgICAgYDJweCBzb2xpZCR7cGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcbi8vICAgICAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICksXG4vLyAgICAgICAgICAgICBwcmU6IChwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+LFxuLy8gICAgICAgICAgICAgY29kZTogKHByb3BzKSA9PiA8Q29kZUJsb2NrIHsuLi5wcm9wc30gLz4sXG4vLyAgICAgICAgICAgICBhOiAocHJvcHMpID0+IDxMaW5rIHsuLi5wcm9wc30gLz4sXG5cbi8vICAgICAgICAgICAgIC8vIGVtOiAocHJvcHMpID0+IDxpIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRlbnJvZFwiIH19IHsuLi5wcm9wc30gLz4sXG4vLyAgICAgICAgICAgICAvLyB3cmFwcGVyOiAoeyBjb21wb25lbnRzLCAuLi5yZXN0IH0pID0+IDxtYWluIHsuLi5yZXN0fSAvPixcbi8vICAgICAgICAgICAgIFBsYW5ldDogKCkgPT4gXCJOZXB0dW5lXCIsXG4vLyAgICAgICAgICAgICAvLyB0aGVtZToge1xuLy8gICAgICAgICAgICAgLy8gICB0ZXh0OiAocHJvcHMpID0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiB9fSB7Li4ucHJvcHN9IC8+LFxuLy8gICAgICAgICAgICAgLy8gfSxcbi8vICAgICAgICAgICB9fVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgKSA6IG51bGx9XG4vLyAgICAgPC9Cb3g+XG4vLyAgICk7XG4vLyB9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgcmV0dXJuIDxkaXY+Y29taW5nIHNvb248L2Rpdj47XG59XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cFwiO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGFkZEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJDb2RlIFNhZ2FzIHwgU2lnbiBJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ24gaW4gdG8gc3RhcnQgeW91ciBvd24gY29kZSBqb3VybmV5IVwiLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFVVEhfVFlQRVMgPSB7XG4gIFNJR05fSU46IFwiU2lnbiBJblwiLFxuICBTSUdOX1VQOiBcIlNpZ24gVXBcIixcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aFR5cGU6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIC8vIFRPRE86IGlmIGEgdXNlciB0aGVuIHJlZGlyZWN0IHRvIC9kYXNoYm9hcmRcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRoVHlwZTpcbiAgICAgIHBhcmFtcy5hdXRoVHlwZSA9PT0gXCJpblwiID8gQVVUSF9UWVBFUy5TSUdOX0lOIDogQVVUSF9UWVBFUy5TSUdOX1VQLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8IGVtYWlsLm1hdGNoKC8uK0AuK1xcLi4rLykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYEVtYWlscyBtdXN0IGxvb2sgbGlrZSBleGFtcGxlQGV4YW1wbGUuY29tYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbnR5cGUgRm9ybURhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgYXV0aFR5cGU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgeyBhdXRoVHlwZTogaW5pdEF1dGhUeXBlIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IFthY3Rpb25EYXRhLCBzZXRBY3Rpb25EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPih7fSk7XG4gIGNvbnN0IFthdXRoVHlwZSwgc2V0QXV0aFR5cGVdID0gdXNlU3RhdGUoaW5pdEF1dGhUeXBlKTtcblxuICBjb25zdCBoYW5kbGVBdXRoVHlwZSA9IChldmVudCwgbmV3QXV0aFR5cGUpID0+IHtcbiAgICBpZiAoIW5ld0F1dGhUeXBlKSByZXR1cm47XG4gICAgc2V0QXV0aFR5cGUobmV3QXV0aFR5cGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRBdXRoVHlwZSAhPT0gYXV0aFR5cGUpIHtcbiAgICAgIHNldEF1dGhUeXBlKGluaXRBdXRoVHlwZSk7XG4gICAgfVxuICB9LCBbaW5pdEF1dGhUeXBlXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KFxuICAgIGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PlxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSh0YXJnZXQpO1xuICAgIGNvbnN0IGF1dGhUeXBlID0gZm9ybS5nZXQoXCJhdXRoVHlwZVwiKTtcbiAgICBjb25zdCBlbWFpbCA9IGZvcm0uZ2V0KFwiZW1haWxcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGF1dGhUeXBlICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICB0eXBlb2YgZW1haWwgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgIHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIlxuICAgICkge1xuICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSB7IGF1dGhUeXBlLCBlbWFpbCwgcGFzc3dvcmQgfTtcbiAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgIGVtYWlsOiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSxcbiAgICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcbiAgICB9O1xuICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG4gICAgc3dpdGNoIChhdXRoVHlwZSkge1xuICAgICAgY2FzZSBBVVRIX1RZUEVTLlNJR05fSU46IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuZW1haWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgICBmb3JtRXJyb3I6IGBFbWFpbC9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBFbWFpbC9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIEFVVEhfVFlQRVMuU0lHTl9VUDoge1xuICAgICAgICAvLyBpZiAodXNlckV4aXN0cykge1xuICAgICAgICAvLyAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgLy8gICAgIGZpZWxkcyxcbiAgICAgICAgLy8gICAgIGZvcm1FcnJvcjogYFVzZXIgd2l0aCBlbWFpbCAke2VtYWlsfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25VcCh7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgU29tZXRoaW5nIHdlbnQgd3JvbmcgdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyB1c2VyLmAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmb3JtRXJyb3I6IGBMb2dpbiB0eXBlIGludmFsaWRgLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YWNrXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMjAwcHggYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXBwUGFwZXI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIHthdXRoVHlwZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyBcImZvcm0tZXJyb3ItbWVzc2FnZVwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD17UGFwZXJ9IHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdXRoVHlwZVwiIHZhbHVlPXthdXRoVHlwZX0gLz5cbiAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhUeXBlfVxuICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBdXRoVHlwZX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2lnbiBJbiBvciBTaWduIFVwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17QVVUSF9UWVBFUy5TSUdOX0lOfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17QVVUSF9UWVBFUy5TSUdOX0lOfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0FVVEhfVFlQRVMuU0lHTl9VUH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e0FVVEhfVFlQRVMuU0lHTl9VUH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XG4gICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGF1dGhUeXBlID09PSBBVVRIX1RZUEVTLlNJR05fSU4gPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwpfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCA/IFwiZW1haWwtZXJyb3JcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgYXV0aFR5cGUgPT09IEFVVEhfVFlQRVMuU0lHTl9JTiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZXJyb3ItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImZvcm0tZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgQVVUSF9UWVBFUy5TSUdOX0lOID09PSBhdXRoVHlwZSA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthdXRoVHlwZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSBhcyBzdHJpbmc7XG4gICAgICBjb25zdCB1c2VyVG9rZW4gPSBmb3JtLmdldChcInVzZXJUb2tlblwiKSBhcyBzdHJpbmc7XG4gICAgICBpZiAoIXVzZXJUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJDb3VsZCBub3QgdXBkYXRlIHNlc3Npb24uIFBsZWFzZSB0cnkgYWdhaW4uXCIsIHtcbiAgICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgY3JlYXRlVXNlclNlc3Npb24odXNlclRva2VuLCByZWRpcmVjdFRvKTtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJSRVFVRVNUIE5PVCBIQU5ETEVEXCIpO1xuICB9XG59O1xuIiwgImltcG9ydCB7IEJveCwgQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQmxvZ0NhcmQgfSBmcm9tIFwifi9jb21wb25lbnRzL0Jsb2dDYXJkXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBCbG9nUG9zdFdpdGhJZCwgZ2V0QWxsQmxvZ1Bvc3RzIH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBwb3N0czogQmxvZ1Bvc3RXaXRoSWRbXTtcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgbGV0IGlzQXV0aG9yID0gZmFsc2U7XG4gIGlmICh1c2VySWQpIHtcbiAgICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICAgIGlmIChhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgaXNBdXRob3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbEJsb2dQb3N0cygpO1xuICByZXR1cm4geyBwb3N0cywgaXNBdXRob3IgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIGNvbnN0IHsgcG9zdHMsIGlzQXV0aG9yIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjEyMDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgQmxvZ1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHtpc0F1dGhvciA/IChcbiAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvYmxvZy9uZXdcIj5cbiAgICAgICAgICAgIEFkZCBCbG9nIFBvc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiMTIwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICB9fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG4gICAgICA+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4OiB7IHhzOiBcIjAgMCA4MCVcIiwgbWQ6IFwiMCAwIDQwJVwiLCBsZzogXCIwIDAgMzAlXCIgfSxcbiAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmxvZ0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpbWFnZVVybD17XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0NTYyNTQzNjQ3My1mNDhmMDdiNzA0YmE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc3NSZxPTgwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbWFnZUFsdD17XCJhIHZpZXcgb2YgY2FueW9ucyBmcm9tIGFib3ZlXCJ9XG4gICAgICAgICAgICAgIHVybD17YC9ibG9nLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgIC8vIGltYWdlVXJsPXtwb3N0LmltYWdlVXJsIHx8IFwiXCJ9XG4gICAgICAgICAgICAgIC8vIGltYWdlQWx0PXtwb3N0LmltYWdlQWx0IHx8IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwiLi9BcHBQYXBlclwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgaW1hZ2VBbHQ6IHN0cmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBCbG9nQ2FyZCh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdXJsLFxuICBpbWFnZVVybCxcbiAgaW1hZ2VBbHQsXG59OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcHBQYXBlciBzeD17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgPENhcmQgc3g9e3sgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYSBjb21wb25lbnQ9e0xpbmt9IHRvPXt1cmx9PlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlVXJsfVxuICAgICAgICAgICAgYWx0PXtpbWFnZUFsdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgey8qIFRPRE86IGltcGxlbWVudCBzaGFyZSBhY3Rpb24gYnV0dG9ucyAqL31cbiAgICAgICAgey8qIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgU2hhcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQWN0aW9ucz4gKi99XG4gICAgICA8L0NhcmQ+XG4gICAgPC9BcHBQYXBlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xyXG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHtcclxuICBhZGREYXRhUG9pbnQsXHJcbiAgRGF0YVBvaW50LFxyXG4gIGdldEFsbERhdGFQb2ludHMsXHJcbn0gZnJvbSBcIn4vZGIvZGF0YVBvaW50cy5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRGF0YVBvaW50V2l0aElkLCBnZXRBbGxEYXRhUG9pbnRzTGl2ZSB9IGZyb20gXCJ+L2RiL2RhdGFQb2ludHMuY2xpZW50XCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIn4vc3RhdGUvQXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IHVzZUZpcmViYXNlTG9hZGVyRGF0YSB9IGZyb20gXCJ+L2hvb2tzL3VzZUZpcmViYXNlTG9hZGVyRGF0YVwiO1xyXG5cclxudHlwZSBMb2FkZXJEYXRhID0geyBkYXRhUG9pbnRzOiBEYXRhUG9pbnRXaXRoSWRbXSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XHJcblxyXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XHJcbiAgICBkYXRhUG9pbnRzOiBhd2FpdCBnZXRBbGxEYXRhUG9pbnRzKHVzZXJJZCksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IHBvaW50ID0gTnVtYmVyKGZvcm0uZ2V0KFwicG9pbnRcIikpO1xyXG4gIGNvbnN0IHRpbWVzdGFtcCA9IE51bWJlcihmb3JtLmdldChcInRpbWVzdGFtcFwiKSk7XHJcbiAgaWYgKCFwb2ludCB8fCAhdGltZXN0YW1wKSB7XHJcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJDb3VsZCBub3QgYWRkIHRoaXMgZGF0YSBwb2ludC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwge1xyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgYWRkRGF0YVBvaW50KHtcclxuICAgIHVzZXJJZCxcclxuICAgIHBvaW50LFxyXG4gICAgdGltZXN0YW1wLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaEJvYXJkKCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB1c2VySWQgPSB1c2VyPy51aWQ7XHJcbiAgY29uc3QgeyBkYXRhUG9pbnRzIH0gPSB1c2VGaXJlYmFzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKHVwZGF0ZXIpID0+XHJcbiAgICBnZXRBbGxEYXRhUG9pbnRzTGl2ZSh1c2VySWQsIChkYXRhUG9pbnRzKSA9PiB1cGRhdGVyKHsgZGF0YVBvaW50cyB9KSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxyXG4gICAgICAgIGVsZXZhdGlvbj17M31cclxuICAgICAgICBkaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgICAgc3g9e3sgaGVpZ2h0OiBcIjEyMHB4XCIsIHBhZGRpbmc6IFwiMTJweFwiLCBtYXJnaW46IFwiMTJweFwiLCB3aWR0aDogXCI4MCVcIiB9fVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWFyb3VuZFwifVxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiZmxleC1lbmRcIn1cclxuICAgICAgPlxyXG4gICAgICAgIHtkYXRhUG9pbnRzLmxlbmd0aCA/IChcclxuICAgICAgICAgIGRhdGFQb2ludHNcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXHJcbiAgICAgICAgICAgIC5tYXAoKHsgcG9pbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BvaW50ICogMTB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcInByaW1hcnkubWFpblwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAvICR7ZGF0YVBvaW50cy5sZW5ndGh9IC0gMTBweClgLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvQm94PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5BZGQgc29tZSBkYXRhITwvVHlwb2dyYXBoeT5cclxuICAgICAgICApfVxyXG4gICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwb2ludFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInRpbWVzdGFtcFwiIHZhbHVlPXtEYXRlLm5vdygpfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICBhZGQgZGF0YVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5cbmNvbnN0IERBVEFfUE9JTlRTX0NPTExFQ1RJT04gPSBcImRhdGFQb2ludHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgcG9pbnQ6IG51bWJlcjtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFQb2ludFdpdGhJZCBleHRlbmRzIERhdGFQb2ludCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIERBVEFfUE9JTlRTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPERhdGFQb2ludD47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChkYXRhUG9pbnRJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhkYXRhUG9pbnRJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8RGF0YVBvaW50PjtcblxuY29uc3QgZ2V0UXVlcnkgPSAodXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VySWQpIGFzIFF1ZXJ5PERhdGFQb2ludD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYXRhUG9pbnRzKHVzZXJJZCk6IFByb21pc2U8RGF0YVBvaW50V2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSh1c2VySWQpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVBvaW50KGRhdGFQb2ludElkKTogUHJvbWlzZTxEYXRhUG9pbnQgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShkYXRhUG9pbnRJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiBkb2NTbmFwPy5kYXRhKCkgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERhdGFQb2ludChkYXRhUG9pbnQ6IERhdGFQb2ludCk6IFByb21pc2U8RGF0YVBvaW50PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0Q29sbGVjdGlvblJlZigpLmFkZChkYXRhUG9pbnQpO1xuXG4gICAgY29uc3QgbmV3RGF0YVBvaW50ID0gYXdhaXQgZ2V0RGF0YVBvaW50KGRvY1JlZi5pZCk7XG4gICAgaWYgKCFuZXdEYXRhUG9pbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhUG9pbnQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IHR5cGUgVXNlRWZmZWN0VW5zdWJjcmliZXIgPSAoKSA9PiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZpcmViYXNlTG9hZGVyRGF0YTxUPihcbiAgY2xpZW50VXBkYXRlcjogKFxuICAgIHVwZGF0ZXI6IChkYXRhOiBUKSA9PiB2b2lkXG4gICkgPT4gVXNlRWZmZWN0VW5zdWJjcmliZXJcbik6IFQge1xuICAvLyBnZXQgdGhlIGRhdGEgZm9ybSB0aGUgc2V2ZXIgdmlhIGZpcmViYXNlIGFkbWluXG4gIGNvbnN0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhPFQ+KCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFQ+KGxvYWRlckRhdGEpO1xuXG4gIC8vIHdoZW4gdGhlIGNsaWVudCBnZXRzIGFuIHVwZGF0ZSBhbGxvd1xuICAvLyB0aGUgY2xpZW50IHRvIHVwZGF0ZSB0aGUgZGF0YVxuICBmdW5jdGlvbiB1cGRhdGVyKGRhdGE6IFQpIHtcbiAgICBzZXREYXRhKGRhdGEpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiBjbGllbnRVcGRhdGVyKHVwZGF0ZXIpLCBbbG9hZGVyRGF0YV0pO1xuICByZXR1cm4gZGF0YTtcbn0iLCAiaW1wb3J0IHtcbiAgcmVkaXJlY3QsXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VBY3Rpb25EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGFkZEJsb2dQb3N0IH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbExhYmVsLFxuICBUZXh0RmllbGQsXG4gIFN3aXRjaCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9EYXRlVGltZVBpY2tlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGF1dGhvcklkOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgaWYgKCFhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xuICB9XG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXV0aG9ySWQ6IHVzZXJJZCxcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW47XG4gIHNsdWc/OiBib29sZWFuO1xuICBtYXJrZG93bj86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpc1B1Ymxpc2hlZCA9IGZvcm1EYXRhLmdldChcImlzUHVibGlzaGVkXCIpID09PSBcInRydWVcIjtcbiAgY29uc3QgcHVibGlzaERhdGUgPSBwYXJzZUludChcbiAgICAoZm9ybURhdGEuZ2V0KFwicHVibGlzaERhdGVcIikgYXMgc3RyaW5nKSB8fCBcIjBcIixcbiAgICAxMFxuICApO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge307XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlO1xuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGF1dGhvcklkID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpc1B1Ymxpc2hlZCA9PT0gXCJib29sZWFuXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHB1Ymxpc2hEYXRlID09PSBcIm51bWJlclwiKTtcblxuICBhd2FpdCBhZGRCbG9nUG9zdCh7XG4gICAgYXV0aG9ySWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBpc1B1Ymxpc2hlZCxcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQb3N0KCkge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF1dGhvcklkXCIgdmFsdWU9e2F1dGhvcklkfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaXNQdWJsaXNoZWRcIiB2YWx1ZT17aXNQdWJsaXNoZWQudG9TdHJpbmcoKX0gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgbmFtZT1cInB1Ymxpc2hEYXRlXCJcbiAgICAgICAgdmFsdWU9e2RhdGU/LmdldFRpbWUoKS50b1N0cmluZygpfVxuICAgICAgLz5cbiAgICAgIDxTdGFja1xuICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgIHN4PXt7IG1heFdpZHRoOiBcIjQ1MHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElzUHVibGlzaGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcImNvbnRyb2xsZWRcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e2lzUHVibGlzaGVkID8gXCJJcyBQdWJsaXNoZWRcIiA6IFwiTm90IFB1Ymxpc2hlZFwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxEYXRlVGltZVBpY2tlciBkYXRlPXtkYXRlfSBzZXREYXRlPXtzZXREYXRlfSB2YXJpYW50PVwiZmlsbGVkXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGl0bGV9XG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy50aXRsZSA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LmRlc2NyaXB0aW9uID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnNsdWd9XG4gICAgICAgICAgICBpZD1cInNsdWdcIlxuICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8ubWFya2Rvd259XG4gICAgICAgICAgICBpZD1cIm1hcmtkb3duXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWFya2Rvd25cIlxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy5tYXJrZG93biA/IDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIG5hbWU9XCJtYXJrZG93blwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gc3BhY2luZz17Mn0ganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgQ3JlYXRlIFBvc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBhXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgYVwiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEEhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImEubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgYlwiLFxuICBcInRpdGxlXCI6IFwidGVzdCBiXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGJcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBCIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJiLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGNcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgY1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBjXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQyFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XG59OyIsICJpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQ29kZSBTYWdhczogQ29weS9QYXN0YS9Ud2Vya1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvZGVzIFNhZ2FzIGEgcGxhY2UgdG8gbGVhcm4gYSBtaWxsaW9uIGFuZCBvbmUgd2F5cyB0byBjb2RlLlwiLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBzeD17e1xuICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxuICAgICAgICBtYXJnaW46IFwiODBweCBhdXRvXCIsXG4gICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwUGFwZXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgTGVhcm5pbmcgdG8gY29kZSBzaW1wbGlmaWVkIGFuZCB3aXRoIHNvbWUgaHVtb3IuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL3NpZ24vaW5cIiBzaXplPXtcImxhcmdlXCJ9IHZhcmlhbnQ9e1wiY29udGFpbmVkXCJ9PlNJR04gSU48L0J1dHRvbj5cbiAgICAgIDwvQXBwUGFwZXI+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicxOTE5YzcxOScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtVEpRRDJFWEMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRYWkZCTUpDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVEkzTE9DR1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DR1RWTEVHQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU8yRFZDRFFTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGUTNaWVMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTNMUFNNSllOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TS0FOWVRMVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVXSFNIVU80LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWFEyT1JXSjYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1US1NaN1c3NC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxQRDRGVU80LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9ibG9nLyRibG9nUG9zdElkJzp7J2lkJzoncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy86YmxvZ1Bvc3RJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLU00NVdCTENELmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0Jzp7J2lkJzoncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkL2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LVVWQjQzTUFDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0ySE9BNEdKMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpBVFpXNzM1LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9hJzp7J2lkJzoncm91dGVzL2Jsb2cvYScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2EnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9hLUVQM1Y0N0tWLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9iJzp7J2lkJzoncm91dGVzL2Jsb2cvYicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9iLVZTTUlYQlY0LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9jJzp7J2lkJzoncm91dGVzL2Jsb2cvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9jLVFMSlU1Qk5XLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtUlQzTFpIR1AuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpBVFpXNzM1LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvbmV3Jzp7J2lkJzoncm91dGVzL2Jsb2cvbmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvbmV3LVdCNkdIUTVPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0ySE9BNEdKMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpBVFpXNzM1LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVUzU0hTSk9QLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTNXTEVPV1NOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LVIyQTJIUEdNLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ24uJGF1dGhUeXBlJzp7J2lkJzoncm91dGVzL3NpZ24uJGF1dGhUeXBlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ24vOmF1dGhUeXBlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NpZ24uJGF1dGhUeXBlLTdNVExNUkVFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy91cGRhdGUtc2Vzc2lvbic6eydpZCc6J3JvdXRlcy91cGRhdGUtc2Vzc2lvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid1cGRhdGUtc2Vzc2lvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi0yQzUyQkNKSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTE5MTlDNzE5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFL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
