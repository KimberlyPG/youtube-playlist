import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    
} from 'firebase/auth';

// import {
//   getFirestore,
//   doc, 
//   getDoc, 
//   setDoc, 
// } from 'firebase/firestore'

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
// export const db = getFirestore();
// export const firestore = firebase.firestore();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
};

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
//   ) => {
//   if(!userAuth) return; //protecting code

//   const userDocRef = doc(db, 'user', userAuth.uid); //doc parameters are db, collection, identifier

//   // check whether or not there's an intance of it that exists inside o a database
//   const userSnapshot = await getDoc(userDocRef);

//   // if user data does not exists
//   if(!userSnapshot.exists()){
//       const { displayName, email } = userAuth;
//       // const useremail = userAuth.email
//       const createdAt = new Date();

//       try {
//           await setDoc(userDocRef, { //setdoc to the db
//               ...additionalInformation,
//               displayName,
//               email,
//               createdAt,
//           });
//       }catch (error){
//           console.log('error creating user', error.message);
//       }
//   }

//   // if user data exists
//   return userDocRef;
// };
