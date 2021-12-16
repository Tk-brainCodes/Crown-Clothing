import firebase from  'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
  apiKey: "AIzaSyAw-_XE9qYCn10UKHLe1cibj_ceZkqdcOQ",
  authDomain: "crown-clothing-65c80.firebaseapp.com",
  projectId: "crown-clothing-65c80",
  storageBucket: "crown-clothing-65c80.appspot.com",
  messagingSenderId: "810467435475",
  appId: "1:810467435475:web:6b3d3a9732989737ac4526",
  measurementId: "G-3WHSP0QYB1"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); //always trigger a google popup for auth and signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;