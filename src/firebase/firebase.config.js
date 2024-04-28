// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIEsm8CUEqtoiQ0k4CzSvt5_7zV6xPvU",
  authDomain: "book-inventory-b75fe.firebaseapp.com",
  projectId: "book-inventory-b75fe",
  storageBucket: "book-inventory-b75fe.appspot.com",
  messagingSenderId: "800257054628",
  appId: "1:800257054628:web:99c629e2d02729b7825331",
  measurementId: "G-9V7VV2Y6RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);