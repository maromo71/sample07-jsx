// lib/firebase.js
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCQBjrtv3Grb1Yf18eiw6j4MoI0gx1T3EI",
    authDomain: "sample07-e4a52.firebaseapp.com",
    projectId: "sample07-e4a52",
    storageBucket: "sample07-e4a52.firebasestorage.app",
    messagingSenderId: "385365509462",
    appId: "1:385365509462:web:1ca60cd46139c6d80802f7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
