// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
import "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-a41a0.firebaseapp.com",
  projectId: "twitter-v4-a41a0",
  storageBucket: "twitter-v4-a41a0.appspot.com",
  messagingSenderId: "225817112124",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-H2LM0TSHWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
//const analytics = getAnalytics(app);

export { db, storage, app };
