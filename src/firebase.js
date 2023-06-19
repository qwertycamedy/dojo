import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ4K0b7csRddULixYyJUOEKrO8Uga-VQU",
  authDomain: "qc-dojo.firebaseapp.com",
  projectId: "qc-dojo",
  storageBucket: "qc-dojo.appspot.com",
  messagingSenderId: "43665604097",
  appId: "1:43665604097:web:a9b7ff7ca84f4eba1c8a00",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
};
