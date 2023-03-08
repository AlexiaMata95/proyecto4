// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmEIUg705onuYDZH8jolbzHzI06FWaNF0",
  authDomain: "reservaciones-43718.firebaseapp.com",
  projectId: "reservaciones-43718",
  storageBucket: "reservaciones-43718.appspot.com",
  messagingSenderId: "153224783910",
  appId: "1:153224783910:web:faecab103723723005dee7",
  measurementId: "G-ERVNK92CC7"
};

// Initialize Firebase
const firebaseApp=initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export { db }