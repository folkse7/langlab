// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, query, collection, getDocs, where } from "firebase/firestore";
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
      // ...
    })
    .catch((error) => {});
};

export const executeQuery = async(languageName, levelValue, themeValue) => {
  console.log(languageName, levelValue, themeValue)
  // Query in the languageName collection(a sub collection of maincollection) for all words with the levelValue, themeValue and subThemeValue
  // collection(db, "wordbanks", "spanish", "words").where("level", "==", levelValue).where("theme", "==", themeValue).where("subtheme", "==", subThemeValue).get().then(
  //   (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   }
  // )
  const q = query(collection(db, "wordbanks", "spanish", "words"), where("level", "==", levelValue), where("theme", "==", themeValue));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size)
  let returnedSnapshot = querySnapshot.docs.map((doc) => {
    return doc.data();
  });



  // where("level", "==", levelValue).where("theme", "==", themeValue).where("subtheme", "==", subThemeValue);



  // const querySnapshot = getDocs(query);
  // (await querySnapshot).forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  // print everything in returnedsnapshot
  return returnedSnapshot;
};
