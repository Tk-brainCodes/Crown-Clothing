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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log('error creating user', error.message)
  }
 }
  return userRef;
} 

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
   const collectionRef = firestore.collection(collectionKey);
   const batch = firestore.batch();
   objectToAdd.forEach(obj => {
     const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj);
   });   
  return await batch.commit() //fireoff batch request
}

 export const convertCollectionSnapshotToMap = collections => {
   const transformCollection = collections.docs.map(doc => {
     const {title, items} = doc.data();

     return {
       routeName: encodeURI(title.toLowerCase()),
       id: doc.id,
       title,
       items
     };
   });
   return transformCollection.reduce((accumulator, collection) => {
     accumulator[collection.title.toLowerCase()] = collection;
     return accumulator;
   }, {})
 }
 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); //always trigger a google popup for auth and signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;