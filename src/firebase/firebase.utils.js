import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={
    apiKey: "AIzaSyDjyqvIRbwEKKJfR9F3JB5wUn461FkRiuU",
    authDomain: "crwn-db-5050d.firebaseapp.com",
    projectId: "crwn-db-5050d",
    storageBucket: "crwn-db-5050d.appspot.com",
    messagingSenderId: "373826097103",
    appId: "1:373826097103:web:53883bb8da017e3e2d8cba",
    measurementId: "G-2WEV40MZPP"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();



  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;