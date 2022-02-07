import { initializeApp, cert, getApps, App } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let app: App, auth: Auth, db: Firestore;
if (!getApps().length) {
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
