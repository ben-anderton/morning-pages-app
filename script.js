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
const readHeader = document.getElementById("read-header");
const scriptureVerses = document.getElementById("scripture-verses");
const scriptureReference = document.getElementById("scripture-reference");
const askHeader = document.getElementById("ask-header");
const askBoxOne = document.getElementById("ask-box-one");
const askBoxTwo = document.getElementById("ask-box-two");
const prayHeader = document.getElementById("pray-header");
const prayBox = document.getElementById("pray-box");

// The arrays below wil be used as a temporary database for storing the miscellaneous prompts for each day.
// Decision: Should each unique day have its own array or should one large array be appended with new entries.
//  Until NODE.JS backend is working -> Unique arrays for each day

let dailyPrompts = [
    {date: "7/25/2026", dateHeaderString: "July 25", 
        verse: 'Having purified your souls by obedience to the truth for a sincere brotherly love. love one another earnestly from a pure heart, since you have been born again not of a perishable seed but of imperishable, through the living and abiding word of God;',
        reference: "1 Peter 1:22-23 ESV",
        questionA: 'What does it mean to have a pure heart?',
        questionB: 'Why does Peter use "perishable seed" versus "imperishable seed" as a symbol for reasoning to love earnestly?',
        prayer: "Lord, lead me to love earnestly with eternal souls, that you have loved, in mind. May I submit to the truth with obedience. In Jesus' Name, Amen."},
        
    {date: "7/26/2026", dateHeaderString: "July 26", 
        verse: "Be subject for the Lord's sake to every human institution, whether it be to the emperor as supreme, or to governors as sent by him to punish those who do evil and to praise those who do good. For this is the will of God, that by doing good you should put to silence the ignorance of foolish people. Live as people who are free, not using your freedom as a cover-up for evil, but living as servants of God. Honor everyone. Love the brotherhood. Fear God. Honor the emperor.",
        reference: "1 Peter 2:13-17 ESV",
        questionA: 'According to Peter, what manner of life should we live as Christians?',
        questionB: "Are you surrendering all of areas of your life to God? What areas of your life are/aren't surrendered fully?",
        prayer: "Lord, would you reveal my own heart to me. Would you give clarity and guidance, O Lord. Am I simply seeking my own ends? Am I allowing my pride to get in the way of Godly relationships? Bridle my tongue, and shape my heart. Grow me in your steadfast love. Give me wisdom and lead me in Your will! In Jesus' Name, Amen."},

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
    readHeader.textContent = "Read"
    scriptureVerses.textContent = todayPrompt?.verse;
    scriptureReference.textContent = todayPrompt?.reference;
    askHeader.textContent = "Ask"
    askBoxOne.textContent = todayPrompt?.questionA;
    askBoxTwo.textContent = todayPrompt?.questionB;
    prayHeader.textContent = "Pray"
    prayBox.textContent = todayPrompt?.prayer;

    console.log("Function updateTodayPage completed");
}

updateTodayPage();