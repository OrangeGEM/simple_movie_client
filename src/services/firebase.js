import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCO8AjHMYWqXuK0afRXocAdQmme3ZiA0x8",
  authDomain: "movie-test-project.firebaseapp.com",
  projectId: "movie-test-project",
  storageBucket: "movie-test-project.appspot.com",
  messagingSenderId: "577443113147",
  appId: "1:577443113147:web:fe677a4252be4a36c9219e"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);