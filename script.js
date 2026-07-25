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

// The arrays below wil be used as a temporary database for storing the miscellaneous prompts for each day.
// Decision: Should each unique day have its own array or should one large array be appended with new entries.
//  Until NODE.JS backend is working -> Unique arrays for each day

let dailyPrompts = [
    {date: "7/24/2026", dateHeaderString: "July 24", verse: "Scripture Verses", questionA: "Question 1", questionB: "Question 2", prayer: "Prayer"},
    {date: "7/25/2026", dateHeaderString: "July 25", verse: "Scripture Verses", questionA: "Question 1", questionB: "Question 2", prayer: "Prayer"},
    {date: "7/26/2026", dateHeaderString: "July 26", verse: "Scripture Verses", questionA: "Question 1", questionB: "Question 2", prayer: "Prayer"},
]

function getTodayPrompt() {
    const todayDateString = today.toLocaleDateString('en-US');
    console.log(todayDateString);

    //return all objects in dailyPrompts array for today
    let todayPrompt = dailyPrompts.find(dayPrompt => dayPrompt.date === todayDateString);
    return(todayPrompt);
    console.log(todayPrompt);
}

// Basic func to update DailyPage until NODE.JS database is created

function updateTodayPage() {
    
    let todayPrompt = getTodayPrompt();
    console.log(todayPrompt);

    dateHeader.textContent = todayPrompt?.dateHeaderString;
    scriptureVerses.textContent = todayPrompt?.verse;
    askBoxOne.textContent = todayPrompt?.questionA;
    askBoxTwo.textContent = todayPrompt?.questionA;
    prayBox.textContent = todayPrompt?.prayer;

    console.log("Function updateTodayPage completed");
}

//  Create function below to convert date into string and compare with the name of array. 
//  This will allow the call to reference the correct array above.

//      Pseudocode for updateTodayPage
//  1. get today's date
//  2. if todayString = arr[0] (for loop?)
//  3. call the variable for today's date
//  4. take the variable array and plug in to html