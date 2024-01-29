import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAycr2zP3h8V89HAHupy_f5stFjeBrZJY",
  authDomain: "pet-care-fc360.firebaseapp.com",
  databaseURL:
    "https://pet-care-fc360-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pet-care-fc360",
  storageBucket: "pet-care-fc360.appspot.com",
  messagingSenderId: "1001318887213",
  appId: "1:1001318887213:web:bcbba62466228bef032da4",
  measurementId: "G-G176GB9091",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Authentication
export const auth = getAuth(app);

// Firestore
const db = getFirestore(app);
export { db, getFirestore, collection, addDoc };

// Storage
export const storage = getStorage(app);
