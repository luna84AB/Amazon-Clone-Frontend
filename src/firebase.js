// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDGhfopHq9J5YIBtmdoKs6cO6XsRc70d4Q",
  authDomain: "clone-frontend-d0058.firebaseapp.com",
  projectId: "clone-frontend-d0058",
  storageBucket: "clone-frontend-d0058.appspot.com",
  messagingSenderId: "299988244883",
  appId: "1:299988244883:web:a68a843350ea1cd01ab066",
  measurementId: "G-L9YKW4S60X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db= app.firestore();
export {auth, db};