// This is the Core Scripts for Morning Pages App


// Pseudocode for Daily Update Functionality
// 1. Have a function get today's date
// 2. Reference Database(Array of Data)
// 3. Update Current Page Info (Read, Ask, Pray) with Today's info
//      IF Today's date matched Array value, then return today's value
//      ELSE IF Today's date !=== Array's Date(No Data exists for today) break
// 4. Always run the function on refresh.



// Daily Update

const today = new Date();
console.log(today.toLocaleDateString('en-US')); 

const dateHeader = document.getElementById("date-header");
const scriptureVerses = document.getElementById("scripture-verses");
const askBoxOne = document.getElementById("ask-box-one");
const askBoxTwo = document.getElementById("ask-box-two");
const prayBox = document.getElementById("pray-box");

// The array below wil be used as a temporary database for storing the miscellaneous prompts for each day.
// Decision: Should each unique day have its own array or should one large array be appended with new entries.
//  Until NODE.JS backend is working -> Unique arrays for each day

let dailyPrompts = [
    [],
    [],
    [],
]

// Basic func to update DailyPage until NODE.JS database is created

function updateTodayPage() {
    dateHeader.textContent = today.toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
    scriptureVerses.textContent = "This will be replaced by an array or Database entry in futureeee";
    askBoxOne.textContent = "How do you do?";
    askBoxTwo.textContent = "When will this project make progress?";
    prayBox.textContent = "Thank you Jesus, Amen!";

    console.log("Function updateTodayPage completed");
}

//  Create function below to convert date into string and compare with the name of array. 
//  This will allow the call to reference the correct array above.