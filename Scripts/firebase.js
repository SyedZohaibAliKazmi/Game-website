// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js"; // Analysis kay liya ha ya

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1VURdjYWhON-YdOyvMuPXEJstfoaC4NA",
  authDomain: "form-c938e.firebaseapp.com",
  projectId: "form-c938e",
  storageBucket: "form-c938e.appspot.com",
  messagingSenderId: "355709285159",
  appId: "1:355709285159:web:ee80c8ab3a7f3c12c36f02",
  measurementId: "G-WF5DNVCWBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
