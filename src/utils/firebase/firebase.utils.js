import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider 
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZqFdDCZXc5ushaSDvutJ-ECDU6balKNk",
  authDomain: "crwn-clothing-db-9f9f5.firebaseapp.com",
  projectId: "crwn-clothing-db-9f9f5",
  storageBucket: "crwn-clothing-db-9f9f5.appspot.com",
  messagingSenderId: "48166923114",
  appId: "1:48166923114:web:af64407087387a0e0e5313"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot)

  // if user data does not exist
  // create / Set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt
      })
    } catch (error) {
      console.log('Error creating the user: ', error.message)
    }
  }

  // uf user data exists
  // return userDocRef
  return userDocRef
}