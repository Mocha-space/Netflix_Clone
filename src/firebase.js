

import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyD59dYuKY_3kEI-iwebfcJQbTHs_mdcnps",
  authDomain: "mocha254-be939.firebaseapp.com",
  projectId: "mocha254-be939",
  storageBucket: "mocha254-be939.appspot.com",
  messagingSenderId: "97421385548",
  appId: "1:97421385548:web:33929f38bbb6ff2553f9e9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider:"local",
      email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth,email, password)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async (params) => {
  signOut(auth);
}

export {db, auth, login, logout, signup}