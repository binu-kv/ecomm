import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuTW5CfE5t1OwqzBA9CydahbLByBILCG4",
    authDomain: "ecomm-db-743c2.firebaseapp.com",
    databaseURL: "https://ecomm-db-743c2.firebaseio.com",
    projectId: "ecomm-db-743c2",
    storageBucket: "ecomm-db-743c2.appspot.com",
    messagingSenderId: "727851331490",
    appId: "1:727851331490:web:1fa24ab0d6b942b8d24cfb"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters = ({ prompt:'select_account' });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;