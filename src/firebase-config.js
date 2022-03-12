// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN4S0gWaRssvpb04f9eQdNrmZkGqhBdaM",
  authDomain: "blogproject-a4c42.firebaseapp.com",
  databaseURL: "https://blogproject-a4c42-default-rtdb.firebaseio.com",
  projectId: "blogproject-a4c42",
  storageBucket: "blogproject-a4c42.appspot.com",
  messagingSenderId: "1084284481947",
  appId: "1:1084284481947:web:2b74cbddea0a19ab44b13e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const authentication = getAuth(app);