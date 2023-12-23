import { initializeApp } from 'firebase/app';
import {
        getAuth,  
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
} from 'firebase/auth';
import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCF248SPYRQylzBgcHo_wiceDOeHZH8Y6s",
    authDomain: "poly-pack-1c012.firebaseapp.com",
    projectId: "poly-pack-1c012",
    storageBucket: "poly-pack-1c012.appspot.com",
    messagingSenderId: "81361462647",
    appId: "1:81361462647:web:5491595e7e05d47b29ad72"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
  });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 
//Exporting FireStore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
      });
    }
    catch(error){
      console.log('erro',error.message);
    }
  }
  return userDocRef;
};