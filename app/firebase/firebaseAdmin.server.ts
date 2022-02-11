import { initializeApp, cert, getApps, App } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let app: App, auth: Auth, db: Firestore;
if (!getApps().length) {
  if(process.env.NODE_ENV === "development") {
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
    process.env.FIREBASE_AUTH_EMULATOR_HOST="localhost:9099";
  }
  console.log(">>>",process.env.FIREBASE_PROJECT_ID);
  console.log(">>>",process.env.FIREBASE_CLIENT_EMAIL);
  console.log(">>>",process.env.FIREBASE_PRIVATE_KEY);
  app = initializeApp({
    credential: cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
  auth = getAuth();
  db = getFirestore();
}

export { app, auth, getAuth, db, getFirestore };
