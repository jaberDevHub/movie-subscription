import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCnsXPqcQwD-8cDNvgHiOE4QP8dHbBWH_w",
  authDomain: "sbsription-box.firebaseapp.com",
  projectId: "sbsription-box",
  storageBucket: "sbsription-box.firebasestorage.app",
  messagingSenderId: "240444250926",
  appId: "1:240444250926:web:c0abceeffaeb1bb67138bf",
  measurementId: "G-2RVBS645XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };















