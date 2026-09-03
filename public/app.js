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

import { collection, setDoc, getDoc, getFirestore, doc, onSnapshot, query, where } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
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
        // userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});


///// Firestore /////

// This is the stock logic from Fireship. Update this with Daily Page update logic. //

    ////// TO DO //////
// 1. Add prompt database to Firestore
// 2. Write logic to display the current date's morning page by default. 
    // Include a button that will refresh the date in an old browser window
// 3. Add journal database to Firestore
// 4. Write logic to auto-save current input after every keystroke or on timer to Journal Database
// 5. Write Logic to read previous Days and Display them.

const db = getFirestore(app);


// Build out Get DailyPage COntent

const today = new Date();
console.log(today.toLocaleDateString('en-US')); 

let promptsRef;

// Basic func to get DailyPagePrompt from the Database

async function getTodayPrompt() {
    const date = new Date();

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-11
    const dd = String(date.getDate()).padStart(2, '0');

    const todayDateString = `${mm}-${dd}-${yyyy}`;
    console.log(todayDateString); // "08-31-2026"


        // //return all objects in dailyPrompts array for today
        // let todayPrompt = dailyPrompts.find(dayPrompt => dayPrompt.date === todayDateString);
        // return(todayPrompt);
        // console.log(todayPrompt);

        // //new FUNC: get Firebase prompt.


    const docRef = doc(db, "prompts", `${mm}-${dd}-${yyyy}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        
        const todayPrompt = docSnap.data();   
        
        const dateHeader = document.getElementById("date-header");
        const readHeader = document.getElementById("read-header");
        const scripturePassage = document.getElementById("scripture-passage");
        const scriptureReference = document.getElementById("scripture-reference");
        const askHeader = document.getElementById("ask-header");
        const askBoxOne = document.getElementById("ask-box-one");
        const askBoxTwo = document.getElementById("ask-box-two");
        const prayHeader = document.getElementById("pray-header");
        const prayBox = document.getElementById("pray-box");

        dateHeader.textContent = docSnap.data().dateHeaderString;
        readHeader.textContent = "Read";
        scripturePassage.innerHTML = todayPrompt.scripturePassage;
        scriptureReference.textContent = todayPrompt.scriptureReference;
        askHeader.textContent = "Ask";
        askBoxOne.textContent = todayPrompt.questionA;
        askBoxTwo.textContent = todayPrompt.questionB;
        prayHeader.textContent = "Pray";
        prayBox.textContent = todayPrompt.prayer;

        console.log("Function updateTodayPage completed");

    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }


    
    // Database Reference
}
getTodayPrompt();

// function getSingleDocument() {
//     promptsRef = db.collection('prompts');

//     const todayPromptDocRef = doc(db, "prompts", todayDateString); 
//     const todayPromptData = getDoc(todayPromptDocRef);

//     console.log("This is today's prompt data:" + todayPromptData)
//     return todayPromptData;

// }
// getSingleDocument();

// Basic func to update DailyPage until NODE.JS database is created




let journalRef;
let unsubscribe;

auth.onAuthStateChanged(user => {

    if (user) {

        // Database Reference
        journalRef = db.collection('journal');

        saveBtn.onclick = () => {

            const { serverTimestamp } = firebase.firestore.FieldValue;

            journalRef.add({
                uid: user.uid,
                questionAResponse: askBoxTwo.innerHTML(),
                questionBResponse: askBoxTwo.innerHTML(),
                createdAt: serverTimestamp()
            });
        }


        // Query
        unsubscribe = journalRef
            .where('uid', '==', user.uid)
            .orderBy('createdAt') // Requires a query
            .onSnapshot(querySnapshot => {
                
                // Map results to an array of li elements

                const journalEntryA = querySnapshot.docs.map(doc => {

                    return `${doc.data().questionAResponse}`

                });
                const journalEntryB = querySnapshot.docs.map(doc => {

                    return `${doc.data().questionBResponse}`

                });

                askBoxOne.innerHTML = journalEntryA;
                askBoxTwo.innerHTML = journalEntryB;

            });



    } else {
        // Unsubscribe when the user signs out
        unsubscribe && unsubscribe();
    }
});
