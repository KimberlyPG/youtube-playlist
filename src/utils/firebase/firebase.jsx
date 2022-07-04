import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  Firestore,
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
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, currentUser) => {
//   console.log(objectsToAdd);
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db); 

//   // objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, currentUser);
//     batch.set(docRef, objectsToAdd);
//   // })
  
//   await batch.commit();
//   console.log('done');
// }

export const addSong = ( objectsToAdd, currentUser) => {
  const docRef = doc(db, 'playlist', currentUser, 'userPlaylist', objectsToAdd.id);
  setDoc(docRef, objectsToAdd);
}

// Detele playlist from firebase
export const deleteDocument = async (currentUser, documentName) => {
  await deleteDoc(doc(db, 'playlist', currentUser.uid, 'userPlaylist', documentName));  
  console.log("deleted");
}

// get collection from firestore
export const getPlaylistAndDocuments = async (currentUser) => {
  const collectionRef = collection(db, 'playlist', currentUser.uid, 'userPlaylist');
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


