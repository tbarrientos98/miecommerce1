import firebase from "firebase/app";

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnrA-9_j3TSwaGfJ9JeoG9q54gOxviInY",
    authDomain: "miecommerce1.firebaseapp.com",
    projectId: "miecommerce1",
    storageBucket: "miecommerce1.appspot.com",
    messagingSenderId: "542636874695",
    appId: "1:542636874695:web:d2731736ac2cf6af9597e2"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();