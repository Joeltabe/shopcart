import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDsUcEp_y4S-rryNFsSyBCN3hQwG-BJ66o",
  authDomain: "sazstay-dd012.firebaseapp.com",
  projectId: "sazstay-dd012",
  storageBucket: "sazstay-dd012.appspot.com",
  messagingSenderId: "621504324409",
  appId: "1:621504324409:web:c606d27bad7f4dbe0cfee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
