import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVOD_0Q8qor8eAl1TLhCBeElLUDqYyq4Q",
  authDomain: "netflix-clone-906e7.firebaseapp.com",
  databaseURL: "https://netflix-clone-906e7-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-906e7",
  storageBucket: "netflix-clone-906e7.appspot.com",
  messagingSenderId: "1070932550011",
  appId: "1:1070932550011:web:4d8b97c171c333d0655dde",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { auth, db };
export default firebase;
