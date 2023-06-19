import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJ4K0b7csRddULixYyJUOEKrO8Uga-VQU",
  authDomain: "qc-dojo.firebaseapp.com",
  projectId: "qc-dojo",
  storageBucket: "qc-dojo.appspot.com",
  messagingSenderId: "43665604097",
  appId: "1:43665604097:web:a9b7ff7ca84f4eba1c8a00"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
  }