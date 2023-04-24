// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHW2_3llvWKO8E5rn4G4H-zbeJIqk2emE",
  authDomain: "auth-fb-conext-tailwind.firebaseapp.com",
  projectId: "auth-fb-conext-tailwind",
  storageBucket: "auth-fb-conext-tailwind.appspot.com",
  messagingSenderId: "542392377482",
  appId: "1:542392377482:web:112d88a512ab143b8b0d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;