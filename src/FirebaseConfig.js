import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDluRnb_JCozf_uUqMeli4-GnC-yHkziUs",
  authDomain: "cascanueces-f0a34.firebaseapp.com",
  projectId: "cascanueces-f0a34",
  storageBucket: "cascanueces-f0a34.appspot.com",
  messagingSenderId: "315086141752",
  appId: "1:315086141752:web:0f6994e8a1aabd46f929cd",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const login = async ({ email, password }) => {
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export const create = async ({ email, password }) => {
  let res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};
