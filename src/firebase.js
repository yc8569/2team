// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcWbMppp4PTRjjY2xjyGxWwwX3Bv-bkPw",
  authDomain: "hyexjun-firebase.firebaseapp.com",
  databaseURL: "https://hyexjun-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hyexjun-firebase",
  storageBucket: "hyexjun-firebase.appspot.com",
  messagingSenderId: "59968040083",
  appId: "1:59968040083:web:ab31f23ec900e878227166",
  measurementId: "G-X8EZ5HW10S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);