import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import {
  getFirestore,
  doc, 
  setDoc, 
  collection,
  deleteDoc,
  query,
  getDocs,
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

export const db = getFirestore();

export const addSong = ( objectsToAdd, currentUser) => {
  const docRef = doc(db, 'playlist', currentUser, 'userPlaylist', objectsToAdd.id);
  setDoc(docRef, objectsToAdd);
}

export const deleteDocument = async (currentUser, documentName) => {
  await deleteDoc(doc(db, 'playlist', currentUser.uid, 'userPlaylist', documentName));  
  console.log("deleted");
}

export const getPlaylistAndDocuments = async (currentUser) => {
  const collectionRef = collection(db, 'playlist', currentUser.uid, 'userPlaylist');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const data = []
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback) 
}
