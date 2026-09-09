

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

import { collection, setDoc, getDoc, getFirestore, doc, onSnapshot, query, where, orderBy, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

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

        dateHeader.innerHTML = docSnap.data().dateHeaderString;
        readHeader.innerHTML = "Read";
        scripturePassage.innerHTML = todayPrompt.scripturePassage;
        scriptureReference.innerHTML = todayPrompt.scriptureReference;
        askHeader.innerHTML = "Ask";
        askBoxOne.innerHTML = todayPrompt.questionA;
        askBoxTwo.innerHTML = todayPrompt.questionB;
        prayHeader.innerHTML = "Pray";
        prayBox.innerHTML = todayPrompt.prayer;

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



//My Shoddy tutorial code.

// let journalRef;
// let unsubscribe;

// auth.onAuthStateChanged(user => {

//     if (user) {

//         // Database Reference
//         journalRef = db.collection('journal');

//         const inputOne = document.getElementById("question-answer-box-one");
//         const inputTwo = document.getElementById("question-answer-box-two");

//         saveBtn.addEventListener("click", async () => {

//             const answerOne = inputOne.value.trim();
//             const answerTwo = inputTwo.value.trim();

//             const { serverTimestamp } = firebase.firestore.FieldValue;

//             const journalEntry = await addDoc(collection(db, "journal"),{
//                 uid: user.uid,
//                 questionAResponse: answerOne.innerHTML(),
//                 questionBResponse: answerTwo.innerHTML(),
//                 createdAt: serverTimestamp()
//             });

//             console.log("Data saved successfully! ID:", journalEntry.id);
//         }

        

//         // Query
//         unsubscribe = journalRef
//             .where('uid', '==', user.uid)
//             .orderBy('createdAt') // Requires a query
//             .onSnapshot(querySnapshot => {
                
//                 // Map results to an array of li elements

//                 const journalEntryA = querySnapshot.docs.map(doc => {

//                     return `${doc.data().questionAResponse}`

//                 });
//                 const journalEntryB = querySnapshot.docs.map(doc => {

//                     return `${doc.data().questionBResponse}`

//                 });

//                 askBoxOne.innerHTML = journalEntryA;
//                 askBoxTwo.innerHTML = journalEntryB;

//             }));



//     } else {
//         // Unsubscribe when the user signs out
//         unsubscribe && unsubscribe();
//     }
// });


let unsubscribe;

// Helper function to get a local date string (YYYY-MM-DD) safely
function getLocalDateString(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Get today's local date string (e.g., "2026-09-04")
const currentPromptDateStr = getLocalDateString(new Date()); 

auth.onAuthStateChanged(user => {
  if (user) {
    const inputOne = document.getElementById("question-answer-box-one");
    const inputTwo = document.getElementById("question-answer-box-two");
    const saveBtn = document.getElementById("saveBtn");

    // Create a unique, predictable document ID for today (e.g., "USERID123_2026-09-04")
    const todayDocId = `${user.uid}_${currentPromptDateStr}`;
    
    // Reference to this specific daily document
    const docRef = doc(db, "journal", todayDocId);

    // 1. Handle Save Button Click (Overwrites existing or creates new)
    saveBtn.addEventListener("click", async () => {
      const answerOne = inputOne.value.trim();
      const answerTwo = inputTwo.value.trim();

      try {
        // setDoc will overwrite the document if it already exists
        await setDoc(docRef, {
          uid: user.uid,
          dateStr: currentPromptDateStr, // Storing string date for backup
          questionAResponse: answerOne,
          questionBResponse: answerTwo,
          lastUpdated: serverTimestamp() 
        }, { merge: true }); // merge: true ensures you don't accidentally wipe out other fields if added later
        
        console.log("Data successfully saved/overwritten!");
        
      } catch (error) {
        console.error("Error saving document: ", error);
      }
    });

    // 2. Set up the Realtime Single Document Listener
    // No more complex query arrays, filters, or indexes required!
    unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        
        // Display the specific responses
        inputOne.innerHTML = data.questionAResponse || "";
        inputTwo.innerHTML = data.questionBResponse || "";
      } else {
        // Clear displays if no entry exists yet for today
        inputOne.innerHTML = "";
        inputTwo.innerHTML = "";
      }
    }, (error) => {
      console.error("Listener failed: ", error);
    });

  } else {
    if (unsubscribe) unsubscribe();
  }
});
