import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTwWvb05nObec-AT5gbjCXlfyc1_CMh_g",
    authDomain: "moviesapp-c1bc3.firebaseapp.com",
    projectId: "moviesapp-c1bc3",
    storageBucket: "moviesapp-c1bc3.appspot.com",
    messagingSenderId: "584240390087",
    appId: "1:584240390087:web:96b819babb96a0bc09c3e2"
  };

  const app = initializeApp(firebaseConfig);

  export const db= getFirestore(app);