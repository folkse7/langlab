// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
// Initiate the db

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxH4fkBNcgTk7vFPDx2qubwx-SsNHIoho",
  authDomain: "langlab-a66ea.firebaseapp.com",
  projectId: "langlab-a66ea",
  storageBucket: "langlab-a66ea.appspot.com",
  messagingSenderId: "862937588623",
  appId: "1:862937588623:web:77fe8482fb1aa2271ce1fa",
  measurementId: "G-SMQ9HZJVE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);

// Sign in with Google

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("currentUser", JSON.stringify(result.user));
    })
    .catch((error) => {});
};

export const executeQuery = async (languageName, levelValue, themeValue) => {
  const filters = [];
  if (levelValue) {
    filters.push(where("level", "==", levelValue));
  }
  if (themeValue) {
    filters.push(where("theme", "==", themeValue));
  }
  const q =
    filters.length > 0
      ? query(collection(db, "wordbanks", languageName, "words"), ...filters)
      : collection(db, "wordbanks", languageName, "words");

  const querySnapshot = await getDocs(q);

  let returnedSnapshot = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return returnedSnapshot;
};
