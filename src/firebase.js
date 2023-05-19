// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB58oV0bfWQPhlLsT5Za10Hv4ixHuRmUks",
  authDomain: "contact-form-data-4a590.firebaseapp.com",
  databaseURL: "https://contact-form-data-4a590-default-rtdb.firebaseio.com",
  projectId: "contact-form-data-4a590",
  storageBucket: "contact-form-data-4a590.appspot.com",
  messagingSenderId: "331823314168",
  appId: "1:331823314168:web:af28ff2cd89f1aad41f70d",
  measurementId: "G-ZTHZPFNKF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage =getStorage(app)
export  {app,storage}