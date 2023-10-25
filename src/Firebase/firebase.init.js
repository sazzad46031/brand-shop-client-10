// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgIAvpkihaDuGr4n-EeIPwzFqApkJx1Ps",
  authDomain: "brand-shop-ddf08.firebaseapp.com",
  projectId: "brand-shop-ddf08",
  storageBucket: "brand-shop-ddf08.appspot.com",
  messagingSenderId: "376847502042",
  appId: "1:376847502042:web:364f154e38835a0b5233e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;