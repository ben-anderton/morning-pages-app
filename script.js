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

    // Blank Array Entry for Daily Pages
    // {date: "7/31/2026", dateHeaderString: "July 31", 
    //         verse: "",
    //         reference: "1 Peter 3:8-9 ESV",
    //         questionA: "",
    //         questionB: "",
    //         prayer: "Lord,  In Jesus' Name, Amen."
    //     },


let dailyPrompts = [
    {date: "7/25/2026", dateHeaderString: "July 25", 
        verse: 'Having purified your souls by obedience to the truth for a sincere brotherly love. love one another earnestly from a pure heart, since you have been born again not of a perishable seed but of imperishable, through the living and abiding word of God;',
        reference: "1 Peter 1:22-23 ESV",
        questionA: 'What does it mean to have a pure heart?',
        questionB: 'Why does Peter use "perishable seed" versus "imperishable seed" as a symbol for reasoning to love earnestly?',
        prayer: "Lord, lead me to love earnestly with eternal souls, that you have loved, in mind. May I submit to the truth with obedience. In Jesus' Name, Amen."
    },
        
    {date: "7/26/2026", dateHeaderString: "July 26", 
        verse: "Be subject for the Lord's sake to every human institution, whether it be to the emperor as supreme, or to governors as sent by him to punish those who do evil and to praise those who do good. For this is the will of God, that by doing good you should put to silence the ignorance of foolish people. Live as people who are free, not using your freedom as a cover-up for evil, but living as servants of God. Honor everyone. Love the brotherhood. Fear God. Honor the emperor.",
        reference: "1 Peter 2:13-17 ESV",
        questionA: 'According to Peter, what manner of life should we live as Christians?',
        questionB: "Are you surrendering all of areas of your life to God? What areas of your life are/aren't surrendered fully?",
        prayer: "Lord, would you reveal my own heart to me. Would you give clarity and guidance, O Lord. Am I simply seeking my own ends? Am I allowing my pride to get in the way of Godly relationships? Bridle my tongue, and shape my heart. Grow me in your steadfast love. Give me wisdom and lead me in Your will! In Jesus' Name, Amen."
    },
    {date: "7/27/2026", dateHeaderString: "July 27", 
        verse: "I have set the Lord always before me: because he is at my right hand, I shall not be shaken. Therefore my heart is glad, and my whole being rejoices; me flesh also dwells secure.",
        reference: "1 Peter 2:13-17 ESV",
        questionA: 'Why does the knowledge of the Lord being always before us make us unshaken?',
        questionB: "What does it gladness, rejoicing, and security look like?",
        prayer: "Lord, search me and know me. open my eyes to see your goodness. Let me my heart be glad for your are ever before me. Dwelling in your presence and resting in your promises give me security. Praise you in the highest for your mercy and grace. Thank you for for all you have done and continue to do for me. In Jesus' Name, Amen."
    },
    {date: "7/28/2026", dateHeaderString: "July 28", 
        verse: "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed. For you were straying like sheep, but have now returned to the Shepherd and Overseer of your souls.",
        reference: "1 Peter 2:24-25 ESV",
        questionA: "What is the significance of Christ's body being on a tree?",
        questionB: "What picture is in your head when you imagine Jesus as your Shepherd?",
        prayer: "Lord, lead me to honor the sacrifice you made. You took my curse upon yourself. You came a curse that I could be called a son of God. May that truth rest heavy in my heart. May I never forget the wounds that healed me. Thank you for your boundless grace. In Jesus' Name, Amen."
    },
    {date: "7/29/2026", dateHeaderString: "July 29", 
        verse: "Finally, all of you, have unity of mind, sympathy, brotherly love, a tender heart, and a humble mind. Do not repay evil for evil or reviling for reviling, but on the contrary, bless, for to this you were called, that you may obtain a blessing.",
        reference: "1 Peter 3:8-9 ESV",
        questionA: "What is your heart posture towards others, especially those who have wronged you? Unity & brotherly love or cursing and reviling?",
        questionB: "What blessing may we obtain by repaying curse with blessing?",
        prayer: "Lord, thank you for the gift of the cross. Thank you that you love me when I was yet your enemy. Grow in me the fruit of the spirit that I may love as you love, serve as you serve, but above all see others ass you see them. May I have a sincere love for my brothers and sisters whom you love. To you be all the praise and glory, forever. In Jesus' Name, Amen."
    },
    {date: "7/30/2026", dateHeaderString: "July 30", 
        verse: "",
        reference: "1 Peter 3:8-9 ESV",
        questionA: "",
        questionB: "",
        prayer: "Lord,  In Jesus' Name, Amen."
    },
    {date: "7/31/2026", dateHeaderString: "July 31", 
        verse: "",
        reference: "1 Peter 3:8-9 ESV",
        questionA: "",
        questionB: "",
        prayer: "Lord,  In Jesus' Name, Amen."
    },
    

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


// Configuration for html2pdf.js to allow export of pdf or print page

// 1. Select the specific element you want to print
const element = document.documentElement;
// 2. Calculate the dynamic height in millimeters (assuming standard 96 DPI)
const elementHeightPx = element.scrollHeight; 
const elementWidthPx = element.scrollWidth;

// Convert pixels to millimeters: (pixels * 25.4) / 96
const pdfWidthMm = (elementWidthPx * 25.4) / 96;
const pdfHeightMm = (elementHeightPx * 25.4) / 96;

// 3. Configure html2pdf with the exact dynamic dimensions
const options = {
  margin: 0, // Set to 0 to prevent accidental extra page spillover
  filename: 'mp-daily-page'+today.toLocaleDateString('en-US')+'.pdf',
  image: { type: 'pdf', quality: 0.98 },
  html2canvas: { 
    scale: 2, // High resolution scaling
    useCORS: true 
  },
  jsPDF: { 
    unit: 'in', 
    format: 'letter', // Custom page size overriding A4/Letter
    orientation: 'portrait' 
  }
};

// 4. Link to button and Generate PDF
const exportButton = document.getElementById('print-button');

function exportPage2Pdf (){
    html2pdf().set(options).from(element).save();
}

exportButton.addEventListener('click', function(){
    let pageExport = exportPage2Pdf();
    console.log('PDF Export completed');    
});

