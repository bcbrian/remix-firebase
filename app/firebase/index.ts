// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/compat/app";
// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA34ZWGXJfZlR6u8zsfK5nbsHpigr_aM58",
  authDomain: "codesagas.firebaseapp.com",
  projectId: "codesagas",
  storageBucket: "codesagas.appspot.com",
  messagingSenderId: "434743911554",
  appId: "1:434743911554:web:4c4b74f039bb5f2a98809b",
  measurementId: "G-RFN47JK38N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };

/**
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA34ZWGXJfZlR6u8zsfK5nbsHpigr_aM58",
  authDomain: "codesagas.firebaseapp.com",
  projectId: "codesagas",
  storageBucket: "codesagas.appspot.com",
  messagingSenderId: "434743911554",
  appId: "1:434743911554:web:4c4b74f039bb5f2a98809b",
  measurementId: "G-RFN47JK38N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */