// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJN8W3YkxIT0CcmpFvx6XkQ2dUnbuBmhk",
  authDomain: "learningwithpulsezest.firebaseapp.com",
  projectId: "learningwithpulsezest",
  storageBucket: "learningwithpulsezest.firebasestorage.app",
  messagingSenderId: "622267976916",
  appId: "1:622267976916:web:4b7f3b9823762a7c1c3f41",
  measurementId: "G-WR1RK8GQ38"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {auth, analytics, db}