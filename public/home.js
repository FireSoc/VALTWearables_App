// public/home.js
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./firebaseInit.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});