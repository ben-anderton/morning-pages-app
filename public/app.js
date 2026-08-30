// 1. Import the correct modern functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithRedirect, 
    signOut 
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrAuRsLZAFXfn16R00psX--ZxhA_UcVjE",
    authDomain: "morning-pages-bible-study.firebaseapp.com",
    projectId: "morning-pages-bible-study",
    storageBucket: "morning-pages-bible-study.firebasestorage.app",
    messagingSenderId: "578715363427",
    appId: "1:578715363427:web:9c254656a32acdfc66b056",
    measurementId: "G-4TRWEPMJN7"
};

// 2. Initialize Firebase and Auth services
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // This is declared EXACTLY once now

// 3. Grab your HTML DOM elements
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');

// 4. Create the modern Google Auth Provider instance
const provider = new GoogleAuthProvider();

// 5. Explicitly handle sign-in button click using modern modular syntax
if (signInBtn) {
    signInBtn.onclick = () => {
        signInWithRedirect(auth, provider);
    };
}

// Explicitly handle sign-out button click using modern modular syntax
if (signOutBtn) {
    signOutBtn.onclick = () => {
        signOut(auth)
            .then(() => console.log("User manually signed out."))
            .catch((error) => console.error("Sign out error:", error));
    };
}

// 6. Global Auth State Observer (Modern syntax passes 'auth' as the first argument)
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        if (whenSignedIn) whenSignedIn.hidden = false;
        if (whenSignedOut) whenSignedOut.hidden = true;
        if (userDetails) {
            userDetails.innerHTML = `<h3>Hello ${user.displayName || user.email || 'User'}! </h3>`;
        }
        console.log('Sign in Successful:', user.displayName);
    } else {
        // User is signed out
        if (whenSignedIn) whenSignedIn.hidden = true;
        if (whenSignedOut) whenSignedOut.hidden = false;
        if (userDetails) userDetails.innerHTML = '';
        console.log('No user signed in.');
    }
});
