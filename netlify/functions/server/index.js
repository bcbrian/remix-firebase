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
var import_remix9 = __toESM(require_remix());
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
var import_react9 = require("react");

// app/components/EditPost.tsx
init_react();
var import_remix8 = __toESM(require_remix());
var import_react8 = __toESM(require("@monaco-editor/react"));
var import_material5 = require("@mui/material");

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

// app/components/EditPost.tsx
function EditPost({
  errors,
  authorId,
  isPublished,
  setIsPublished,
  date,
  setDate,
  markdown,
  handleEditorChange,
  title = "",
  description = "",
  slug = "",
  imageUrl = "",
  imageAlt = "",
  tags = ""
}) {
  return /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
    name: "markdown",
    value: markdown
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "publishDate",
    value: date == null ? void 0 : date.getTime().toString()
  }), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    direction: { xs: "column", md: "row" },
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: {
      width: "100%",
      minWidth: { md: "320px" },
      flex: { md: "0 0 320px" }
    }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material5.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true,
    defaultValue: slug
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.imageUrl,
    id: "imageUrl",
    label: "Image Url",
    helperText: (errors == null ? void 0 : errors.imageUrl) ? "imageUrl is required" : null,
    variant: "filled",
    name: "imageUrl",
    fullWidth: true,
    defaultValue: imageUrl
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.imageAlt,
    id: "imageAlt",
    label: "Image Alt Text",
    helperText: (errors == null ? void 0 : errors.imageAlt) ? "imageAlt is required" : null,
    variant: "filled",
    name: "imageAlt",
    fullWidth: true,
    defaultValue: imageAlt
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.tags,
    id: "tags",
    label: "Tags",
    helperText: (errors == null ? void 0 : errors.tags) ? "tags is required" : null,
    variant: "filled",
    name: "tags",
    fullWidth: true,
    defaultValue: tags
  }))), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    direction: { xs: "column", md: "column-reverse" },
    justifyContent: "flex-end",
    sx: { flex: "1 1" }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { flex: "1 1", minHeight: "500px" }
  }, /* @__PURE__ */ React.createElement(import_react8.default, {
    height: "80vh",
    defaultLanguage: "markdown",
    onChange: handleEditorChange,
    theme: "vs-dark",
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
  }, "Create Post"))))));
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
      return (0, import_remix9.redirect)("/blog");
    }
  }
  (0, import_tiny_invariant.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant.default)(blogPost, "expected blogPost");
  return __spreadProps(__spreadValues({}, blogPost), { isAuthor });
};
var action = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",")) || [];
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
  if (!imageUrl)
    errors.description = true;
  if (!imageAlt)
    errors.description = true;
  if (!tags)
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
  (0, import_tiny_invariant.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant.default)(typeof tags === "object");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  });
  return (0, import_remix9.redirect)("/blog");
};
function NewPost() {
  const {
    authorId,
    isPublished: initIsPublished,
    title,
    slug,
    markdown: initMarkdown,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  } = (0, import_remix9.useLoaderData)();
  const [date, setDate] = (0, import_react9.useState)(new Date(publishDate));
  const [markdown, setMarkdown] = (0, import_react9.useState)(initMarkdown);
  const [isPublished, setIsPublished] = (0, import_react9.useState)(initIsPublished);
  const errors = (0, import_remix9.useActionData)();
  function handleEditorChange(value) {
    setMarkdown(value);
  }
  return /* @__PURE__ */ React.createElement(EditPost, {
    errors,
    authorId,
    isPublished,
    setIsPublished,
    date,
    setDate,
    markdown,
    handleEditorChange,
    title,
    description,
    slug,
    imageUrl,
    imageAlt,
    tags: (tags == null ? void 0 : tags.join(", ")) || ""
  });
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.tsx
var blogPostId_exports = {};
__export(blogPostId_exports, {
  default: () => PostSlug,
  loader: () => loader3
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_client = require("mdx-bundler/client");
var import_react10 = require("react");
var import_material7 = require("@mui/material");

// app/components/CodeBlock.tsx
init_react();
var import_material6 = require("@mui/material");
var import_system = require("@mui/system");
var import_prism_react_renderer = __toESM(require("prism-react-renderer"));
var import_dracula = __toESM(require("prism-react-renderer/themes/dracula"));
var Line = (0, import_system.styled)("div")({
  display: "table-row"
});
var LineNo = (0, import_system.styled)("span")({
  display: "table-cell",
  textAlign: "right",
  paddingRight: "1em",
  userSelect: "none",
  opacity: "0.5"
});
var LineContent = (0, import_system.styled)("span")({
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
  }, getLineProps({ line, key: i })), /* @__PURE__ */ React.createElement(LineNo, null, i + 1), /* @__PURE__ */ React.createElement(LineContent, null, line.map((token, key) => {
    console.log(token, getTokenProps({ token, key }));
    const _a = getTokenProps({ token, key }), { children: children2 } = _a, props = __objRest(_a, ["children"]);
    const sanitizedChildren = children2.replace(/\s/g, "&nbsp;");
    return /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({
      key
    }, props), {
      dangerouslySetInnerHTML: {
        __html: sanitizedChildren
      }
    }));
  }))))));
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
  color: "primary",
  sx: { marginBottom: 3 }
}, props));
var H2 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h2",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H3 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h3",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H4 = (props) => /* @__PURE__ */ React.createElement(import_material7.Typography, __spreadValues({
  variant: "h4",
  color: "secondary",
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
  const { isAuthor, code, imageUrl, imageAlt } = (0, import_remix10.useLoaderData)();
  const Component = (0, import_react10.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material7.Box, {
    component: import_material7.Paper,
    sx: {
      margin: "178px auto 0px",
      maxWidth: "900px",
      position: "relative",
      padding: 3,
      bgcolor: "background.default",
      minHeight: "100vh",
      borderRadius: "4px"
    }
  }, /* @__PURE__ */ React.createElement(import_material7.Box, {
    component: import_material7.Paper,
    sx: {
      background: `url(${imageUrl}) no-repeat center center`,
      height: "320px",
      width: "100%"
    }
  }), isAuthor ? /* @__PURE__ */ React.createElement(import_material7.Fab, {
    color: "secondary",
    "aria-label": "edit",
    component: import_remix10.Link,
    to: "edit",
    sx: { position: "absolute", top: 20, right: 20 }
  }, /* @__PURE__ */ React.createElement(import_Edit.default, null)) : null, Component ? /* @__PURE__ */ React.createElement(Component, {
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
  }) : null));
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
var import_remix11 = __toESM(require_remix());
var import_react11 = require("react");
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
  const { authType: initAuthType } = (0, import_remix11.useLoaderData)();
  const [actionData, setActionData] = (0, import_react11.useState)({});
  const [authType, setAuthType] = (0, import_react11.useState)(initAuthType);
  const handleAuthType = (event, newAuthType) => {
    if (!newAuthType)
      return;
    setAuthType(newAuthType);
  };
  (0, import_react11.useEffect)(() => {
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
  }, authType), /* @__PURE__ */ React.createElement(import_remix11.Form, {
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
var import_remix13 = __toESM(require_remix());

// app/components/BlogCard.tsx
init_react();
var import_Card = __toESM(require("@mui/material/Card"));
var import_CardContent = __toESM(require("@mui/material/CardContent"));
var import_CardMedia = __toESM(require("@mui/material/CardMedia"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material9 = require("@mui/material");
var import_remix12 = __toESM(require_remix());
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
    component: import_remix12.Link,
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
  const { posts, isAuthor } = (0, import_remix13.useLoaderData)();
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
    component: import_remix13.Link,
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
    imageUrl: post.imageUrl,
    imageAlt: post.imageAlt,
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
var import_remix15 = __toESM(require_remix());
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
var import_react13 = require("react");

// app/hooks/useFirebaseLoaderData.ts
init_react();
var import_react12 = require("react");
var import_remix14 = __toESM(require_remix());
function useFirebaseLoaderData(clientUpdater) {
  const loaderData = (0, import_remix14.useLoaderData)();
  const [data, setData] = (0, import_react12.useState)(loaderData);
  function updater(data2) {
    setData(data2);
  }
  (0, import_react12.useEffect)(() => clientUpdater(updater), [loaderData]);
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
  const user = (0, import_react13.useContext)(AuthContext);
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
  }, "Add some data!")), /* @__PURE__ */ React.createElement(import_Box3.default, null, /* @__PURE__ */ React.createElement(import_remix15.Form, {
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
var import_remix16 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_react14 = require("react");
var loader7 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
    return (0, import_remix16.redirect)("/blog");
  }
  const data = {
    authorId: userId
  };
  return data;
};
var action4 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",")) || [];
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
  if (!imageUrl)
    errors.imageUrl = true;
  if (!imageAlt)
    errors.imageAlt = true;
  if (!tags)
    errors.tags = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof slug === "string");
  (0, import_tiny_invariant3.default)(typeof markdown === "string");
  (0, import_tiny_invariant3.default)(typeof description === "string");
  (0, import_tiny_invariant3.default)(typeof authorId === "string");
  (0, import_tiny_invariant3.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant3.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant3.default)(typeof tags === "object");
  (0, import_tiny_invariant3.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant3.default)(typeof publishDate === "number");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  });
  return (0, import_remix16.redirect)("/blog");
};
function NewPost2() {
  const [date, setDate] = (0, import_react14.useState)(new Date());
  const [markdown, setMarkdown] = (0, import_react14.useState)("");
  const [isPublished, setIsPublished] = (0, import_react14.useState)(true);
  const { authorId } = (0, import_remix16.useLoaderData)();
  const errors = (0, import_remix16.useActionData)();
  function handleEditorChange(value) {
    setMarkdown(value);
  }
  return /* @__PURE__ */ React.createElement(EditPost, {
    errors,
    authorId,
    isPublished,
    setIsPublished,
    date,
    setDate,
    markdown,
    handleEditorChange
  });
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
var import_react15 = __toESM(require("react"));
var attributes = {
  "meta": "test a",
  "title": "test a",
  "description": "test a"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.h1, null, "What A!"));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
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
var import_react16 = __toESM(require("react"));
var attributes2 = {
  "meta": "test b",
  "title": "test b",
  "description": "test b"
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.h1, null, "What B!"));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
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
var import_react17 = __toESM(require("react"));
var attributes3 = {
  "meta": "test c",
  "title": "test c",
  "description": "test c"
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, null, "What C!"));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
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
var import_remix17 = __toESM(require_remix());
var action5 = async ({ request }) => {
  return logout(request);
};
var loader8 = async () => {
  return (0, import_remix17.redirect)("/");
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
var import_remix18 = __toESM(require_remix());
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
    component: import_remix18.Link,
    to: "/sign/in",
    size: "large",
    variant: "contained"
  }, "SIGN IN")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d951ce69", "entry": { "module": "/build/entry.client-QQCYJD6T.js", "imports": ["/build/_shared/chunk-JSZXMSBU.js", "/build/_shared/chunk-SWUCU66O.js", "/build/_shared/chunk-QMJMNUMY.js", "/build/_shared/chunk-IPXQKRLW.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-X7ZBONDZ.js", "imports": ["/build/_shared/chunk-AUBZFB34.js", "/build/_shared/chunk-4W5S6PZH.js", "/build/_shared/chunk-CY6IBNYY.js", "/build/_shared/chunk-2RBHVDHY.js", "/build/_shared/chunk-QKYJV5QJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-XLRVNZED.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-5IM4JNAM.js", "imports": ["/build/_shared/chunk-ED4Y6SQR.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-TLGLUDFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-2HC3NM5Z.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-M4AUVWWE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-E3E3I7IC.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-A2ZOXVBU.js", "imports": ["/build/_shared/chunk-ED4Y6SQR.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-YARPF2P2.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-RBJTFTJ3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-VBLDPNHH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-HVCXBT3M.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-XTUUAOSR.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D951CE69.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3N0YXRlL0F1dGhQcm92aWRlci50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTG9nb3V0Rm9ybS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwQmFyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BdXRoQ29udHJvbHMudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NpZ25PdXRCdXR0b24udHN4IiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9hdXRoLnRzIiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9maXJlYmFzZS50cyIsICIuLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0FwcFBhcGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0LnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9ibG9nUG9zdHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2RiL2FwcFVzZXJzL3R5cGVzLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0VkaXRQb3N0LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlci50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NvZGVCbG9jay50c3giLCAiLi4vLi4vLi4vYXBwL3V0aWxzL21keC5zZXJ2ZXIudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9CbG9nQ2FyZC50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Rhc2hib2FyZC50c3giLCAiLi4vLi4vLi4vYXBwL2RiL2RhdGFQb2ludHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9ob29rcy91c2VGaXJlYmFzZUxvYWRlckRhdGEudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvbmV3LnRzeCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2Jsb2cvYS5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2IubWR4IiwgIm1keDovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9jLm1keCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgImltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbmV0bGlmeVwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG4vKlxuICogUmV0dXJucyBhIGNvbnRleHQgb2JqZWN0IHdpdGggYXQgbW9zdCAzIGtleXM6XG4gKiAgLSBgbmV0bGlmeUdyYXBoVG9rZW5gOiByYXcgYXV0aGVudGljYXRpb24gdG9rZW4gdG8gdXNlIHdpdGggTmV0bGlmeSBHcmFwaFxuICogIC0gYGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuYDogRm9yIHVzZSB3aXRoIEpXVHMgZ2VuZXJhdGVkIGJ5XG4gKiAgICBgbmV0bGlmeS1ncmFwaC1hdXRoYC5cbiAqICAtIGBuZXRsaWZ5R3JhcGhTaWduYXR1cmVgOiBhIHNpZ25hdHVyZSBmb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gV2lsbCBiZVxuICogICAgcHJlc2VudCBpZiBhIHNlY3JldCBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldExvYWRDb250ZXh0KGV2ZW50LCBjb250ZXh0KSB7XG4gIGxldCByYXdBdXRob3JpemF0aW9uU3RyaW5nO1xuICBsZXQgbmV0bGlmeUdyYXBoVG9rZW47XG5cbiAgaWYgKGV2ZW50LmF1dGhsaWZ5VG9rZW4gIT0gbnVsbCkge1xuICAgIG5ldGxpZnlHcmFwaFRva2VuID0gZXZlbnQuYXV0aGxpZnlUb2tlbjtcbiAgfVxuXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgY29uc3QgZ3JhcGhTaWduYXR1cmVIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wieC1uZXRsaWZ5LWdyYXBoLXNpZ25hdHVyZVwiXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdChcIiBcIilbMV07XG4gIH1cblxuICBjb25zdCBsb2FkQ29udGV4dCA9IHtcbiAgICBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbjogcmF3QXV0aG9yaXphdGlvblN0cmluZyxcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbjogbmV0bGlmeUdyYXBoVG9rZW4sXG4gICAgbmV0bGlmeUdyYXBoU2lnbmF0dXJlOiBncmFwaFNpZ25hdHVyZUhlYWRlclxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChsb2FkQ29udGV4dFtrZXldID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBsb2FkQ29udGV4dFtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvYWRDb250ZXh0O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgYnVpbGQsXG4gIGdldExvYWRDb250ZXh0LFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2EubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9yZW1peC1zdGFydGVyL2FwcC9yb3V0ZXMvYmxvZy9jLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvcmVtaXgtc3RhcnRlci9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9yb290L3Byb2plY3RzL3JlbWl4LXN0YXJ0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvOmJsb2dQb3N0SWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nLzpibG9nUG9zdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zaWduLiRhdXRoVHlwZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbi86YXV0aFR5cGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3VwZGF0ZS1zZXNzaW9uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ1cGRhdGUtc2Vzc2lvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9hXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvYVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvY1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL2NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfVxuICB9OyIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbW90aW9uQ2FjaGUgfSBmcm9tIFwifi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIn4vdGhlbWVcIjtcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGNvbnN0IE11aVJlbWl4U2VydmVyID0gKCkgPT4gKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcblxuICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudCB0byBhIHN0cmluZy5cbiAgY29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKDxNdWlSZW1peFNlcnZlciAvPik7XG5cbiAgLy8gR3JhYiB0aGUgQ1NTIGZyb20gZW1vdGlvblxuICBjb25zdCB7IHN0eWxlcyB9ID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cbiAgbGV0IHN0eWxlc0hUTUwgPSBcIlwiO1xuXG4gIHN0eWxlcy5mb3JFYWNoKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4ge1xuICAgIGNvbnN0IGVtb3Rpb25LZXkgPSBgJHtrZXl9ICR7aWRzLmpvaW4oXCIgXCIpfWA7XG4gICAgY29uc3QgbmV3U3R5bGVUYWcgPSBgPHN0eWxlIGRhdGEtZW1vdGlvbj1cIiR7ZW1vdGlvbktleX1cIj4ke2Nzc308L3N0eWxlPmA7XG4gICAgc3R5bGVzSFRNTCA9IGAke3N0eWxlc0hUTUx9JHtuZXdTdHlsZVRhZ31gO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIGVtb3Rpb24gc3R5bGUgdGFncyBhZnRlciB0aGUgaW5zZXJ0aW9uIHBvaW50IG1ldGEgdGFnXG4gIGNvbnN0IG1hcmt1cCA9IGh0bWwucmVwbGFjZShcbiAgICAvPG1ldGEoXFxzKSpuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKmNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqXFwvPi8sXG4gICAgYDxtZXRhIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiLz4ke3N0eWxlc0hUTUx9YFxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIn4vdGhlbWUvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6IFwiZGFya1wiLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IENPTE9SUy5QUklNQVJZLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuU0VDT05EQVJZLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IENPTE9SUy5FUlJPUixcbiAgICB9LFxuICAgIHdhcm5pbmc6IHtcbiAgICAgIG1haW46IENPTE9SUy5XQVJOSU5HLFxuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgbWFpbjogQ09MT1JTLklORk8sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBtYWluOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IENPTE9SUy5CQUNLR1JPVU5ELkRFRkFVTFQsXG4gICAgICBwYXBlcjogQ09MT1JTLkJBQ0tHUk9VTkQuUEFQRVIsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBcdTI2OUJcdUZFMEZcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsIC8vIE5vIG1vcmUgcmlwcGxlLCBvbiB0aGUgd2hvbGUgYXBwbGljYXRpb24gXHVEODNEXHVEQ0EzIVxuICAgICAgICAvLyB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgcHJvcHMgdG8gY2hhbmdlXG4gICAgICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTsiLCAiZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgUFJJTUFSWTogXCIjODUwMEZGXCIsXG4gIFNFQ09OREFSWTogXCIjMDBGRkI4XCIsXG4gIC8vIEVSUk9SOiBcIiNGRjAwNDdcIixcbiAgRVJST1I6IFwiI2ZmMmYwMFwiLFxuICBXQVJOSU5HOiBcIiNGRkE1MDBcIixcbiAgSU5GTzogXCIjMDBFN0ZGXCIsXG4gIFNVQ0NFU1M6IFwiIzAwRkY3RVwiLFxuICBCQUNLR1JPVU5EOiB7XG4gICAgREVGQVVMVDogXCIjMEYwRjE1XCIsXG4gICAgUEFQRVI6IFwiIzA3MDMxOVwiLFxuICB9LFxufTtcbiIsICJpbXBvcnQge1xuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgT3V0bGV0LCB1c2VDYXRjaCwgTWV0YSwgU2NyaXB0cyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIn4vc3RhdGUvQXV0aFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBTdGFjaywgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBCYXIgfSBmcm9tIFwifi9jb21wb25lbnRzL0FwcEJhclwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgQXV0aFVzZXIsIGdldEF1dGhVc2VyLCBnZXRVc2VyVG9rZW4gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFBhcGVyXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIsIHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUVtb3Rpb25DYWNoZSB9IGZyb20gXCJ+L3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZVwiO1xuaW1wb3J0IHsgdW5zdGFibGVfdXNlRW5oYW5jZWRFZmZlY3QgYXMgdXNlRW5oYW5jZWRFZmZlY3QgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsaWVudFN0eWxlQ29udGV4dCBmcm9tIFwifi90aGVtZS9DbGllbnRTdHlsZUNvbnRleHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL21vZGVybi1jc3MtcmVzZXRAMS40LjAvZGlzdC9yZXNldC5taW4uY3NzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZ2xvYmFsU3R5bGVzVXJsLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYENvZGUgU2FnYXMgaXMgYSBwbGFjZSB0byBsZWFybiBhIG1pbGxpb24gYW5kIG9uZSB3YXlzIHRvIGNvZGUuYDtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBrZXl3b3JkczogXCJjb2RlLHNhZ2FzLGxlYXJuXCIsXG4gICAgXCJ0d2l0dGVyOmltYWdlXCI6IFwiaHR0cHM6Ly9jb2Rlc2FnYXMuY29tL3NvY2lhbC5wbmdcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBjb2Rlc2FnYXNcIixcbiAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBjb2Rlc2FnYXNcIixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJDb2RlIFNhZ2FzXCIsXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuICAoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG4gICAgY29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXG4gICAgLy8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcbiAgICB1c2VFbmhhbmNlZEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICAvLyByZS1pbmplY3QgdGFnc1xuICAgICAgY29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG4gICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgKGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcbiAgICAgIH0pO1xuICAgICAgLy8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG4gICAgICBjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxuICAgICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbik7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgdXNlcjogQXV0aFVzZXIgfCBudWxsOyB1c2VyVG9rZW46IHN0cmluZyB8IG51bGwgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldEF1dGhVc2VyKHJlcXVlc3QpO1xuICBjb25zdCB1c2VyVG9rZW4gPSBhd2FpdCBnZXRVc2VyVG9rZW4ocmVxdWVzdCk7XG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICB1c2VyLFxuICAgIHVzZXJUb2tlbixcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuZnVuY3Rpb24gUHJvdmlkZXJzKHtcbiAgdXNlcixcbiAgY2hpbGRyZW4sXG4gIHVzZXJUb2tlbixcbn06IHtcbiAgdXNlcjogQXV0aFVzZXIgfCBudWxsO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB1c2VyVG9rZW46IHN0cmluZyB8IG51bGw7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlciB1c2VyPXt1c2VyfSB1c2VyVG9rZW49e3VzZXJUb2tlbn0+XG4gICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgeyB1c2VyLCB1c2VyVG9rZW4gfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxQcm92aWRlcnMgdXNlcj17dXNlcn0gdXNlclRva2VuPXt1c2VyVG9rZW59PlxuICAgICAgICA8QXBwQmFyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvUHJvdmlkZXJzPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJvb3RFcnJvcih7XG4gIGRvY1RpdGxlID0gXCJPb3BzIVwiLFxuICB0aXRsZSA9IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFx1RDgzRFx1REUyNVwiLFxuICBtZXNzYWdlID0gXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17ZG9jVGl0bGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcFBhcGVyIGxlZnRDb2xvcj1cImVycm9yXCIgcmlnaHRDb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57bWVzc2FnZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgdGl0bGUgPSBgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWA7XG4gIHJldHVybiAoXG4gICAgPFJvb3RFcnJvclxuICAgICAgZG9jVGl0bGU9e3RpdGxlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgbWVzc2FnZT17XG4gICAgICAgIFwiV2VsbCB0aGlzIGlzIGVtYmFyc2luZy4gXHVEODNEXHVERTA1IEhhdmUgeW91IHRyaWVkIHR1cm5pbmcgaXQgb2ZmIGFuZCBiYWNrIG9uIGFnYWluP1wiXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8Um9vdEVycm9yIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+O1xufVxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VGZXRjaGVyLCB1c2VMb2NhdGlvbiwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMb2dvdXRGb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvdXRGb3JtXCI7XG5pbXBvcnQgeyBhZGRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEF1dGhVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoVXNlciB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHVzZXI6IHVzZXJQcm9wLFxuICB1c2VyVG9rZW46IHVzZXJUb2tlblByb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxBdXRoVXNlciB8IG51bGw+KHVzZXJQcm9wKTtcbiAgY29uc3QgbG9nb3V0Rm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPih1c2VyVG9rZW5Qcm9wIHx8IFwiXCIpO1xuICBjb25zdCB1c2VyVG9rZW5Gb3JtID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyUHJvcCk7XG4gIH0sIFt1c2VyUHJvcF0pO1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBwYXRobmFtZS5pbmNsdWRlcyhcIi9zaWduL1wiKSA/IFwiL2Rhc2hib2FyZFwiIDogcGF0aG5hbWU7XG5cbiAgZnVuY3Rpb24gc2VuZFVzZXJUb2tlbigpIHtcbiAgICBpZiAoIXVzZXJUb2tlbkZvcm0uY3VycmVudCkgcmV0dXJuO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHVzZXJUb2tlbkZvcm0uY3VycmVudCk7XG4gICAgZmV0Y2hlci5zdWJtaXQoZm9ybURhdGEsIHttZXRob2Q6IFwicG9zdFwiLCBhY3Rpb246XCIvdXBkYXRlLXNlc3Npb25cIn0pXG4gIH1cblxuICAvLyBsaXN0ZW4gZm9yIHRva2VuIGNoYW5nZXNcbiAgLy8gY2FsbCBzZXRVc2VyIGFuZCB3cml0ZSBuZXcgdG9rZW4gYXMgYSBjb29raWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHJldHVybiBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoYXN5bmMgKHVzZXJGcm9tQ2hhbmdlKSA9PiB7XG4gICAgICBpZiAodXNlckZyb21DaGFuZ2UgPT09IG51bGwgJiYgdXNlciAhPT0gbnVsbCkge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICBpZiAoIWxvZ291dEZvcm1SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBsb2dvdXRGb3JtUmVmLmN1cnJlbnQuc3VibWl0KCk7XG4gICAgICB9IGVsc2UgaWYgKHVzZXJGcm9tQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlckZyb21DaGFuZ2UuZ2V0SWRUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4gIT09IHVzZXJUb2tlbikge1xuICAgICAgICAgIHNldFVzZXIodXNlckZyb21DaGFuZ2UpO1xuICAgICAgICAgIHNldFVzZXJUb2tlbih0b2tlbik7XG4gICAgICAgICAgYXdhaXQgYWRkQXBwVXNlcih1c2VyRnJvbUNoYW5nZS51aWQpO1xuICAgICAgICAgIHNlbmRVc2VyVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbdXNlcl0pO1xuXG4gIC8vIGZvcmNlIHJlZnJlc2ggdGhlIHRva2VuIGV2ZXJ5IDEwIG1pbnV0ZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XG4gICAgICBpZiAodXNlcikgYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xuICAgIH0sIDEwICogNjAgKiAxMDAwKTtcblxuICAgIC8vIGNsZWFuIHVwIHNldEludGVydmFsXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgfSwgW10pO1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyfT5cbiAgICAgIDxMb2dvdXRGb3JtIHJlZj17bG9nb3V0Rm9ybVJlZn0gLz5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiByZWY9e3VzZXJUb2tlbkZvcm19IGFjdGlvbj1cIi91cGRhdGUtc2Vzc2lvblwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbWV0aG9kXCIgdmFsdWU9XCJwdXRcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VyVG9rZW5cIiB2YWx1ZT17dXNlclRva2VufSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHJlZGlyZWN0VG99XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iLCAiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybVByb3BzIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBMb2dvdXRGb3JtID0gZm9yd2FyZFJlZjxIVE1MRm9ybUVsZW1lbnQsIEZvcm1Qcm9wcz4oXG4gIChwcm9wcywgcmVmKSA9PiA8Rm9ybSByZWY9e3JlZn0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIiB7Li4ucHJvcHN9IC8+XG4pO1xuIiwgImltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xuaW1wb3J0IEF1dGhDb250cm9scyBmcm9tIFwifi9jb21wb25lbnRzL0F1dGhDb250cm9sc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwQmFyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXVpQXBwQmFyPlxuICAgICAgICA8VG9vbGJhclxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59LCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59KWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDbGlwOiBcInRleHRcIixcbiAgICAgICAgICAgICAgdGV4dEZpbGxDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ09ERSBTQUdBU1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxBdXRoQ29udHJvbHMgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9NdWlBcHBCYXI+XG4gICAgICA8Qm94IHN4PXt7IG1hcmdpbkJvdHRvbTogXCI2NHB4XCIgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IFNpZ25PdXRCdXR0b24gfSBmcm9tIFwifi9jb21wb25lbnRzL1NpZ25PdXRCdXR0b25cIjtcbmltcG9ydCB7IExvZ291dEZvcm0gfSBmcm9tIFwifi9jb21wb25lbnRzL0xvZ291dEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluVXAoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VBdXRoKCk7XG4gIHJldHVybiB1c2VyID09PSBudWxsID8gKFxuICAgIDxCb3g+XG4gICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvc2lnbi9pblwiPlxuICAgICAgICBzaWduIGluXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc3g9e3sgbWFyZ2luTGVmdDogMiB9fVxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgIHRvPVwiL3NpZ24vdXBcIlxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHNpZ24gdXBcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApIDogKFxuICAgIDxCb3g+XG4gICAgICA8TG9nb3V0Rm9ybT5cbiAgICAgICAgPFNpZ25PdXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgc2lnbiBvdXRcbiAgICAgICAgPC9TaWduT3V0QnV0dG9uPlxuICAgICAgPC9Mb2dvdXRGb3JtPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ25PdXRCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8PlxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IHsuLi5wcm9wc30+c2lnbiBvdXQ8L0J1dHRvbj5cclxuICA8Lz5cclxuKTtcclxuXHJcbiIsICJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIG9uSWRUb2tlbkNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHtcclxuICBlbWFpbCxcclxuICBwYXNzd29yZCxcclxufSk6IFByb21pc2U8VXNlcj4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBhdXRoLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICBhdXRoXHJcbiAgICAuc2lnbk91dCgpXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dCFcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQXV0aFN0YXRlQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiKHVzZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWRUb2tlbkNoYW5nZWQoY2IpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICByZXR1cm4gb25JZFRva2VuQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpe1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBhdXRoLmN1cnJlbnRVc2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclRva2VuUmVmcmVzaCgpe1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG4gIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBdXRoRW11bGF0b3IsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdEZpcmVzdG9yZUVtdWxhdG9yLCBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5sZXQgYXBwLCBhdXRoLCBkYjtcclxuXHJcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xyXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUEzNFpXR1hKZlpsUjZ1OHpzZks1bmJzSHBpZ3JfYU01OFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjb2Rlc2FnYXMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY29kZXNhZ2FzXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImNvZGVzYWdhcy5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDM0NzQzOTExNTU0XCIsXHJcbiAgICBhcHBJZDogXCIxOjQzNDc0MzkxMTU1NDp3ZWI6NGM0Yjc0ZjAzOWJiNWYyYTk4ODA5YlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVJGTjQ3SkszOE5cIixcclxuICB9O1xyXG4gIGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgY29ubmVjdEZpcmVzdG9yZUVtdWxhdG9yKGRiLCBcImxvY2FsaG9zdFwiLCA4MDgwKTtcclxuICAgIGNvbm5lY3RBdXRoRW11bGF0b3IoYXV0aCwgXCJodHRwOi8vbG9jYWxob3N0OjkwOTlcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBhcHAsIGF1dGgsIGRiLCBnZXRBdXRoLCBnZXRGaXJlc3RvcmUgfTtcclxuIiwgImltcG9ydCB7IERlY29kZWRJZFRva2VuIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2xpYi9hdXRoL3Rva2VuLXZlcmlmaWVyXCI7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBlbWFpbEFuZFBhc3N3b3JkU2lnbkluLFxuICBlbWFpbEFuZFBhc3N3b3JkU2lnblVwLFxufSBmcm9tIFwifi9maXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcblxudHlwZSBMb2dpbkZvcm0gPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBdXRoVXNlciA9IERlY29kZWRJZFRva2VuIHwgVXNlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgZW1haWwsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25VcCh7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKTogUHJvbWlzZTxVc2VyPiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnbkluKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmxldCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIik7XG59XG5cbmxldCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcImNzX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJUb2tlbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGxldCB1c2VyVG9rZW4gPSBzZXNzaW9uLmdldChcInVzZXJUb2tlblwiKTtcbiAgaWYgKCF1c2VyVG9rZW4gfHwgdHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VyVG9rZW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoVXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxBdXRoVXNlciB8IG51bGw+IHtcbiAgbGV0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcbiAgaWYgKHR5cGVvZiB1c2VyVG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYXV0aGVkVXNlciA9IGF3YWl0IGdldEF1dGgoKS52ZXJpZnlJZFRva2VuKHVzZXJUb2tlbik7XG4gICAgcmV0dXJuIGF1dGhlZFVzZXI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldEF1dGhVc2VyIGVycm9yXCIsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGxldCBhdXRoVXNlciA9IGF3YWl0IGdldEF1dGhVc2VyKHJlcXVlc3QpO1xuICAgIHJldHVybiBhdXRoVXNlcj8udWlkIHx8IG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRVc2VySWQgZXJyb3JcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGxldCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pO1xuICAgIHRocm93IHJlZGlyZWN0KGAvc2lnbi9pbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvc2lnbi9pblwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyVG9rZW46IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG4gIHNlc3Npb24uc2V0KFwidXNlclRva2VuXCIsIHVzZXJUb2tlbik7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBjZXJ0LCBnZXRBcHBzLCBBcHAgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXBwXCI7XG5pbXBvcnQgeyBBdXRoLCBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgRmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuXG5sZXQgYXBwOiBBcHAsIGF1dGg6IEF1dGgsIGRiOiBGaXJlc3RvcmU7XG5pZiAoIWdldEFwcHMoKS5sZW5ndGgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBwcm9jZXNzLmVudi5GSVJFU1RPUkVfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjgwODBcIjtcbiAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0VNVUxBVE9SX0hPU1QgPSBcImxvY2FsaG9zdDo5MDk5XCI7XG4gIH1cbiAgY29uc3QgZW5jb2RlZEtleSA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BSSVZBVEVfS0VZX0JBU0U2NCB8fCBcIlwiO1xuICBjb25zdCBkZWNvZGVkS2V5ID0gQnVmZmVyLmZyb20oZW5jb2RlZEtleSwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGY4XCIpO1xuICBhcHAgPSBpbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBjZXJ0KHtcbiAgICAgIHByaXZhdGVLZXk6IGRlY29kZWRLZXksXG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xJRU5UX0VNQUlMLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxuICAgIH0pLFxuICAgIGRhdGFiYXNlVVJMOiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUR9LmZpcmViYXNlaW8uY29tYCxcbiAgfSk7XG4gIGF1dGggPSBnZXRBdXRoKCk7XG4gIGRiID0gZ2V0RmlyZXN0b3JlKCk7XG59XG5cbmV4cG9ydCB7IGFwcCwgYXV0aCwgZ2V0QXV0aCwgZGIsIGdldEZpcmVzdG9yZSB9O1xuIiwgImltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxlZnRDb2xvcj86IHN0cmluZztcbiAgcmlnaHRDb2xvcj86IHN0cmluZztcbiAgc3g/OiBvYmplY3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gQXBwUGFwZXIoe1xuICBjaGlsZHJlbixcbiAgbGVmdENvbG9yID0gXCJwcmltYXJ5XCIsXG4gIHJpZ2h0Q29sb3IgPSBcInNlY29uZGFyeVwiLFxuICBzeCA9IHt9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBwYWRkaW5nOiA0LFxuXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXG4gICAgICAgIGJvcmRlcjogXCJzb2xpZCA1cHggdHJhbnNwYXJlbnRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFlbVwiLFxuXG4gICAgICAgIFwiJjpiZWZvcmUgXCI6IHtcbiAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgICBtYXJnaW46IFwiLTVweFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHt0aGVtZS5wYWxldHRlW2xlZnRDb2xvcl0ubWFpbn0sICR7dGhlbWUucGFsZXR0ZVtyaWdodENvbG9yXS5tYWlufSlgLFxuICAgICAgICB9LFxuICAgICAgICAuLi5zeCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50U3R5bGVDb250ZXh0RGF0YSB7XG4gIHJlc2V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0PENsaWVudFN0eWxlQ29udGV4dERhdGE+KHtcbiAgcmVzZXQ6ICgpID0+IHt9LFxufSk7IiwgImltcG9ydCB7IHJlZGlyZWN0LCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7XG4gIGFkZEJsb2dQb3N0LFxuICBCbG9nUG9zdFdpdGhJZCxcbiAgZ2V0QmxvZ1Bvc3QsXG59IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXRQb3N0IH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0UG9zdFwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEJsb2dQb3N0V2l0aElkIHtcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoIWFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbiAgICB9XG4gIH1cbiAgaW52YXJpYW50KHBhcmFtcy5ibG9nUG9zdElkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBibG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KHBhcmFtcy5ibG9nUG9zdElkKTtcbiAgaW52YXJpYW50KGJsb2dQb3N0LCBcImV4cGVjdGVkIGJsb2dQb3N0XCIpO1xuICByZXR1cm4geyAuLi5ibG9nUG9zdCwgaXNBdXRob3IgfTtcbn07XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW47XG4gIHNsdWc/OiBib29sZWFuO1xuICBtYXJrZG93bj86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpbWFnZVVybCA9IGZvcm1EYXRhLmdldChcImltYWdlVXJsXCIpO1xuICBjb25zdCBpbWFnZUFsdCA9IGZvcm1EYXRhLmdldChcImltYWdlQWx0XCIpO1xuICBjb25zdCB0YWdzID0gU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpPy5zcGxpdChcIixcIikgfHwgW107XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VVcmwpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VBbHQpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghdGFncykgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBhdXRob3JJZCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaXNQdWJsaXNoZWQgPT09IFwiYm9vbGVhblwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwdWJsaXNoRGF0ZSA9PT0gXCJudW1iZXJcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VVcmwgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlQWx0ID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0YWdzID09PSBcIm9iamVjdFwiKTtcblxuICBhd2FpdCBhZGRCbG9nUG9zdCh7XG4gICAgYXV0aG9ySWQsXG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBtYXJrZG93bixcbiAgICBpc1B1Ymxpc2hlZCxcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IHtcbiAgICBhdXRob3JJZCxcbiAgICBpc1B1Ymxpc2hlZDogaW5pdElzUHVibGlzaGVkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd246IGluaXRNYXJrZG93bixcbiAgICBwdWJsaXNoRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZVVybCxcbiAgICBpbWFnZUFsdCxcbiAgICB0YWdzLFxuICB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUocHVibGlzaERhdGUpKTtcbiAgY29uc3QgW21hcmtkb3duLCBzZXRNYXJrZG93bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KGluaXRNYXJrZG93bik7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUoaW5pdElzUHVibGlzaGVkKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBmdW5jdGlvbiBoYW5kbGVFZGl0b3JDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRNYXJrZG93bih2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFZGl0UG9zdFxuICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICBhdXRob3JJZD17YXV0aG9ySWR9XG4gICAgICBpc1B1Ymxpc2hlZD17aXNQdWJsaXNoZWR9XG4gICAgICBzZXRJc1B1Ymxpc2hlZD17c2V0SXNQdWJsaXNoZWR9XG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgc2V0RGF0ZT17c2V0RGF0ZX1cbiAgICAgIG1hcmtkb3duPXttYXJrZG93bn1cbiAgICAgIGhhbmRsZUVkaXRvckNoYW5nZT17aGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgc2x1Zz17c2x1Z31cbiAgICAgIGltYWdlVXJsPXtpbWFnZVVybH1cbiAgICAgIGltYWdlQWx0PXtpbWFnZUFsdH1cbiAgICAgIHRhZ3M9e3RhZ3M/LmpvaW4oXCIsIFwiKSB8fCBcIlwifVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5cbmNvbnN0IEJMT0dfUE9TVFNfQ09MTEVDVElPTiA9IFwiYmxvZ1Bvc3RzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3Qge1xuICBhdXRob3JJZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG4gIG1hcmtkb3duOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGlzUHVibGlzaGVkOiBib29sZWFuO1xuICBwdWJsaXNoRGF0ZTogbnVtYmVyO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1Bvc3RXaXRoSWQgZXh0ZW5kcyBCbG9nUG9zdCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEJMT0dfUE9TVFNfQ09MTEVDVElPTlxuICApIGFzIENvbGxlY3Rpb25SZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYmxvZ1Bvc3RJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhibG9nUG9zdElkKSBhcyBEb2N1bWVudFJlZmVyZW5jZTxCbG9nUG9zdD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKCkgPT4gZ2V0Q29sbGVjdGlvblJlZigpIGFzIFF1ZXJ5PEJsb2dQb3N0PjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJsb2dQb3N0cygpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSgpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3RJZCk6IFByb21pc2U8QmxvZ1Bvc3RXaXRoSWQgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShibG9nUG9zdElkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIHsgaWQ6IGRvY1JlZi5pZCwgLi4uZG9jU25hcD8uZGF0YSgpIGFzIEJsb2dQb3N0IH0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEJsb2dQb3N0KGJsb2dQb3N0OiBCbG9nUG9zdCk6IFByb21pc2U8QmxvZ1Bvc3Q+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3Quc2x1Zykuc2V0KGJsb2dQb3N0KTtcblxuICAgIGNvbnN0IG5ld0Jsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QoYmxvZ1Bvc3Quc2x1Zyk7XG4gICAgaWYgKCFuZXdCbG9nUG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Jsb2dQb3N0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7XG4gIENvbGxlY3Rpb25SZWZlcmVuY2UsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEFwcFVzZXIsIEFwcFVzZXJXaXRoSWQsIEFQUF9VU0VSU19DT0xMRUNUSU9OIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgZ2V0Q29sbGVjdGlvblJlZiA9ICgpID0+XG4gIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXG4gICAgQVBQX1VTRVJTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoYXBwVXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkuZG9jKGFwcFVzZXJJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QXBwVXNlcj47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxBcHBVc2VyPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFwcFVzZXJzKHVzZXJJZCk6IFByb21pc2U8QXBwVXNlcldpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFwcFVzZXIoYXBwVXNlcklkKTogUHJvbWlzZTxBcHBVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKTtcbiAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcbiAgaWYgKGRvY1NuYXAuZXhpc3RzKSB7XG4gICAgcmV0dXJuIGRvY1NuYXA/LmRhdGEoKSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQXBwVXNlcihcbiAgYXBwVXNlcklkOiBzdHJpbmdcbik6IFByb21pc2U8QXBwVXNlcj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nQXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoZXhpc3RpbmdBcHBVc2VyKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdBcHBVc2VyO1xuICAgIH1cbiAgICBhd2FpdCBnZXREb2NSZWZlcmVuY2UoYXBwVXNlcklkKS5zZXQoe3Blcm1pc3Npb25zOiBbXX0pO1xuXG4gICAgY29uc3QgbmV3QXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIoYXBwVXNlcklkKTtcbiAgICBpZiAoIW5ld0FwcFVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcHBVc2VyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIEFwcFVzZXIge1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcFVzZXJXaXRoSWQgZXh0ZW5kcyBBcHBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9VU0VSU19DT0xMRUNUSU9OID0gXCJhcHBVc2Vyc1wiOyIsICJpbXBvcnQgeyBGb3JtLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgVGV4dEZpZWxkLFxuICBTd2l0Y2gsXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIEJveCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9EYXRlVGltZVBpY2tlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdFBvc3Qoe1xuICBlcnJvcnMsXG4gIGF1dGhvcklkLFxuICBpc1B1Ymxpc2hlZCxcbiAgc2V0SXNQdWJsaXNoZWQsXG4gIGRhdGUsXG4gIHNldERhdGUsXG4gIG1hcmtkb3duLFxuICBoYW5kbGVFZGl0b3JDaGFuZ2UsXG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBzbHVnID0gXCJcIixcbiAgaW1hZ2VVcmwgPSBcIlwiLFxuICBpbWFnZUFsdCA9IFwiXCIsXG4gIHRhZ3MgPSBcIlwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFjayBzcGFjaW5nPXsyfSBzeD17eyBwOiA0IH19PlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdXRob3JJZFwiIHZhbHVlPXthdXRob3JJZH0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cImlzUHVibGlzaGVkXCJcbiAgICAgICAgICB2YWx1ZT17aXNQdWJsaXNoZWQudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibWFya2Rvd25cIiB2YWx1ZT17bWFya2Rvd259IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJwdWJsaXNoRGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGU/LmdldFRpbWUoKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBzeD17eyBwOiA0IH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiB7IG1kOiBcIjMyMHB4XCIgfSxcbiAgICAgICAgICAgICAgZmxleDogeyBtZDogXCIwIDAgMzIwcHhcIiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SXNQdWJsaXNoZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcImNvbnRyb2xsZWRcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2lzUHVibGlzaGVkID8gXCJJcyBQdWJsaXNoZWRcIiA6IFwiTm90IFB1Ymxpc2hlZFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8RGF0ZVRpbWVQaWNrZXIgZGF0ZT17ZGF0ZX0gc2V0RGF0ZT17c2V0RGF0ZX0gdmFyaWFudD1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnRpdGxlID8gXCJUaXRsZSBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgIGVycm9ycz8uZGVzY3JpcHRpb24gPyBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnNsdWd9XG4gICAgICAgICAgICAgICAgaWQ9XCJzbHVnXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzbHVnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSBVcmxcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uaW1hZ2VVcmwgPyBcImltYWdlVXJsIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VBbHRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgQWx0IFRleHRcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8uaW1hZ2VBbHQgPyBcImltYWdlQWx0IGlzIHJlcXVpcmVkXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZUFsdFwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZUFsdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnRhZ3N9XG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycz8udGFncyA/IFwidGFncyBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0YWdzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcImNvbHVtbi1yZXZlcnNlXCIgfX1cbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgc3g9e3sgZmxleDogXCIxIDFcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDFcIiwgbWluSGVpZ2h0OiBcIjUwMHB4XCIgfX0+XG4gICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHZoXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U9XCJtYXJrZG93blwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWFya2Rvd259XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgey8qIGxhYmVsPVwiTWFya2Rvd25cIlxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ZXJyb3JzPy5tYXJrZG93biA/IDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH0gKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezJ9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBQb3N0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IFRleHRGaWVsZCwge0Jhc2VUZXh0RmllbGRQcm9wc30gZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEFkYXB0ZXJEYXRlRm5zIGZyb20gJ0BtdWkvbGFiL0FkYXB0ZXJEYXRlRm5zJztcbmltcG9ydCBMb2NhbGl6YXRpb25Qcm92aWRlciBmcm9tICdAbXVpL2xhYi9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTVVJRGF0ZVRpbWVQaWNrZXIgZnJvbSAnQG11aS9sYWIvRGF0ZVRpbWVQaWNrZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCYXNlVGV4dEZpZWxkUHJvcHMge1xuICBkYXRlOiBEYXRlIHwgbnVsbDtcbiAgc2V0RGF0ZTogKG5ld0RhdGU6IERhdGUgfCBudWxsKSA9PiB2b2lkXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGVUaW1lUGlja2VyKHtkYXRlLCBzZXREYXRlLCAuLi50ZXh0RmllbGRQcm9wc306IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF0ZUZuc30+XG4gICAgICA8TVVJRGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPFRleHRGaWVsZCBmdWxsV2lkdGggey4uLnByb3BzfSB7Li4udGV4dEZpZWxkUHJvcHN9Lz59XG4gICAgICAgIGxhYmVsPVwiRGF0ZVRpbWVQaWNrZXJcIlxuICAgICAgICB2YWx1ZT17ZGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdEYXRlKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgICAvPlxuICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XG4gICk7XG59IiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGdldE1EWENvbXBvbmVudCB9IGZyb20gXCJtZHgtYnVuZGxlci9jbGllbnRcIjtcbmltcG9ydCB7IEJsb2dQb3N0V2l0aElkLCBnZXRCbG9nUG9zdCB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhYiwgTGluaywgUGFwZXIsIFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDb2RlQmxvY2sgfSBmcm9tIFwifi9jb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0XCI7XG5pbXBvcnQgeyBnZXRNZHggfSBmcm9tIFwifi91dGlscy9tZHguc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIGV4dGVuZHMgQmxvZ1Bvc3RXaXRoSWQge1xuICBjb2RlOiBzdHJpbmc7XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGE+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKGFwcFVzZXI/LnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiYXV0aG9yXCIpKSB7XG4gICAgICBpc0F1dGhvciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGludmFyaWFudChwYXJhbXMuYmxvZ1Bvc3RJZCwgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKTtcbiAgY29uc3QgYmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChwYXJhbXMuYmxvZ1Bvc3RJZCk7XG4gIGludmFyaWFudChibG9nUG9zdCwgXCJleHBlY3RlZCBibG9nUG9zdFwiKTtcbiAgY29uc3QgeyBjb2RlLCBmcm9udG1hdHRlciB9ID0gYXdhaXQgZ2V0TWR4KGJsb2dQb3N0Lm1hcmtkb3duKTtcbiAgcmV0dXJuIHsgLi4uYmxvZ1Bvc3QsIGNvZGUsIGlzQXV0aG9yIH07XG59O1xuXG5jb25zdCBIMSA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoMVwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDIgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDJcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDMgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDNcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDQgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDRcIlxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgSDUgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBINiA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBtYXJnaW5Cb3R0b206IDMgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IFAgPSAocHJvcHMpID0+IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5XCIgY29tcG9uZW50PVwicFwiIHsuLi5wcm9wc30gLz47XG5jb25zdCBCbG9ja3F1b3RlID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg2XCJcbiAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgIHN4PXt7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgbWFyZ2luOiAyLFxuICAgICAgYm9yZGVyTGVmdDogKHsgcGFsZXR0ZSB9KSA9PiBgMnB4IHNvbGlkJHtwYWxldHRlLnByaW1hcnkubWFpbn1gLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IFByZSA9IChwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQ29kZSA9IChwcm9wcykgPT4gPENvZGVCbG9jayB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQSA9IChwcm9wcykgPT4gPExpbmsgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgaXNBdXRob3IsIGNvZGUsIGltYWdlVXJsLCBpbWFnZUFsdCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IENvbXBvbmVudCA9IHVzZU1lbW8oKCkgPT4gZ2V0TURYQ29tcG9uZW50KGNvZGUpLCBbY29kZV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luOiBcIjE3OHB4IGF1dG8gMHB4XCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1hZ2VVcmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmAsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzIwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7aXNBdXRob3IgPyAoXG4gICAgICAgICAgPEZhYlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXRcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgdG89XCJlZGl0XCJcbiAgICAgICAgICAgIHN4PXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMjAsIHJpZ2h0OiAyMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge0NvbXBvbmVudCA/IChcbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgIGgxOiBIMSxcbiAgICAgICAgICAgICAgaDI6IEgyLFxuICAgICAgICAgICAgICBoMzogSDMsXG4gICAgICAgICAgICAgIGg0OiBINCxcbiAgICAgICAgICAgICAgaDU6IEg1LFxuICAgICAgICAgICAgICBoNjogSDYsXG4gICAgICAgICAgICAgIHA6IFAsXG4gICAgICAgICAgICAgIGJsb2NrcXVvdGU6IEJsb2NrcXVvdGUsXG4gICAgICAgICAgICAgIHByZTogUHJlLFxuICAgICAgICAgICAgICBjb2RlOiBDb2RlLFxuICAgICAgICAgICAgICBhOiBBLFxuXG4gICAgICAgICAgICAgIC8vIGVtOiAocHJvcHMpID0+IDxpIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRlbnJvZFwiIH19IHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICAgIC8vIHdyYXBwZXI6ICh7IGNvbXBvbmVudHMsIC4uLnJlc3QgfSkgPT4gPG1haW4gey4uLnJlc3R9IC8+LFxuICAgICAgICAgICAgICAvLyBQbGFuZXQ6ICgpID0+IFwiTmVwdHVuZVwiLFxuICAgICAgICAgICAgICAvLyB0aGVtZToge1xuICAgICAgICAgICAgICAvLyAgIHRleHQ6IChwcm9wcykgPT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JleVwiIH19IHsuLi5wcm9wc30gLz4sXG4gICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUGFwZXIsIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XG5pbXBvcnQgZHJhY3VsYSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2RyYWN1bGFcIjtcblxuY29uc3QgTGluZSA9IHN0eWxlZChcImRpdlwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtcm93XCIsXG59KTtcblxuY29uc3QgTGluZU5vID0gc3R5bGVkKFwic3BhblwiKSh7XG4gIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiLFxuICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxuICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgb3BhY2l0eTogXCIwLjVcIixcbn0pO1xuXG5jb25zdCBMaW5lQ29udGVudCA9IHN0eWxlZChcInNwYW5cIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIixcbiAgZm9udEZhbWlseTogXCInRmlyYSBDb2RlJywgbW9ub3NwYWNlXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvZGVCbG9jayA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGNvZGU9e2NoaWxkcmVufSBsYW5ndWFnZT1cImpzeFwiIHRoZW1lPXtkcmFjdWxhfT5cbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgIDxQYXBlclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5lIGtleT17aX0gey4uLmdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KX0+XG4gICAgICAgICAgICAgIDxMaW5lTm8+e2kgKyAxfTwvTGluZU5vPlxuICAgICAgICAgICAgICA8TGluZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbiwgZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSkpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IGdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ2hpbGRyZW4gPSBjaGlsZHJlbi5yZXBsYWNlKC9cXHMvZywgXCImbmJzcDtcIik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBzYW5pdGl6ZWRDaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9MaW5lQ29udGVudD5cbiAgICAgICAgICAgIDwvTGluZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICl9XG4gICAgPC9IaWdobGlnaHQ+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJtZHgtYnVuZGxlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWR4KHNvdXJjZTogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XG4gICAgc291cmNlLFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cFwiO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGFkZEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJDb2RlIFNhZ2FzIHwgU2lnbiBJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ24gaW4gdG8gc3RhcnQgeW91ciBvd24gY29kZSBqb3VybmV5IVwiLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFVVEhfVFlQRVMgPSB7XG4gIFNJR05fSU46IFwiU2lnbiBJblwiLFxuICBTSUdOX1VQOiBcIlNpZ24gVXBcIixcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aFR5cGU6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIC8vIFRPRE86IGlmIGEgdXNlciB0aGVuIHJlZGlyZWN0IHRvIC9kYXNoYm9hcmRcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRoVHlwZTpcbiAgICAgIHBhcmFtcy5hdXRoVHlwZSA9PT0gXCJpblwiID8gQVVUSF9UWVBFUy5TSUdOX0lOIDogQVVUSF9UWVBFUy5TSUdOX1VQLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8IGVtYWlsLm1hdGNoKC8uK0AuK1xcLi4rLykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYEVtYWlscyBtdXN0IGxvb2sgbGlrZSBleGFtcGxlQGV4YW1wbGUuY29tYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbnR5cGUgRm9ybURhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgYXV0aFR5cGU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgeyBhdXRoVHlwZTogaW5pdEF1dGhUeXBlIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IFthY3Rpb25EYXRhLCBzZXRBY3Rpb25EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPih7fSk7XG4gIGNvbnN0IFthdXRoVHlwZSwgc2V0QXV0aFR5cGVdID0gdXNlU3RhdGUoaW5pdEF1dGhUeXBlKTtcblxuICBjb25zdCBoYW5kbGVBdXRoVHlwZSA9IChldmVudCwgbmV3QXV0aFR5cGUpID0+IHtcbiAgICBpZiAoIW5ld0F1dGhUeXBlKSByZXR1cm47XG4gICAgc2V0QXV0aFR5cGUobmV3QXV0aFR5cGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRBdXRoVHlwZSAhPT0gYXV0aFR5cGUpIHtcbiAgICAgIHNldEF1dGhUeXBlKGluaXRBdXRoVHlwZSk7XG4gICAgfVxuICB9LCBbaW5pdEF1dGhUeXBlXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KFxuICAgIGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PlxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSh0YXJnZXQpO1xuICAgIGNvbnN0IGF1dGhUeXBlID0gZm9ybS5nZXQoXCJhdXRoVHlwZVwiKTtcbiAgICBjb25zdCBlbWFpbCA9IGZvcm0uZ2V0KFwiZW1haWxcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGF1dGhUeXBlICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICB0eXBlb2YgZW1haWwgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgIHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIlxuICAgICkge1xuICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSB7IGF1dGhUeXBlLCBlbWFpbCwgcGFzc3dvcmQgfTtcbiAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgIGVtYWlsOiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSxcbiAgICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcbiAgICB9O1xuICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG4gICAgc3dpdGNoIChhdXRoVHlwZSkge1xuICAgICAgY2FzZSBBVVRIX1RZUEVTLlNJR05fSU46IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuZW1haWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgICBmb3JtRXJyb3I6IGBFbWFpbC9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBFbWFpbC9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIEFVVEhfVFlQRVMuU0lHTl9VUDoge1xuICAgICAgICAvLyBpZiAodXNlckV4aXN0cykge1xuICAgICAgICAvLyAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgLy8gICAgIGZpZWxkcyxcbiAgICAgICAgLy8gICAgIGZvcm1FcnJvcjogYFVzZXIgd2l0aCBlbWFpbCAke2VtYWlsfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZW1haWxBbmRQYXNzd29yZFNpZ25VcCh7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgU29tZXRoaW5nIHdlbnQgd3JvbmcgdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyB1c2VyLmAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmb3JtRXJyb3I6IGBMb2dpbiB0eXBlIGludmFsaWRgLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YWNrXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMjAwcHggYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXBwUGFwZXI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIHthdXRoVHlwZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyBcImZvcm0tZXJyb3ItbWVzc2FnZVwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrIGNvbXBvbmVudD17UGFwZXJ9IHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhdXRoVHlwZVwiIHZhbHVlPXthdXRoVHlwZX0gLz5cbiAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhUeXBlfVxuICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBdXRoVHlwZX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2lnbiBJbiBvciBTaWduIFVwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17QVVUSF9UWVBFUy5TSUdOX0lOfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17QVVUSF9UWVBFUy5TSUdOX0lOfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0FVVEhfVFlQRVMuU0lHTl9VUH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e0FVVEhfVFlQRVMuU0lHTl9VUH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XG4gICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGF1dGhUeXBlID09PSBBVVRIX1RZUEVTLlNJR05fSU4gPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwpfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCA/IFwiZW1haWwtZXJyb3JcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgYXV0aFR5cGUgPT09IEFVVEhfVFlQRVMuU0lHTl9JTiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicGFzc3dvcmQtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZXJyb3ItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImZvcm0tZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgQVVUSF9UWVBFUy5TSUdOX0lOID09PSBhdXRoVHlwZSA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthdXRoVHlwZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSBhcyBzdHJpbmc7XG4gICAgICBjb25zdCB1c2VyVG9rZW4gPSBmb3JtLmdldChcInVzZXJUb2tlblwiKSBhcyBzdHJpbmc7XG4gICAgICBpZiAoIXVzZXJUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJDb3VsZCBub3QgdXBkYXRlIHNlc3Npb24uIFBsZWFzZSB0cnkgYWdhaW4uXCIsIHtcbiAgICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgY3JlYXRlVXNlclNlc3Npb24odXNlclRva2VuLCByZWRpcmVjdFRvKTtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJSRVFVRVNUIE5PVCBIQU5ETEVEXCIpO1xuICB9XG59O1xuIiwgImltcG9ydCB7IEJveCwgQnV0dG9uLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQmxvZ0NhcmQgfSBmcm9tIFwifi9jb21wb25lbnRzL0Jsb2dDYXJkXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBCbG9nUG9zdFdpdGhJZCwgZ2V0QWxsQmxvZ1Bvc3RzIH0gZnJvbSBcIn4vZGIvYmxvZ1Bvc3RzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBwb3N0czogQmxvZ1Bvc3RXaXRoSWRbXTtcbiAgaXNBdXRob3I6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgbGV0IGlzQXV0aG9yID0gZmFsc2U7XG4gIGlmICh1c2VySWQpIHtcbiAgICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICAgIGlmIChhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgaXNBdXRob3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbEJsb2dQb3N0cygpO1xuICByZXR1cm4geyBwb3N0cywgaXNBdXRob3IgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIGNvbnN0IHsgcG9zdHMsIGlzQXV0aG9yIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjEyMDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgQmxvZ1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHtpc0F1dGhvciA/IChcbiAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvYmxvZy9uZXdcIj5cbiAgICAgICAgICAgIEFkZCBCbG9nIFBvc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1N0YWNrPlxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiMTIwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICB9fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG4gICAgICA+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmbGV4OiB7IHhzOiBcIjAgMCA4MCVcIiwgbWQ6IFwiMCAwIDQwJVwiLCBsZzogXCIwIDAgMzAlXCIgfSxcbiAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmxvZ0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpbWFnZVVybD17cG9zdC5pbWFnZVVybH1cbiAgICAgICAgICAgICAgaW1hZ2VBbHQ9e3Bvc3QuaW1hZ2VBbHR9XG4gICAgICAgICAgICAgIHVybD17YC9ibG9nLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgIC8vIGltYWdlVXJsPXtwb3N0LmltYWdlVXJsIHx8IFwiXCJ9XG4gICAgICAgICAgICAgIC8vIGltYWdlQWx0PXtwb3N0LmltYWdlQWx0IHx8IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQXBwUGFwZXIgfSBmcm9tIFwiLi9BcHBQYXBlclwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgaW1hZ2VBbHQ6IHN0cmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBCbG9nQ2FyZCh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdXJsLFxuICBpbWFnZVVybCxcbiAgaW1hZ2VBbHQsXG59OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcHBQYXBlciBzeD17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgPENhcmQgc3g9e3sgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYSBjb21wb25lbnQ9e0xpbmt9IHRvPXt1cmx9PlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlVXJsfVxuICAgICAgICAgICAgYWx0PXtpbWFnZUFsdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgey8qIFRPRE86IGltcGxlbWVudCBzaGFyZSBhY3Rpb24gYnV0dG9ucyAqL31cbiAgICAgICAgey8qIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgU2hhcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQWN0aW9ucz4gKi99XG4gICAgICA8L0NhcmQ+XG4gICAgPC9BcHBQYXBlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xyXG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHtcclxuICBhZGREYXRhUG9pbnQsXHJcbiAgRGF0YVBvaW50LFxyXG4gIGdldEFsbERhdGFQb2ludHMsXHJcbn0gZnJvbSBcIn4vZGIvZGF0YVBvaW50cy5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRGF0YVBvaW50V2l0aElkLCBnZXRBbGxEYXRhUG9pbnRzTGl2ZSB9IGZyb20gXCJ+L2RiL2RhdGFQb2ludHMuY2xpZW50XCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIn4vc3RhdGUvQXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IHVzZUZpcmViYXNlTG9hZGVyRGF0YSB9IGZyb20gXCJ+L2hvb2tzL3VzZUZpcmViYXNlTG9hZGVyRGF0YVwiO1xyXG5cclxudHlwZSBMb2FkZXJEYXRhID0geyBkYXRhUG9pbnRzOiBEYXRhUG9pbnRXaXRoSWRbXSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XHJcblxyXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XHJcbiAgICBkYXRhUG9pbnRzOiBhd2FpdCBnZXRBbGxEYXRhUG9pbnRzKHVzZXJJZCksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IHBvaW50ID0gTnVtYmVyKGZvcm0uZ2V0KFwicG9pbnRcIikpO1xyXG4gIGNvbnN0IHRpbWVzdGFtcCA9IE51bWJlcihmb3JtLmdldChcInRpbWVzdGFtcFwiKSk7XHJcbiAgaWYgKCFwb2ludCB8fCAhdGltZXN0YW1wKSB7XHJcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJDb3VsZCBub3QgYWRkIHRoaXMgZGF0YSBwb2ludC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwge1xyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgYWRkRGF0YVBvaW50KHtcclxuICAgIHVzZXJJZCxcclxuICAgIHBvaW50LFxyXG4gICAgdGltZXN0YW1wLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaEJvYXJkKCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB1c2VySWQgPSB1c2VyPy51aWQ7XHJcbiAgY29uc3QgeyBkYXRhUG9pbnRzIH0gPSB1c2VGaXJlYmFzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKHVwZGF0ZXIpID0+XHJcbiAgICBnZXRBbGxEYXRhUG9pbnRzTGl2ZSh1c2VySWQsIChkYXRhUG9pbnRzKSA9PiB1cGRhdGVyKHsgZGF0YVBvaW50cyB9KSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxyXG4gICAgICAgIGVsZXZhdGlvbj17M31cclxuICAgICAgICBkaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgICAgc3g9e3sgaGVpZ2h0OiBcIjEyMHB4XCIsIHBhZGRpbmc6IFwiMTJweFwiLCBtYXJnaW46IFwiMTJweFwiLCB3aWR0aDogXCI4MCVcIiB9fVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWFyb3VuZFwifVxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiZmxleC1lbmRcIn1cclxuICAgICAgPlxyXG4gICAgICAgIHtkYXRhUG9pbnRzLmxlbmd0aCA/IChcclxuICAgICAgICAgIGRhdGFQb2ludHNcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXHJcbiAgICAgICAgICAgIC5tYXAoKHsgcG9pbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3BvaW50ICogMTB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcInByaW1hcnkubWFpblwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAvICR7ZGF0YVBvaW50cy5sZW5ndGh9IC0gMTBweClgLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvQm94PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5BZGQgc29tZSBkYXRhITwvVHlwb2dyYXBoeT5cclxuICAgICAgICApfVxyXG4gICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwb2ludFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInRpbWVzdGFtcFwiIHZhbHVlPXtEYXRlLm5vdygpfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICBhZGQgZGF0YVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5cbmNvbnN0IERBVEFfUE9JTlRTX0NPTExFQ1RJT04gPSBcImRhdGFQb2ludHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgcG9pbnQ6IG51bWJlcjtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFQb2ludFdpdGhJZCBleHRlbmRzIERhdGFQb2ludCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIERBVEFfUE9JTlRTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPERhdGFQb2ludD47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChkYXRhUG9pbnRJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhkYXRhUG9pbnRJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8RGF0YVBvaW50PjtcblxuY29uc3QgZ2V0UXVlcnkgPSAodXNlcklkKSA9PlxuICBnZXRDb2xsZWN0aW9uUmVmKCkud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VySWQpIGFzIFF1ZXJ5PERhdGFQb2ludD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYXRhUG9pbnRzKHVzZXJJZCk6IFByb21pc2U8RGF0YVBvaW50V2l0aElkW10+IHtcbiAgY29uc3QgcXVlcnlSZWYgPSBnZXRRdWVyeSh1c2VySWQpO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnlSZWYuZ2V0KCk7XG4gIHJldHVybiBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVBvaW50KGRhdGFQb2ludElkKTogUHJvbWlzZTxEYXRhUG9pbnQgfCBudWxsPiB7XG4gIGNvbnN0IGRvY1JlZiA9IGdldERvY1JlZmVyZW5jZShkYXRhUG9pbnRJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiBkb2NTbmFwPy5kYXRhKCkgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERhdGFQb2ludChkYXRhUG9pbnQ6IERhdGFQb2ludCk6IFByb21pc2U8RGF0YVBvaW50PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0Q29sbGVjdGlvblJlZigpLmFkZChkYXRhUG9pbnQpO1xuXG4gICAgY29uc3QgbmV3RGF0YVBvaW50ID0gYXdhaXQgZ2V0RGF0YVBvaW50KGRvY1JlZi5pZCk7XG4gICAgaWYgKCFuZXdEYXRhUG9pbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhUG9pbnQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IHR5cGUgVXNlRWZmZWN0VW5zdWJjcmliZXIgPSAoKSA9PiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZpcmViYXNlTG9hZGVyRGF0YTxUPihcbiAgY2xpZW50VXBkYXRlcjogKFxuICAgIHVwZGF0ZXI6IChkYXRhOiBUKSA9PiB2b2lkXG4gICkgPT4gVXNlRWZmZWN0VW5zdWJjcmliZXJcbik6IFQge1xuICAvLyBnZXQgdGhlIGRhdGEgZm9ybSB0aGUgc2V2ZXIgdmlhIGZpcmViYXNlIGFkbWluXG4gIGNvbnN0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhPFQ+KCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFQ+KGxvYWRlckRhdGEpO1xuXG4gIC8vIHdoZW4gdGhlIGNsaWVudCBnZXRzIGFuIHVwZGF0ZSBhbGxvd1xuICAvLyB0aGUgY2xpZW50IHRvIHVwZGF0ZSB0aGUgZGF0YVxuICBmdW5jdGlvbiB1cGRhdGVyKGRhdGE6IFQpIHtcbiAgICBzZXREYXRhKGRhdGEpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiBjbGllbnRVcGRhdGVyKHVwZGF0ZXIpLCBbbG9hZGVyRGF0YV0pO1xuICByZXR1cm4gZGF0YTtcbn0iLCAiaW1wb3J0IHtcbiAgcmVkaXJlY3QsXG4gIExvYWRlckZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VBY3Rpb25EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyBhZGRCbG9nUG9zdCB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXRQb3N0IH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0UG9zdFwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGF1dGhvcklkOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgaWYgKCFhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xuICB9XG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXV0aG9ySWQ6IHVzZXJJZCxcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW47XG4gIHNsdWc/OiBib29sZWFuO1xuICBtYXJrZG93bj86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbiAgaW1hZ2VVcmw/OiBib29sZWFuO1xuICBpbWFnZUFsdD86IGJvb2xlYW47XG4gIHRhZ3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIik7XG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGF1dGhvcklkID0gZm9ybURhdGEuZ2V0KFwiYXV0aG9ySWRcIik7XG4gIGNvbnN0IGltYWdlVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VVcmxcIik7XG4gIGNvbnN0IGltYWdlQWx0ID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VBbHRcIik7XG4gIGNvbnN0IHRhZ3MgPSBTdHJpbmcoZm9ybURhdGEuZ2V0KFwidGFnc1wiKSk/LnNwbGl0KFwiLFwiKSB8fCBbXTtcbiAgY29uc3QgaXNQdWJsaXNoZWQgPSBmb3JtRGF0YS5nZXQoXCJpc1B1Ymxpc2hlZFwiKSA9PT0gXCJ0cnVlXCI7XG4gIGNvbnN0IHB1Ymxpc2hEYXRlID0gcGFyc2VJbnQoXG4gICAgKGZvcm1EYXRhLmdldChcInB1Ymxpc2hEYXRlXCIpIGFzIHN0cmluZykgfHwgXCIwXCIsXG4gICAgMTBcbiAgKTtcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHt9O1xuICBpZiAoIXRpdGxlKSBlcnJvcnMudGl0bGUgPSB0cnVlO1xuICBpZiAoIXNsdWcpIGVycm9ycy5zbHVnID0gdHJ1ZTtcbiAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFpbWFnZVVybCkgZXJyb3JzLmltYWdlVXJsID0gdHJ1ZTtcbiAgaWYgKCFpbWFnZUFsdCkgZXJyb3JzLmltYWdlQWx0ID0gdHJ1ZTtcbiAgaWYgKCF0YWdzKSBlcnJvcnMudGFncyA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgYXV0aG9ySWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlVXJsID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZUFsdCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgdGFncyA9PT0gXCJvYmplY3RcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaXNQdWJsaXNoZWQgPT09IFwiYm9vbGVhblwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwdWJsaXNoRGF0ZSA9PT0gXCJudW1iZXJcIik7XG5cbiAgYXdhaXQgYWRkQmxvZ1Bvc3Qoe1xuICAgIGF1dGhvcklkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd24sXG4gICAgaXNQdWJsaXNoZWQsXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmwsXG4gICAgaW1hZ2VBbHQsXG4gICAgdGFncyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQb3N0KCkge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFttYXJrZG93biwgc2V0TWFya2Rvd25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2lzUHVibGlzaGVkLCBzZXRJc1B1Ymxpc2hlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBhdXRob3JJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGZ1bmN0aW9uIGhhbmRsZUVkaXRvckNoYW5nZSh2YWx1ZSkge1xuICAgIHNldE1hcmtkb3duKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxFZGl0UG9zdFxuICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICBhdXRob3JJZD17YXV0aG9ySWR9XG4gICAgICBpc1B1Ymxpc2hlZD17aXNQdWJsaXNoZWR9XG4gICAgICBzZXRJc1B1Ymxpc2hlZD17c2V0SXNQdWJsaXNoZWR9XG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgc2V0RGF0ZT17c2V0RGF0ZX1cbiAgICAgIG1hcmtkb3duPXttYXJrZG93bn1cbiAgICAgIGhhbmRsZUVkaXRvckNoYW5nZT17aGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgIC8+XG4gICk7XG59XG4iLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGFcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgYVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBhXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQSFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBiXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgYlwiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEIhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImIubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgY1wiLFxuICBcInRpdGxlXCI6IFwidGVzdCBjXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGNcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBDIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGxvZ291dChyZXF1ZXN0KTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbn07IiwgImltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJDb2RlIFNhZ2FzOiBDb3B5L1Bhc3RhL1R3ZXJrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29kZXMgU2FnYXMgYSBwbGFjZSB0byBsZWFybiBhIG1pbGxpb24gYW5kIG9uZSB3YXlzIHRvIGNvZGUuXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCI4MHB4IGF1dG9cIixcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgICBMZWFybmluZyB0byBjb2RlIHNpbXBsaWZpZWQgYW5kIHdpdGggc29tZSBodW1vci5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvc2lnbi9pblwiIHNpemU9e1wibGFyZ2VcIn0gdmFyaWFudD17XCJjb250YWluZWRcIn0+U0lHTiBJTjwvQnV0dG9uPlxuICAgICAgPC9BcHBQYXBlcj5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2Q5NTFjZTY5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1RUUNZSkQ2VC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSlNaWE1TQlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TV1VDVTY2Ty5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFNSk1OVU1ZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVBYUUtSTFcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SEFTUFFWRC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWDdaQk9ORFouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFVQlpGQjM0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1UzZQWkguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DWTZJQk5ZWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJSQkhWREhZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUtZSlY1UUouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQnOnsnaWQnOidyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nLzpibG9nUG9zdElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQtWExSVk5aRUQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVURlpOR0RHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdCc6eydpZCc6J3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy86YmxvZ1Bvc3RJZC9lZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdC01SU00Sk5BTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUQ0WTZTUVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZaTkdERy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYSc6eydpZCc6J3JvdXRlcy9ibG9nL2EnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9hJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYS1UTEdMVURGSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYic6eydpZCc6J3JvdXRlcy9ibG9nL2InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYi0ySEMzTk01Wi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvYyc6eydpZCc6J3JvdXRlcy9ibG9nL2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9jJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvYy1NNEFVVldXRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LUUzRTNJN0lDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZaTkdERy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL25ldyc6eydpZCc6J3JvdXRlcy9ibG9nL25ldycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL25ldy1BMlpPWFZCVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUQ0WTZTUVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZaTkdERy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1ZQVJQRjJQMi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1SQkpURlRKMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1WQkxEUE5ISC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWduLiRhdXRoVHlwZSc6eydpZCc6J3JvdXRlcy9zaWduLiRhdXRoVHlwZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWduLzphdXRoVHlwZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWduLiRhdXRoVHlwZS1IVkNYQlQzTS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdXBkYXRlLXNlc3Npb24nOnsnaWQnOidyb3V0ZXMvdXBkYXRlLXNlc3Npb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondXBkYXRlLXNlc3Npb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24tWFRVVUFPU1IuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1EOTUxQ0U2OS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9D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
