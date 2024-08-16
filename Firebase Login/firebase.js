// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,onAuthStateChanged , signOut ,sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdcYvY5JpAmzRGUgMwJFHuL6e7txAReBE",
    authDomain: "test-practice-1c689.firebaseapp.com",
    projectId: "test-practice-1c689",
    storageBucket: "test-practice-1c689.appspot.com",
    messagingSenderId: "20205635991",
    appId: "1:20205635991:web:bfd00e984b60f5541a5cd2",
    measurementId: "G-GTNSE5RBQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,onAuthStateChanged , signOut ,sendPasswordResetEmail  };

