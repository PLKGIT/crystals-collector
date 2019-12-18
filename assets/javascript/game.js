/* Crystals Collector Game JavaScript*/

// Global Variables

/* Player specific */
var playerName;
var playerMsgWelcome;
var playerMsgGoodbye;
var playerWonMsg;
var playerScore=0;
var playerWins=0;
var playerLosses=0;

/* Game specific */
var randomNumber;
var valCrystalBlue;
var valCrystalGreen;
var valCrystalRed;
var valCrystalYellow;
var arrCrystals=["assets/images/gem_blue.png","assets/images/gem_green.png","assets/images/gem_red.png","assets/images/gem_yellow.png",]
var arrCongrats=["Congrats!","Way to go!","You're a boss!", "Great job!","Congratulations","Nailed it!","Way to play!" "Sweet!", "Oh yeah!", "What a whiz you are!"]

/* DOM assignments */


// Function Pseudocode

function promptPlayer (){
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

function initSession(){
    //Display contents of playerMsg in DOM:header
    //Generate a random number between 19-120 for the first game
        //Assign random number to the randomNumber variable and display variable contents in DOM:main
    //Generate 4 random numbers between 1-12 and assign one (1) each to valCrystalBlue, valCrystalGreen, valCrystalRed, and valCrystalGreen
        //Do NOT display the crystals' random number values in the DOM
    //Display playerWins contents in DOM:main
    //Display playerLosses contents in DOM:main
    //Set an event listner for the exit button
    //Set onclick event listeners for the four (4) crystals
    //Call playGame() function
}

function playGame(){
    //While playerScore < randomNumber
        //On Crystal click, add its associate random number to playerScore
        //Compare playerScore to randomNumber
            //If playerScore = randomNumber, call playerWon
            //If playerScore > randomNUmber, call playerLost
}

function playerWon(){
    //Add 1 to playerWins
        //Display updated playerWins counter in DOM:main
    //Generate a random number between 0 and the length of arrCongrats - 1
        //Retrieve a congratulations message from arrCongrats using the generated random number as the index
        //Assign message to playerWonMsg
        //Alert playerWonMsg
    //Call newGame() function
}

function playerLost(){
    //Add 1 to playerLosses
        //Display updated playerLosses counter in DOM:main
    //Alert "Sorry, better luck next time!"
    //Call newGame() function
}

function newGame(){
    //Reset playerScore =0
    //Generate a random number between 19-120
        //Assign random number to the randomNumber variable and display variable contents in DOM:main
    //Generate 4 random numbers between 1-12 and assign one (1) each to valCrystalBlue, valCrystalGreen, valCrystalRed, and valCrystalGreen
        //Do NOT display the crystals' random number values in the DOM
    //Call playGame() function
}

function exitGame(){
    //On Exit button click, alert "playerMsg2"
    //Navigate Player to 
}