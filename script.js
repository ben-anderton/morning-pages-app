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

let dailyPrompts = [
    [],
    [],
    [],
]

function updateTodayPage() {
    dateHeader.textContent = today.toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
    scriptureVerses.textContent = "This will be replaced by an array or Database entry in futureeee";
    askBoxOne.textContent = "How do you do?";
    askBoxTwo.textContent = "When will this project make progress?";
    prayBox.textContent = "Thank you Jesus, Amen!";

    console.log("Function updateTodayPage completed");
}