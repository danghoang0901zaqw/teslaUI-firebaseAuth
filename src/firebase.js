import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChtO_E7BHInmbnm7cVZrAs_ZZ-_aOETI8",
  authDomain: "tesla-clone-b6cd9.firebaseapp.com",
  projectId: "tesla-clone-b6cd9",
  storageBucket: "tesla-clone-b6cd9.appspot.com",
  messagingSenderId: "749395324661",
  appId: "1:749395324661:web:52317cf5d72b2265411fbc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
