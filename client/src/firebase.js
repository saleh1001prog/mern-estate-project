// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-6d1fa.firebaseapp.com",
  projectId: "mern-estate-6d1fa",
  storageBucket: "mern-estate-6d1fa.appspot.com",
  messagingSenderId: "1058473514146",
  appId: "1:1058473514146:web:2ec277a227927d702333fb"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);