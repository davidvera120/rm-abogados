
// import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  getAuth
} from "firebase/auth";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB161wkS2dLdC2suHlfRAFOda5wZx1Bg4A",
  authDomain: "rm-abogados.firebaseapp.com",
  projectId: "rm-abogados",
  storageBucket: "rm-abogados.appspot.com",
  messagingSenderId: "178902064970",
  appId: "1:178902064970:web:d84f3ad242f85471882bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);