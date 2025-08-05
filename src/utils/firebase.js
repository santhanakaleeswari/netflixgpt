// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzwa-8HRszb7Ey1_jBHFzxY7oQDII-Kv8",
  authDomain: "netflixgpt-9288d.firebaseapp.com",
  projectId: "netflixgpt-9288d",
  storageBucket: "netflixgpt-9288d.firebasestorage.app",
  messagingSenderId: "685986607715",
  appId: "1:685986607715:web:c1a0b691f44b3c0b837e56",
  measurementId: "G-HJDN9D6L04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
