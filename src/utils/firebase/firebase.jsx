import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc, //allows us to retrieve documents inside our firestore database
  getDoc, //gettting document data
  setDoc, //setting document data
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4IEtYHDc08LL9oFXMGLsYoVT_wBrJ8ec",
    authDomain: "db-22a49.firebaseapp.com",
    projectId: "db-22a49",
    storageBucket: "db-22a49.appspot.com",
    messagingSenderId: "69446253015",
    appId: "1:69446253015:web:8ec7584392e505a0c13392",
    measurementId: "G-ZHFBJQENSB"
  };
  
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
  });
export const auth = getAuth();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback) 
}

//  Instance to get or set data to our document 
export const db = getFirestore();

// Add collection and documents to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db); 

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done');
}

// // get collection from firestore
// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'categories');
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//     const { title, items } = docSnapshot.data();
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {})

//   return categoryMap;
// }

