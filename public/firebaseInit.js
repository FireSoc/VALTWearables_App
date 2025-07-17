import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLO8QRNi9uKEK93op-OOe7iTnY4b7fs3Y",
  authDomain: "valtwearablesapp.firebaseapp.com",
  projectId: "valtwearablesapp",
  storageBucket: "valtwearablesapp.firebasestorage.app",
  messagingSenderId: "640621109935",
  appId: "1:640621109935:web:7ff925d425df68293bea5a",
  measurementId: "G-MXZRWY3CVE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });