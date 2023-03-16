import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBgMXm8LTnPwNytohXSPR1L8D_6x2c80Hw",
//   authDomain: "login-register-app-8ee6e.firebaseapp.com",
//   projectId: "login-register-app-8ee6e",
//   storageBucket: "login-register-app-8ee6e.appspot.com",
//   messagingSenderId: "669235392594",
//   appId: "1:669235392594:web:5d5fbc5e2d6504b4266f8b",
// };
const firebaseConfig = {

  apiKey: "AIzaSyB9pqQnzCGc70d9035uPreZJNduPLpcH-s",

  authDomain: "my-project-48355.firebaseapp.com",

  projectId: "my-project-48355",

  storageBucket: "my-project-48355.appspot.com",

  messagingSenderId: "154405224888",

  appId: "1:154405224888:web:3971b1a45604b19e62cf4d"

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
