// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJXHt8j5ooaWJSYNkxRgiiBlLzyWlxeto",
  authDomain: "mern-hotel-booking-app-bd6fd.firebaseapp.com",
  projectId: "mern-hotel-booking-app-bd6fd",
  storageBucket: "mern-hotel-booking-app-bd6fd.appspot.com",
  messagingSenderId: "237481907938",
  appId: "1:237481907938:web:10599741b61a441133f0bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;