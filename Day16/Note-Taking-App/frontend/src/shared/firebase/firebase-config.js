// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhOYh7X8t2-Ueaj4H1sg_TkjUp4Fh96QQ",
  authDomain: "note-app-3c97b.firebaseapp.com",
  projectId: "note-app-3c97b",
  storageBucket: "note-app-3c97b.appspot.com",
  messagingSenderId: "1052046467816",
  appId: "1:1052046467816:web:fcdd684ee7fd4077655f5d",
  measurementId: "G-VQZ8J516L1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
