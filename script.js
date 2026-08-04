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
    {date: "7/31/2026", dateHeaderString: "July 31", 
        verse: "Now who is there to harm you if you are zealous for what is good? But even if you should suffer for righteousness' sake, you will be blessed. Have no fear of them, nor be troubled, but in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect, having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame. For it is better to suffer for doing good, if that should be God's will, than for doing evil.",
        reference: "1 Peter 3:13-17 ESV",
        questionA: "As Christians, how can we have a defense prepared but still be gentle?",
        questionB: "What should our hearts' attitudes be toward suffering for righteousness sake? Why?",
        prayer: "Lord, teach me and mold me to suffer for your sake. To tame my tongue, and to prepare in season and out of season for the defense of the Gospel. Lead to love others and love you with my whole heart. Thank you for the cross.  In Jesus' Name, Amen."
    },
    {date: "8/1/2026", dateHeaderString: "August 1", 
        verse: "Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience, through the resurrection of Jesus Christ, who has gone into heaven and is at the right hand of God, with angels, authorities, and powers having been subjected to him.",
        reference: "1 Peter 3:21-22 ESV",
        questionA: "What is the meaning of baptism? How does this affect your life?",
        questionB: "What is your natural and unnatural response to Jesus's ascension to the right hand of God? How does this change your view of baptism?",
        prayer: "Lord, lead me to have a heart for you. May I rest in the redemptive work in the cross. you as the firstborn of God have called me your won and welcomed me into your kingdom. Thank you for the undeserved grace and mercy.  In Jesus' Name, Amen."
    },
    {date: "8/3/2026", dateHeaderString: "August 3", 
        verse: "Since therefore Christ suffered in the flesh, arm yourselves with the same way of thinking, for whoever has suffered in the flesh has ceased from sin, so as to live for the rest of the time in the flesh no longer for human passions but for the will of God.",
        reference: "1 Peter 4:1-2 ESV",
        questionA: "What does suffering for righteousness do as a Christian? How do you feel about being told you are to suffer for Christ?",
        questionB: "Why did Christ suffer? How should this change our view of our own suffering?",
        prayer: "Lord, lead me to see the world through your holy lens. Open my eyes to see the suffering of the saints and a gift that produces the peaceful fruit of righteousness. May I seek you first and rest fully in your promises. Thank you for the Cross and the perfect example of suffering for good. I give you all the praise and glory for your perfect providence. In Jesus' Name, Amen."
    },
    {date: "8/4/2026", dateHeaderString: "August 4", 
        verse: "For the time that is past suffices for doing what the Gentiles want to do, living in sensuality, passions, drunkenness, orgies, drinking parties, and lawless idolatry. With respect to this they are surprised when you do not join them in the same flood of debauchery, and they malign you; but they will give account to him who is ready to judge the living and the dead.",
        reference: "1 Peter 4:3-5 ESV",
        questionA: "What does it mean that the time has passed for doing what Gentiles do?",
        questionB: "How does our view of sensuality and living in the flesh change how we ought to live? What is one practical way we can act on that today?",
        prayer: "Lord, lead me to see the world through your holy lens. Guard my heart against evil. Lead me in righteousness and help me to resist temptation. For the passions of the flesh are for the past. May my mind be set on the things above. May I seek you first and rest fully in your promises. Thank you for the Cross and the Holy Spirit power to overcome evil and temptation. I give you all the praise and glory for your perfect providence. In Jesus' Name, Amen."
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

