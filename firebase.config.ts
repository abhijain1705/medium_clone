// Import the functions you need from the SDKs you need
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjksN9Xh9EVdUjP3wPyDv1vZAhdHJMJrc",
  authDomain: "medium-clone-d15c1.firebaseapp.com",
  projectId: "medium-clone-d15c1",
  storageBucket: "medium-clone-d15c1.appspot.com",
  messagingSenderId: "844154894731",
  appId: "1:844154894731:web:dac575ed5821de144cd78e",
  measurementId: "G-VMG1HTWQ84",
};

// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebase.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
