import { initializeApp } from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDiu4NgTBsDncComDZjwrNHeihkNYDdNMY",
    authDomain: "crown-clothing-bfc77.firebaseapp.com",
    projectId: "crown-clothing-bfc77",
    storageBucket: "crown-clothing-bfc77.appspot.com",
    messagingSenderId: "385843723625",
    appId: "1:385843723625:web:471f298c1785ed8bca91f8",
    measurementId: "G-WHGKR3W5NL"
  };


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};