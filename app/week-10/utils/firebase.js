// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy_tu_MokJhMkqyo4cD9w3wQSNpzjjWUI",
  authDomain: "cprg306-assignments-4a7a0.firebaseapp.com",
  projectId: "cprg306-assignments-4a7a0",
  storageBucket: "cprg306-assignments-4a7a0.firebasestorage.app",
  messagingSenderId: "1084475918437",
  appId: "1:1084475918437:web:16150cff175453124fde8c"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
