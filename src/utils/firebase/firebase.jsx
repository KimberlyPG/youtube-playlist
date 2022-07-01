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
  deleteDoc,
  query,
  getDocs,
  addDoc
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

export const db = getFirestore();

// Add collection and documents to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, currentUser) => {
  console.log(objectsToAdd);
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db); 

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, currentUser);
    batch.set(docRef, object);
  })
  
  await batch.commit();
  console.log('done');
}

// Detele playlist from firebase
export const deleteDocument = async (collectionKey, documentName) => {
  await deleteDoc(doc(db, collectionKey, documentName));
  
}

// get collection from firestore
export const getPlaylistAndDocuments = async () => {
  const collectionRef = collection(db, 'playlist');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const data = []
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    data.push(doc.data());
  });
  // console.log("data: ",data);
  return data;
}


