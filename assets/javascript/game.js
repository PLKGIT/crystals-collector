/* Crystals Collector Game JavaScript*/

$(document).ready(function () {

    /* DOM assignments */

    // Global Variables

    /* Player specific */
    var playerName;
    var playerMsgWelcome = "Hello Crystals Collector!";
    var playerMsgGoodbye = "Thank you for playing!";
    var playerWonMsg="";
    var playerScore = 0;
    var playerWins = 0;
    var playerLosses = 0;

    /* Game specific */
    var randomNumber;
    var valCrystalBlue;
    var valCrystalGreen;
    var valCrystalRed;
    var valCrystalYellow;
    var arrCrystals = ["assets/images/gem_blue.png", "assets/images/gem_green.png", "assets/images/gem_red.png", "assets/images/gem_yellow.png",]
    var arrCongrats = ["Congrats!", "Way to go!", "You're a boss!", "Great job!", "Congratulations", "Nailed it!", "Way to play!", "Sweet!", "Oh yeah!", "What a whiz you are!"]

// Initialize the game
/* 12/18/19: Tested and committed. */
/* 
    Append contents of the "playerMsgWelcome" variable to the DOM (#welcome) in the header.
    Append player stats to the DOM (#playerScore, #playerWins, #playerLoses).
    Test to ensure the expected values are being appended to the DOM.
    Call the gameNumber () function
*/

    // console.log("-------Page fully loaded------------")
    // console.log("Ready")

    //Append welcome message to header
    $('#welcome').append(playerMsgWelcome);
    // console.log("-------playerMsgWelcome------------")
    // console.log(playerMsgWelcome)

    //Append playerScore to DOM (#score)
    $('#score').append(playerScore);
    // console.log("-------playerScore------------")
    // console.log(score)

    //Append playerWins to DOM (#won)
    $('#won').append(playerWins);
    // console.log("-------Total Wins------------")
    // console.log(won)

    //Append playerWins to DOM (#won)
    $('#lost').append(playerLosses);
    // console.log("-------Total Losses------------")
    // console.log(lost)

    //Call gameNumber() function
    $(gameNumbers);

    
/* -------------------------------------------*/

// Generate random numbers
/* 12/18/19: Tested and committed. */
/* 
    Generate random number from 19-120 for game number and assign it to the "randomNumber" variable.
        Append randomNumber to the DOM (#random).
    Generate random numner between 1 and 12 for each crystal.
        Assign each crystal's variable a random number.
        Do NOT append the crystal values to the DOM.
    Test to ensure none of the previous values changes after generating another variable's random number.
    Call playGame () function.
*/

function gameNumbers() {
    //Generate Random Number for Game
    randomNumber = Math.floor(Math.random() * 120) + 19;
    // console.log("-------Random Number------------");
    // console.log(randomNumber);
    //Append the random game number to the DOM (#random)
    document.getElementById('random').innerHTML = randomNumber;
    // console.log("-------Random No. to DOM------------");
    // console.log(randomNumber);
    //Generate Random Number for Blue Crystal and assign it to "valCrystalBlue" variable
    valCrystalBlue = Math.floor(Math.random() * 12) + 1;
    // console.log("-------Random Number------------");
    // console.log(randomNumber);
    // console.log("-------Blue Crystal Value------------");
    // console.log(valCrystalBlue);
    //Generate Random Number for Green Crystal and assign it to "valCrystalGreen" variable
    valCrystalGreen = Math.floor(Math.random() * 12) + 1;
    // console.log("-------Random Number------------");
    // console.log(randomNumber);
    // console.log("-------Blue Crystal Value------------");
    // console.log(valCrystalBlue);
    // console.log("-------Green Crystal Value------------");
    // console.log(valCrystalGreen);
    //Generate Random Number for Red Crystal and assign it to "valCrystalRed" variable
    valCrystalRed = Math.floor(Math.random() * 12) + 1;
    // console.log("-------Random Number------------");
    // console.log(randomNumber);
    // console.log("-------Blue Crystal Value------------");
    // console.log(valCrystalBlue);
    // console.log("-------Green Crystal Value------------");
    // console.log(valCrystalGreen);
    // console.log("-------Red Crystal Value------------");
    // console.log(valCrystalRed);
    //Generate Random Number for Yellow Crystal and assign it to "valCrystalYellow" variable
    valCrystalYellow = Math.floor(Math.random() * 12) + 1;
    // console.log("-------Random Number------------");
    // console.log(randomNumber);
    // console.log("-------Blue Crystal Value------------");
    // console.log(valCrystalBlue);
    // console.log("-------Green Crystal Value------------");
    // console.log(valCrystalGreen);
    // console.log("-------Red Crystal Value------------");
    // console.log(valCrystalRed);
    // console.log("-------Yellow Crystal Value------------");
    // console.log(valCrystalYellow);
}

/* -------------------------------------------*/

function playGame() {
    //Compare playerScore to randomNumber
        //If playerScore = randomNumber, call playerWon
        //If playerScore > randomNUmber, call playerLost
        //If playerScore < randonMumber, allow user to click on a crystal
    //On Crystal click, add its associate random number to playerScore
        //Update values on the DOM
    //Compare playerScore to randomNumber
        //If playerScore = randomNumber, call playerWon
        //If playerScore > randomNUmber, call playerLost
        //If playerScore < randonMumber, allow user to click on a crystal

}

function playerWon() {
    //Add 1 to playerWins
    //Display updated playerWins counter in DOM:main
    //Generate a random number between 0 and the length of arrCongrats - 1
    //Retrieve a congratulations message from arrCongrats using the generated random number as the index
    //Assign message to playerWonMsg
    //Alert playerWonMsg
    //Call newGame() function
}

function playerLost() {
    //Add 1 to playerLosses
    //Display updated playerLosses counter in DOM:main
    //Alert "Sorry, better luck next time!"
    //Call newGame() function
}

function newGame() {
    //Reset playerScore =0
    //Generate a random number between 19-120
    //Assign random number to the randomNumber variable and display variable contents in DOM:main
    //Generate 4 random numbers between 1-12 and assign one (1) each to valCrystalBlue, valCrystalGreen, valCrystalRed, and valCrystalGreen
    //Do NOT display the crystals' random number values in the DOM
    //Call playGame() function
}


// Exit Game
/* 12/18/19: Tested and committed. */
/* 
   On Exit button click, alert the contents of the "playerMsgGoodbye" variable.
   Navigate player to the portfolio.html page of my Bootstrap Porfolio.
*/

$("#exitgame").click(function () {

    alert(playerMsgGoodbye);
    window.location.href = 'https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html';
})

/* -------------------------------------------*/
});



// Optional Function Pseudocode
// These are optional, which I will code in the event I have enough time to code them by Sunday.


function promptPlayer() {
    //Prompt player for his or her name and assign to playerName
    //Test input for alpha characters
    //If alpha characters
    //Set playerMsgWelcome to "Welcome " + playerName + "!"
    //Set playerMsgGoodbye to "Goodbye and thanks for playing " + playerName + "!"
    //If null or non-alpha
    //Set playerMsgWelcome to "Welcome!"
    //Set playerMsgGoodbye to 
    //Call initSession() function "Goodbye and thanks for playing!"
}

// console.log standard
/*
    console.log("-------------------")
    console.log("Message" or Variable)
*/
