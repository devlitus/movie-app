import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { firebaseConfig } from "../../config/firebase.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginWithEmailAndPassword = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const loginGoogle = async () => {
  const login = await signInWithPopup(auth, provider);
  const user = await login.user;
  return user;
};
