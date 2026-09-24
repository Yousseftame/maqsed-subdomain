import { type FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { type Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

function assertFirebaseConfig() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error(
      "Missing Firebase env vars. Add NEXT_PUBLIC_FIREBASE_* in Vercel Project Settings → Environment Variables (or .env.local locally), then redeploy."
    );
  }
}

export function getFirebaseApp() {
  if (app) return app;
  assertFirebaseConfig();
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return app;
}

export function getDb() {
  if (db) return db;
  db = getFirestore(getFirebaseApp());
  return db;
}
