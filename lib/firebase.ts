import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDgpG_TzKUuwA1a1GMRrG5K8Js7IJhq-Qc",
  authDomain: "nextfire-a01e8.firebaseapp.com",
  projectId: "nextfire-a01e8",
  storageBucket: "nextfire-a01e8.appspot.com",
  messagingSenderId: "642210205425",
  appId: "1:642210205425:web:e78cb8717aaa560fb22350",
  measurementId: "G-84F2539DM5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();

