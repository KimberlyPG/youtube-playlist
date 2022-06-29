import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    
} from 'firebase/auth';

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