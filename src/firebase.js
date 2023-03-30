// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
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
  measurementId: "G-SMQ9HZJVE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);


// Sign in with Google

export const signInWithGoogle = () => {
  // Check if user is already signed in

  console.log(auth.currentUser)
  // const provider = new GoogleAuthProvider();
  // signInWithPopup(auth, provider).then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  // });
}