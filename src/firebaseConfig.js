// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvIBVGe4k8otLjyPTTKjCKkOLzTvz7zFQ",
  authDomain: "chat-test-5dc1b.firebaseapp.com",
  projectId: "chat-test-5dc1b",
  storageBucket: "chat-test-5dc1b.appspot.com",
  messagingSenderId: "1019713260755",
  appId: "1:1019713260755:web:5b8e0de3afdaa3bb4ad826",
  measurementId: "G-XMMP77G6Q2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
