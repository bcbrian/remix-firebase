import { initializeApp, cert, getApps, App } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let app: App, auth: Auth, db: Firestore;
if (!getApps().length) {
//  if(process.env.NODE_ENV === "development") {
//    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
//    process.env.FIREBASE_AUTH_EMULATOR_HOST="localhost:9099";
//  }
  console.log(">>>",process.env.FIREBASE_PROJECT_ID);
  console.log(">>>",process.env.FIREBASE_CLIENT_EMAIL);
  console.log(">>>",process.env.FIREBASE_PRIVATE_KEY);
  console.log("\n\n\n");
  const encoded = process.env.FIREBASE_PRIVATE_KEY || "";
  // const encoded = Buffer.from(process.env.FIREBASE_PRIVATE_KEY || "", "utf8").toString("base64");
  console.log("encoded >>>",encoded);
  console.log("\n\n\n");
  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  console.log("decoded >>>",decoded);
  console.log("\n\n\n");
  app = initializeApp({
    credential: cert({
      privateKey: decoded,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
  auth = getAuth();
  db = getFirestore();
}

export { app, auth, getAuth, db, getFirestore };
