// Isi konfigurasi ini dari Firebase Console > Project settings > Your apps.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "GANTI_DENGAN_API_KEY",
  authDomain: "GANTI_PROJECT_ID.firebaseapp.com",
  projectId: "GANTI_PROJECT_ID",
  storageBucket: "GANTI_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "GANTI_SENDER_ID",
  appId: "GANTI_APP_ID"
};
const configured = !firebaseConfig.apiKey.startsWith("GANTI_");
let auth = null, db = null;
if (configured) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}
export { auth, db, configured, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, collection, addDoc, serverTimestamp,
  query, where, getDocs, orderBy, limit };
