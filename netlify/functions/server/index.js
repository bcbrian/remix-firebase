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
var __export = (target, all4) => {
  for (var name2 in all4)
    __defProp(target, name2, { get: all4[name2], enumerable: true });
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
  const html4 = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html4);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html4.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
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
  if (process.env.FIREBASE_ENVIRONMENT === "development") {
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
  if (process.env.FIREBASE_ENVIRONMENT === "development") {
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
  })), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix7.Scripts, null), false));
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

// node_modules/@mdx-js/mdx/index.js
init_react();

// node_modules/@mdx-js/mdx/lib/core.js
init_react();

// node_modules/unified/index.js
init_react();

// node_modules/unified/lib/index.js
init_react();

// node_modules/bail/index.js
init_react();
function bail(error) {
  if (error) {
    throw error;
  }
}

// node_modules/unified/lib/index.js
var import_is_buffer2 = __toESM(require("is-buffer"), 1);
var import_extend = __toESM(require("extend"), 1);
var import_is_plain_obj = __toESM(require("is-plain-obj"), 1);

// node_modules/trough/index.js
init_react();
function trough() {
  const fns = [];
  const pipeline = { run: run2, use };
  return pipeline;
  function run2(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/vfile/index.js
init_react();

// node_modules/vfile/lib/index.js
init_react();
var import_is_buffer = __toESM(require("is-buffer"), 1);

// node_modules/vfile-message/index.js
init_react();

// node_modules/unist-util-stringify-position/index.js
init_react();
var own = {}.hasOwnProperty;
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own.call(value, "position") || own.call(value, "type")) {
    return position(value.position);
  }
  if (own.call(value, "start") || own.call(value, "end")) {
    return position(value);
  }
  if (own.call(value, "line") || own.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/vfile-message/index.js
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    var parts = [null, null];
    var position3 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    var index2;
    super();
    if (typeof place === "string") {
      origin = place;
      place = null;
    }
    if (typeof origin === "string") {
      index2 = origin.indexOf(":");
      if (index2 === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index2);
        parts[1] = origin.slice(index2 + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position3 = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position3 = place;
      } else if ("line" in place || "column" in place) {
        position3.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = typeof reason === "object" ? reason.stack : "";
    this.reason = this.message;
    this.fatal;
    this.line = position3.start.line;
    this.column = position3.start.column;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.position = position3;
    this.actual;
    this.expected;
    this.file;
    this.url;
    this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// node_modules/vfile/lib/minpath.js
init_react();
var import_path = __toESM(require("path"), 1);

// node_modules/vfile/lib/minproc.js
init_react();
var import_process = __toESM(require("process"), 1);

// node_modules/vfile/lib/minurl.js
init_react();
var import_url = require("url");

// node_modules/vfile/lib/minurl.shared.js
init_react();
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === "object" && fileURLOrPath.href && fileURLOrPath.origin;
}

// node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
var VFile = class {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === "string" || (0, import_is_buffer.default)(value)) {
      options = { value };
    } else if (isUrl(value)) {
      options = { path: value };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = import_process.default.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop))
        this[prop] = options[prop];
    }
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path) {
    if (isUrl(path)) {
      path = (0, import_url.fileURLToPath)(path);
    }
    assertNonEmpty(path, "path");
    if (this.path !== path) {
      this.history.push(path);
    }
  }
  get dirname() {
    return typeof this.path === "string" ? import_path.default.dirname(this.path) : void 0;
  }
  set dirname(dirname) {
    assertPath(this.basename, "dirname");
    this.path = import_path.default.join(dirname || "", this.basename);
  }
  get basename() {
    return typeof this.path === "string" ? import_path.default.basename(this.path) : void 0;
  }
  set basename(basename) {
    assertNonEmpty(basename, "basename");
    assertPart(basename, "basename");
    this.path = import_path.default.join(this.dirname || "", basename);
  }
  get extname() {
    return typeof this.path === "string" ? import_path.default.extname(this.path) : void 0;
  }
  set extname(extname) {
    assertPart(extname, "extname");
    assertPath(this.dirname, "extname");
    if (extname) {
      if (extname.charCodeAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = import_path.default.join(this.dirname, this.stem + (extname || ""));
  }
  get stem() {
    return typeof this.path === "string" ? import_path.default.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = import_path.default.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
};
function assertPart(part, name2) {
  if (part && part.includes(import_path.default.sep)) {
    throw new Error("`" + name2 + "` cannot be a path: did not expect `" + import_path.default.sep + "`");
  }
}
function assertNonEmpty(part, name2) {
  if (!part) {
    throw new Error("`" + name2 + "` cannot be empty");
  }
}
function assertPath(path, name2) {
  if (!path) {
    throw new Error("Setting `" + name2 + "` requires `path` to be set too");
  }
}

// node_modules/unified/lib/index.js
var unified = base().freeze();
var own2 = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data;
  processor.Parser = void 0;
  processor.Compiler = void 0;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse2;
  processor.stringify = stringify3;
  processor.run = run2;
  processor.runSync = runSync2;
  processor.process = process3;
  processor.processSync = processSync;
  return processor;
  function processor() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data((0, import_extend.default)(true, {}, namespace));
    return destination;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own2.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[1] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) {
      } else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry2;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry2 = attachers[index2];
          break;
        }
      }
      if (entry2) {
        if ((0, import_is_plain_obj.default)(entry2[1]) && (0, import_is_plain_obj.default)(value2)) {
          value2 = (0, import_extend.default)(true, entry2[1], value2);
        }
        entry2[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse2(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser2 = processor.Parser;
    assertParser("parse", Parser2);
    if (newable(Parser2, "parse")) {
      return new Parser2(String(file), file).parse();
    }
    return Parser2(String(file), file);
  }
  function stringify3(node, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler = processor.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node);
    if (newable(Compiler, "compile")) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function run2(node, doc, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc === "function") {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync2(node, file) {
    let result;
    let complete;
    processor.run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process3(doc, callback) {
    processor.freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null) {
          } else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    const file = vfile(doc);
    processor.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name2) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name2 in value.prototype);
}
function keys(value) {
  let key;
  for (key in value) {
    if (own2.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name2, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name2 + "` without `Parser`");
  }
}
function assertCompiler(name2, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name2 + "` without `Compiler`");
  }
}
function assertUnfrozen(name2, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name2 + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!(0, import_is_plain_obj.default)(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name2, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name2 + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || (0, import_is_buffer2.default)(value);
}

// node_modules/remark-mdx/index.js
init_react();

// node_modules/micromark-extension-mdxjs/index.js
init_react();
var import_acorn = require("acorn");
var import_acorn_jsx = __toESM(require("acorn-jsx"), 1);

// node_modules/micromark-util-combine-extensions/index.js
init_react();

// node_modules/micromark-util-chunked/index.js
init_react();
function splice(list3, start3, remove, items) {
  const end = list3.length;
  let chunkStart = 0;
  let parameters;
  if (start3 < 0) {
    start3 = -start3 > end ? 0 : end + start3;
  } else {
    start3 = start3 > end ? end : start3;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start3, remove);
    [].splice.apply(list3, parameters);
  } else {
    if (remove)
      [].splice.apply(list3, [start3, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start3, 0);
      [].splice.apply(list3, parameters);
      chunkStart += 1e4;
      start3 += 1e4;
    }
  }
}
function push(list3, items) {
  if (list3.length > 0) {
    splice(list3, list3.length, 0, items);
    return list3;
  }
  return items;
}

// node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all4 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all4, extensions[index2]);
  }
  return all4;
}
function syntaxExtension(all4, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all4, hook) ? all4[hook] : void 0;
    const left = maybe || (all4[hook] = {});
    const right = extension2[hook];
    let code2;
    for (code2 in right) {
      if (!hasOwnProperty.call(left, code2))
        left[code2] = [];
      const value = right[code2];
      constructs(left[code2], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1;
  const before = [];
  while (++index2 < list3.length) {
    ;
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  }
  splice(existing, 0, 0, before);
}

// node_modules/micromark-extension-mdx-expression/index.js
init_react();

// node_modules/micromark-extension-mdx-expression/lib/syntax.js
init_react();

// node_modules/micromark-factory-mdx-expression/index.js
init_react();

// node_modules/micromark-util-character/index.js
init_react();

// node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
init_react();
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return code2 !== null && (code2 < 32 || code2 === 127);
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
var unicodeWhitespace = regexCheck(/\s/);
var unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex2) {
  return check;
  function check(code2) {
    return code2 !== null && regex2.test(String.fromCharCode(code2));
  }
}

// node_modules/micromark-factory-space/index.js
init_react();
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start3;
  function start3(code2) {
    if (markdownSpace(code2)) {
      effects.enter(type);
      return prefix(code2);
    }
    return ok2(code2);
  }
  function prefix(code2) {
    if (markdownSpace(code2) && size++ < limit) {
      effects.consume(code2);
      return prefix;
    }
    effects.exit(type);
    return ok2(code2);
  }
}

// node_modules/unist-util-position-from-estree/index.js
init_react();
function positionFromEstree(value) {
  const node = value || {};
  const loc = node.loc || {};
  const range = node.range || [0, 0];
  const startOffset = range[0] || node.start;
  const endOffset = range[1] || node.end;
  return {
    start: {
      line: loc.start && typeof loc.start.line === "number" && loc.start.line > -1 ? loc.start.line : void 0,
      column: loc.start && typeof loc.start.column === "number" && loc.start.column > -1 ? loc.start.column + 1 : void 0,
      offset: typeof startOffset === "number" && startOffset > -1 ? startOffset : void 0
    },
    end: {
      line: loc.end && typeof loc.end.line === "number" && loc.end.line > -1 ? loc.end.line : void 0,
      column: loc.end && typeof loc.end.column === "number" && loc.end.column > -1 ? loc.end.column + 1 : void 0,
      offset: typeof endOffset === "number" && endOffset > -1 ? endOffset : void 0
    }
  };
}

// node_modules/micromark-util-events-to-acorn/index.js
init_react();

// node_modules/estree-util-visit/index.js
init_react();

// node_modules/estree-util-visit/color.js
init_react();
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/estree-util-visit/index.js
var own3 = {}.hasOwnProperty;
var CONTINUE = Symbol("continue");
var SKIP = Symbol("skip");
var EXIT = Symbol("exit");
function visit(tree, visitor) {
  var enter;
  var leave;
  if (typeof visitor === "function") {
    enter = visitor;
  } else if (visitor && typeof visitor === "object") {
    enter = visitor.enter;
    leave = visitor.leave;
  }
  build(tree, null, null, [])();
  function build(node, key, index2, parents) {
    if (nodelike(node)) {
      visit4.displayName = "node (" + color(node.type) + ")";
    }
    return visit4;
    function visit4() {
      var result = enter ? toResult(enter(node, key, index2, parents)) : [];
      var cKey;
      var cIndex;
      var grandparents;
      var subresult;
      var value;
      var subvalue;
      if (result[0] === EXIT) {
        return result;
      }
      if (result[0] !== SKIP) {
        for (cKey in node) {
          if (own3.call(node, cKey) && node[cKey] && typeof node[cKey] === "object" && cKey !== "data" && cKey !== "position") {
            value = node[cKey];
            grandparents = parents.concat(node);
            if (Array.isArray(value)) {
              cIndex = 0;
              while (cIndex > -1 && cIndex < value.length) {
                subvalue = value[cIndex];
                if (nodelike(subvalue)) {
                  subresult = build(subvalue, cKey, cIndex, grandparents)();
                  if (subresult[0] === EXIT)
                    return subresult;
                  cIndex = typeof subresult[1] === "number" ? subresult[1] : cIndex + 1;
                } else {
                  cIndex++;
                }
              }
            } else if (nodelike(value)) {
              subresult = build(value, cKey, null, grandparents)();
              if (subresult[0] === EXIT)
                return subresult;
            }
          }
        }
      }
      return leave ? toResult(leave(node, key, index2, parents)) : result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
function nodelike(value) {
  return Boolean(value && typeof value === "object" && typeof value.type === "string" && value.type.length > 0);
}

// node_modules/micromark-util-events-to-acorn/index.js
var own4 = {}.hasOwnProperty;
function eventsToAcorn(events, options) {
  const {
    prefix = "",
    suffix = ""
  } = options;
  const comments = [];
  const acornConfig = Object.assign({}, options.acornOptions, {
    onComment: comments,
    preserveParens: true
  });
  const chunks = [];
  const lines = {};
  let index2 = -1;
  let swallow = false;
  let estree;
  let exception;
  let mdStartOffset;
  if (options.start) {
    mdStartOffset = options.start.offset;
    lines[options.start.line] = options.start;
  }
  while (++index2 < events.length) {
    const token = events[index2][1];
    if (events[index2][0] === "exit") {
      chunks.push(events[index2][2].sliceSerialize(token));
      if (mdStartOffset === void 0) {
        mdStartOffset = events[index2][1].start.offset;
      }
      if (!(token.start.line in lines) || lines[token.start.line].offset > token.start.offset) {
        lines[token.start.line] = token.start;
      }
    }
  }
  const source = chunks.join("");
  const value = prefix + source + suffix;
  const isEmptyExpression = options.expression && empty(source);
  if (isEmptyExpression && !options.allowEmpty) {
    throw new VFileMessage("Unexpected empty expression", parseOffsetToUnistPoint(0), "micromark-extension-mdx-expression:unexpected-empty-expression");
  }
  try {
    estree = options.expression && !isEmptyExpression ? options.acorn.parseExpressionAt(value, 0, acornConfig) : options.acorn.parse(value, acornConfig);
  } catch (error_) {
    const error = error_;
    const point3 = parseOffsetToUnistPoint(error.pos);
    error.message = String(error.message).replace(/ \(\d+:\d+\)$/, "");
    error.pos = point3.offset;
    error.loc = {
      line: point3.line,
      column: point3.column - 1
    };
    exception = error;
    swallow = error.raisedAt >= prefix.length + source.length || error.message === "Unterminated comment";
  }
  if (estree && options.expression && !isEmptyExpression) {
    if (empty(value.slice(estree.end, value.length - suffix.length))) {
      estree = {
        type: "Program",
        start: 0,
        end: prefix.length + source.length,
        body: [{
          type: "ExpressionStatement",
          expression: estree,
          start: 0,
          end: prefix.length + source.length
        }],
        sourceType: "module",
        comments: []
      };
    } else {
      const point3 = parseOffsetToUnistPoint(estree.end);
      exception = new Error("Unexpected content after expression");
      exception.pos = point3.offset;
      exception.loc = {
        line: point3.line,
        column: point3.column - 1
      };
      estree = void 0;
    }
  }
  if (estree) {
    estree.comments = comments;
    visit(estree, (esnode, field, index3, parents) => {
      let context = parents[parents.length - 1];
      let prop = field;
      if (esnode.type === "ParenthesizedExpression" && context && prop) {
        if (typeof index3 === "number") {
          context = context[prop];
          prop = index3;
        }
        context[prop] = esnode.expression;
      }
      const pointStart2 = parseOffsetToUnistPoint(esnode.start);
      const pointEnd2 = parseOffsetToUnistPoint(esnode.end);
      esnode.start = pointStart2.offset;
      esnode.end = pointEnd2.offset;
      esnode.loc = {
        start: {
          line: pointStart2.line,
          column: pointStart2.column - 1
        },
        end: {
          line: pointEnd2.line,
          column: pointEnd2.column - 1
        }
      };
      esnode.range = [esnode.start, esnode.end];
    });
  }
  return {
    estree,
    error: exception,
    swallow
  };
  function parseOffsetToUnistPoint(offset) {
    let srcOffset = offset - prefix.length;
    let line;
    let lineStart;
    if (srcOffset < 0) {
      srcOffset = 0;
    } else if (srcOffset > source.length) {
      srcOffset = source.length;
    }
    srcOffset += mdStartOffset;
    for (line in lines) {
      if (own4.call(lines, line)) {
        if (!lineStart) {
          lineStart = lines[line];
        }
        if (lines[line].offset > offset) {
          break;
        }
        lineStart = lines[line];
      }
    }
    return {
      line: lineStart.line,
      column: lineStart.column + (srcOffset - lineStart.offset),
      offset: srcOffset
    };
  }
}
function empty(value) {
  return /^\s*$/.test(value.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\r\n]*(\r\n|\n|\r)/g, ""));
}

// node_modules/micromark-factory-mdx-expression/index.js
function factoryMdxExpression(effects, ok2, type, markerType, chunkType, acorn, acornOptions, addResult, spread, allowEmpty, allowLazy, startColumn) {
  const self = this;
  const eventStart = this.events.length + 3;
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  const prefixExpressionIndent = initialPrefix ? initialPrefix + 1 : 0;
  let balance = 1;
  let startPosition;
  let lastCrash;
  return start3;
  function start3(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    startPosition = self.now();
    return atBreak;
  }
  function atBreak(code2) {
    if (code2 === null) {
      throw lastCrash || new VFileMessage("Unexpected end of file in expression, expected a corresponding closing brace for `{`", self.now(), "micromark-extension-mdx-expression:unexpected-eof");
    }
    if (code2 === 125) {
      return atClosingBrace(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      const prefixTagIndent = startColumn ? startColumn + 4 - self.now().column : 0;
      const indent = Math.max(prefixExpressionIndent, prefixTagIndent);
      return indent ? factorySpace(effects, atBreak, "linePrefix", indent) : atBreak;
    }
    const now = self.now();
    if (now.line !== startPosition.line && !allowLazy && self.parser.lazy[now.line]) {
      throw new VFileMessage("Unexpected end of file in expression, expected a corresponding closing brace for `{`", self.now(), "micromark-extension-mdx-expression:unexpected-eof");
    }
    effects.enter(chunkType);
    return inside(code2);
  }
  function inside(code2) {
    if (code2 === null || code2 === 125 || markdownLineEnding(code2)) {
      effects.exit(chunkType);
      return atBreak(code2);
    }
    if (code2 === 123 && !acorn) {
      effects.consume(code2);
      balance++;
      return inside;
    }
    effects.consume(code2);
    return inside;
  }
  function atClosingBrace(code2) {
    balance--;
    if (!acorn) {
      if (balance) {
        effects.enter(chunkType);
        effects.consume(code2);
        return inside;
      }
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    const result = eventsToAcorn(self.events.slice(eventStart), {
      acorn,
      acornOptions,
      start: startPosition,
      expression: true,
      allowEmpty,
      prefix: spread ? "({" : "",
      suffix: spread ? "})" : ""
    });
    const estree = result.estree;
    if (spread && estree) {
      const head = estree.body[0];
      if (head.type !== "ExpressionStatement" || head.expression.type !== "ObjectExpression") {
        throw new VFileMessage("Unexpected `" + head.type + "` in code: expected an object spread (`{...spread}`)", positionFromEstree(head).start, "micromark-extension-mdx-expression:non-spread");
      } else if (head.expression.properties[1]) {
        throw new VFileMessage("Unexpected extra content in spread: only a single spread is supported", positionFromEstree(head.expression.properties[1]).start, "micromark-extension-mdx-expression:spread-extra");
      } else if (head.expression.properties[0] && head.expression.properties[0].type !== "SpreadElement") {
        throw new VFileMessage("Unexpected `" + head.expression.properties[0].type + "` in code: only spread elements are supported", positionFromEstree(head.expression.properties[0]).start, "micromark-extension-mdx-expression:non-spread");
      }
    }
    if (result.error) {
      lastCrash = new VFileMessage("Could not parse expression with acorn: " + result.error.message, {
        line: result.error.loc.line,
        column: result.error.loc.column + 1,
        offset: result.error.pos
      }, "micromark-extension-mdx-expression:acorn");
      if (code2 !== null && result.swallow) {
        effects.enter(chunkType);
        effects.consume(code2);
        return inside;
      }
      throw lastCrash;
    }
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    Object.assign(effects.exit(type), addResult ? {
      estree
    } : void 0);
    return ok2;
  }
}

// node_modules/micromark-extension-mdx-expression/lib/syntax.js
function mdxExpression(options = {}) {
  const addResult = options.addResult;
  const acorn = options.acorn;
  const spread = options.spread;
  let allowEmpty = options.allowEmpty;
  let acornOptions;
  if (allowEmpty === null || allowEmpty === void 0) {
    allowEmpty = true;
  }
  if (acorn) {
    if (!acorn.parseExpressionAt) {
      throw new Error("Expected a proper `acorn` instance passed in as `options.acorn`");
    }
    acornOptions = Object.assign({
      ecmaVersion: 2020,
      sourceType: "module"
    }, options.acornOptions);
  } else if (options.acornOptions || options.addResult) {
    throw new Error("Expected an `acorn` instance passed in as `options.acorn`");
  }
  return {
    flow: {
      [123]: {
        tokenize: tokenizeFlowExpression,
        concrete: true
      }
    },
    text: {
      [123]: {
        tokenize: tokenizeTextExpression
      }
    }
  };
  function tokenizeFlowExpression(effects, ok2, nok) {
    const self = this;
    return start3;
    function start3(code2) {
      return factoryMdxExpression.call(self, effects, factorySpace(effects, after, "whitespace"), "mdxFlowExpression", "mdxFlowExpressionMarker", "mdxFlowExpressionChunk", acorn, acornOptions, addResult, spread, allowEmpty)(code2);
    }
    function after(code2) {
      return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
    }
  }
  function tokenizeTextExpression(effects, ok2) {
    const self = this;
    return start3;
    function start3(code2) {
      return factoryMdxExpression.call(self, effects, ok2, "mdxTextExpression", "mdxTextExpressionMarker", "mdxTextExpressionChunk", acorn, acornOptions, addResult, spread, allowEmpty, true)(code2);
    }
  }
}

// node_modules/micromark-extension-mdx-jsx/index.js
init_react();

// node_modules/micromark-extension-mdx-jsx/lib/syntax.js
init_react();

// node_modules/micromark-extension-mdx-jsx/lib/jsx-text.js
init_react();

// node_modules/micromark-extension-mdx-jsx/lib/factory-tag.js
init_react();

// node_modules/estree-util-is-identifier-name/index.js
init_react();

// node_modules/estree-util-is-identifier-name/regex.js
init_react();
var start = /[$A-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/;
var cont = /[\d\u00B7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]/;

// node_modules/estree-util-is-identifier-name/index.js
function start2(code2) {
  return start.test(String.fromCharCode(code2));
}
function cont2(code2) {
  var character = String.fromCharCode(code2);
  return start.test(character) || cont.test(character);
}
function name(name2) {
  var index2 = -1;
  while (++index2 < name2.length) {
    if (!(index2 ? cont2 : start2)(name2.charCodeAt(index2)))
      return false;
  }
  return index2 > 0;
}

// node_modules/micromark-extension-mdx-jsx/lib/factory-tag.js
var lazyLineEnd = {
  tokenize: tokenizeLazyLineEnd,
  partial: true
};
function factoryTag(effects, ok2, nok, acorn, acornOptions, addResult, allowLazy, tagType, tagMarkerType, tagClosingMarkerType, tagSelfClosingMarker, tagNameType, tagNamePrimaryType, tagNameMemberMarkerType, tagNameMemberType, tagNamePrefixMarkerType, tagNameLocalType, tagExpressionAttributeType, tagExpressionAttributeMarkerType, tagExpressionAttributeValueType, tagAttributeType, tagAttributeNameType, tagAttributeNamePrimaryType, tagAttributeNamePrefixMarkerType, tagAttributeNameLocalType, tagAttributeInitializerMarkerType, tagAttributeValueLiteralType, tagAttributeValueLiteralMarkerType, tagAttributeValueLiteralValueType, tagAttributeValueExpressionType, tagAttributeValueExpressionMarkerType, tagAttributeValueExpressionValueType) {
  const self = this;
  let returnState;
  let marker;
  let startPoint;
  return start3;
  function start3(code2) {
    startPoint = self.now();
    effects.enter(tagType);
    effects.enter(tagMarkerType);
    effects.consume(code2);
    effects.exit(tagMarkerType);
    return afterStart;
  }
  function afterStart(code2) {
    if (markdownLineEnding(code2) || markdownSpace(code2)) {
      return nok(code2);
    }
    returnState = beforeName;
    return optionalEsWhitespace(code2);
  }
  function beforeName(code2) {
    if (code2 === 47) {
      effects.enter(tagClosingMarkerType);
      effects.consume(code2);
      effects.exit(tagClosingMarkerType);
      returnState = beforeClosingTagName;
      return optionalEsWhitespace;
    }
    if (code2 === 62) {
      return tagEnd(code2);
    }
    if (code2 !== null && start2(code2)) {
      effects.enter(tagNameType);
      effects.enter(tagNamePrimaryType);
      effects.consume(code2);
      return primaryName;
    }
    crash(code2, "before name", "a character that can start a name, such as a letter, `$`, or `_`" + (code2 === 33 ? " (note: to create a comment in MDX, use `{/* text */}`)" : ""));
  }
  function beforeClosingTagName(code2) {
    if (code2 === 62) {
      return tagEnd(code2);
    }
    if (code2 !== null && start2(code2)) {
      effects.enter(tagNameType);
      effects.enter(tagNamePrimaryType);
      effects.consume(code2);
      return primaryName;
    }
    crash(code2, "before name", "a character that can start a name, such as a letter, `$`, or `_`" + (code2 === 42 || code2 === 47 ? " (note: JS comments in JSX tags are not supported in MDX)" : ""));
  }
  function primaryName(code2) {
    if (code2 === 45 || code2 !== null && cont2(code2)) {
      effects.consume(code2);
      return primaryName;
    }
    if (code2 === 46 || code2 === 47 || code2 === 58 || code2 === 62 || code2 === 123 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      effects.exit(tagNamePrimaryType);
      returnState = afterPrimaryName;
      return optionalEsWhitespace(code2);
    }
    crash(code2, "in name", "a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag" + (code2 === 64 ? " (note: to create a link in MDX, use `[text](url)`)" : ""));
  }
  function afterPrimaryName(code2) {
    if (code2 === 46) {
      effects.enter(tagNameMemberMarkerType);
      effects.consume(code2);
      effects.exit(tagNameMemberMarkerType);
      returnState = beforeMemberName;
      return optionalEsWhitespace;
    }
    if (code2 === 58) {
      effects.enter(tagNamePrefixMarkerType);
      effects.consume(code2);
      effects.exit(tagNamePrefixMarkerType);
      returnState = beforeLocalName;
      return optionalEsWhitespace;
    }
    if (code2 === 47 || code2 === 62 || code2 === 123 || code2 !== null && start2(code2)) {
      effects.exit(tagNameType);
      return beforeAttribute(code2);
    }
    crash(code2, "after name", "a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag");
  }
  function beforeMemberName(code2) {
    if (code2 !== null && start2(code2)) {
      effects.enter(tagNameMemberType);
      effects.consume(code2);
      return memberName;
    }
    crash(code2, "before member name", "a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag");
  }
  function memberName(code2) {
    if (code2 === 45 || code2 !== null && cont2(code2)) {
      effects.consume(code2);
      return memberName;
    }
    if (code2 === 46 || code2 === 47 || code2 === 62 || code2 === 123 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      effects.exit(tagNameMemberType);
      returnState = afterMemberName;
      return optionalEsWhitespace(code2);
    }
    crash(code2, "in member name", "a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag" + (code2 === 64 ? " (note: to create a link in MDX, use `[text](url)`)" : ""));
  }
  function afterMemberName(code2) {
    if (code2 === 46) {
      effects.enter(tagNameMemberMarkerType);
      effects.consume(code2);
      effects.exit(tagNameMemberMarkerType);
      returnState = beforeMemberName;
      return optionalEsWhitespace;
    }
    if (code2 === 47 || code2 === 62 || code2 === 123 || code2 !== null && start2(code2)) {
      effects.exit(tagNameType);
      return beforeAttribute(code2);
    }
    crash(code2, "after member name", "a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag");
  }
  function beforeLocalName(code2) {
    if (code2 !== null && start2(code2)) {
      effects.enter(tagNameLocalType);
      effects.consume(code2);
      return localName;
    }
    crash(code2, "before local name", "a character that can start a name, such as a letter, `$`, or `_`" + (code2 === 43 || code2 !== null && code2 > 46 && code2 < 58 ? " (note: to create a link in MDX, use `[text](url)`)" : ""));
  }
  function localName(code2) {
    if (code2 === 45 || code2 !== null && cont2(code2)) {
      effects.consume(code2);
      return localName;
    }
    if (code2 === 47 || code2 === 62 || code2 === 123 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      effects.exit(tagNameLocalType);
      returnState = afterLocalName;
      return optionalEsWhitespace(code2);
    }
    crash(code2, "in local name", "a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag");
  }
  function afterLocalName(code2) {
    if (code2 === 47 || code2 === 62 || code2 === 123 || code2 !== null && start2(code2)) {
      effects.exit(tagNameType);
      return beforeAttribute(code2);
    }
    crash(code2, "after local name", "a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag");
  }
  function beforeAttribute(code2) {
    if (code2 === 47) {
      effects.enter(tagSelfClosingMarker);
      effects.consume(code2);
      effects.exit(tagSelfClosingMarker);
      returnState = selfClosing;
      return optionalEsWhitespace;
    }
    if (code2 === 62) {
      return tagEnd(code2);
    }
    if (code2 === 123) {
      return factoryMdxExpression.call(self, effects, afterAttributeExpression, tagExpressionAttributeType, tagExpressionAttributeMarkerType, tagExpressionAttributeValueType, acorn, acornOptions, addResult, true, false, allowLazy, startPoint.column)(code2);
    }
    if (code2 !== null && start2(code2)) {
      effects.enter(tagAttributeType);
      effects.enter(tagAttributeNameType);
      effects.enter(tagAttributeNamePrimaryType);
      effects.consume(code2);
      return attributePrimaryName;
    }
    crash(code2, "before attribute name", "a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag");
  }
  function afterAttributeExpression(code2) {
    returnState = beforeAttribute;
    return optionalEsWhitespace(code2);
  }
  function attributePrimaryName(code2) {
    if (code2 === 45 || code2 !== null && cont2(code2)) {
      effects.consume(code2);
      return attributePrimaryName;
    }
    if (code2 === 47 || code2 === 58 || code2 === 61 || code2 === 62 || code2 === 123 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      effects.exit(tagAttributeNamePrimaryType);
      returnState = afterAttributePrimaryName;
      return optionalEsWhitespace(code2);
    }
    crash(code2, "in attribute name", "an attribute name character such as letters, digits, `$`, or `_`; `=` to initialize a value; whitespace before attributes; or the end of the tag");
  }
  function afterAttributePrimaryName(code2) {
    if (code2 === 58) {
      effects.enter(tagAttributeNamePrefixMarkerType);
      effects.consume(code2);
      effects.exit(tagAttributeNamePrefixMarkerType);
      returnState = beforeAttributeLocalName;
      return optionalEsWhitespace;
    }
    if (code2 === 61) {
      effects.exit(tagAttributeNameType);
      effects.enter(tagAttributeInitializerMarkerType);
      effects.consume(code2);
      effects.exit(tagAttributeInitializerMarkerType);
      returnState = beforeAttributeValue;
      return optionalEsWhitespace;
    }
    if (code2 === 47 || code2 === 62 || code2 === 123 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || code2 !== null && start2(code2)) {
      effects.exit(tagAttributeNameType);
      effects.exit(tagAttributeType);
      returnState = beforeAttribute;
      return optionalEsWhitespace(code2);
    }
    crash(code2, "after attribute name", "a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag");
  }
  function beforeAttributeLocalName(code2) {
    if (code2 !== null && start2(code2)) {
      effects.enter(tagAttributeNameLocalType);
      effects.consume(code2);
      return attributeLocalName;
    }
    crash(code2, "before local attribute name", "a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag");
  }
  function attributeLocalName(code2) {
    if (code2 === 45 || code2 !== null && cont2(code2)) {
      effects.consume(code2);
      return attributeLocalName;
    }
    if (code2 === 47 || code2 === 61 || code2 === 62 || code2 === 123 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      effects.exit(tagAttributeNameLocalType);
      effects.exit(tagAttributeNameType);
      returnState = afterAttributeLocalName;
      return optionalEsWhitespace(code2);
    }
    crash(code2, "in local attribute name", "an attribute name character such as letters, digits, `$`, or `_`; `=` to initialize a value; whitespace before attributes; or the end of the tag");
  }
  function afterAttributeLocalName(code2) {
    if (code2 === 61) {
      effects.enter(tagAttributeInitializerMarkerType);
      effects.consume(code2);
      effects.exit(tagAttributeInitializerMarkerType);
      returnState = beforeAttributeValue;
      return optionalEsWhitespace;
    }
    if (code2 === 47 || code2 === 62 || code2 === 123 || code2 !== null && start2(code2)) {
      effects.exit(tagAttributeType);
      return beforeAttribute(code2);
    }
    crash(code2, "after local attribute name", "a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag");
  }
  function beforeAttributeValue(code2) {
    if (code2 === 34 || code2 === 39) {
      effects.enter(tagAttributeValueLiteralType);
      effects.enter(tagAttributeValueLiteralMarkerType);
      effects.consume(code2);
      effects.exit(tagAttributeValueLiteralMarkerType);
      marker = code2;
      return attributeValueQuotedStart;
    }
    if (code2 === 123) {
      return factoryMdxExpression.call(self, effects, afterAttributeValueExpression, tagAttributeValueExpressionType, tagAttributeValueExpressionMarkerType, tagAttributeValueExpressionValueType, acorn, acornOptions, addResult, false, false, allowLazy, startPoint.column)(code2);
    }
    crash(code2, "before attribute value", "a character that can start an attribute value, such as `\"`, `'`, or `{`" + (code2 === 60 ? " (note: to use an element or fragment as a prop value in MDX, use `{<element />}`)" : ""));
  }
  function afterAttributeValueExpression(code2) {
    effects.exit(tagAttributeType);
    returnState = beforeAttribute;
    return optionalEsWhitespace(code2);
  }
  function attributeValueQuotedStart(code2) {
    if (code2 === null) {
      crash(code2, "in attribute value", "a corresponding closing quote `" + String.fromCharCode(marker) + "`");
    }
    if (code2 === marker) {
      effects.enter(tagAttributeValueLiteralMarkerType);
      effects.consume(code2);
      effects.exit(tagAttributeValueLiteralMarkerType);
      effects.exit(tagAttributeValueLiteralType);
      effects.exit(tagAttributeType);
      marker = void 0;
      returnState = beforeAttribute;
      return optionalEsWhitespace;
    }
    if (markdownLineEnding(code2)) {
      returnState = attributeValueQuotedStart;
      return optionalEsWhitespace(code2);
    }
    effects.enter(tagAttributeValueLiteralValueType);
    return attributeValueQuoted(code2);
  }
  function attributeValueQuoted(code2) {
    if (code2 === null || code2 === marker || markdownLineEnding(code2)) {
      effects.exit(tagAttributeValueLiteralValueType);
      return attributeValueQuotedStart(code2);
    }
    effects.consume(code2);
    return attributeValueQuoted;
  }
  function selfClosing(code2) {
    if (code2 === 62) {
      return tagEnd(code2);
    }
    crash(code2, "after self-closing slash", "`>` to end the tag" + (code2 === 42 || code2 === 47 ? " (note: JS comments in JSX tags are not supported in MDX)" : ""));
  }
  function tagEnd(code2) {
    effects.enter(tagMarkerType);
    effects.consume(code2);
    effects.exit(tagMarkerType);
    effects.exit(tagType);
    return ok2;
  }
  function optionalEsWhitespace(code2) {
    if (markdownLineEnding(code2)) {
      if (allowLazy) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(effects, optionalEsWhitespace, "linePrefix", 4);
      }
      return effects.attempt(lazyLineEnd, factorySpace(effects, optionalEsWhitespace, "linePrefix", 4), crashEol)(code2);
    }
    if (markdownSpace(code2) || unicodeWhitespace(code2)) {
      effects.enter("esWhitespace");
      return optionalEsWhitespaceContinue(code2);
    }
    return returnState(code2);
  }
  function optionalEsWhitespaceContinue(code2) {
    if (markdownLineEnding(code2) || !(markdownSpace(code2) || unicodeWhitespace(code2))) {
      effects.exit("esWhitespace");
      return optionalEsWhitespace(code2);
    }
    effects.consume(code2);
    return optionalEsWhitespaceContinue;
  }
  function crashEol() {
    throw new VFileMessage("Unexpected lazy line in container, expected line to be prefixed with `>` when in a block quote, whitespace when in a list, etc", self.now(), "micromark-extension-mdx-jsx:unexpected-eof");
  }
  function crash(code2, at, expect) {
    throw new VFileMessage("Unexpected " + (code2 === null ? "end of file" : "character `" + (code2 === 96 ? "` ` `" : String.fromCharCode(code2)) + "` (" + serializeCharCode(code2) + ")") + " " + at + ", expected " + expect, self.now(), "micromark-extension-mdx-jsx:unexpected-" + (code2 === null ? "eof" : "character"));
  }
}
function tokenizeLazyLineEnd(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code2) {
    return self.parser.lazy[self.now().line] ? nok(code2) : ok2(code2);
  }
}
function serializeCharCode(code2) {
  return "U+" + code2.toString(16).toUpperCase().padStart(4, "0");
}

// node_modules/micromark-extension-mdx-jsx/lib/jsx-text.js
function jsxText(acorn, acornOptions, addResult) {
  return {
    tokenize: tokenizeJsxText
  };
  function tokenizeJsxText(effects, ok2, nok) {
    return factoryTag.call(this, effects, ok2, nok, acorn, acornOptions, addResult, true, "mdxJsxTextTag", "mdxJsxTextTagMarker", "mdxJsxTextTagClosingMarker", "mdxJsxTextTagSelfClosingMarker", "mdxJsxTextTagName", "mdxJsxTextTagNamePrimary", "mdxJsxTextTagNameMemberMarker", "mdxJsxTextTagNameMember", "mdxJsxTextTagNamePrefixMarker", "mdxJsxTextTagNameLocal", "mdxJsxTextTagExpressionAttribute", "mdxJsxTextTagExpressionAttributeMarker", "mdxJsxTextTagExpressionAttributeValue", "mdxJsxTextTagAttribute", "mdxJsxTextTagAttributeName", "mdxJsxTextTagAttributeNamePrimary", "mdxJsxTextTagAttributeNamePrefixMarker", "mdxJsxTextTagAttributeNameLocal", "mdxJsxTextTagAttributeInitializerMarker", "mdxJsxTextTagAttributeValueLiteral", "mdxJsxTextTagAttributeValueLiteralMarker", "mdxJsxTextTagAttributeValueLiteralValue", "mdxJsxTextTagAttributeValueExpression", "mdxJsxTextTagAttributeValueExpressionMarker", "mdxJsxTextTagAttributeValueExpressionValue");
  }
}

// node_modules/micromark-extension-mdx-jsx/lib/jsx-flow.js
init_react();
function jsxFlow(acorn, acornOptions, addResult) {
  return {
    tokenize: tokenizeJsxFlow,
    concrete: true
  };
  function tokenizeJsxFlow(effects, ok2, nok) {
    const self = this;
    return start3;
    function start3(code2) {
      return factoryTag.call(self, effects, factorySpace(effects, after, "whitespace"), nok, acorn, acornOptions, addResult, false, "mdxJsxFlowTag", "mdxJsxFlowTagMarker", "mdxJsxFlowTagClosingMarker", "mdxJsxFlowTagSelfClosingMarker", "mdxJsxFlowTagName", "mdxJsxFlowTagNamePrimary", "mdxJsxFlowTagNameMemberMarker", "mdxJsxFlowTagNameMember", "mdxJsxFlowTagNamePrefixMarker", "mdxJsxFlowTagNameLocal", "mdxJsxFlowTagExpressionAttribute", "mdxJsxFlowTagExpressionAttributeMarker", "mdxJsxFlowTagExpressionAttributeValue", "mdxJsxFlowTagAttribute", "mdxJsxFlowTagAttributeName", "mdxJsxFlowTagAttributeNamePrimary", "mdxJsxFlowTagAttributeNamePrefixMarker", "mdxJsxFlowTagAttributeNameLocal", "mdxJsxFlowTagAttributeInitializerMarker", "mdxJsxFlowTagAttributeValueLiteral", "mdxJsxFlowTagAttributeValueLiteralMarker", "mdxJsxFlowTagAttributeValueLiteralValue", "mdxJsxFlowTagAttributeValueExpression", "mdxJsxFlowTagAttributeValueExpressionMarker", "mdxJsxFlowTagAttributeValueExpressionValue")(code2);
    }
    function after(code2) {
      return code2 === 60 ? start3(code2) : code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
    }
  }
}

// node_modules/micromark-extension-mdx-jsx/lib/syntax.js
function mdxJsx(options = {}) {
  const acorn = options.acorn;
  let acornOptions;
  if (acorn) {
    if (!acorn.parse || !acorn.parseExpressionAt) {
      throw new Error("Expected a proper `acorn` instance passed in as `options.acorn`");
    }
    acornOptions = Object.assign({
      ecmaVersion: 2020,
      sourceType: "module"
    }, options.acornOptions, {
      locations: true
    });
  } else if (options.acornOptions || options.addResult) {
    throw new Error("Expected an `acorn` instance passed in as `options.acorn`");
  }
  return {
    flow: {
      [60]: jsxFlow(acorn, acornOptions, options.addResult)
    },
    text: {
      [60]: jsxText(acorn, acornOptions, options.addResult)
    }
  };
}

// node_modules/micromark-extension-mdx-md/index.js
init_react();
var mdxMd = {
  disable: { null: ["autolink", "codeIndented", "htmlFlow", "htmlText"] }
};

// node_modules/micromark-extension-mdxjs-esm/index.js
init_react();

// node_modules/micromark-extension-mdxjs-esm/lib/syntax.js
init_react();

// node_modules/micromark-core-commonmark/index.js
init_react();

// node_modules/micromark-core-commonmark/lib/attention.js
init_react();

// node_modules/micromark-util-classify-character/index.js
init_react();
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
    return 1;
  }
  if (unicodePunctuation(code2)) {
    return 2;
  }
}

// node_modules/micromark-util-resolve-all/index.js
init_react();
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text5;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start3 = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start3, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: start3,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text5 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text5, context]
          ]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [
            ["exit", text5, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start3;
  function start3(code2) {
    effects.enter("attentionSequence");
    marker = code2;
    return sequence(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return sequence;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code2);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code2);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code2);
  }
}
function movePoint(point3, offset) {
  point3.column += offset;
  point3.offset += offset;
  point3._bufferIndex += offset;
}

// node_modules/micromark-core-commonmark/lib/autolink.js
init_react();
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start3;
  function start3(code2) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code2) ? emailAtext(code2) : nok(code2);
  }
  function schemeOrEmailAtext(code2) {
    return code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2) ? schemeInsideOrEmailAtext(code2) : emailAtext(code2);
  }
  function schemeInsideOrEmailAtext(code2) {
    if (code2 === 58) {
      effects.consume(code2);
      return urlInside;
    }
    if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
      effects.consume(code2);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code2);
  }
  function urlInside(code2) {
    if (code2 === 62) {
      effects.exit("autolinkProtocol");
      return end(code2);
    }
    if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return urlInside;
  }
  function emailAtext(code2) {
    if (code2 === 64) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code2)) {
      effects.consume(code2);
      return emailAtext;
    }
    return nok(code2);
  }
  function emailAtSignOrDot(code2) {
    return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
  }
  function emailLabel(code2) {
    if (code2 === 46) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code2 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      return end(code2);
    }
    return emailValue(code2);
  }
  function emailValue(code2) {
    if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
      effects.consume(code2);
      return code2 === 45 ? emailValue : emailLabel;
    }
    return nok(code2);
  }
  function end(code2) {
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.exit("autolink");
    return ok2;
  }
}

// node_modules/micromark-core-commonmark/lib/blank-line.js
init_react();
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/block-quote.js
init_react();
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    if (code2 === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code2);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownSpace(code2)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code2);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code2);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/micromark-core-commonmark/lib/character-escape.js
init_react();
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    effects.exit("escapeMarker");
    return open;
  }
  function open(code2) {
    if (asciiPunctuation(code2)) {
      effects.enter("characterEscapeValue");
      effects.consume(code2);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
init_react();

// node_modules/decode-named-character-reference/index.js
init_react();

// node_modules/character-entities/index.js
init_react();
var characterEntities = {
  AEli: "\xC6",
  AElig: "\xC6",
  AM: "&",
  AMP: "&",
  Aacut: "\xC1",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acir: "\xC2",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrav: "\xC0",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Arin: "\xC5",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atild: "\xC3",
  Atilde: "\xC3",
  Aum: "\xC4",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COP: "\xA9",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedi: "\xC7",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ET: "\xD0",
  ETH: "\xD0",
  Eacut: "\xC9",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecir: "\xCA",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrav: "\xC8",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Eum: "\xCB",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  G: ">",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacut: "\xCD",
  Iacute: "\xCD",
  Icir: "\xCE",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrav: "\xCC",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Ium: "\xCF",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  L: "<",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: "\n",
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntild: "\xD1",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacut: "\xD3",
  Oacute: "\xD3",
  Ocir: "\xD4",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograv: "\xD2",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslas: "\xD8",
  Oslash: "\xD8",
  Otild: "\xD5",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Oum: "\xD6",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUO: '"',
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  RE: "\xAE",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THOR: "\xDE",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacut: "\xDA",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucir: "\xDB",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrav: "\xD9",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uum: "\xDC",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacut: "\xDD",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacut: "\xE1",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acir: "\xE2",
  acirc: "\xE2",
  acut: "\xB4",
  acute: "\xB4",
  acy: "\u0430",
  aeli: "\xE6",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrav: "\xE0",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  am: "&",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  arin: "\xE5",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atild: "\xE3",
  atilde: "\xE3",
  aum: "\xE4",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvba: "\xA6",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedi: "\xE7",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedi: "\xB8",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cen: "\xA2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  cop: "\xA9",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curre: "\xA4",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  de: "\xB0",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divid: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacut: "\xE9",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\xEA",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrav: "\xE8",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  et: "\xF0",
  eth: "\xF0",
  eum: "\xEB",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac1: "\xBC",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac3: "\xBE",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  g: ">",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacut: "\xED",
  iacute: "\xED",
  ic: "\u2063",
  icir: "\xEE",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexc: "\xA1",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrav: "\xEC",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iques: "\xBF",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  ium: "\xEF",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laqu: "\xAB",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  l: "<",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  mac: "\xAF",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micr: "\xB5",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middo: "\xB7",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbs: "\xA0",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  no: "\xAC",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntild: "\xF1",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacut: "\xF3",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\xF4",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograv: "\xF2",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\xBA",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslas: "\xF8",
  oslash: "\xF8",
  osol: "\u2298",
  otild: "\xF5",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  oum: "\xF6",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\xB6",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusm: "\xB1",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  poun: "\xA3",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quo: '"',
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raqu: "\xBB",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  re: "\xAE",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sec: "\xA7",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  sh: "\xAD",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup: "\u2283",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szli: "\xDF",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thor: "\xFE",
  thorn: "\xFE",
  tilde: "\u02DC",
  time: "\xD7",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacut: "\xFA",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucir: "\xFB",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrav: "\xF9",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  um: "\xA8",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uum: "\xFC",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacut: "\xFD",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  ye: "\xA5",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yum: "\xFF",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// node_modules/decode-named-character-reference/index.js
var own5 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own5.call(characterEntities, value) ? characterEntities[value] : false;
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start3;
  function start3(code2) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code2);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code2);
  }
  function numeric(code2) {
    if (code2 === 88 || code2 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code2);
  }
  function value(code2) {
    let token;
    if (code2 === 59 && size) {
      token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code2);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code2) && size++ < max) {
      effects.consume(code2);
      return value;
    }
    return nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/code-fenced.js
init_react();
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok2, nok) {
  const self = this;
  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let marker;
  return start3;
  function start3(code2) {
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    marker = code2;
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeFencedFenceSequence");
    return sizeOpen < 3 ? nok(code2) : factorySpace(effects, infoOpen, "whitespace")(code2);
  }
  function infoOpen(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return openAfter(code2);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code2);
  }
  function info(code2) {
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, infoAfter, "whitespace")(code2);
    }
    if (code2 === 96 && code2 === marker)
      return nok(code2);
    effects.consume(code2);
    return info;
  }
  function infoAfter(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return openAfter(code2);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta7(code2);
  }
  function meta7(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return openAfter(code2);
    }
    if (code2 === 96 && code2 === marker)
      return nok(code2);
    effects.consume(code2);
    return meta7;
  }
  function openAfter(code2) {
    effects.exit("codeFencedFence");
    return self.interrupt ? ok2(code2) : contentStart(code2);
  }
  function contentStart(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code2);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code2);
  }
  function contentContinue(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return contentStart(code2);
    }
    effects.consume(code2);
    return contentContinue;
  }
  function after(code2) {
    effects.exit("codeFenced");
    return ok2(code2);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    const self2 = this;
    return start4;
    function start4(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code2) {
      return self2.parser.lazy[self2.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code2) {
      effects2.enter("codeFencedFence");
      effects2.enter("codeFencedFenceSequence");
      return closingSequence(code2);
    }
    function closingSequence(code2) {
      if (code2 === marker) {
        effects2.consume(code2);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code2);
      effects2.exit("codeFencedFenceSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code2);
    }
    function closingSequenceEnd(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects2.exit("codeFencedFence");
        return ok3(code2);
      }
      return nok2(code2);
    }
  }
}

// node_modules/micromark-core-commonmark/lib/code-indented.js
init_react();
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function tokenizeCodeIndented(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterStartPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code2) : nok(code2);
  }
  function afterPrefix(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code2);
    }
    effects.enter("codeFlowValue");
    return content3(code2);
  }
  function content3(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code2);
    }
    effects.consume(code2);
    return content3;
  }
  function after(code2) {
    effects.exit("codeIndented");
    return ok2(code2);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return start3;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? start3(code2) : nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/code-text.js
init_react();
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code2) {
  return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start3;
  function start3(code2) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return openingSequence(code2);
  }
  function openingSequence(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit("codeTextSequence");
    return gap(code2);
  }
  function gap(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return closingSequence(code2);
    }
    if (code2 === 32) {
      effects.enter("space");
      effects.consume(code2);
      effects.exit("space");
      return gap;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
      effects.exit("codeTextData");
      return gap(code2);
    }
    effects.consume(code2);
    return data;
  }
  function closingSequence(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code2);
    }
    token.type = "codeTextData";
    return data(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/content.js
init_react();

// node_modules/micromark-util-subtokenize/index.js
init_react();
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start3 = 0;
  const breaks = [start3];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
      start3 = index2 + 1;
      breaks.push(start3);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice2 = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start4 = startPositions.pop();
    jumps.unshift([start4, start4 + slice2.length - 1]);
    splice(events, start4, 2, slice2);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}

// node_modules/micromark-core-commonmark/lib/content.js
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous2;
  return start3;
  function start3(code2) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      return contentEnd(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code2);
    }
    effects.consume(code2);
    return data;
  }
  function contentEnd(code2) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code2);
  }
  function contentContinue(code2) {
    effects.consume(code2);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code2) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code2);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/definition.js
init_react();

// node_modules/micromark-factory-destination/index.js
init_react();
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start3;
  function start3(code2) {
    if (code2 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code2 === null || code2 === 41 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationRaw(code2);
  }
  function destinationEnclosedBefore(code2) {
    if (code2 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationEnclosed(code2);
  }
  function destinationEnclosed(code2) {
    if (code2 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return destinationEnclosedBefore(code2);
    }
    if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code2) {
    if (code2 === 60 || code2 === 62 || code2 === 92) {
      effects.consume(code2);
      return destinationEnclosed;
    }
    return destinationEnclosed(code2);
  }
  function destinationRaw(code2) {
    if (code2 === 40) {
      if (++balance > limit)
        return nok(code2);
      effects.consume(code2);
      return destinationRaw;
    }
    if (code2 === 41) {
      if (!balance--) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok2(code2);
      }
      effects.consume(code2);
      return destinationRaw;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      if (balance)
        return nok(code2);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code2);
    }
    if (asciiControl(code2))
      return nok(code2);
    effects.consume(code2);
    return code2 === 92 ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code2) {
    if (code2 === 40 || code2 === 41 || code2 === 92) {
      effects.consume(code2);
      return destinationRaw;
    }
    return destinationRaw(code2);
  }
}

// node_modules/micromark-factory-label/index.js
init_react();
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let data;
  return start3;
  function start3(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 && !data || code2 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code2);
  }
  function label(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    data = data || !markdownSpace(code2);
    return code2 === 92 ? labelEscape : label;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return label;
    }
    return label(code2);
  }
}

// node_modules/micromark-factory-title/index.js
init_react();
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start3;
  function start3(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    marker = code2 === 40 ? 41 : code2;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code2) {
    if (code2 === marker) {
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atTitleBreak(code2);
  }
  function atTitleBreak(code2) {
    if (code2 === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code2);
  }
  function title(code2) {
    if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      return atTitleBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? titleEscape : title;
  }
  function titleEscape(code2) {
    if (code2 === marker || code2 === 92) {
      effects.consume(code2);
      return title;
    }
    return title(code2);
  }
}

// node_modules/micromark-factory-whitespace/index.js
init_react();
function factoryWhitespace(effects, ok2) {
  let seen;
  return start3;
  function start3(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      seen = true;
      return start3;
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, start3, seen ? "linePrefix" : "lineSuffix")(code2);
    }
    return ok2(code2);
  }
}

// node_modules/micromark-util-normalize-identifier/index.js
init_react();
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
function tokenizeDefinition(effects, ok2, nok) {
  const self = this;
  let identifier;
  return start3;
  function start3(code2) {
    effects.enter("definition");
    return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code2);
  }
  function labelAfter(code2) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code2);
  }
  function after(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("definition");
      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, before)(code2) : nok(code2);
  }
  function before(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code2);
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
init_react();
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    effects.enter("hardBreakEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (markdownLineEnding(code2)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok2(code2);
    }
    return nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/heading-atx.js
init_react();
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text5;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text5 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content3, context],
      ["enter", text5, context],
      ["exit", text5, context],
      ["exit", content3, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  const self = this;
  let size = 0;
  return start3;
  function start3(code2) {
    effects.enter("atxHeading");
    effects.enter("atxHeadingSequence");
    return fenceOpenInside(code2);
  }
  function fenceOpenInside(code2) {
    if (code2 === 35 && size++ < 6) {
      effects.consume(code2);
      return fenceOpenInside;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingSequence");
      return self.interrupt ? ok2(code2) : headingBreak(code2);
    }
    return nok(code2);
  }
  function headingBreak(code2) {
    if (code2 === 35) {
      effects.enter("atxHeadingSequence");
      return sequence(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("atxHeading");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, headingBreak, "whitespace")(code2);
    }
    effects.enter("atxHeadingText");
    return data(code2);
  }
  function sequence(code2) {
    if (code2 === 35) {
      effects.consume(code2);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingText");
      return headingBreak(code2);
    }
    effects.consume(code2);
    return data;
  }
}

// node_modules/micromark-core-commonmark/lib/html-flow.js
init_react();

// node_modules/micromark-util-html-tag-name/index.js
init_react();
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self = this;
  let kind;
  let startTag;
  let buffer2;
  let index2;
  let marker;
  return start3;
  function start3(code2) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationStart;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      kind = 3;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer2 = String.fromCharCode(code2);
      startTag = true;
      return tagName;
    }
    return nok(code2);
  }
  function declarationStart(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      kind = 2;
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      kind = 5;
      buffer2 = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      kind = 4;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function cdataOpenInside(code2) {
    if (code2 === buffer2.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === buffer2.length ? self.interrupt ? ok2 : continuation : cdataOpenInside;
    }
    return nok(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer2 = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function tagName(code2) {
    if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      if (code2 !== 47 && startTag && htmlRawNames.includes(buffer2.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok2(code2) : continuation(code2);
      }
      if (htmlBlockNames.includes(buffer2.toLowerCase())) {
        kind = 6;
        if (code2 === 47) {
          effects.consume(code2);
          return basicSelfClosing;
        }
        return self.interrupt ? ok2(code2) : continuation(code2);
      }
      kind = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code2) : startTag ? completeAttributeNameBefore(code2) : completeClosingTagAfter(code2);
    }
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      buffer2 += String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function basicSelfClosing(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return self.interrupt ? ok2 : continuation;
    }
    return nok(code2);
  }
  function completeClosingTagAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeClosingTagAfter;
    }
    return completeEnd(code2);
  }
  function completeAttributeNameBefore(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return completeEnd;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameBefore;
    }
    return completeEnd(code2);
  }
  function completeAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code2);
  }
  function completeAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code2);
  }
  function completeAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code2);
  }
  function completeAttributeValueQuoted(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    if (code2 === marker) {
      effects.consume(code2);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code2);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
      return completeAttributeNameAfter(code2);
    }
    effects.consume(code2);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
      return completeAttributeNameBefore(code2);
    }
    return nok(code2);
  }
  function completeEnd(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function completeAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAfter;
    }
    return code2 === null || markdownLineEnding(code2) ? continuation(code2) : nok(code2);
  }
  function continuation(code2) {
    if (code2 === 45 && kind === 2) {
      effects.consume(code2);
      return continuationCommentInside;
    }
    if (code2 === 60 && kind === 1) {
      effects.consume(code2);
      return continuationRawTagOpen;
    }
    if (code2 === 62 && kind === 4) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 63 && kind === 3) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    if (code2 === 93 && kind === 5) {
      effects.consume(code2);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding(code2) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return continuationAtLineEnding(code2);
    }
    effects.consume(code2);
    return continuation;
  }
  function continuationAtLineEnding(code2) {
    effects.exit("htmlFlowData");
    return htmlContinueStart(code2);
  }
  function htmlContinueStart(code2) {
    if (code2 === null) {
      return done(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code2);
    }
    effects.enter("htmlFlowData");
    return continuation(code2);
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start4;
    function start4(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code2) {
      return self.parser.lazy[self.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function continuationCommentInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationRawTagOpen(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      buffer2 = "";
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationRawEndTag(code2) {
    if (code2 === 62 && htmlRawNames.includes(buffer2.toLowerCase())) {
      effects.consume(code2);
      return continuationClose;
    }
    if (asciiAlpha(code2) && buffer2.length < 8) {
      effects.consume(code2);
      buffer2 += String.fromCharCode(code2);
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationCharacterDataInside(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationDeclarationInside(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 45 && kind === 2) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationClose(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return done(code2);
    }
    effects.consume(code2);
    return continuationClose;
  }
  function done(code2) {
    effects.exit("htmlFlow");
    return ok2(code2);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    effects.exit("htmlFlowData");
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    return effects.attempt(blankLine, ok2, nok);
  }
}

// node_modules/micromark-core-commonmark/lib/html-text.js
init_react();
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  const self = this;
  let marker;
  let buffer2;
  let index2;
  let returnState;
  return start3;
  function start3(code2) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instruction;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentOpen;
    }
    if (code2 === 91) {
      effects.consume(code2);
      buffer2 = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return declaration;
    }
    return nok(code2);
  }
  function commentOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentStart;
    }
    return nok(code2);
  }
  function commentStart(code2) {
    if (code2 === null || code2 === 62) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentStartDash;
    }
    return comment2(code2);
  }
  function commentStartDash(code2) {
    if (code2 === null || code2 === 62) {
      return nok(code2);
    }
    return comment2(code2);
  }
  function comment2(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = comment2;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return comment2;
  }
  function commentClose(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return end;
    }
    return comment2(code2);
  }
  function cdataOpen(code2) {
    if (code2 === buffer2.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === buffer2.length ? cdata : cdataOpen;
    }
    return nok(code2);
  }
  function cdata(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = cdata;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return cdata;
  }
  function cdataClose(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function cdataEnd(code2) {
    if (code2 === 62) {
      return end(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function declaration(code2) {
    if (code2 === null || code2 === 62) {
      return end(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = declaration;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return declaration;
  }
  function instruction(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instructionClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = instruction;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return instruction;
  }
  function instructionClose(code2) {
    return code2 === 62 ? end(code2) : instruction(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return nok(code2);
  }
  function tagClose(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return tagCloseBetween(code2);
  }
  function tagCloseBetween(code2) {
    if (markdownLineEnding(code2)) {
      returnState = tagCloseBetween;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagCloseBetween;
    }
    return end(code2);
  }
  function tagOpen(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenBetween(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return end;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenBetween;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenBetween;
    }
    return end(code2);
  }
  function tagOpenAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code2);
  }
  function tagOpenAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code2);
  }
  function tagOpenAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code2);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code2) {
    if (code2 === 62 || code2 === 47 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code2) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code2) {
    effects.enter("htmlTextData");
    return returnState(code2);
  }
  function end(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/label-end.js
init_react();
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  let token;
  while (++index2 < events.length) {
    token = events[index2][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text5 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text5, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [
    ["exit", text5, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  }
  return start3;
  function start3(code2) {
    if (!labelStart) {
      return nok(code2);
    }
    if (labelStart._inactive)
      return balanced(code2);
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return afterLabelEnd;
  }
  function afterLabelEnd(code2) {
    if (code2 === 40) {
      return effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code2);
    }
    if (code2 === 91) {
      return effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code2);
    }
    return defined ? ok2(code2) : balanced(code2);
  }
  function balanced(code2) {
    labelStart._balanced = true;
    return nok(code2);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code2);
    effects.exit("resourceMarker");
    return factoryWhitespace(effects, open);
  }
  function open(code2) {
    if (code2 === 41) {
      return end(code2);
    }
    return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code2);
  }
  function destinationAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, between)(code2) : end(code2);
  }
  function between(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code2);
    }
    return end(code2);
  }
  function end(code2) {
    if (code2 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code2);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code2);
  }
  function afterLabel(code2) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok2(code2) : nok(code2);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code2);
    effects.exit("referenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-image.js
init_react();
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code2);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 91) {
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-link.js
init_react();
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self = this;
  return start3;
  function start3(code2) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/line-ending.js
init_react();
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start3;
  function start3(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
init_react();

// node_modules/micromark-core-commonmark/lib/thematic-break.js
init_react();
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start3;
  function start3(code2) {
    effects.enter("thematicBreak");
    marker = code2;
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, atBreak, "whitespace")(code2);
    }
    if (size < 3 || code2 !== null && !markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.exit("thematicBreak");
    return ok2(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return atBreak(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok2, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start3;
  function start3(code2) {
    const kind = self.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code2 === self.containerState.marker : asciiDigit(code2)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code2 === 42 || code2 === 45 ? effects.check(thematicBreak, nok, atMarker)(code2) : atMarker(code2);
      }
      if (!self.interrupt || code2 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code2);
      }
    }
    return nok(code2);
  }
  function inside(code2) {
    if (asciiDigit(code2) && ++size < 10) {
      effects.consume(code2);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code2 === self.containerState.marker : code2 === 41 || code2 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code2);
    }
    return nok(code2);
  }
  function atMarker(code2) {
    effects.enter("listItemMarker");
    effects.consume(code2);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code2;
    return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code2) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code2);
  }
  function otherPrefix(code2) {
    if (markdownSpace(code2)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code2);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code2);
  }
  function endOfPrefix(code2) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code2);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code2) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace(effects, ok2, "listItemIndent", self.containerState.size + 1)(code2);
  }
  function notBlank(code2) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code2)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code2);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2);
  }
  function notInCurrentItem(code2) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok2, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok2(code2) : nok(code2);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
  }
}

// node_modules/micromark-core-commonmark/lib/setext-underline.js
init_react();
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content3;
  let text5;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text5 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text5][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text5][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text5, 0, ["enter", heading2, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content3][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let marker;
  let paragraph2;
  while (index2--) {
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  }
  return start3;
  function start3(code2) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      effects.enter("setextHeadingLineSequence");
      marker = code2;
      return closingSequence(code2);
    }
    return nok(code2);
  }
  function closingSequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return closingSequence;
    }
    effects.exit("setextHeadingLineSequence");
    return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code2);
  }
  function closingSequenceEnd(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("setextHeadingLine");
      return ok2(code2);
    }
    return nok(code2);
  }
}

// node_modules/micromark-extension-mdxjs-esm/lib/syntax.js
var nextBlankConstruct2 = {
  tokenize: tokenizeNextBlank2,
  partial: true
};
var allowedAcornTypes = /* @__PURE__ */ new Set([
  "ExportAllDeclaration",
  "ExportDefaultDeclaration",
  "ExportNamedDeclaration",
  "ImportDeclaration"
]);
function mdxjsEsm(options) {
  const exportImportConstruct = {
    tokenize: tokenizeExportImport,
    concrete: true
  };
  if (!options || !options.acorn || !options.acorn.parse) {
    throw new Error("Expected an `acorn` instance passed in as `options.acorn`");
  }
  const acorn = options.acorn;
  const acornOptions = Object.assign({
    ecmaVersion: 2020,
    sourceType: "module"
  }, options.acornOptions);
  return {
    flow: {
      [101]: exportImportConstruct,
      [105]: exportImportConstruct
    }
  };
  function tokenizeExportImport(effects, ok2, nok) {
    const self = this;
    const definedModuleSpecifiers = self.parser.definedModuleSpecifiers || (self.parser.definedModuleSpecifiers = []);
    const eventStart = this.events.length + 1;
    let index2 = 0;
    let buffer2;
    return self.interrupt ? nok : start3;
    function start3(code2) {
      if (self.now().column > 1)
        return nok(code2);
      buffer2 = code2 === 101 ? "export" : "import";
      effects.enter("mdxjsEsm");
      effects.enter("mdxjsEsmData");
      return keyword(code2);
    }
    function keyword(code2) {
      if (code2 === buffer2.charCodeAt(index2++)) {
        effects.consume(code2);
        return index2 === buffer2.length ? after : keyword;
      }
      return nok(code2);
    }
    function after(code2) {
      if (unicodeWhitespace(code2)) {
        effects.consume(code2);
        return rest;
      }
      return nok(code2);
    }
    function rest(code2) {
      if (code2 === null) {
        return atEnd(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.check(nextBlankConstruct2, atEnd, atEol)(code2);
      }
      effects.consume(code2);
      return rest;
    }
    function atEol(code2) {
      effects.exit("mdxjsEsmData");
      return lineStart(code2);
    }
    function lineStart(code2) {
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return lineStart;
      }
      effects.enter("mdxjsEsmData");
      return rest(code2);
    }
    function atEnd(code2) {
      effects.exit("mdxjsEsmData");
      let index3 = -1;
      const result = eventsToAcorn(self.events.slice(eventStart), {
        acorn,
        acornOptions,
        prefix: definedModuleSpecifiers.length > 0 ? "var " + definedModuleSpecifiers.join(",") + "\n" : ""
      });
      if (code2 !== null && result.swallow) {
        return lineStart(code2);
      }
      if (result.error) {
        throw new VFileMessage("Could not parse import/exports with acorn: " + String(result.error), {
          line: result.error.loc.line,
          column: result.error.loc.column + 1,
          offset: result.error.pos
        }, "micromark-extension-mdxjs-esm:acorn");
      }
      if (definedModuleSpecifiers.length > 0) {
        result.estree.body.shift();
      }
      while (++index3 < result.estree.body.length) {
        const node = result.estree.body[index3];
        if (!allowedAcornTypes.has(node.type)) {
          throw new VFileMessage("Unexpected `" + node.type + "` in code: only import/exports are supported", positionFromEstree(node), "micromark-extension-mdxjs-esm:non-esm");
        }
        if (node.type === "ImportDeclaration" && !self.interrupt) {
          let index4 = -1;
          while (++index4 < node.specifiers.length) {
            definedModuleSpecifiers.push(node.specifiers[index4].local.name);
          }
        }
      }
      Object.assign(effects.exit("mdxjsEsm"), options.addResult ? {
        estree: result.estree
      } : void 0);
      return ok2(code2);
    }
  }
}
function tokenizeNextBlank2(effects, ok2, nok) {
  return start3;
  function start3(code2) {
    effects.exit("mdxjsEsmData");
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    return effects.attempt(blankLine, ok2, nok);
  }
}

// node_modules/micromark-extension-mdxjs/index.js
function mdxjs(options) {
  const settings = Object.assign({
    acorn: import_acorn.Parser.extend((0, import_acorn_jsx.default)()),
    acornOptions: { ecmaVersion: 2020, sourceType: "module" },
    addResult: true
  }, options);
  return combineExtensions([
    mdxjsEsm(settings),
    mdxExpression(settings),
    mdxJsx(settings),
    mdxMd
  ]);
}

// node_modules/mdast-util-mdx/index.js
init_react();

// node_modules/mdast-util-mdx-expression/index.js
init_react();
var mdxExpressionFromMarkdown = {
  enter: {
    mdxFlowExpression: enterMdxFlowExpression,
    mdxTextExpression: enterMdxTextExpression
  },
  exit: {
    mdxFlowExpression: exitMdxExpression,
    mdxFlowExpressionChunk: exitMdxExpressionData,
    mdxTextExpression: exitMdxExpression,
    mdxTextExpressionChunk: exitMdxExpressionData
  }
};
var mdxExpressionToMarkdown = {
  handlers: {
    mdxFlowExpression: handleMdxExpression,
    mdxTextExpression: handleMdxExpression
  },
  unsafe: [
    { character: "{", inConstruct: ["phrasing"] },
    { atBreak: true, character: "{" }
  ]
};
function enterMdxFlowExpression(token) {
  this.enter({ type: "mdxFlowExpression", value: "" }, token);
  this.buffer();
}
function enterMdxTextExpression(token) {
  this.enter({ type: "mdxTextExpression", value: "" }, token);
  this.buffer();
}
function exitMdxExpression(token) {
  const value = this.resume();
  const estree = token.estree;
  const node = this.exit(token);
  node.value = value;
  if (estree) {
    node.data = { estree };
  }
}
function exitMdxExpressionData(token) {
  this.config.enter.data.call(this, token);
  this.config.exit.data.call(this, token);
}
function handleMdxExpression(node) {
  const value = node.value || "";
  return "{" + value + "}";
}

// node_modules/mdast-util-mdx-jsx/index.js
init_react();

// node_modules/mdast-util-mdx-jsx/lib/index.js
init_react();

// node_modules/ccount/index.js
init_react();
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}

// node_modules/parse-entities/index.js
init_react();

// node_modules/parse-entities/lib/index.js
init_react();

// node_modules/character-entities-legacy/index.js
init_react();
var characterEntitiesLegacy = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
];

// node_modules/character-reference-invalid/index.js
init_react();
var characterReferenceInvalid = {
  0: "\uFFFD",
  128: "\u20AC",
  130: "\u201A",
  131: "\u0192",
  132: "\u201E",
  133: "\u2026",
  134: "\u2020",
  135: "\u2021",
  136: "\u02C6",
  137: "\u2030",
  138: "\u0160",
  139: "\u2039",
  140: "\u0152",
  142: "\u017D",
  145: "\u2018",
  146: "\u2019",
  147: "\u201C",
  148: "\u201D",
  149: "\u2022",
  150: "\u2013",
  151: "\u2014",
  152: "\u02DC",
  153: "\u2122",
  154: "\u0161",
  155: "\u203A",
  156: "\u0153",
  158: "\u017E",
  159: "\u0178"
};

// node_modules/is-decimal/index.js
init_react();
function isDecimal(character) {
  const code2 = typeof character === "string" ? character.charCodeAt(0) : character;
  return code2 >= 48 && code2 <= 57;
}

// node_modules/is-hexadecimal/index.js
init_react();
function isHexadecimal(character) {
  const code2 = typeof character === "string" ? character.charCodeAt(0) : character;
  return code2 >= 97 && code2 <= 102 || code2 >= 65 && code2 <= 70 || code2 >= 48 && code2 <= 57;
}

// node_modules/is-alphanumerical/index.js
init_react();

// node_modules/is-alphabetical/index.js
init_react();
function isAlphabetical(character) {
  const code2 = typeof character === "string" ? character.charCodeAt(0) : character;
  return code2 >= 97 && code2 <= 122 || code2 >= 65 && code2 <= 90;
}

// node_modules/is-alphanumerical/index.js
function isAlphanumerical(character) {
  return isAlphabetical(character) || isDecimal(character);
}

// node_modules/parse-entities/lib/index.js
var fromCharCode = String.fromCharCode;
var messages = [
  "",
  "Named character references must be terminated by a semicolon",
  "Numeric character references must be terminated by a semicolon",
  "Named character references cannot be empty",
  "Numeric character references cannot be empty",
  "Named character references must be known",
  "Numeric character references cannot be disallowed",
  "Numeric character references cannot be outside the permissible Unicode range"
];
function parseEntities(value, options = {}) {
  const additional = typeof options.additional === "string" ? options.additional.charCodeAt(0) : options.additional;
  const result = [];
  let index2 = 0;
  let lines = -1;
  let queue = "";
  let point3;
  let indent;
  if (options.position) {
    if ("start" in options.position || "indent" in options.position) {
      indent = options.position.indent;
      point3 = options.position.start;
    } else {
      point3 = options.position;
    }
  }
  let line = (point3 ? point3.line : 0) || 1;
  let column = (point3 ? point3.column : 0) || 1;
  let previous2 = now();
  let character;
  index2--;
  while (++index2 <= value.length) {
    if (character === 10) {
      column = (indent ? indent[lines] : 0) || 1;
    }
    character = value.charCodeAt(index2);
    if (character === 38) {
      const following = value.charCodeAt(index2 + 1);
      if (following === 9 || following === 10 || following === 12 || following === 32 || following === 38 || following === 60 || Number.isNaN(following) || additional && following === additional) {
        queue += fromCharCode(character);
        column++;
        continue;
      }
      const start3 = index2 + 1;
      let begin = start3;
      let end = start3;
      let type;
      if (following === 35) {
        end = ++begin;
        const following2 = value.charCodeAt(end);
        if (following2 === 88 || following2 === 120) {
          type = "hexadecimal";
          end = ++begin;
        } else {
          type = "decimal";
        }
      } else {
        type = "named";
      }
      let characterReferenceCharacters = "";
      let characterReference2 = "";
      let characters = "";
      const test = type === "named" ? isAlphanumerical : type === "decimal" ? isDecimal : isHexadecimal;
      end--;
      while (++end <= value.length) {
        const following2 = value.charCodeAt(end);
        if (!test(following2)) {
          break;
        }
        characters += fromCharCode(following2);
        if (type === "named" && characterEntitiesLegacy.includes(characters)) {
          characterReferenceCharacters = characters;
          characterReference2 = decodeNamedCharacterReference(characters);
        }
      }
      let terminated = value.charCodeAt(end) === 59;
      if (terminated) {
        end++;
        const namedReference = type === "named" ? decodeNamedCharacterReference(characters) : false;
        if (namedReference) {
          characterReferenceCharacters = characters;
          characterReference2 = namedReference;
        }
      }
      let diff = 1 + end - start3;
      let reference = "";
      if (!terminated && options.nonTerminated === false) {
      } else if (!characters) {
        if (type !== "named") {
          warning(4, diff);
        }
      } else if (type === "named") {
        if (terminated && !characterReference2) {
          warning(5, 1);
        } else {
          if (characterReferenceCharacters !== characters) {
            end = begin + characterReferenceCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }
          if (!terminated) {
            const reason = characterReferenceCharacters ? 1 : 3;
            if (options.attribute) {
              const following2 = value.charCodeAt(end);
              if (following2 === 61) {
                warning(reason, diff);
                characterReference2 = "";
              } else if (isAlphanumerical(following2)) {
                characterReference2 = "";
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }
        reference = characterReference2;
      } else {
        if (!terminated) {
          warning(2, diff);
        }
        let referenceCode = Number.parseInt(characters, type === "hexadecimal" ? 16 : 10);
        if (prohibited(referenceCode)) {
          warning(7, diff);
          reference = fromCharCode(65533);
        } else if (referenceCode in characterReferenceInvalid) {
          warning(6, diff);
          reference = characterReferenceInvalid[referenceCode];
        } else {
          let output = "";
          if (disallowed(referenceCode)) {
            warning(6, diff);
          }
          if (referenceCode > 65535) {
            referenceCode -= 65536;
            output += fromCharCode(referenceCode >>> (10 & 1023) | 55296);
            referenceCode = 56320 | referenceCode & 1023;
          }
          reference = output + fromCharCode(referenceCode);
        }
      }
      if (reference) {
        flush();
        previous2 = now();
        index2 = end - 1;
        column += end - start3 + 1;
        result.push(reference);
        const next = now();
        next.offset++;
        if (options.reference) {
          options.reference.call(options.referenceContext, reference, { start: previous2, end: next }, value.slice(start3 - 1, end));
        }
        previous2 = next;
      } else {
        characters = value.slice(start3 - 1, end);
        queue += characters;
        column += characters.length;
        index2 = end - 1;
      }
    } else {
      if (character === 10) {
        line++;
        lines++;
        column = 0;
      }
      if (Number.isNaN(character)) {
        flush();
      } else {
        queue += fromCharCode(character);
        column++;
      }
    }
  }
  return result.join("");
  function now() {
    return {
      line,
      column,
      offset: index2 + ((point3 ? point3.offset : 0) || 0)
    };
  }
  function warning(code2, offset) {
    let position3;
    if (options.warning) {
      position3 = now();
      position3.column += offset;
      position3.offset += offset;
      options.warning.call(options.warningContext, messages[code2], position3, code2);
    }
  }
  function flush() {
    if (queue) {
      result.push(queue);
      if (options.text) {
        options.text.call(options.textContext, queue, {
          start: previous2,
          end: now()
        });
      }
      queue = "";
    }
  }
}
function prohibited(code2) {
  return code2 >= 55296 && code2 <= 57343 || code2 > 1114111;
}
function disallowed(code2) {
  return code2 >= 1 && code2 <= 8 || code2 === 11 || code2 >= 13 && code2 <= 31 || code2 >= 127 && code2 <= 159 || code2 >= 64976 && code2 <= 65007 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534;
}

// node_modules/stringify-entities/lib/index.js
init_react();

// node_modules/stringify-entities/lib/core.js
init_react();
function core(value, options) {
  value = value.replace(options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g, basic);
  if (options.subset || options.escapeOnly) {
    return value;
  }
  return value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, basic);
  function surrogate(pair, index2, all4) {
    return options.format((pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536, all4.charCodeAt(index2 + 2), options);
  }
  function basic(character, index2, all4) {
    return options.format(character.charCodeAt(0), all4.charCodeAt(index2 + 1), options);
  }
}
function charactersToExpression(subset) {
  const groups = [];
  let index2 = -1;
  while (++index2 < subset.length) {
    groups.push(subset[index2].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  }
  return new RegExp("(?:" + groups.join("|") + ")", "g");
}

// node_modules/stringify-entities/lib/util/format-basic.js
init_react();
function formatBasic(code2) {
  return "&#x" + code2.toString(16).toUpperCase() + ";";
}

// node_modules/stringify-entities/lib/index.js
function stringifyEntitiesLight(value, options) {
  return core(value, Object.assign({ format: formatBasic }, options));
}

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
init_react();

// node_modules/mdast-util-to-markdown/lib/util/track.js
init_react();
function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index2 = -1;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    indexStack[indexStack.length - 1] = index2;
    results.push(tracker.move(context.handle(child, parent, context, __spreadValues({
      before: "\n",
      after: "\n"
    }, tracker.current()))));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index2 < children.length - 1) {
      results.push(tracker.move(between(child, children[index2 + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index3 = context.join.length;
    while (index3--) {
      const result = context.join[index3](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
init_react();
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index2 < children.length) {
    const child = children[index2];
    let after;
    indexStack[indexStack.length - 1] = index2;
    if (index2 + 1 < children.length) {
      let handle = context.handle.handlers[children[index2 + 1].type];
      if (handle && handle.peek)
        handle = handle.peek;
      after = handle ? handle(children[index2 + 1], parent, context, __spreadValues({
        before: "",
        after: ""
      }, tracker.current())).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, __spreadProps(__spreadValues({}, tracker.current()), {
      before,
      after
    }))));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
init_react();
var eol = /\r?\n|\r/g;
function indentLines(value, map) {
  const result = [];
  let start3 = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one3(value.slice(start3, match.index));
    result.push(match[0]);
    start3 = match.index + match[0].length;
    line++;
  }
  one3(value.slice(start3));
  return result.join("");
  function one3(value2) {
    result.push(map(value2, line, !value2));
  }
}

// node_modules/mdast-util-mdx-jsx/lib/index.js
function mdxJsxFromMarkdown() {
  return {
    canContainEols: ["mdxJsxTextElement"],
    enter: {
      mdxJsxFlowTag: enterMdxJsxTag,
      mdxJsxFlowTagClosingMarker: enterMdxJsxTagClosingMarker,
      mdxJsxFlowTagAttribute: enterMdxJsxTagAttribute,
      mdxJsxFlowTagExpressionAttribute: enterMdxJsxTagExpressionAttribute,
      mdxJsxFlowTagAttributeValueLiteral: buffer2,
      mdxJsxFlowTagAttributeValueExpression: buffer2,
      mdxJsxFlowTagSelfClosingMarker: enterMdxJsxTagSelfClosingMarker,
      mdxJsxTextTag: enterMdxJsxTag,
      mdxJsxTextTagClosingMarker: enterMdxJsxTagClosingMarker,
      mdxJsxTextTagAttribute: enterMdxJsxTagAttribute,
      mdxJsxTextTagExpressionAttribute: enterMdxJsxTagExpressionAttribute,
      mdxJsxTextTagAttributeValueLiteral: buffer2,
      mdxJsxTextTagAttributeValueExpression: buffer2,
      mdxJsxTextTagSelfClosingMarker: enterMdxJsxTagSelfClosingMarker
    },
    exit: {
      mdxJsxFlowTagClosingMarker: exitMdxJsxTagClosingMarker,
      mdxJsxFlowTagNamePrimary: exitMdxJsxTagNamePrimary,
      mdxJsxFlowTagNameMember: exitMdxJsxTagNameMember,
      mdxJsxFlowTagNameLocal: exitMdxJsxTagNameLocal,
      mdxJsxFlowTagExpressionAttribute: exitMdxJsxTagExpressionAttribute,
      mdxJsxFlowTagExpressionAttributeValue: data,
      mdxJsxFlowTagAttributeNamePrimary: exitMdxJsxTagAttributeNamePrimary,
      mdxJsxFlowTagAttributeNameLocal: exitMdxJsxTagAttributeNameLocal,
      mdxJsxFlowTagAttributeValueLiteral: exitMdxJsxTagAttributeValueLiteral,
      mdxJsxFlowTagAttributeValueLiteralValue: data,
      mdxJsxFlowTagAttributeValueExpression: exitMdxJsxTagAttributeValueExpression,
      mdxJsxFlowTagAttributeValueExpressionValue: data,
      mdxJsxFlowTagSelfClosingMarker: exitMdxJsxTagSelfClosingMarker,
      mdxJsxFlowTag: exitMdxJsxTag,
      mdxJsxTextTagClosingMarker: exitMdxJsxTagClosingMarker,
      mdxJsxTextTagNamePrimary: exitMdxJsxTagNamePrimary,
      mdxJsxTextTagNameMember: exitMdxJsxTagNameMember,
      mdxJsxTextTagNameLocal: exitMdxJsxTagNameLocal,
      mdxJsxTextTagExpressionAttribute: exitMdxJsxTagExpressionAttribute,
      mdxJsxTextTagExpressionAttributeValue: data,
      mdxJsxTextTagAttributeNamePrimary: exitMdxJsxTagAttributeNamePrimary,
      mdxJsxTextTagAttributeNameLocal: exitMdxJsxTagAttributeNameLocal,
      mdxJsxTextTagAttributeValueLiteral: exitMdxJsxTagAttributeValueLiteral,
      mdxJsxTextTagAttributeValueLiteralValue: data,
      mdxJsxTextTagAttributeValueExpression: exitMdxJsxTagAttributeValueExpression,
      mdxJsxTextTagAttributeValueExpressionValue: data,
      mdxJsxTextTagSelfClosingMarker: exitMdxJsxTagSelfClosingMarker,
      mdxJsxTextTag: exitMdxJsxTag
    }
  };
  function buffer2() {
    this.buffer();
  }
  function data(token) {
    this.config.enter.data.call(this, token);
    this.config.exit.data.call(this, token);
  }
  function enterMdxJsxTag(token) {
    const tag = { name: null, attributes: [], start: token.start, end: token.end };
    if (!this.getData("mdxJsxTagStack"))
      this.setData("mdxJsxTagStack", []);
    this.setData("mdxJsxTag", tag);
    this.buffer();
  }
  function enterMdxJsxTagClosingMarker(token) {
    const stack = this.getData("mdxJsxTagStack");
    if (stack.length === 0) {
      throw new VFileMessage("Unexpected closing slash `/` in tag, expected an open tag first", { start: token.start, end: token.end }, "mdast-util-mdx-jsx:unexpected-closing-slash");
    }
  }
  function enterMdxJsxTagAnyAttribute(token) {
    const tag = this.getData("mdxJsxTag");
    if (tag.close) {
      throw new VFileMessage("Unexpected attribute in closing tag, expected the end of the tag", { start: token.start, end: token.end }, "mdast-util-mdx-jsx:unexpected-attribute");
    }
  }
  function enterMdxJsxTagSelfClosingMarker(token) {
    const tag = this.getData("mdxJsxTag");
    if (tag.close) {
      throw new VFileMessage("Unexpected self-closing slash `/` in closing tag, expected the end of the tag", { start: token.start, end: token.end }, "mdast-util-mdx-jsx:unexpected-self-closing-slash");
    }
  }
  function exitMdxJsxTagClosingMarker() {
    const tag = this.getData("mdxJsxTag");
    tag.close = true;
  }
  function exitMdxJsxTagNamePrimary(token) {
    const tag = this.getData("mdxJsxTag");
    tag.name = this.sliceSerialize(token);
  }
  function exitMdxJsxTagNameMember(token) {
    const tag = this.getData("mdxJsxTag");
    tag.name += "." + this.sliceSerialize(token);
  }
  function exitMdxJsxTagNameLocal(token) {
    const tag = this.getData("mdxJsxTag");
    tag.name += ":" + this.sliceSerialize(token);
  }
  function enterMdxJsxTagAttribute(token) {
    const tag = this.getData("mdxJsxTag");
    enterMdxJsxTagAnyAttribute.call(this, token);
    tag.attributes.push({ type: "mdxJsxAttribute", name: "", value: null });
  }
  function enterMdxJsxTagExpressionAttribute(token) {
    const tag = this.getData("mdxJsxTag");
    enterMdxJsxTagAnyAttribute.call(this, token);
    tag.attributes.push({ type: "mdxJsxExpressionAttribute", value: "" });
    this.buffer();
  }
  function exitMdxJsxTagExpressionAttribute(token) {
    const tag = this.getData("mdxJsxTag");
    const tail = tag.attributes[tag.attributes.length - 1];
    const estree = token.estree;
    tail.value = this.resume();
    if (estree) {
      tail.data = { estree };
    }
  }
  function exitMdxJsxTagAttributeNamePrimary(token) {
    const tag = this.getData("mdxJsxTag");
    const node = tag.attributes[tag.attributes.length - 1];
    node.name = this.sliceSerialize(token);
  }
  function exitMdxJsxTagAttributeNameLocal(token) {
    const tag = this.getData("mdxJsxTag");
    const node = tag.attributes[tag.attributes.length - 1];
    node.name += ":" + this.sliceSerialize(token);
  }
  function exitMdxJsxTagAttributeValueLiteral() {
    const tag = this.getData("mdxJsxTag");
    tag.attributes[tag.attributes.length - 1].value = parseEntities(this.resume(), { nonTerminated: false });
  }
  function exitMdxJsxTagAttributeValueExpression(token) {
    const tag = this.getData("mdxJsxTag");
    const tail = tag.attributes[tag.attributes.length - 1];
    const node = { type: "mdxJsxAttributeValueExpression", value: this.resume() };
    const estree = token.estree;
    if (estree) {
      node.data = { estree };
    }
    tail.value = node;
  }
  function exitMdxJsxTagSelfClosingMarker() {
    const tag = this.getData("mdxJsxTag");
    tag.selfClosing = true;
  }
  function exitMdxJsxTag(token) {
    const tag = this.getData("mdxJsxTag");
    const stack = this.getData("mdxJsxTagStack");
    const tail = stack[stack.length - 1];
    if (tag.close && tail.name !== tag.name) {
      throw new VFileMessage("Unexpected closing tag `" + serializeAbbreviatedTag(tag) + "`, expected corresponding closing tag for `" + serializeAbbreviatedTag(tail) + "` (" + stringifyPosition(tail) + ")", { start: token.start, end: token.end }, "mdast-util-mdx-jsx:end-tag-mismatch");
    }
    this.resume();
    if (tag.close) {
      stack.pop();
    } else {
      this.enter({
        type: token.type === "mdxJsxTextTag" ? "mdxJsxTextElement" : "mdxJsxFlowElement",
        name: tag.name,
        attributes: tag.attributes,
        children: []
      }, token, onErrorRightIsTag);
    }
    if (tag.selfClosing || tag.close) {
      this.exit(token, onErrorLeftIsTag);
    } else {
      stack.push(tag);
    }
  }
  function onErrorRightIsTag(closing, open) {
    const tag = this.getData("mdxJsxTag");
    const place = closing ? " before the end of `" + closing.type + "`" : "";
    const position3 = closing ? { start: closing.start, end: closing.end } : void 0;
    throw new VFileMessage("Expected a closing tag for `" + serializeAbbreviatedTag(tag) + "` (" + stringifyPosition({ start: open.start, end: open.end }) + ")" + place, position3, "mdast-util-mdx-jsx:end-tag-mismatch");
  }
  function onErrorLeftIsTag(a, b) {
    const tag = this.getData("mdxJsxTag");
    throw new VFileMessage("Expected the closing tag `" + serializeAbbreviatedTag(tag) + "` either after the end of `" + b.type + "` (" + stringifyPosition(b.end) + ") or another opening tag after the start of `" + b.type + "` (" + stringifyPosition(b.start) + ")", { start: a.start, end: a.end }, "mdast-util-mdx-jsx:end-tag-mismatch");
  }
  function serializeAbbreviatedTag(tag) {
    return "<" + (tag.close ? "/" : "") + (tag.name || "") + ">";
  }
}
function mdxJsxToMarkdown(options = {}) {
  const {
    quote = '"',
    quoteSmart,
    tightSelfClosing,
    printWidth = Number.POSITIVE_INFINITY
  } = options;
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error("Cannot serialize attribute values with `" + quote + "` for `options.quote`, expected `\"`, or `'`");
  }
  mdxElement.peek = peekElement;
  return {
    handlers: {
      mdxJsxFlowElement: mdxElement,
      mdxJsxTextElement: mdxElement
    },
    unsafe: [
      { character: "<", inConstruct: ["phrasing"] },
      { atBreak: true, character: "<" }
    ],
    fences: true,
    resourceLink: true
  };
  function mdxElement(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    const selfClosing = node.name && (!node.children || node.children.length === 0);
    const exit2 = context.enter(node.type);
    let index2 = -1;
    const serializedAttributes = [];
    let value = tracker.move("<" + (node.name || ""));
    if (node.attributes && node.attributes.length > 0) {
      if (!node.name) {
        throw new Error("Cannot serialize fragment w/ attributes");
      }
      while (++index2 < node.attributes.length) {
        const attribute = node.attributes[index2];
        let result;
        if (attribute.type === "mdxJsxExpressionAttribute") {
          result = "{" + (attribute.value || "") + "}";
        } else {
          if (!attribute.name) {
            throw new Error("Cannot serialize attribute w/o name");
          }
          const value2 = attribute.value;
          const left = attribute.name;
          let right = "";
          if (value2 === void 0 || value2 === null) {
          } else if (typeof value2 === "object") {
            right = "{" + (value2.value || "") + "}";
          } else {
            const appliedQuote = quoteSmart && ccount(value2, quote) > ccount(value2, alternative) ? alternative : quote;
            right = appliedQuote + stringifyEntitiesLight(value2, { subset: [appliedQuote] }) + appliedQuote;
          }
          result = left + (right ? "=" : "") + right;
        }
        serializedAttributes.push(result);
      }
    }
    let attributesOnTheirOwnLine = false;
    const attributesOnOneLine = serializedAttributes.join(" ");
    if (node.type === "mdxJsxFlowElement" && (/\r?\n|\r/.test(attributesOnOneLine) || tracker.current().now.column + attributesOnOneLine.length + (selfClosing ? tightSelfClosing ? 2 : 3 : 1) > printWidth)) {
      attributesOnTheirOwnLine = true;
    }
    if (attributesOnTheirOwnLine) {
      value += tracker.move("\n" + indentLines(serializedAttributes.join("\n"), map));
    } else if (attributesOnOneLine) {
      value += tracker.move(" " + attributesOnOneLine);
    }
    if (attributesOnTheirOwnLine) {
      value += tracker.move("\n");
    }
    if (selfClosing) {
      value += tracker.move((tightSelfClosing || attributesOnTheirOwnLine ? "" : " ") + "/");
    }
    value += tracker.move(">");
    if (node.children && node.children.length > 0) {
      if (node.type === "mdxJsxFlowElement") {
        tracker.shift(2);
        value += tracker.move("\n");
        value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map));
        value += tracker.move("\n");
      } else {
        value += tracker.move(containerPhrasing(node, context, __spreadProps(__spreadValues({}, tracker.current()), {
          before: "<",
          after: ">"
        })));
      }
    }
    if (!selfClosing) {
      value += tracker.move("</" + (node.name || "") + ">");
    }
    exit2();
    return value;
  }
  function map(line, _, blank) {
    return (blank ? "" : "  ") + line;
  }
  function peekElement() {
    return "<";
  }
}

// node_modules/mdast-util-mdxjs-esm/index.js
init_react();
var mdxjsEsmFromMarkdown = {
  enter: { mdxjsEsm: enterMdxjsEsm },
  exit: { mdxjsEsm: exitMdxjsEsm, mdxjsEsmData: exitMdxjsEsmData }
};
var mdxjsEsmToMarkdown = { handlers: { mdxjsEsm: handleMdxjsEsm } };
function enterMdxjsEsm(token) {
  this.enter({ type: "mdxjsEsm", value: "" }, token);
  this.buffer();
}
function exitMdxjsEsm(token) {
  const value = this.resume();
  const node = this.exit(token);
  const estree = token.estree;
  node.value = value;
  if (estree) {
    node.data = { estree };
  }
}
function exitMdxjsEsmData(token) {
  this.config.enter.data.call(this, token);
  this.config.exit.data.call(this, token);
}
function handleMdxjsEsm(node) {
  return node.value || "";
}

// node_modules/mdast-util-mdx/index.js
function mdxFromMarkdown() {
  return [mdxExpressionFromMarkdown, mdxJsxFromMarkdown(), mdxjsEsmFromMarkdown];
}
function mdxToMarkdown(options) {
  return {
    extensions: [
      mdxExpressionToMarkdown,
      mdxJsxToMarkdown(options),
      mdxjsEsmToMarkdown
    ]
  };
}

// node_modules/remark-mdx/index.js
function remarkMdx(options = {}) {
  const data = this.data();
  add("micromarkExtensions", mdxjs(options));
  add("fromMarkdownExtensions", mdxFromMarkdown());
  add("toMarkdownExtensions", mdxToMarkdown(options));
  function add(field, value) {
    const list3 = data[field] ? data[field] : data[field] = [];
    list3.push(value);
  }
}

// node_modules/remark-parse/index.js
init_react();

// node_modules/remark-parse/lib/index.js
init_react();

// node_modules/mdast-util-from-markdown/index.js
init_react();

// node_modules/mdast-util-from-markdown/lib/index.js
init_react();

// node_modules/mdast-util-to-string/index.js
init_react();
function toString(node, options) {
  var { includeImageAlt = true } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt);
  }
  return result.join("");
}

// node_modules/micromark/lib/parse.js
init_react();

// node_modules/micromark/lib/initialize/content.js
init_react();
var content2 = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code2) {
    effects.enter("paragraph");
    return lineStart(code2);
  }
  function lineStart(code2) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code2);
    return data;
  }
}

// node_modules/micromark/lib/initialize/document.js
init_react();
var document2 = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start3;
  function start3(code2) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code2);
    }
    return checkNewContainers(code2);
  }
  function documentContinue(code2) {
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point3;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point3 = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point3);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
      return checkNewContainers(code2);
    }
    return start3(code2);
  }
  function checkNewContainers(code2) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code2);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code2);
      }
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code2);
  }
  function thereIsANewContainer(code2) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code2);
  }
  function thereIsNoNewContainer(code2) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code2);
  }
  function documentContinued(code2) {
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code2);
  }
  function containerContinue(code2) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code2);
  }
  function flowStart(code2) {
    if (code2 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code2);
  }
  function flowContinue(code2) {
    if (code2 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self.interrupt = void 0;
      return start3;
    }
    effects.consume(code2);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset)) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point3;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point3);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry2 = stack[index2];
      self.containerState = entry2[1];
      entry2[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}

// node_modules/micromark/lib/initialize/flow.js
init_react();
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    self.currentConstruct = void 0;
    return initial;
  }
}

// node_modules/micromark/lib/initialize/text.js
init_react();
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    const self = this;
    const constructs2 = this.parser.constructs[field];
    const text5 = effects.attempt(constructs2, start3, notText);
    return start3;
    function start3(code2) {
      return atBreak(code2) ? text5(code2) : notText(code2);
    }
    function notText(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("data");
      effects.consume(code2);
      return data;
    }
    function data(code2) {
      if (atBreak(code2)) {
        effects.exit("data");
        return text5(code2);
      }
      effects.consume(code2);
      return data;
    }
    function atBreak(code2) {
      if (code2 === null) {
        return true;
      }
      const list3 = constructs2[code2];
      let index2 = -1;
      if (list3) {
        while (++index2 < list3.length) {
          const item = list3[index2];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index2++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// node_modules/micromark/lib/create-tokenizer.js
init_react();
function createTokenizer(parser, initialize, from) {
  let point3 = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice2) {
    chunks = push(chunks, slice2);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point3);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point3._index < chunks.length) {
      const chunk = chunks[point3._index];
      if (typeof chunk === "string") {
        chunkIndex = point3._index;
        if (point3._bufferIndex < 0) {
          point3._bufferIndex = 0;
        }
        while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point3._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code2) {
    consumed = void 0;
    expectedCode = code2;
    state = state(code2);
  }
  function consume(code2) {
    if (markdownLineEnding(code2)) {
      point3.line++;
      point3.column = 1;
      point3.offset += code2 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code2 !== -1) {
      point3.column++;
      point3.offset++;
    }
    if (point3._bufferIndex < 0) {
      point3._index++;
    } else {
      point3._bufferIndex++;
      if (point3._bufferIndex === chunks[point3._index].length) {
        point3._bufferIndex = -1;
        point3._index++;
      }
    }
    context.previous = code2;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit2(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map) {
        return start3;
        function start3(code2) {
          const def = code2 !== null && map[code2];
          const all4 = code2 !== null && map.null;
          const list3 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all4) ? all4 : all4 ? [all4] : []
          ];
          return handleListOfConstructs(list3)(code2);
        }
      }
      function handleListOfConstructs(list3) {
        listOfConstructs = list3;
        constructIndex = 0;
        if (list3.length === 0) {
          return bogusState;
        }
        return handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start3;
        function start3(code2) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code2);
          }
          return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok2, nok)(code2);
        }
      }
      function ok2(code2) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code2) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point3 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point3.line in columnStart && point3.column < 2) {
      point3.column = columnStart[point3.line];
      point3.offset += columnStart[point3.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
init_react();
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};

// node_modules/micromark/lib/parse.js
function parse(options = {}) {
  const constructs2 = combineExtensions([constructs_exports].concat(options.extensions || []));
  const parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create5(content2),
    document: create5(document2),
    flow: create5(flow),
    string: create5(string),
    text: create5(text)
  };
  return parser;
  function create5(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/micromark/lib/preprocess.js
init_react();
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer2 = "";
  let start3 = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code2;
    value = buffer2 + value.toString(encoding);
    startPosition = 0;
    buffer2 = "";
    if (start3) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start3 = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code2 = value.charCodeAt(endPosition);
      if (!match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code2) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer2)
        chunks.push(buffer2);
      chunks.push(null);
    }
    return chunks;
  }
}

// node_modules/micromark/lib/postprocess.js
init_react();
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}

// node_modules/micromark-util-decode-numeric-character-reference/index.js
init_react();
function decodeNumericCharacterReference(value, base2) {
  const code2 = Number.parseInt(value, base2);
  if (code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || code2 > 126 && code2 < 160 || code2 > 55295 && code2 < 57344 || code2 > 64975 && code2 < 65008 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || code2 > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code2);
}

// node_modules/micromark-util-decode-string/index.js
init_react();
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/mdast-util-from-markdown/lib/index.js
var own6 = {}.hasOwnProperty;
var fromMarkdown = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
};
function compiler(options = {}) {
  const config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer2,
      codeFencedFenceMeta: buffer2,
      codeIndented: opener(codeFlow, buffer2),
      codeText: opener(codeText2, buffer2),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer2,
      definitionLabelString: buffer2,
      definitionTitleString: buffer2,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html4, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html4, buffer2),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer2,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer2,
      resourceDestinationString: buffer2,
      resourceTitleString: buffer2,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  const data = {};
  return compile2;
  function compile2(events) {
    let tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const listStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit2,
      buffer: buffer2,
      resume,
      setData,
      getData
    };
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler2 = config[events[index2][0]];
      if (own6.call(handler2, events[index2][1].type)) {
        handler2[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler2 = tail[1] || defaultOnError;
      handler2.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point3(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point3(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start3, length) {
    let index2 = start3 - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
      } else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem3 = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start)
          };
          events.splice(index2, 0, ["enter", listItem3, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start3][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point3(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create5, and) {
    return open;
    function open(token) {
      enter.call(this, create5(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point3(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler2 = open[1] || defaultOnError;
        handler2.call(this, token, open[0]);
      }
    }
    node.position.end = point3(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text5();
      tail.position = {
        start: point3(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point3(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point3(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitimage() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    const ancestor = this.stack[this.stack.length - 2];
    const string3 = this.sliceSerialize(token);
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    setData("inReference", true);
    if (node.type === "link") {
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = getData("characterReferenceType");
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decodeNamedCharacterReference(data2);
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point3(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html4() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text5() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own6.call(extension2, key)) {
      const list3 = key === "canContainEols" || key === "transforms";
      const maybe = own6.call(combined, key) ? combined[key] : void 0;
      const left = maybe || (combined[key] = list3 ? [] : {});
      const right = extension2[key];
      if (right) {
        if (list3) {
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}

// node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const parser = (doc) => {
    const settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Parser: parser });
}

// node_modules/remark-parse/index.js
var remark_parse_default = remarkParse;

// node_modules/remark-rehype/index.js
init_react();

// node_modules/mdast-util-to-hast/index.js
init_react();

// node_modules/mdast-util-to-hast/lib/traverse.js
init_react();

// node_modules/unist-builder/index.js
init_react();
var u = function(type, props, value) {
  var node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
};

// node_modules/mdast-util-to-hast/lib/traverse.js
var own7 = {}.hasOwnProperty;
function unknown(h, node) {
  const data = node.data || {};
  if ("value" in node && !(own7.call(data, "hName") || own7.call(data, "hProperties") || own7.call(data, "hChildren"))) {
    return h.augment(node, u("text", node.value));
  }
  return h(node, "div", all2(h, node));
}
function one2(h, node, parent) {
  const type = node && node.type;
  let fn;
  if (!type) {
    throw new Error("Expected node, got `" + node + "`");
  }
  if (own7.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }
  return (typeof fn === "function" ? fn : unknown)(h, node, parent);
}
function returnNode(h, node) {
  return "children" in node ? __spreadProps(__spreadValues({}, node), { children: all2(h, node) }) : node;
}
function all2(h, parent) {
  const values = [];
  if ("children" in parent) {
    const nodes = parent.children;
    let index2 = -1;
    while (++index2 < nodes.length) {
      const result = one2(h, nodes[index2], parent);
      if (result) {
        if (index2 && nodes[index2 - 1].type === "break") {
          if (!Array.isArray(result) && result.type === "text") {
            result.value = result.value.replace(/^\s+/, "");
          }
          if (!Array.isArray(result) && result.type === "element") {
            const head = result.children[0];
            if (head && head.type === "text") {
              head.value = head.value.replace(/^\s+/, "");
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}

// node_modules/mdast-util-to-hast/lib/index.js
init_react();

// node_modules/unist-util-visit/index.js
init_react();

// node_modules/unist-util-visit-parents/index.js
init_react();

// node_modules/unist-util-is/index.js
init_react();
var convert = function(test) {
  if (test === void 0 || test === null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks2 = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks2[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks2.length) {
      if (checks2[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all4);
  function all4(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}

// node_modules/unist-util-visit-parents/color.js
init_react();
function color2(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/index.js
var CONTINUE2 = true;
var SKIP2 = "skip";
var EXIT2 = false;
var visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert(test);
  const step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name2;
    if (typeof value.type === "string") {
      name2 = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit4, "name", {
        value: "node (" + color2(value.type + (name2 ? "<" + name2 + ">" : "")) + ")"
      });
    }
    return visit4;
    function visit4() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult2(visitor(node, parents));
        if (result[0] === EXIT2) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP2) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory2(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT2) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE2, value];
  }
  return [value];
}

// node_modules/unist-util-visit/index.js
var visit2 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/unist-util-position/index.js
init_react();
var pointStart = point2("start");
var pointEnd = point2("end");
function position2(node) {
  return { start: pointStart(node), end: pointEnd(node) };
}
function point2(type) {
  return point3;
  function point3(node) {
    var point4 = node && node.position && node.position[type] || {};
    return {
      line: point4.line || null,
      column: point4.column || null,
      offset: point4.offset > -1 ? point4.offset : null
    };
  }
}

// node_modules/unist-util-generated/index.js
init_react();
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}

// node_modules/mdast-util-definitions/index.js
init_react();

// node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js
init_react();

// node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/index.js
init_react();

// node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/color.js
init_react();
function color3(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/index.js
var CONTINUE3 = true;
var SKIP3 = "skip";
var EXIT3 = false;
var visitParents2 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  var is = convert(test);
  var step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name2;
    if (typeof value.type === "string") {
      name2 = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit4, "name", {
        value: "node (" + color3(value.type + (name2 ? "<" + name2 + ">" : "")) + ")"
      });
    }
    return visit4;
    function visit4() {
      var result = [];
      var subresult;
      var offset;
      var grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult3(visitor(node, parents));
        if (result[0] === EXIT3) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP3) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory2(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT3) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult3(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE3, value];
  }
  return [value];
}

// node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js
var visit3 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents2(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/mdast-util-definitions/index.js
var own8 = {}.hasOwnProperty;
function definitions(node) {
  const cache2 = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit3(node, "definition", ondefinition);
  return getDefinition;
  function ondefinition(definition2) {
    const id = clean(definition2.identifier);
    if (id && !own8.call(cache2, id)) {
      cache2[id] = definition2;
    }
  }
  function getDefinition(identifier) {
    const id = clean(identifier);
    return id && own8.call(cache2, id) ? cache2[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}

// node_modules/mdast-util-to-hast/lib/footer.js
init_react();

// node_modules/micromark-util-sanitize-uri/index.js
init_react();

// node_modules/micromark-util-encode/index.js
init_react();
var characterReferences = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function encode(value) {
  return value.replace(/["&<>]/g, replace);
  function replace(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}

// node_modules/micromark-util-sanitize-uri/index.js
function sanitizeUri(url, protocol) {
  const value = encode(normalizeUri(url || ""));
  if (!protocol) {
    return value;
  }
  const colon = value.indexOf(":");
  const questionMark = value.indexOf("?");
  const numberSign = value.indexOf("#");
  const slash = value.indexOf("/");
  if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) {
    return value;
  }
  return "";
}
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start3 = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code2 = value.charCodeAt(index2);
    let replace = "";
    if (code2 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code2 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code2))) {
        replace = String.fromCharCode(code2);
      }
    } else if (code2 > 55295 && code2 < 57344) {
      const next = value.charCodeAt(index2 + 1);
      if (code2 < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code2, next);
        skip = 1;
      } else {
        replace = "\uFFFD";
      }
    } else {
      replace = String.fromCharCode(code2);
    }
    if (replace) {
      result.push(value.slice(start3, index2), encodeURIComponent(replace));
      start3 = index2 + skip + 1;
      replace = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start3);
}

// node_modules/mdast-util-to-hast/lib/wrap.js
init_react();
function wrap2(nodes, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index2 < nodes.length) {
    if (index2)
      result.push(u("text", "\n"));
    result.push(nodes[index2]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

// node_modules/mdast-util-to-hast/lib/footer.js
function footer(h) {
  let index2 = -1;
  const listItems = [];
  while (++index2 < h.footnoteOrder.length) {
    const def = h.footnoteById[h.footnoteOrder[index2].toUpperCase()];
    if (!def) {
      continue;
    }
    const content3 = all2(h, def);
    const id = String(def.identifier);
    const safeId = sanitizeUri(id.toLowerCase());
    let referenceIndex = 0;
    const backReferences = [];
    while (++referenceIndex <= h.footnoteCounts[id]) {
      const backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: true,
          className: ["data-footnote-backref"],
          ariaLabel: h.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(referenceIndex) }]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      backReferences.push(backReference);
    }
    const tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content3.push(...backReferences);
    }
    const listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: h.clobberPrefix + "fn-" + safeId },
      children: wrap2(content3, true)
    };
    if (def.position) {
      listItem2.position = def.position;
    }
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return null;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: "h2",
        properties: { id: "footnote-label", className: ["sr-only"] },
        children: [u("text", h.footnoteLabel)]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap2(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}

// node_modules/mdast-util-to-hast/lib/handlers/index.js
init_react();

// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
init_react();
function blockquote(h, node) {
  return h(node, "blockquote", wrap2(all2(h, node), true));
}

// node_modules/mdast-util-to-hast/lib/handlers/break.js
init_react();
function hardBreak(h, node) {
  return [h(node, "br"), u("text", "\n")];
}

// node_modules/mdast-util-to-hast/lib/handlers/code.js
init_react();
function code(h, node) {
  const value = node.value ? node.value + "\n" : "";
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {};
  if (lang) {
    props.className = ["language-" + lang];
  }
  const code2 = h(node, "code", props, [u("text", value)]);
  if (node.meta) {
    code2.data = { meta: node.meta };
  }
  return h(node.position, "pre", [code2]);
}

// node_modules/mdast-util-to-hast/lib/handlers/delete.js
init_react();
function strikethrough(h, node) {
  return h(node, "del", all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
init_react();
function emphasis(h, node) {
  return h(node, "em", all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
init_react();
function footnoteReference(h, node) {
  const id = String(node.identifier);
  const safeId = sanitizeUri(id.toLowerCase());
  const index2 = h.footnoteOrder.indexOf(id);
  let counter;
  if (index2 === -1) {
    h.footnoteOrder.push(id);
    h.footnoteCounts[id] = 1;
    counter = h.footnoteOrder.length;
  } else {
    h.footnoteCounts[id]++;
    counter = index2 + 1;
  }
  const reuseCounter = h.footnoteCounts[id];
  return h(node, "sup", [
    h(node.position, "a", {
      href: "#" + h.clobberPrefix + "fn-" + safeId,
      id: h.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: "footnote-label"
    }, [u("text", String(counter))])
  ]);
}

// node_modules/mdast-util-to-hast/lib/handlers/footnote.js
init_react();
function footnote(h, node) {
  const footnoteById = h.footnoteById;
  let no = 1;
  while (no in footnoteById)
    no++;
  const identifier = String(no);
  footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  };
  return footnoteReference(h, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}

// node_modules/mdast-util-to-hast/lib/handlers/heading.js
init_react();
function heading(h, node) {
  return h(node, "h" + node.depth, all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/html.js
init_react();
function html(h, node) {
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
init_react();
var import_encode = __toESM(require("mdurl/encode.js"), 1);

// node_modules/mdast-util-to-hast/lib/revert.js
init_react();
function revert(h, node) {
  const subtype = node.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node.label || node.identifier) + "]";
  }
  if (node.type === "imageReference") {
    return u("text", "![" + node.alt + suffix);
  }
  const contents = all2(h, node);
  const head = contents[0];
  if (head && head.type === "text") {
    head.value = "[" + head.value;
  } else {
    contents.unshift(u("text", "["));
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push(u("text", suffix));
  }
  return contents;
}

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(h, node) {
  const def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }
  const props = { src: (0, import_encode.default)(def.url || ""), alt: node.alt };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h(node, "img", props);
}

// node_modules/mdast-util-to-hast/lib/handlers/image.js
init_react();
var import_encode2 = __toESM(require("mdurl/encode.js"), 1);
function image(h, node) {
  const props = { src: (0, import_encode2.default)(node.url), alt: node.alt };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
init_react();
function inlineCode(h, node) {
  return h(node, "code", [u("text", node.value.replace(/\r?\n|\r/g, " "))]);
}

// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
init_react();
var import_encode3 = __toESM(require("mdurl/encode.js"), 1);
function linkReference(h, node) {
  const def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }
  const props = { href: (0, import_encode3.default)(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h(node, "a", props, all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/link.js
init_react();
var import_encode4 = __toESM(require("mdurl/encode.js"), 1);
function link(h, node) {
  const props = { href: (0, import_encode4.default)(node.url) };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
init_react();
function listItem(h, node, parent) {
  const result = all2(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  const wrapped = [];
  if (typeof node.checked === "boolean") {
    let paragraph2;
    if (result[0] && result[0].type === "element" && result[0].tagName === "p") {
      paragraph2 = result[0];
    } else {
      paragraph2 = h(null, "p", []);
      result.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift(u("text", " "));
    }
    paragraph2.children.unshift(h(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < result.length) {
    const child = result[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      wrapped.push(u("text", "\n"));
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }
  const tail = result[result.length - 1];
  if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) {
    wrapped.push(u("text", "\n"));
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index2 = -1;
  while (!loose && ++index2 < children.length) {
    loose = listItemLoose(children[index2]);
  }
  return Boolean(loose);
}
function listItemLoose(node) {
  const spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}

// node_modules/mdast-util-to-hast/lib/handlers/list.js
init_react();
function list2(h, node) {
  const props = {};
  const name2 = node.ordered ? "ol" : "ul";
  const items = all2(h, node);
  let index2 = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  while (++index2 < items.length) {
    const item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h(node, name2, props, wrap2(items, true));
}

// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
init_react();
function paragraph(h, node) {
  return h(node, "p", all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/root.js
init_react();
function root(h, node) {
  return h.augment(node, u("root", wrap2(all2(h, node))));
}

// node_modules/mdast-util-to-hast/lib/handlers/strong.js
init_react();
function strong(h, node) {
  return h(node, "strong", all2(h, node));
}

// node_modules/mdast-util-to-hast/lib/handlers/table.js
init_react();
function table(h, node) {
  const rows = node.children;
  let index2 = -1;
  const align = node.align || [];
  const result = [];
  while (++index2 < rows.length) {
    const row = rows[index2].children;
    const name2 = index2 === 0 ? "th" : "td";
    const out = [];
    let cellIndex = -1;
    const length = node.align ? align.length : row.length;
    while (++cellIndex < length) {
      const cell = row[cellIndex];
      out.push(h(cell, name2, { align: align[cellIndex] }, cell ? all2(h, cell) : []));
    }
    result[index2] = h(rows[index2], "tr", wrap2(out, true));
  }
  return h(node, "table", wrap2([h(result[0].position, "thead", wrap2([result[0]], true))].concat(result[1] ? h({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap2(result.slice(1), true)) : []), true));
}

// node_modules/mdast-util-to-hast/lib/handlers/text.js
init_react();
function text3(h, node) {
  return h.augment(node, u("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")));
}

// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
init_react();
function thematicBreak2(h, node) {
  return h(node, "hr");
}

// node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list: list2,
  paragraph,
  root,
  strong,
  table,
  text: text3,
  thematicBreak: thematicBreak2,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}

// node_modules/mdast-util-to-hast/lib/index.js
var own9 = {}.hasOwnProperty;
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  const footnoteById = {};
  h.dangerous = dangerous;
  h.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
  h.footnoteLabel = settings.footnoteLabel || "Footnotes";
  h.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
  h.definition = definitions(tree);
  h.footnoteById = footnoteById;
  h.footnoteOrder = [];
  h.footnoteCounts = {};
  h.augment = augment;
  h.handlers = __spreadValues(__spreadValues({}, handlers), settings.handlers);
  h.unknownHandler = settings.unknownHandler;
  h.passThrough = settings.passThrough;
  visit2(tree, "footnoteDefinition", (definition2) => {
    const id = String(definition2.identifier).toUpperCase();
    if (!own9.call(footnoteById, id)) {
      footnoteById[id] = definition2;
    }
  });
  return h;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== "element") {
          right = {
            type: "element",
            tagName: "",
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === "element" && data.hProperties) {
        right.properties = __spreadValues(__spreadValues({}, right.properties), data.hProperties);
      }
      if ("children" in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx = "type" in left ? left : { position: left };
      if (!generated(ctx)) {
        right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
      }
    }
    return right;
  }
  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  const h = factory(tree, options);
  const node = one2(h, tree, null);
  const foot = footer(h);
  if (foot) {
    node.children.push(u("text", "\n"), foot);
  }
  return Array.isArray(node) ? { type: "root", children: node } : node;
}

// node_modules/remark-rehype/lib/index.js
init_react();
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
};
var lib_default = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-build.js
init_react();

// node_modules/estree-util-build-jsx/index.js
init_react();

// node_modules/estree-walker/src/index.js
init_react();

// node_modules/estree-walker/src/sync.js
init_react();

// node_modules/estree-walker/src/walker.js
init_react();
var WalkerBase = class {
  constructor() {
    this.should_skip = false;
    this.should_remove = false;
    this.replacement = null;
    this.context = {
      skip: () => this.should_skip = true,
      remove: () => this.should_remove = true,
      replace: (node) => this.replacement = node
    };
  }
  replace(parent, prop, index2, node) {
    if (parent) {
      if (index2 !== null) {
        parent[prop][index2] = node;
      } else {
        parent[prop] = node;
      }
    }
  }
  remove(parent, prop, index2) {
    if (parent) {
      if (index2 !== null) {
        parent[prop].splice(index2, 1);
      } else {
        delete parent[prop];
      }
    }
  }
};

// node_modules/estree-walker/src/sync.js
var SyncWalker = class extends WalkerBase {
  constructor(enter, leave) {
    super();
    this.enter = enter;
    this.leave = leave;
  }
  visit(node, parent, prop, index2) {
    if (node) {
      if (this.enter) {
        const _should_skip = this.should_skip;
        const _should_remove = this.should_remove;
        const _replacement = this.replacement;
        this.should_skip = false;
        this.should_remove = false;
        this.replacement = null;
        this.enter.call(this.context, node, parent, prop, index2);
        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index2, node);
        }
        if (this.should_remove) {
          this.remove(parent, prop, index2);
        }
        const skipped = this.should_skip;
        const removed = this.should_remove;
        this.should_skip = _should_skip;
        this.should_remove = _should_remove;
        this.replacement = _replacement;
        if (skipped)
          return node;
        if (removed)
          return null;
      }
      for (const key in node) {
        const value = node[key];
        if (typeof value !== "object") {
          continue;
        } else if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i += 1) {
            if (value[i] !== null && typeof value[i].type === "string") {
              if (!this.visit(value[i], node, key, i)) {
                i--;
              }
            }
          }
        } else if (value !== null && typeof value.type === "string") {
          this.visit(value, node, key, null);
        }
      }
      if (this.leave) {
        const _replacement = this.replacement;
        const _should_remove = this.should_remove;
        this.replacement = null;
        this.should_remove = false;
        this.leave.call(this.context, node, parent, prop, index2);
        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index2, node);
        }
        if (this.should_remove) {
          this.remove(parent, prop, index2);
        }
        const removed = this.should_remove;
        this.replacement = _replacement;
        this.should_remove = _should_remove;
        if (removed)
          return null;
      }
    }
    return node;
  }
};

// node_modules/estree-walker/src/async.js
init_react();

// node_modules/estree-walker/src/index.js
function walk(ast, { enter, leave }) {
  const instance = new SyncWalker(enter, leave);
  return instance.visit(ast, null);
}

// node_modules/estree-util-build-jsx/index.js
var regex = /@(jsx|jsxFrag|jsxImportSource|jsxRuntime)\s+(\S+)/g;
function buildJsx(tree, options = {}) {
  var automatic = options.runtime === "automatic";
  var annotations = {};
  var imports = {};
  walk(tree, { enter, leave });
  return tree;
  function enter(node) {
    var comments;
    var index2;
    var match;
    if (node.type === "Program") {
      comments = node.comments || [];
      index2 = -1;
      while (++index2 < comments.length) {
        regex.lastIndex = 0;
        while (match = regex.exec(comments[index2].value)) {
          annotations[match[1]] = match[2];
        }
      }
      if (annotations.jsxRuntime) {
        if (annotations.jsxRuntime === "automatic") {
          automatic = true;
          if (annotations.jsx) {
            throw new Error("Unexpected `@jsx` pragma w/ automatic runtime");
          }
          if (annotations.jsxFrag) {
            throw new Error("Unexpected `@jsxFrag` pragma w/ automatic runtime");
          }
        } else if (annotations.jsxRuntime === "classic") {
          automatic = false;
          if (annotations.jsxImportSource) {
            throw new Error("Unexpected `@jsxImportSource` w/ classic runtime");
          }
        } else {
          throw new Error("Unexpected `jsxRuntime` `" + annotations.jsxRuntime + "`, expected `automatic` or `classic`");
        }
      }
    }
  }
  function leave(node) {
    var parameters = [];
    var children = [];
    var objects = [];
    var fields = [];
    var index2 = -1;
    var child;
    var name2;
    var props;
    var attributes4;
    var attribute;
    var spread;
    var key;
    var callee;
    var specifiers;
    var prop;
    var value;
    if (node.type === "Program") {
      specifiers = [];
      if (imports.fragment) {
        specifiers.push({
          type: "ImportSpecifier",
          imported: { type: "Identifier", name: "Fragment" },
          local: { type: "Identifier", name: "_Fragment" }
        });
      }
      if (imports.jsx) {
        specifiers.push({
          type: "ImportSpecifier",
          imported: { type: "Identifier", name: "jsx" },
          local: { type: "Identifier", name: "_jsx" }
        });
      }
      if (imports.jsxs) {
        specifiers.push({
          type: "ImportSpecifier",
          imported: { type: "Identifier", name: "jsxs" },
          local: { type: "Identifier", name: "_jsxs" }
        });
      }
      if (specifiers.length > 0) {
        node.body.unshift({
          type: "ImportDeclaration",
          specifiers,
          source: {
            type: "Literal",
            value: (annotations.jsxImportSource || options.importSource || "react") + "/jsx-runtime"
          }
        });
      }
    }
    if (node.type !== "JSXElement" && node.type !== "JSXFragment") {
      return;
    }
    while (++index2 < node.children.length) {
      child = node.children[index2];
      if (child.type === "JSXExpressionContainer") {
        if (child.expression.type !== "JSXEmptyExpression") {
          children.push(child.expression);
        }
      } else if (child.type === "JSXText") {
        value = child.value.replace(/\t/g, " ").replace(/ *(\r?\n|\r) */g, "\n").replace(/\n+/g, "\n").replace(/\n+$/, "").replace(/\n/g, " ");
        if (value) {
          children.push(create(child, { type: "Literal", value }));
        }
      } else {
        children.push(child);
      }
    }
    if (node.type === "JSXElement") {
      name2 = toIdentifier(node.openingElement.name);
      if (name2.type === "Identifier" && /^[a-z]/.test(name2.name)) {
        name2 = create(name2, { type: "Literal", value: name2.name });
      }
      attributes4 = node.openingElement.attributes;
      index2 = -1;
      while (++index2 < attributes4.length) {
        attribute = attributes4[index2];
        if (attribute.type === "JSXSpreadAttribute") {
          if (fields.length > 0) {
            objects.push({ type: "ObjectExpression", properties: fields });
            fields = [];
          }
          objects.push(attribute.argument);
          spread = true;
        } else {
          prop = toProperty(attribute);
          if (automatic && prop.key.type === "Identifier" && prop.key.name === "key") {
            if (spread) {
              throw new Error("Expected `key` to come before any spread expressions");
            }
            key = prop.value;
          } else {
            fields.push(prop);
          }
        }
      }
    } else if (automatic) {
      imports.fragment = true;
      name2 = { type: "Identifier", name: "_Fragment" };
    } else {
      name2 = toMemberExpression(annotations.jsxFrag || options.pragmaFrag || "React.Fragment");
    }
    if (automatic && children.length > 0) {
      fields.push({
        type: "Property",
        key: { type: "Identifier", name: "children" },
        value: children.length > 1 ? { type: "ArrayExpression", elements: children } : children[0],
        kind: "init",
        method: false,
        shorthand: false,
        computed: false
      });
    } else {
      parameters = children;
    }
    if (fields.length > 0) {
      objects.push({ type: "ObjectExpression", properties: fields });
    }
    if (objects.length > 1) {
      if (objects[0].type !== "ObjectExpression") {
        objects.unshift({ type: "ObjectExpression", properties: [] });
      }
      props = {
        type: "CallExpression",
        callee: toMemberExpression("Object.assign"),
        arguments: objects,
        optional: false
      };
    } else if (objects.length > 0) {
      props = objects[0];
    }
    if (automatic) {
      if (children.length > 1) {
        imports.jsxs = true;
        callee = { type: "Identifier", name: "_jsxs" };
      } else {
        imports.jsx = true;
        callee = { type: "Identifier", name: "_jsx" };
      }
      parameters.push(props || { type: "ObjectExpression", properties: [] });
      if (key) {
        parameters.push(key);
      }
    } else {
      if (props || parameters.length > 0) {
        parameters.unshift(props || { type: "Literal", value: null });
      }
      callee = toMemberExpression(annotations.jsx || options.pragma || "React.createElement");
    }
    parameters.unshift(name2);
    this.replace(create(node, {
      type: "CallExpression",
      callee,
      arguments: parameters,
      optional: false
    }));
  }
}
function toProperty(node) {
  var value;
  if (node.value) {
    if (node.value.type === "JSXExpressionContainer") {
      value = node.value.expression;
    } else {
      value = node.value;
      delete value.raw;
    }
  } else {
    value = { type: "Literal", value: true };
  }
  return create(node, {
    type: "Property",
    key: toIdentifier(node.name),
    value,
    kind: "init",
    method: false,
    shorthand: false,
    computed: false
  });
}
function toIdentifier(node) {
  var replace;
  var id;
  if (node.type === "JSXMemberExpression") {
    id = toIdentifier(node.property);
    replace = {
      type: "MemberExpression",
      object: toIdentifier(node.object),
      property: id,
      computed: id.type === "Literal",
      optional: false
    };
  } else if (node.type === "JSXNamespacedName") {
    replace = {
      type: "Literal",
      value: node.namespace.name + ":" + node.name.name
    };
  } else {
    replace = name(node.name) ? { type: "Identifier", name: node.name } : { type: "Literal", value: node.name };
  }
  return create(node, replace);
}
function toMemberExpression(id) {
  var identifiers = id.split(".");
  var index2 = -1;
  var result;
  var prop;
  while (++index2 < identifiers.length) {
    prop = name(identifiers[index2]) ? { type: "Identifier", name: identifiers[index2] } : { type: "Literal", value: identifiers[index2] };
    result = index2 ? {
      type: "MemberExpression",
      object: result,
      property: prop,
      computed: index2 && prop.type === "Literal",
      optional: false
    } : prop;
  }
  return result;
}
function create(from, node) {
  var fields = ["start", "end", "loc", "range", "comments"];
  var index2 = -1;
  var field;
  while (++index2 < fields.length) {
    field = fields[index2];
    if (field in from) {
      node[field] = from[field];
    }
  }
  return node;
}

// node_modules/@mdx-js/mdx/lib/util/estree-util-specifiers-to-declarations.js
init_react();

// node_modules/@mdx-js/mdx/lib/util/estree-util-create.js
init_react();
function create2(template, node) {
  const fields = ["start", "end", "loc", "range", "comments"];
  let index2 = -1;
  while (++index2 < fields.length) {
    const field = fields[index2];
    if (field in template) {
      node[field] = template[field];
    }
  }
  return node;
}

// node_modules/@mdx-js/mdx/lib/util/estree-util-specifiers-to-declarations.js
function specifiersToDeclarations(specifiers, init) {
  let index2 = -1;
  const declarations = [];
  const otherSpecifiers = [];
  let importNamespaceSpecifier;
  while (++index2 < specifiers.length) {
    const specifier = specifiers[index2];
    if (specifier.type === "ImportNamespaceSpecifier") {
      importNamespaceSpecifier = specifier;
    } else {
      otherSpecifiers.push(specifier);
    }
  }
  if (importNamespaceSpecifier) {
    declarations.push(create2(importNamespaceSpecifier, {
      type: "VariableDeclarator",
      id: importNamespaceSpecifier.local,
      init
    }));
  }
  declarations.push({
    type: "VariableDeclarator",
    id: {
      type: "ObjectPattern",
      properties: otherSpecifiers.map((specifier) => {
        let key = specifier.type === "ImportSpecifier" ? specifier.imported : specifier.type === "ExportSpecifier" ? specifier.exported : { type: "Identifier", name: "default" };
        let value = specifier.local;
        if (specifier.type === "ExportSpecifier") {
          value = key;
          key = specifier.local;
        }
        return create2(specifier, {
          type: "Property",
          kind: "init",
          shorthand: key.name === value.name,
          method: false,
          computed: false,
          key,
          value
        });
      })
    },
    init: importNamespaceSpecifier ? { type: "Identifier", name: importNamespaceSpecifier.local.name } : init
  });
  return declarations;
}

// node_modules/@mdx-js/mdx/lib/util/estree-util-to-id-or-member-expression.js
init_react();
var toIdOrMemberExpression = toIdOrMemberExpressionFactory("Identifier", "MemberExpression", name);
var toJsxIdOrMemberExpression = toIdOrMemberExpressionFactory("JSXIdentifier", "JSXMemberExpression", isJsxIdentifierName);
function toIdOrMemberExpressionFactory(idType, memberType, isIdentifier) {
  return toIdOrMemberExpression2;
  function toIdOrMemberExpression2(ids) {
    let index2 = -1;
    let object;
    while (++index2 < ids.length) {
      const name2 = ids[index2];
      const valid2 = typeof name2 === "string" && isIdentifier(name2);
      if (idType === "JSXIdentifier" && !valid2) {
        throw new Error("Cannot turn `" + name2 + "` into a JSX identifier");
      }
      const id = valid2 ? { type: idType, name: name2 } : { type: "Literal", value: name2 };
      object = object ? {
        type: memberType,
        object,
        property: id,
        computed: id.type === "Literal",
        optional: false
      } : id;
    }
    if (!object)
      throw new Error("Expected non-empty `ids` to be passed");
    if (object.type === "Literal")
      throw new Error("Expected identifier as left-most value");
    return object;
  }
}
function isJsxIdentifierName(name2) {
  let index2 = -1;
  while (++index2 < name2.length) {
    if (!(index2 ? jsxCont : start2)(name2.charCodeAt(index2)))
      return false;
  }
  return index2 > 0;
}
function jsxCont(code2) {
  return code2 === 45 || cont2(code2);
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-build.js
function recmaJsxBuild(options = {}) {
  const { outputFormat } = options;
  return (tree) => {
    buildJsx(tree);
    if (outputFormat === "function-body" && tree.body[0] && tree.body[0].type === "ImportDeclaration" && typeof tree.body[0].source.value === "string" && /\/jsx-runtime$/.test(tree.body[0].source.value)) {
      tree.body[0] = {
        type: "VariableDeclaration",
        kind: "const",
        declarations: specifiersToDeclarations(tree.body[0].specifiers, toIdOrMemberExpression(["arguments", 0]))
      };
    }
  };
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-document.js
init_react();
var import_url2 = require("url");

// node_modules/periscopic/src/index.js
init_react();

// node_modules/is-reference/src/index.js
init_react();
function is_reference(node, parent) {
  if (node.type === "MemberExpression") {
    return !node.computed && is_reference(node.object, node);
  }
  if (node.type === "Identifier") {
    if (!parent)
      return true;
    switch (parent.type) {
      case "MemberExpression":
        return parent.computed || node === parent.object;
      case "MethodDefinition":
        return parent.computed;
      case "PropertyDefinition":
        return parent.computed || node === parent.value;
      case "Property":
        return parent.computed || node === parent.value;
      case "ExportSpecifier":
      case "ImportSpecifier":
        return node === parent.local;
      case "LabeledStatement":
      case "BreakStatement":
      case "ContinueStatement":
        return false;
      default:
        return true;
    }
  }
  return false;
}

// node_modules/periscopic/src/index.js
function analyze(expression) {
  const map = /* @__PURE__ */ new WeakMap();
  const globals = /* @__PURE__ */ new Map();
  const scope = new Scope(null, false);
  const references = [];
  let current_scope = scope;
  walk(expression, {
    enter(node, parent) {
      switch (node.type) {
        case "Identifier":
          if (is_reference(node, parent)) {
            references.push([current_scope, node]);
          }
          break;
        case "ImportDeclaration":
          node.specifiers.forEach((specifier) => {
            current_scope.declarations.set(specifier.local.name, specifier);
          });
          break;
        case "FunctionExpression":
        case "FunctionDeclaration":
        case "ArrowFunctionExpression":
          if (node.type === "FunctionDeclaration") {
            if (node.id) {
              current_scope.declarations.set(node.id.name, node);
            }
            map.set(node, current_scope = new Scope(current_scope, false));
          } else {
            map.set(node, current_scope = new Scope(current_scope, false));
            if (node.type === "FunctionExpression" && node.id) {
              current_scope.declarations.set(node.id.name, node);
            }
          }
          node.params.forEach((param) => {
            extract_names(param).forEach((name2) => {
              current_scope.declarations.set(name2, node);
            });
          });
          break;
        case "ForStatement":
        case "ForInStatement":
        case "ForOfStatement":
          map.set(node, current_scope = new Scope(current_scope, true));
          break;
        case "BlockStatement":
          map.set(node, current_scope = new Scope(current_scope, true));
          break;
        case "ClassDeclaration":
        case "VariableDeclaration":
          current_scope.add_declaration(node);
          break;
        case "CatchClause":
          map.set(node, current_scope = new Scope(current_scope, true));
          if (node.param) {
            extract_names(node.param).forEach((name2) => {
              current_scope.declarations.set(name2, node.param);
            });
          }
          break;
      }
    },
    leave(node) {
      if (map.has(node)) {
        current_scope = current_scope.parent;
      }
    }
  });
  for (let i = references.length - 1; i >= 0; --i) {
    const [scope2, reference] = references[i];
    if (!scope2.references.has(reference.name)) {
      add_reference(scope2, reference.name);
    }
    if (!scope2.find_owner(reference.name)) {
      globals.set(reference.name, reference);
    }
  }
  return { map, scope, globals };
}
function add_reference(scope, name2) {
  scope.references.add(name2);
  if (scope.parent)
    add_reference(scope.parent, name2);
}
var Scope = class {
  constructor(parent, block) {
    this.parent = parent;
    this.block = block;
    this.declarations = /* @__PURE__ */ new Map();
    this.initialised_declarations = /* @__PURE__ */ new Set();
    this.references = /* @__PURE__ */ new Set();
  }
  add_declaration(node) {
    if (node.type === "VariableDeclaration") {
      if (node.kind === "var" && this.block && this.parent) {
        this.parent.add_declaration(node);
      } else {
        const handle_declarator = (declarator) => {
          extract_names(declarator.id).forEach((name2) => {
            this.declarations.set(name2, node);
            if (declarator.init)
              this.initialised_declarations.add(name2);
          });
          ;
        };
        node.declarations.forEach(handle_declarator);
      }
    } else if (node.id) {
      this.declarations.set(node.id.name, node);
    }
  }
  find_owner(name2) {
    if (this.declarations.has(name2))
      return this;
    return this.parent && this.parent.find_owner(name2);
  }
  has(name2) {
    return this.declarations.has(name2) || !!this.parent && this.parent.has(name2);
  }
};
function extract_names(param) {
  return extract_identifiers(param).map((node) => node.name);
}
function extract_identifiers(param, nodes = []) {
  switch (param.type) {
    case "Identifier":
      nodes.push(param);
      break;
    case "MemberExpression":
      let object = param;
      while (object.type === "MemberExpression") {
        object = object.object;
      }
      nodes.push(object);
      break;
    case "ObjectPattern":
      const handle_prop = (prop) => {
        if (prop.type === "RestElement") {
          extract_identifiers(prop.argument, nodes);
        } else {
          extract_identifiers(prop.value, nodes);
        }
      };
      param.properties.forEach(handle_prop);
      break;
    case "ArrayPattern":
      const handle_element = (element2) => {
        if (element2)
          extract_identifiers(element2, nodes);
      };
      param.elements.forEach(handle_element);
      break;
    case "RestElement":
      extract_identifiers(param.argument, nodes);
      break;
    case "AssignmentPattern":
      extract_identifiers(param.left, nodes);
      break;
  }
  return nodes;
}

// node_modules/@mdx-js/mdx/lib/util/estree-util-declaration-to-expression.js
init_react();
function declarationToExpression(declaration) {
  if (declaration.type === "FunctionDeclaration") {
    return __spreadProps(__spreadValues({}, declaration), { type: "FunctionExpression" });
  }
  if (declaration.type === "ClassDeclaration") {
    return __spreadProps(__spreadValues({}, declaration), { type: "ClassExpression" });
  }
  throw new Error("Cannot turn `" + declaration.type + "` into an expression");
}

// node_modules/@mdx-js/mdx/lib/util/estree-util-is-declaration.js
init_react();
function isDeclaration(node) {
  const type = node && typeof node === "object" && node.type;
  return Boolean(type === "FunctionDeclaration" || type === "ClassDeclaration" || type === "VariableDeclaration");
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-document.js
function recmaDocument(options = {}) {
  const {
    baseUrl,
    useDynamicImport,
    outputFormat = "program",
    pragma = "React.createElement",
    pragmaFrag = "React.Fragment",
    pragmaImportSource = "react",
    jsxImportSource = "react",
    jsxRuntime = "automatic"
  } = options;
  return (tree, file) => {
    const exportedIdentifiers = [];
    const replacement = [];
    const pragmas = [];
    let exportAllCount = 0;
    let layout;
    let content3;
    let child;
    if (!tree.comments)
      tree.comments = [];
    if (jsxRuntime) {
      pragmas.push("@jsxRuntime " + jsxRuntime);
    }
    if (jsxRuntime === "automatic" && jsxImportSource) {
      pragmas.push("@jsxImportSource " + jsxImportSource);
    }
    if (jsxRuntime === "classic" && pragma) {
      pragmas.push("@jsx " + pragma);
    }
    if (jsxRuntime === "classic" && pragmaFrag) {
      pragmas.push("@jsxFrag " + pragmaFrag);
    }
    if (pragmas.length > 0) {
      tree.comments.unshift({ type: "Block", value: pragmas.join(" ") });
    }
    if (jsxRuntime === "classic" && pragmaImportSource) {
      if (!pragma) {
        throw new Error("Missing `pragma` in classic runtime with `pragmaImportSource`");
      }
      handleEsm({
        type: "ImportDeclaration",
        specifiers: [
          {
            type: "ImportDefaultSpecifier",
            local: { type: "Identifier", name: pragma.split(".")[0] }
          }
        ],
        source: { type: "Literal", value: pragmaImportSource }
      });
    }
    for (child of tree.body) {
      if (child.type === "ExportDefaultDeclaration") {
        if (layout) {
          file.fail("Cannot specify multiple layouts (previous: " + stringifyPosition(positionFromEstree(layout)) + ")", positionFromEstree(child), "recma-document:duplicate-layout");
        }
        layout = child;
        replacement.push({
          type: "VariableDeclaration",
          kind: "const",
          declarations: [
            {
              type: "VariableDeclarator",
              id: { type: "Identifier", name: "MDXLayout" },
              init: isDeclaration(child.declaration) ? declarationToExpression(child.declaration) : child.declaration
            }
          ]
        });
      } else if (child.type === "ExportNamedDeclaration" && child.source) {
        const source = child.source;
        child.specifiers = child.specifiers.filter((specifier) => {
          if (specifier.exported.name === "default") {
            if (layout) {
              file.fail("Cannot specify multiple layouts (previous: " + stringifyPosition(positionFromEstree(layout)) + ")", positionFromEstree(child), "recma-document:duplicate-layout");
            }
            layout = specifier;
            handleEsm(create2(specifier, {
              type: "ImportDeclaration",
              specifiers: [
                specifier.local.name === "default" ? {
                  type: "ImportDefaultSpecifier",
                  local: { type: "Identifier", name: "MDXLayout" }
                } : create2(specifier.local, {
                  type: "ImportSpecifier",
                  imported: specifier.local,
                  local: { type: "Identifier", name: "MDXLayout" }
                })
              ],
              source: create2(source, { type: "Literal", value: source.value })
            }));
            return false;
          }
          return true;
        });
        if (child.specifiers.length > 0) {
          handleExport(child);
        }
      } else if (child.type === "ExportNamedDeclaration" || child.type === "ExportAllDeclaration") {
        handleExport(child);
      } else if (child.type === "ImportDeclaration") {
        handleEsm(child);
      } else if (child.type === "ExpressionStatement" && (child.expression.type === "JSXFragment" || child.expression.type === "JSXElement")) {
        content3 = true;
        replacement.push(createMdxContent(child.expression));
      } else {
        replacement.push(child);
      }
    }
    if (!content3) {
      replacement.push(createMdxContent());
    }
    exportedIdentifiers.push(["MDXContent", "default"]);
    if (outputFormat === "function-body") {
      replacement.push({
        type: "ReturnStatement",
        argument: {
          type: "ObjectExpression",
          properties: [
            ...Array.from({ length: exportAllCount }).map((_, index2) => ({
              type: "SpreadElement",
              argument: { type: "Identifier", name: "_exportAll" + (index2 + 1) }
            })),
            ...exportedIdentifiers.map((d) => {
              const prop = {
                type: "Property",
                kind: "init",
                method: false,
                computed: false,
                shorthand: typeof d === "string",
                key: {
                  type: "Identifier",
                  name: typeof d === "string" ? d : d[1]
                },
                value: {
                  type: "Identifier",
                  name: typeof d === "string" ? d : d[0]
                }
              };
              return prop;
            })
          ]
        }
      });
    } else {
      replacement.push({
        type: "ExportDefaultDeclaration",
        declaration: { type: "Identifier", name: "MDXContent" }
      });
    }
    tree.body = replacement;
    function handleExport(node) {
      if (node.type === "ExportNamedDeclaration") {
        if (node.declaration) {
          exportedIdentifiers.push(...analyze(node.declaration).scope.declarations.keys());
        }
        for (child of node.specifiers) {
          exportedIdentifiers.push(child.exported.name);
        }
      }
      handleEsm(node);
    }
    function handleEsm(node) {
      if (baseUrl && node.source) {
        let value = String(node.source.value);
        try {
          value = String(new URL(value));
        } catch {
          if (/^\.{0,2}\//.test(value)) {
            value = String(new URL(value, baseUrl));
          }
        }
        node.source = create2(node.source, { type: "Literal", value });
      }
      let replace;
      let init;
      if (outputFormat === "function-body") {
        if (node.type === "ImportDeclaration" || node.type === "ExportAllDeclaration" || node.type === "ExportNamedDeclaration" && node.source) {
          if (!useDynamicImport) {
            file.fail("Cannot use `import` or `export \u2026 from` in `evaluate` (outputting a function body) by default: please set `useDynamicImport: true` (and probably specify a `baseUrl`)", positionFromEstree(node), "recma-document:invalid-esm-statement");
          }
          if (!node.source) {
            throw new Error("Expected `node.source` to be defined");
          }
          init = {
            type: "AwaitExpression",
            argument: create2(node, {
              type: "ImportExpression",
              source: node.source
            })
          };
          if ((node.type === "ImportDeclaration" || node.type === "ExportNamedDeclaration") && node.specifiers.length === 0) {
            replace = { type: "ExpressionStatement", expression: init };
          } else {
            replace = {
              type: "VariableDeclaration",
              kind: "const",
              declarations: node.type === "ExportAllDeclaration" ? [
                {
                  type: "VariableDeclarator",
                  id: {
                    type: "Identifier",
                    name: "_exportAll" + ++exportAllCount
                  },
                  init
                }
              ] : specifiersToDeclarations(node.specifiers, init)
            };
          }
        } else if (node.declaration) {
          replace = node.declaration;
        } else {
          const declarators = node.specifiers.filter((specifier) => specifier.local.name !== specifier.exported.name).map((specifier) => ({
            type: "VariableDeclarator",
            id: specifier.exported,
            init: specifier.local
          }));
          if (declarators.length > 0) {
            replace = {
              type: "VariableDeclaration",
              kind: "const",
              declarations: declarators
            };
          }
        }
      } else {
        replace = node;
      }
      if (replace) {
        replacement.push(replace);
      }
    }
  };
  function createMdxContent(content3) {
    const element2 = {
      type: "JSXElement",
      openingElement: {
        type: "JSXOpeningElement",
        name: { type: "JSXIdentifier", name: "MDXLayout" },
        attributes: [
          {
            type: "JSXSpreadAttribute",
            argument: { type: "Identifier", name: "props" }
          }
        ],
        selfClosing: false
      },
      closingElement: {
        type: "JSXClosingElement",
        name: { type: "JSXIdentifier", name: "MDXLayout" }
      },
      children: [
        {
          type: "JSXElement",
          openingElement: {
            type: "JSXOpeningElement",
            name: { type: "JSXIdentifier", name: "_createMdxContent" },
            attributes: [],
            selfClosing: true
          },
          closingElement: null,
          children: []
        }
      ]
    };
    const consequent = element2;
    let argument = content3 || { type: "Literal", value: null };
    if (argument && argument.type === "JSXFragment" && argument.children.length === 1 && argument.children[0].type === "JSXElement") {
      argument = argument.children[0];
    }
    return {
      type: "FunctionDeclaration",
      id: { type: "Identifier", name: "MDXContent" },
      params: [
        {
          type: "AssignmentPattern",
          left: { type: "Identifier", name: "props" },
          right: { type: "ObjectExpression", properties: [] }
        }
      ],
      body: {
        type: "BlockStatement",
        body: [
          {
            type: "ReturnStatement",
            argument: {
              type: "ConditionalExpression",
              test: { type: "Identifier", name: "MDXLayout" },
              consequent,
              alternate: {
                type: "CallExpression",
                callee: { type: "Identifier", name: "_createMdxContent" },
                arguments: [],
                optional: false
              }
            }
          },
          {
            type: "FunctionDeclaration",
            id: { type: "Identifier", name: "_createMdxContent" },
            params: [],
            body: {
              type: "BlockStatement",
              body: [{ type: "ReturnStatement", argument }]
            }
          }
        ]
      }
    };
  }
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-rewrite.js
init_react();

// node_modules/@mdx-js/mdx/lib/util/estree-util-to-binary-addition.js
init_react();
function toBinaryAddition(expressions) {
  let index2 = -1;
  let left;
  while (++index2 < expressions.length) {
    const right = expressions[index2];
    left = left ? { type: "BinaryExpression", left, operator: "+", right } : right;
  }
  if (!left)
    throw new Error("Expected non-empty `expressions` to be passed");
  return left;
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-rewrite.js
var own10 = {}.hasOwnProperty;
function recmaJsxRewrite(options = {}) {
  const { development: development2, providerImportSource, outputFormat } = options;
  return (tree, file) => {
    const scopeInfo = analyze(tree);
    const fnStack = [];
    let importProvider;
    let createErrorHelper;
    let currentScope;
    walk(tree, {
      enter(_node) {
        const node = _node;
        if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") {
          fnStack.push({
            objects: [],
            components: [],
            tags: [],
            references: {},
            node
          });
        }
        let fnScope = fnStack[0];
        if (!fnScope || !isNamedFunction(fnScope.node, "MDXContent") && !providerImportSource) {
          return;
        }
        if (fnStack[1] && isNamedFunction(fnStack[1].node, "_createMdxContent")) {
          fnScope = fnStack[1];
        }
        const newScope = scopeInfo.map.get(node);
        if (newScope) {
          newScope.node = node;
          currentScope = newScope;
        }
        if (currentScope && node.type === "JSXElement") {
          let name2 = node.openingElement.name;
          if (name2.type === "JSXMemberExpression") {
            const ids = [];
            while (name2.type === "JSXMemberExpression") {
              ids.unshift(name2.property.name);
              name2 = name2.object;
            }
            ids.unshift(name2.name);
            const fullId = ids.join(".");
            const id = name2.name;
            if (!own10.call(fnScope.references, fullId)) {
              fnScope.references[fullId] = { node, component: true };
            }
            if (!fnScope.objects.includes(id) && !inScope(currentScope, id)) {
              fnScope.objects.push(id);
            }
          } else if (name2.type === "JSXNamespacedName") {
          } else if (name(name2.name) && !/^[a-z]/.test(name2.name)) {
            const id = name2.name;
            if (!inScope(currentScope, id)) {
              if (id !== "MDXLayout" && !own10.call(fnScope.references, id)) {
                fnScope.references[id] = { node, component: true };
              }
              if (!fnScope.components.includes(id)) {
                fnScope.components.push(id);
              }
            }
          } else if (node.data && node.data._mdxExplicitJsx) {
          } else {
            const id = name2.name;
            if (!fnScope.tags.includes(id)) {
              fnScope.tags.push(id);
            }
            node.openingElement.name = toJsxIdOrMemberExpression([
              "_components",
              id
            ]);
            if (node.closingElement) {
              node.closingElement.name = toJsxIdOrMemberExpression([
                "_components",
                id
              ]);
            }
          }
        }
      },
      leave(node) {
        const defaults = [];
        const actual = [];
        const parameters = [];
        const declarations = [];
        if (currentScope && currentScope.node === node) {
          currentScope = currentScope.parent;
        }
        if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") {
          const fn = node;
          const scope = fnStack[fnStack.length - 1];
          let name2;
          for (name2 of scope.tags) {
            defaults.push({
              type: "Property",
              kind: "init",
              key: name(name2) ? { type: "Identifier", name: name2 } : { type: "Literal", value: name2 },
              value: { type: "Literal", value: name2 },
              method: false,
              shorthand: false,
              computed: false
            });
          }
          actual.push(...scope.components);
          for (name2 of scope.objects) {
            if (!actual.includes(name2)) {
              actual.push(name2);
            }
          }
          let key;
          for (key in scope.references) {
            if (own10.call(scope.references, key)) {
              const parts = key.split(".");
              let index2 = 0;
              while (++index2 < parts.length) {
                const partial = parts.slice(0, index2).join(".");
                if (!own10.call(scope.references, partial)) {
                  scope.references[partial] = {
                    node: scope.references[key].node,
                    component: false
                  };
                }
              }
            }
          }
          if (defaults.length > 0 || actual.length > 0) {
            if (providerImportSource) {
              importProvider = true;
              parameters.push({
                type: "CallExpression",
                callee: { type: "Identifier", name: "_provideComponents" },
                arguments: [],
                optional: false
              });
            }
            if (isNamedFunction(scope.node, "MDXContent") || isNamedFunction(scope.node, "_createMdxContent")) {
              parameters.push(toIdOrMemberExpression(["props", "components"]));
            }
            if (defaults.length > 0 || parameters.length > 1) {
              parameters.unshift({
                type: "ObjectExpression",
                properties: defaults
              });
            }
            let componentsInit = parameters.length > 1 ? {
              type: "CallExpression",
              callee: toIdOrMemberExpression(["Object", "assign"]),
              arguments: parameters,
              optional: false
            } : parameters[0].type === "MemberExpression" ? {
              type: "LogicalExpression",
              operator: "||",
              left: parameters[0],
              right: { type: "ObjectExpression", properties: [] }
            } : parameters[0];
            let componentsPattern;
            if (actual.length > 0) {
              componentsPattern = {
                type: "ObjectPattern",
                properties: actual.map((name3) => ({
                  type: "Property",
                  kind: "init",
                  key: {
                    type: "Identifier",
                    name: name3 === "MDXLayout" ? "wrapper" : name3
                  },
                  value: { type: "Identifier", name: name3 },
                  method: false,
                  shorthand: name3 !== "MDXLayout",
                  computed: false
                }))
              };
            }
            if (scope.tags.length > 0) {
              declarations.push({
                type: "VariableDeclarator",
                id: { type: "Identifier", name: "_components" },
                init: componentsInit
              });
              componentsInit = { type: "Identifier", name: "_components" };
            }
            if (componentsPattern) {
              declarations.push({
                type: "VariableDeclarator",
                id: componentsPattern,
                init: componentsInit
              });
            }
            if (fn.body.type !== "BlockStatement") {
              fn.body = {
                type: "BlockStatement",
                body: [{ type: "ReturnStatement", argument: fn.body }]
              };
            }
            const statements = [
              {
                type: "VariableDeclaration",
                kind: "const",
                declarations
              }
            ];
            const references = Object.keys(scope.references).sort();
            let index2 = -1;
            while (++index2 < references.length) {
              const id = references[index2];
              const info = scope.references[id];
              const place = stringifyPosition(positionFromEstree(info.node));
              const parameters2 = [
                { type: "Literal", value: id },
                { type: "Literal", value: info.component }
              ];
              createErrorHelper = true;
              if (development2 && place !== "1:1-1:1") {
                parameters2.push({ type: "Literal", value: place });
              }
              statements.push({
                type: "IfStatement",
                test: {
                  type: "UnaryExpression",
                  operator: "!",
                  prefix: true,
                  argument: toIdOrMemberExpression(id.split("."))
                },
                consequent: {
                  type: "ExpressionStatement",
                  expression: {
                    type: "CallExpression",
                    callee: { type: "Identifier", name: "_missingMdxReference" },
                    arguments: parameters2,
                    optional: false
                  }
                },
                alternate: null
              });
            }
            fn.body.body.unshift(...statements);
          }
          fnStack.pop();
        }
      }
    });
    if (importProvider && providerImportSource) {
      tree.body.unshift(createImportProvider(providerImportSource, outputFormat));
    }
    if (createErrorHelper) {
      const message = [
        { type: "Literal", value: "Expected " },
        {
          type: "ConditionalExpression",
          test: { type: "Identifier", name: "component" },
          consequent: { type: "Literal", value: "component" },
          alternate: { type: "Literal", value: "object" }
        },
        { type: "Literal", value: " `" },
        { type: "Identifier", name: "id" },
        {
          type: "Literal",
          value: "` to be defined: you likely forgot to import, pass, or provide it."
        }
      ];
      const parameters = [
        { type: "Identifier", name: "id" },
        { type: "Identifier", name: "component" }
      ];
      if (development2) {
        message.push({
          type: "ConditionalExpression",
          test: { type: "Identifier", name: "place" },
          consequent: toBinaryAddition([
            { type: "Literal", value: "\nIt\u2019s referenced in your code at `" },
            { type: "Identifier", name: "place" },
            {
              type: "Literal",
              value: (file.path ? "` in `" + file.path : "") + "`"
            }
          ]),
          alternate: { type: "Literal", value: "" }
        });
        parameters.push({ type: "Identifier", name: "place" });
      }
      tree.body.push({
        type: "FunctionDeclaration",
        id: { type: "Identifier", name: "_missingMdxReference" },
        generator: false,
        async: false,
        params: parameters,
        body: {
          type: "BlockStatement",
          body: [
            {
              type: "ThrowStatement",
              argument: {
                type: "NewExpression",
                callee: { type: "Identifier", name: "Error" },
                arguments: [toBinaryAddition(message)]
              }
            }
          ]
        }
      });
    }
  };
}
function createImportProvider(providerImportSource, outputFormat) {
  const specifiers = [
    {
      type: "ImportSpecifier",
      imported: { type: "Identifier", name: "useMDXComponents" },
      local: { type: "Identifier", name: "_provideComponents" }
    }
  ];
  return outputFormat === "function-body" ? {
    type: "VariableDeclaration",
    kind: "const",
    declarations: specifiersToDeclarations(specifiers, toIdOrMemberExpression(["arguments", 0]))
  } : {
    type: "ImportDeclaration",
    specifiers,
    source: { type: "Literal", value: providerImportSource }
  };
}
function isNamedFunction(node, name2) {
  return Boolean(node && "id" in node && node.id && node.id.name === name2);
}
function inScope(scope, id) {
  let currentScope = scope;
  while (currentScope) {
    if (currentScope.declarations.has(id)) {
      return true;
    }
    currentScope = currentScope.parent;
  }
  return false;
}

// node_modules/@mdx-js/mdx/lib/plugin/recma-stringify.js
init_react();
var import_astring = require("astring");
function recmaStringify(options = {}) {
  const { SourceMapGenerator } = options;
  Object.assign(this, { Compiler: compiler2 });
  function compiler2(tree, file) {
    let sourceMap;
    if (SourceMapGenerator) {
      sourceMap = new SourceMapGenerator({ file: file.path || "unknown.mdx" });
    }
    const generator = __spreadProps(__spreadValues({}, import_astring.GENERATOR), {
      JSXAttribute,
      JSXClosingElement,
      JSXClosingFragment,
      JSXElement,
      JSXEmptyExpression,
      JSXExpressionContainer,
      JSXFragment,
      JSXIdentifier,
      JSXMemberExpression,
      JSXNamespacedName,
      JSXOpeningElement,
      JSXOpeningFragment,
      JSXSpreadAttribute,
      JSXText
    });
    const result = (0, import_astring.generate)(tree, {
      generator,
      comments: true,
      sourceMap
    });
    if (sourceMap) {
      file.map = sourceMap.toJSON();
    }
    return result;
  }
}
function JSXAttribute(node, state) {
  this[node.name.type](node.name, state);
  if (node.value !== void 0 && node.value !== null) {
    state.write("=");
    if (node.value.type === "Literal") {
      state.write('"' + encodeJsx(String(node.value.value)).replace(/"/g, "&quot;") + '"', node);
    } else {
      this[node.value.type](node.value, state);
    }
  }
}
function JSXClosingElement(node, state) {
  state.write("</");
  this[node.name.type](node.name, state);
  state.write(">");
}
function JSXClosingFragment(node, state) {
  state.write("</>", node);
}
function JSXElement(node, state) {
  let index2 = -1;
  this[node.openingElement.type](node.openingElement, state);
  if (node.children) {
    while (++index2 < node.children.length) {
      const child = node.children[index2];
      if (child.type === "JSXSpreadChild") {
        throw new Error("JSX spread children are not supported");
      }
      this[child.type](child, state);
    }
  }
  if (node.closingElement) {
    this[node.closingElement.type](node.closingElement, state);
  }
}
function JSXEmptyExpression() {
}
function JSXExpressionContainer(node, state) {
  state.write("{");
  this[node.expression.type](node.expression, state);
  state.write("}");
}
function JSXFragment(node, state) {
  let index2 = -1;
  this[node.openingFragment.type](node.openingFragment, state);
  if (node.children) {
    while (++index2 < node.children.length) {
      const child = node.children[index2];
      if (child.type === "JSXSpreadChild") {
        throw new Error("JSX spread children are not supported");
      }
      this[child.type](child, state);
    }
  }
  this[node.closingFragment.type](node.closingFragment, state);
}
function JSXIdentifier(node, state) {
  state.write(node.name, node);
}
function JSXMemberExpression(node, state) {
  this[node.object.type](node.object, state);
  state.write(".");
  this[node.property.type](node.property, state);
}
function JSXNamespacedName(node, state) {
  this[node.namespace.type](node.namespace, state);
  state.write(":");
  this[node.name.type](node.name, state);
}
function JSXOpeningElement(node, state) {
  let index2 = -1;
  state.write("<");
  this[node.name.type](node.name, state);
  if (node.attributes) {
    while (++index2 < node.attributes.length) {
      state.write(" ");
      this[node.attributes[index2].type](node.attributes[index2], state);
    }
  }
  state.write(node.selfClosing ? " />" : ">");
}
function JSXOpeningFragment(node, state) {
  state.write("<>", node);
}
function JSXSpreadAttribute(node, state) {
  state.write("{");
  this.SpreadElement(node, state);
  state.write("}");
}
function JSXText(node, state) {
  state.write(encodeJsx(node.value).replace(/<|{/g, ($0) => $0 === "<" ? "&lt;" : "&#123;"), node);
}
function encodeJsx(value) {
  return value.replace(/&(?=[#a-z])/gi, "&amp;");
}

// node_modules/@mdx-js/mdx/lib/plugin/rehype-recma.js
init_react();

// node_modules/hast-util-to-estree/index.js
init_react();

// node_modules/comma-separated-tokens/index.js
init_react();
function stringify(values, options) {
  var settings = options || {};
  if (values[values.length - 1] === "") {
    values = values.concat("");
  }
  return values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}

// node_modules/estree-util-attach-comments/index.js
init_react();
var push2 = [].push;
function attachComments(tree, comments) {
  var list3 = (comments || []).concat().sort(compare);
  if (list3.length)
    walk2(tree, { comments: list3, index: 0 });
  return tree;
}
function walk2(node, state) {
  var children = [];
  var comments = [];
  var key;
  var value;
  var index2;
  if (state.index === state.comments.length) {
    return;
  }
  for (key in node) {
    value = node[key];
    if (value && typeof value === "object" && key !== "comments") {
      if (Array.isArray(value)) {
        index2 = -1;
        while (++index2 < value.length) {
          if (value[index2] && typeof value[index2].type === "string") {
            children.push(value[index2]);
          }
        }
      } else if (typeof value.type === "string") {
        children.push(value);
      }
    }
  }
  children.sort(compare);
  push2.apply(comments, slice(state, node, false, { leading: true, trailing: false }));
  index2 = -1;
  while (++index2 < children.length) {
    walk2(children[index2], state);
  }
  push2.apply(comments, slice(state, node, true, {
    leading: false,
    trailing: Boolean(children.length)
  }));
  if (comments.length) {
    node.comments = comments;
  }
}
function slice(state, node, compareEnd, fields) {
  var result = [];
  while (state.comments[state.index] && compare(state.comments[state.index], node, compareEnd) < 1) {
    result.push(Object.assign({}, state.comments[state.index++], fields));
  }
  return result;
}
function compare(left, right, compareEnd) {
  var field = compareEnd ? "end" : "start";
  if (left.range && right.range) {
    return left.range[0] - right.range[compareEnd ? 1 : 0];
  }
  if (left.loc && left.loc.start && right.loc && right.loc[field]) {
    return left.loc.start.line - right.loc[field].line || left.loc.start.column - right.loc[field].column;
  }
  if ("start" in left && field in right) {
    return left.start - right[field];
  }
  return NaN;
}

// node_modules/hast-util-whitespace/index.js
init_react();
function whitespace(thing) {
  var value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}

// node_modules/property-information/index.js
init_react();

// node_modules/property-information/lib/util/merge.js
init_react();

// node_modules/property-information/lib/util/schema.js
init_react();
var Schema = class {
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
};
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;

// node_modules/property-information/lib/util/merge.js
function merge(definitions2, space) {
  const property = {};
  const normal = {};
  let index2 = -1;
  while (++index2 < definitions2.length) {
    Object.assign(property, definitions2[index2].property);
    Object.assign(normal, definitions2[index2].normal);
  }
  return new Schema(property, normal, space);
}

// node_modules/property-information/lib/xlink.js
init_react();

// node_modules/property-information/lib/util/create.js
init_react();

// node_modules/property-information/lib/normalize.js
init_react();
function normalize5(value) {
  return value.toLowerCase();
}

// node_modules/property-information/lib/util/defined-info.js
init_react();

// node_modules/property-information/lib/util/info.js
init_react();
var Info = class {
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
};
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
init_react();
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/property-information/lib/util/defined-info.js
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check = checks[index2];
        mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
      }
    }
  }
};
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

// node_modules/property-information/lib/util/create.js
var own11 = {}.hasOwnProperty;
function create3(definition2) {
  const property = {};
  const normal = {};
  let prop;
  for (prop in definition2.properties) {
    if (own11.call(definition2.properties, prop)) {
      const value = definition2.properties[prop];
      const info = new DefinedInfo(prop, definition2.transform(definition2.attributes || {}, prop), value, definition2.space);
      if (definition2.mustUseProperty && definition2.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize5(prop)] = prop;
      normal[normalize5(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition2.space);
}

// node_modules/property-information/lib/xlink.js
var xlink = create3({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

// node_modules/property-information/lib/xml.js
init_react();
var xml = create3({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});

// node_modules/property-information/lib/xmlns.js
init_react();

// node_modules/property-information/lib/util/case-insensitive-transform.js
init_react();

// node_modules/property-information/lib/util/case-sensitive-transform.js
init_react();
function caseSensitiveTransform(attributes4, attribute) {
  return attribute in attributes4 ? attributes4[attribute] : attribute;
}

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes4, property) {
  return caseSensitiveTransform(attributes4, property.toLowerCase());
}

// node_modules/property-information/lib/xmlns.js
var xmlns = create3({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});

// node_modules/property-information/lib/aria.js
init_react();
var aria = create3({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

// node_modules/property-information/lib/html.js
init_react();
var html2 = create3({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

// node_modules/property-information/lib/svg.js
init_react();
var svg = create3({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

// node_modules/property-information/lib/find.js
init_react();
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
function find(schema, value) {
  const normal = normalize5(value);
  let prop = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/property-information/lib/hast-to-react.js
init_react();
var hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};

// node_modules/property-information/index.js
var html3 = merge([xml, xlink, xmlns, aria, html2], "html");
var svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

// node_modules/space-separated-tokens/index.js
init_react();
function stringify2(values) {
  return values.join(" ").trim();
}

// node_modules/hast-util-to-estree/index.js
var import_style_to_object = __toESM(require("style-to-object"), 1);

// node_modules/zwitch/index.js
init_react();
var own12 = {}.hasOwnProperty;
function zwitch(key, options) {
  var settings = options || {};
  function one3(value) {
    var fn = one3.invalid;
    var handlers2 = one3.handlers;
    if (value && own12.call(value, key)) {
      fn = own12.call(handlers2, value[key]) ? handlers2[value[key]] : one3.unknown;
    }
    if (fn) {
      return fn.apply(this, arguments);
    }
  }
  one3.handlers = settings.handlers || {};
  one3.invalid = settings.invalid;
  one3.unknown = settings.unknown;
  return one3;
}

// node_modules/hast-util-to-estree/index.js
var toReact = hastToReact;
var own13 = {}.hasOwnProperty;
var tableElements = /* @__PURE__ */ new Set([
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td"
]);
function toEstree(tree, options = {}) {
  const context = {
    schema: options.space === "svg" ? svg2 : html3,
    comments: [],
    esm: [],
    handle: zwitch("type", {
      invalid,
      unknown: unknown2,
      handlers: Object.assign({}, {
        comment,
        doctype: ignore2,
        element,
        mdxjsEsm: mdxjsEsm2,
        mdxFlowExpression: mdxExpression2,
        mdxJsxFlowElement: mdxJsxElement,
        mdxJsxTextElement: mdxJsxElement,
        mdxTextExpression: mdxExpression2,
        root: root2,
        text: text4
      }, options.handlers)
    })
  };
  let result = context.handle(tree, context);
  const body = context.esm;
  if (result) {
    if (result.type !== "JSXFragment" && result.type !== "JSXElement") {
      result = create4(tree, {
        type: "JSXFragment",
        openingFragment: { type: "JSXOpeningFragment" },
        closingFragment: { type: "JSXClosingFragment" },
        children: [result]
      });
    }
    body.push(create4(tree, { type: "ExpressionStatement", expression: result }));
  }
  return create4(tree, {
    type: "Program",
    body,
    sourceType: "module",
    comments: context.comments
  });
}
function invalid(value) {
  throw new Error("Cannot handle value `" + value + "`, expected node");
}
function unknown2(node) {
  throw new Error("Cannot handle unknown node `" + node.type + "`");
}
function ignore2() {
}
function comment(node, context) {
  const esnode = inherit(node, { type: "Block", value: node.value });
  context.comments.push(esnode);
  return create4(node, {
    type: "JSXExpressionContainer",
    expression: create4(node, {
      type: "JSXEmptyExpression",
      comments: [Object.assign({}, esnode, { leading: false, trailing: true })]
    })
  });
}
function element(node, context) {
  const parentSchema = context.schema;
  let schema = parentSchema;
  const props = node.properties || {};
  if (parentSchema.space === "html" && node.tagName.toLowerCase() === "svg") {
    schema = svg2;
    context.schema = schema;
  }
  const children = all3(node, context);
  const attributes4 = [];
  let prop;
  for (prop in props) {
    if (own13.call(props, prop)) {
      let value = props[prop];
      const info = find(schema, prop);
      let attributeValue;
      if (value === void 0 || value === null || typeof value === "number" && Number.isNaN(value) || value === false || !value && info.boolean) {
        continue;
      }
      prop = info.space ? toReact[info.property] || info.property : info.attribute;
      if (Array.isArray(value)) {
        value = info.commaSeparated ? stringify(value) : stringify2(value);
      }
      if (prop === "style") {
        const styleValue = typeof value === "string" ? parseStyle(value, node.tagName) : value;
        const cssProperties = [];
        let cssProp;
        for (cssProp in styleValue) {
          if (own13.call(styleValue, cssProp)) {
            cssProperties.push({
              type: "Property",
              method: false,
              shorthand: false,
              computed: false,
              key: { type: "Identifier", name: cssProp },
              value: { type: "Literal", value: String(styleValue[cssProp]) },
              kind: "init"
            });
          }
        }
        attributeValue = {
          type: "JSXExpressionContainer",
          expression: { type: "ObjectExpression", properties: cssProperties }
        };
      } else if (value === true) {
        attributeValue = null;
      } else {
        attributeValue = { type: "Literal", value: String(value) };
      }
      if (jsxIdentifierName(prop)) {
        attributes4.push({
          type: "JSXAttribute",
          name: { type: "JSXIdentifier", name: prop },
          value: attributeValue
        });
      } else {
        attributes4.push({
          type: "JSXSpreadAttribute",
          argument: {
            type: "ObjectExpression",
            properties: [
              {
                type: "Property",
                method: false,
                shorthand: false,
                computed: false,
                key: { type: "Literal", value: String(prop) },
                value: attributeValue || { type: "Literal", value: true },
                kind: "init"
              }
            ]
          }
        });
      }
    }
  }
  context.schema = parentSchema;
  return inherit(node, {
    type: "JSXElement",
    openingElement: {
      type: "JSXOpeningElement",
      attributes: attributes4,
      name: createJsxName(node.tagName),
      selfClosing: children.length === 0
    },
    closingElement: children.length > 0 ? { type: "JSXClosingElement", name: createJsxName(node.tagName) } : null,
    children
  });
}
function mdxjsEsm2(node, context) {
  const estree = node.data && node.data.estree;
  const comments = estree && estree.comments || [];
  if (estree) {
    context.comments.push(...comments);
    attachComments(estree, comments);
    context.esm.push(...estree.body);
  }
}
function mdxExpression2(node, context) {
  const estree = node.data && node.data.estree;
  const comments = estree && estree.comments || [];
  let expression;
  if (estree) {
    context.comments.push(...comments);
    attachComments(estree, estree.comments);
    expression = estree.body[0] && estree.body[0].type === "ExpressionStatement" && estree.body[0].expression || void 0;
  }
  return inherit(node, {
    type: "JSXExpressionContainer",
    expression: expression || create4(node, { type: "JSXEmptyExpression" })
  });
}
function mdxJsxElement(node, context) {
  const parentSchema = context.schema;
  let schema = parentSchema;
  const attrs = node.attributes || [];
  let index2 = -1;
  if (node.name && parentSchema.space === "html" && node.name.toLowerCase() === "svg") {
    schema = svg2;
    context.schema = schema;
  }
  const children = all3(node, context);
  const attributes4 = [];
  while (++index2 < attrs.length) {
    const attr = attrs[index2];
    const value = attr.value;
    let attributeValue;
    if (attr.type === "mdxJsxAttribute") {
      if (value === void 0 || value === null) {
        attributeValue = null;
      } else if (typeof value === "object") {
        const estree = value.data && value.data.estree;
        const comments = estree && estree.comments || [];
        let expression;
        if (estree) {
          context.comments.push(...comments);
          attachComments(estree, estree.comments);
          expression = estree.body[0] && estree.body[0].type === "ExpressionStatement" && estree.body[0].expression || void 0;
        }
        attributeValue = inherit(value, {
          type: "JSXExpressionContainer",
          expression: expression || { type: "JSXEmptyExpression" }
        });
      } else {
        attributeValue = { type: "Literal", value: String(value) };
      }
      attributes4.push(inherit(attr, {
        type: "JSXAttribute",
        name: createJsxName(attr.name, true),
        value: attributeValue
      }));
    } else {
      const estree = attr.data && attr.data.estree;
      const comments = estree && estree.comments || [];
      let argumentValue;
      if (estree) {
        context.comments.push(...comments);
        attachComments(estree, estree.comments);
        argumentValue = estree.body[0] && estree.body[0].type === "ExpressionStatement" && estree.body[0].expression && estree.body[0].expression.type === "ObjectExpression" && estree.body[0].expression.properties && estree.body[0].expression.properties[0] && estree.body[0].expression.properties[0].type === "SpreadElement" && estree.body[0].expression.properties[0].argument || void 0;
      }
      attributes4.push(inherit(attr, {
        type: "JSXSpreadAttribute",
        argument: argumentValue || { type: "ObjectExpression", properties: [] }
      }));
    }
  }
  context.schema = parentSchema;
  return inherit(node, node.name ? {
    type: "JSXElement",
    openingElement: {
      type: "JSXOpeningElement",
      attributes: attributes4,
      name: createJsxName(node.name),
      selfClosing: children.length === 0
    },
    closingElement: children.length > 0 ? { type: "JSXClosingElement", name: createJsxName(node.name) } : null,
    children
  } : {
    type: "JSXFragment",
    openingFragment: { type: "JSXOpeningFragment" },
    closingFragment: { type: "JSXClosingFragment" },
    children
  });
}
function root2(node, context) {
  const children = all3(node, context);
  const cleanChildren = [];
  let index2 = -1;
  let queue;
  while (++index2 < children.length) {
    const child = children[index2];
    if (child.type === "JSXExpressionContainer" && child.expression.type === "Literal" && whitespace(child.expression.value)) {
      if (queue)
        queue.push(child);
    } else {
      if (queue)
        cleanChildren.push(...queue);
      cleanChildren.push(child);
      queue = [];
    }
  }
  return inherit(node, {
    type: "JSXFragment",
    openingFragment: { type: "JSXOpeningFragment" },
    closingFragment: { type: "JSXClosingFragment" },
    children: cleanChildren
  });
}
function text4(node) {
  const value = String(node.value || "");
  if (!value)
    return;
  return create4(node, {
    type: "JSXExpressionContainer",
    expression: inherit(node, { type: "Literal", value })
  });
}
function all3(parent, context) {
  const children = parent.children || [];
  let index2 = -1;
  const results = [];
  const ignoreLineBreak = context.schema.space === "html" && parent.type === "element" && tableElements.has(parent.tagName.toLowerCase());
  while (++index2 < children.length) {
    const child = children[index2];
    if (ignoreLineBreak && child.type === "text" && child.value === "\n") {
      continue;
    }
    const result = context.handle(child, context);
    if (Array.isArray(result)) {
      results.push(...result);
    } else if (result) {
      results.push(result);
    }
  }
  return results;
}
function inherit(hast, esnode) {
  const left = hast.data;
  let right;
  let key;
  create4(hast, esnode);
  if (left) {
    for (key in left) {
      if (own13.call(left, key) && key !== "estree") {
        if (!right)
          right = {};
        right[key] = left[key];
      }
    }
    if (right) {
      esnode.data = right;
    }
  }
  return esnode;
}
function create4(hast, esnode) {
  const p = position2(hast);
  if (p.start.line && p.start.offset !== void 0 && p.end.offset !== void 0) {
    esnode.start = p.start.offset;
    esnode.end = p.end.offset;
    esnode.loc = {
      start: { line: p.start.line, column: p.start.column - 1 },
      end: { line: p.end.line, column: p.end.column - 1 }
    };
    esnode.range = [p.start.offset, p.end.offset];
  }
  return esnode;
}
var createJsxName = function(name2, attribute) {
  if (!attribute && name2.includes(".")) {
    const parts = name2.split(".");
    let part = parts.shift();
    let node = { type: "JSXIdentifier", name: part };
    while (part = parts.shift()) {
      node = {
        type: "JSXMemberExpression",
        object: node,
        property: { type: "JSXIdentifier", name: part }
      };
    }
    return node;
  }
  if (name2.includes(":")) {
    const parts = name2.split(":");
    return {
      type: "JSXNamespacedName",
      namespace: { type: "JSXIdentifier", name: parts[0] },
      name: { type: "JSXIdentifier", name: parts[1] }
    };
  }
  return { type: "JSXIdentifier", name: name2 };
};
function parseStyle(value, tagName) {
  const result = {};
  try {
    (0, import_style_to_object.default)(value, iterator);
  } catch (error) {
    const exception = error;
    exception.message = tagName + "[style]" + exception.message.slice("undefined".length);
    throw error;
  }
  return result;
  function iterator(name2, value2) {
    if (name2.slice(0, 4) === "-ms-")
      name2 = "ms-" + name2.slice(4);
    result[name2.replace(/-([a-z])/g, styleReplacer)] = value2;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function jsxIdentifierName(name2) {
  let index2 = -1;
  while (++index2 < name2.length) {
    if (!(index2 ? cont3 : start2)(name2.charCodeAt(index2)))
      return false;
  }
  return index2 > 0;
  function cont3(code2) {
    return cont2(code2) || code2 === 45;
  }
}

// node_modules/@mdx-js/mdx/lib/plugin/rehype-recma.js
function rehypeRecma() {
  return (tree) => toEstree(tree);
}

// node_modules/@mdx-js/mdx/lib/plugin/rehype-remove-raw.js
init_react();
function rehypeRemoveRaw() {
  return (tree) => {
    visit2(tree, "raw", (_, index2, parent) => {
      if (parent && typeof index2 === "number") {
        parent.children.splice(index2, 1);
        return index2;
      }
    });
  };
}

// node_modules/@mdx-js/mdx/lib/plugin/remark-mark-and-unravel.js
init_react();
function remarkMarkAndUnravel() {
  return (tree) => {
    visit2(tree, (node, index2, parent_) => {
      const parent = parent_;
      let offset = -1;
      let all4 = true;
      let oneOrMore;
      if (parent && typeof index2 === "number" && node.type === "paragraph") {
        const children = node.children;
        while (++offset < children.length) {
          const child = children[offset];
          if (child.type === "mdxJsxTextElement" || child.type === "mdxTextExpression") {
            oneOrMore = true;
          } else if (child.type === "text" && /^[\t\r\n ]+$/.test(String(child.value))) {
          } else {
            all4 = false;
            break;
          }
        }
        if (all4 && oneOrMore) {
          offset = -1;
          while (++offset < children.length) {
            const child = children[offset];
            if (child.type === "mdxJsxTextElement") {
              child.type = "mdxJsxFlowElement";
            }
            if (child.type === "mdxTextExpression") {
              child.type = "mdxFlowExpression";
            }
          }
          parent.children.splice(index2, 1, ...children);
          return index2;
        }
      }
      if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
        const data = node.data || (node.data = {});
        data._mdxExplicitJsx = true;
      }
    });
  };
}

// node_modules/@mdx-js/mdx/lib/node-types.js
init_react();
var nodeTypes = [
  "mdxFlowExpression",
  "mdxJsxFlowElement",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "mdxjsEsm"
];

// node_modules/@mdx-js/mdx/lib/condition.js
init_react();
var import_process2 = __toESM(require("process"), 1);
var development = import_process2.default.env.NODE_ENV === "development";

// node_modules/@mdx-js/mdx/lib/core.js
var removedOptions = [
  "filepath",
  "compilers",
  "hastPlugins",
  "mdPlugins",
  "skipExport",
  "wrapExport"
];
function createProcessor(options = {}) {
  const _a = options, {
    development: development2 = development,
    jsx,
    format,
    outputFormat,
    providerImportSource,
    recmaPlugins,
    rehypePlugins,
    remarkPlugins,
    SourceMapGenerator
  } = _a, rest = __objRest(_a, [
    "development",
    "jsx",
    "format",
    "outputFormat",
    "providerImportSource",
    "recmaPlugins",
    "rehypePlugins",
    "remarkPlugins",
    "SourceMapGenerator"
  ]);
  let index2 = -1;
  while (++index2 < removedOptions.length) {
    const key = removedOptions[index2];
    if (key in options) {
      throw new Error("`options." + key + "` is no longer supported. Please see <https://mdxjs.com/migrating/v2/> for more information");
    }
  }
  if (format === "detect") {
    throw new Error("Incorrect `format: 'detect'`: `createProcessor` can support either `md` or `mdx`; it does not support detecting the format");
  }
  const pipeline = unified().use(remark_parse_default);
  if (format !== "md") {
    pipeline.use(remarkMdx);
  }
  pipeline.use(remarkMarkAndUnravel).use(remarkPlugins || []).use(lib_default, { allowDangerousHtml: true, passThrough: nodeTypes }).use(rehypePlugins || []);
  if (format === "md") {
    pipeline.use(rehypeRemoveRaw);
  }
  pipeline.use(rehypeRecma).use(recmaDocument, __spreadProps(__spreadValues({}, rest), { outputFormat })).use(recmaJsxRewrite, { development: development2, providerImportSource, outputFormat });
  if (!jsx) {
    pipeline.use(recmaJsxBuild, { outputFormat });
  }
  pipeline.use(recmaStringify, { SourceMapGenerator }).use(recmaPlugins || []);
  return pipeline;
}

// node_modules/@mdx-js/mdx/lib/compile.js
init_react();

// node_modules/@mdx-js/mdx/lib/util/resolve-file-and-options.js
init_react();

// node_modules/@mdx-js/mdx/lib/util/extnames.js
init_react();
var import_markdown_extensions = __toESM(require("markdown-extensions"), 1);
var md = import_markdown_extensions.default.map((d) => "." + d);

// node_modules/@mdx-js/mdx/lib/util/resolve-file-and-options.js
function resolveFileAndOptions(vfileCompatible, options) {
  const file = looksLikeAVFile2(vfileCompatible) ? vfileCompatible : new VFile(vfileCompatible);
  const _a = options || {}, { format } = _a, rest = __objRest(_a, ["format"]);
  return {
    file,
    options: __spreadValues({
      format: format === "md" || format === "mdx" ? format : file.extname && (rest.mdExtensions || md).includes(file.extname) ? "md" : "mdx"
    }, rest)
  };
}
function looksLikeAVFile2(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}

// node_modules/@mdx-js/mdx/lib/compile.js
function compile(vfileCompatible, compileOptions) {
  const { file, options } = resolveFileAndOptions(vfileCompatible, compileOptions);
  return createProcessor(options).process(file);
}

// node_modules/@mdx-js/mdx/lib/run.js
init_react();
var AsyncFunction = Object.getPrototypeOf(run).constructor;
async function run(file, options) {
  return new AsyncFunction(String(file))(options);
}

// route:/root/projects/remix-starter/app/routes/blog/$blogPostId.tsx
var import_react9 = __toESM(require("react"));
var runtime = __toESM(require("react/jsx-runtime.js"));
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
  }), ({ className, style: style2, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(import_material6.Paper, {
    className,
    sx: __spreadProps(__spreadValues({}, style2), {
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
  const code2 = String(await compile(blogPost.markdown, {
    outputFormat: "function-body"
  }));
  return __spreadProps(__spreadValues({}, blogPost), { code: code2, isAuthor });
};
function PostSlug() {
  const { isAuthor, code: code2 } = (0, import_remix9.useLoaderData)();
  const [mdxModule, setMdxModule] = (0, import_react9.useState)(null);
  const Content = mdxModule ? mdxModule.default : null;
  (0, import_react9.useEffect)(() => {
    (async () => {
      setMdxModule(await run(code2, runtime));
    })();
  }, [code2]);
  return /* @__PURE__ */ import_react9.default.createElement(import_system3.Box, {
    sx: {
      margin: "0 auto",
      maxWidth: "900px",
      position: "relative",
      padding: 3
    }
  }, /* @__PURE__ */ import_react9.default.createElement(import_material7.Fab, {
    color: "secondary",
    "aria-label": "edit",
    component: import_remix9.Link,
    to: "edit",
    sx: { position: "absolute", top: 20, right: 20 }
  }, /* @__PURE__ */ import_react9.default.createElement(import_Edit.default, null)), Content ? /* @__PURE__ */ import_react9.default.createElement(Content, {
    components: {
      h1: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h1",
        sx: { marginBottom: 3 }
      }, props)),
      h2: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h2",
        sx: { marginBottom: 3 }
      }, props)),
      h3: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h3",
        sx: { marginBottom: 3 }
      }, props)),
      h4: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h4",
        sx: { marginBottom: 3 }
      }, props)),
      h5: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h5",
        sx: { marginBottom: 3 }
      }, props)),
      h6: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h6",
        sx: { marginBottom: 3 }
      }, props)),
      p: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "body",
        component: "p"
      }, props)),
      blockquote: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Typography, __spreadValues({
        variant: "h6",
        component: import_material7.Paper,
        sx: {
          padding: 2,
          margin: 2,
          borderLeft: ({ palette }) => `2px solid${palette.primary.main}`
        }
      }, props)),
      pre: (props) => /* @__PURE__ */ import_react9.default.createElement("div", __spreadValues({}, props)),
      code: (props) => /* @__PURE__ */ import_react9.default.createElement(CodeBlock, __spreadValues({}, props)),
      a: (props) => /* @__PURE__ */ import_react9.default.createElement(import_material7.Link, __spreadValues({}, props)),
      Planet: () => "Neptune"
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
var React5 = __toESM(require("react"));
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
  return /* @__PURE__ */ React5.createElement(AppPaper, {
    sx: { padding: 0 }
  }, /* @__PURE__ */ React5.createElement(import_Card.default, {
    sx: { borderRadius: "10px", overflow: "hidden" }
  }, /* @__PURE__ */ React5.createElement(import_material9.CardActionArea, {
    component: import_remix11.Link,
    to: url
  }, /* @__PURE__ */ React5.createElement(import_CardMedia.default, {
    component: "img",
    height: "140",
    image: imageUrl,
    alt: imageAlt
  }), /* @__PURE__ */ React5.createElement(import_CardContent.default, null, /* @__PURE__ */ React5.createElement(import_Typography2.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, title), /* @__PURE__ */ React5.createElement(import_Typography2.default, {
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
  const point3 = Number(form.get("point"));
  const timestamp = Number(form.get("timestamp"));
  if (!point3 || !timestamp) {
    throw new Response("Could not add this data point. Please try again.", {
      status: 404
    });
  }
  return await addDataPoint({
    userId,
    point: point3,
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
  }, dataPoints.length ? dataPoints.sort((a, b) => a.timestamp - b.timestamp).map(({ point: point3 }, i) => /* @__PURE__ */ React.createElement(import_Box3.default, {
    component: import_Paper3.default,
    key: i,
    sx: {
      height: `${point3 * 10}px`,
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
var assets_manifest_default = { "version": "42b39c64", "entry": { "module": "/build/entry.client-Q7WHO6YL.js", "imports": ["/build/_shared/chunk-CP5W6ZDL.js", "/build/_shared/chunk-DGD6UDKQ.js", "/build/_shared/chunk-WEFTOQRC.js", "/build/_shared/chunk-TZCUF7PZ.js", "/build/_shared/chunk-TIWKKQLO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6TOYDRSH.js", "imports": ["/build/_shared/chunk-FCY7IAOX.js", "/build/_shared/chunk-FQOEWSAP.js", "/build/_shared/chunk-LEK5A4EC.js", "/build/_shared/chunk-GKJYF7TX.js", "/build/_shared/chunk-CL3IBD5L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-CUDWEPVM.js", "imports": ["/build/_shared/chunk-NLLYJVJM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-OMRFYCPB.js", "imports": ["/build/_shared/chunk-7EW7RH2S.js", "/build/_shared/chunk-NLLYJVJM.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-JY4VFOFF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-NV6E3VYA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-LOF4W7VW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-373WBZED.js", "imports": ["/build/_shared/chunk-NLLYJVJM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-334JKNEX.js", "imports": ["/build/_shared/chunk-7EW7RH2S.js", "/build/_shared/chunk-NLLYJVJM.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-YG22XHH6.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EXGBAQ46.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-A54KJPTW.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-ZKXMCSWH.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-SLAK5XUM.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-42B39C64.js" };

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
  mode: "production"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
