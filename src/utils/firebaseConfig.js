import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDLD_Xxuk9Cg9a5tDIHNNABbK8ClMbui5g",
    authDomain: "as-c2cf3.firebaseapp.com",
    projectId: "as-c2cf3",
    storageBucket: "as-c2cf3.appspot.com",
    messagingSenderId: "672461786188",
    appId: "1:672461786188:web:6cf18f32ed4c5e22cfb8e9"
}

// Initialize Firebase and Firestore
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db,
    google,
    facebook
}