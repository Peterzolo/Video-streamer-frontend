// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZyPi9t0_jyOtEXQEWbXKDpPHE0BYvP8I",
  authDomain: "video-share-c2d0a.firebaseapp.com",
  projectId: "video-share-c2d0a",
  storageBucket: "video-share-c2d0a.appspot.com",
  messagingSenderId: "37739911062",
  appId: "1:37739911062:web:8994ddd94ece1f5a7a6fb7",
  measurementId: "G-2TJWM238P5",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

