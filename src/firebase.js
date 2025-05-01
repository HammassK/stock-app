import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsImJqHHSL_kHO6UDWnU0fQcJgB45UTEU",
  authDomain: "stock-app-785ae.firebaseapp.com",
  projectId: "stock-app-785ae",
  storageBucket: "stock-app-785ae.appspot.com",
  messagingSenderId: "144695725052",
  appId: "1:144695725052:web:5baf009e9e228c8a868079",
  measurementId: "G-42XEM63CMH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
