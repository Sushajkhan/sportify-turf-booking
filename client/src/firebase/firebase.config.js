// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpdCY3dVc0e0ZL-nctWsCYVaN3nRp2SHY",
  authDomain: "sportify-aa73b.firebaseapp.com",
  projectId: "sportify-aa73b",
  storageBucket: "sportify-aa73b.appspot.com",
  messagingSenderId: "612318439998",
  appId: "1:612318439998:web:e3e4ef7f2fac3130597f6f",
  measurementId: "G-GR8G8W3P9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
