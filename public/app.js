// 1. Import statements mapped directly to Firebase version 15.28.2 CDN paths

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';

// Add Firebase products that you want to use
import { 
    getAuth, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut 
    } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';

import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrAuRsLZAFXfn16R00psX--ZxhA_UcVjE",
    authDomain: "://firebaseapp.com",
    projectId: "morning-pages-bible-study",
    storageBucket: "morning-pages-bible-study.firebasestorage.app",
    messagingSenderId: "578715363427",
    appId: "1:578715363427:web:9c254656a32acdfc66b056",
    measurementId: "G-4TRWEPMJN7" // Kept in config just in case, but unused in code
};

// 2. Initialize core Firebase App and Auth instances
const app = initializeApp(firebaseConfig);

///// User Authentication /////

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});



