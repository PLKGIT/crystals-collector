/* Crystals Collector Game JavaScript*/

$(document).ready(function () {

    /* DOM assignments */

    // Global Variables

    /* Player specific */
    var playerMsgGoodbye = "Thank you for playing!";
    var playerWonMsg;
    var playerScore = 0;
    var playerWins = 0;
    var playerLosses = 0;
    var playerTemp = 0;

    /* Game specific */
    var randomNumber;
    var valCrystalBlue;
    var valCrystalGreen;
    var valCrystalRed;
    var valCrystalYellow;
    // var arrCrystals = ["assets/images/gem_blue.png", "assets/images/gem_green.png", "assets/images/gem_red.png", "assets/images/gem_yellow.png",]
    var arrCongrats = ["Congrats.", "Way to go.", "You're a boss.", "Great job.", "Congratulations.", "Nailed it.", "Way to play.", "Sweet.", "Oh yeah.", "What a whiz you are."]
    var msgArrIndex;

    // Initialize the game
    /* 12/18/19: Tested and committed. */
    /* 
        Display player stats in the DOM (#playerScore, #playerWins, #playerLoses).
        On the initial load, all should be equal to 0.
        Test to ensure the expected values are being appended to the DOM.
        Call the gameNumber () function.
    */

    // console.log("-------Page fully loaded------------")
    // console.log("Ready")

    //Display playerScore to DOM (#score)
    document.getElementById('score').innerHTML = playerScore;
    // console.log("-------playerScore------------")
    // console.log(score)

    //Display playerWins to DOM (#won)
    document.getElementById('won').innerHTML = playerWins;
    // console.log("-------Total Wins------------")
    // console.log(won)

    //Append playerWins to DOM (#won)
    document.getElementById('lost').innerHTML = playerLosses;
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
        return;
    }
    /* -------------------------------------------*/

    // Listen for crystal click events
    /* 12/20/19: Tested and committed. */
    /* 
        //On click, set the playerTemp variable = to the respective crystal's value variable.
        //Call the evaluateScore() function.
    */
    /* Blue Crystal Clicked*/
    $('#blue').click(function (event) {
        // console.log("Blue Clicked");
        playerTemp = valCrystalBlue;
        playerScore += playerTemp;
        $(evaluateScore);
    })

    /* Green Crystal Clicked*/
    $('#green').click(function (event) {
        // console.log("Green Clicked");
        playerTemp = valCrystalGreen;
        playerScore += playerTemp;
        $(evaluateScore);
    })

    /* Red Crystal Clicked*/
    $('#red').click(function (event) {
        // console.log("Red Clicked");
        playerTemp = valCrystalRed;
        playerScore += playerTemp;
        $(evaluateScore);
    })

    /* Yellow Crystal Clicked*/
    $('#yellow').click(function (event) {
        // console.log("Yellow Clicked");
        playerTemp = valCrystalYellow;
        playerScore += playerTemp;
        $(evaluateScore);
    })
    /* -------------------------------------------*/

    // Evaluate the Player's Score after Click
    /* 12/20/19: Tested and committed. */
    /* 01/05/20: Fixed a bug requiring user to click an extra time before they get a game won or lost alert.
    /* 
        //Compare playerScore to randomNumber
            //If playerScore = randomNumber, call playerWon() function
            //If playerScore > randomNUmber, call playerLost() function
            //If playerScore < randonMumber, add playerTemp to the player's Score
                //Display updated playerScore to the DOM (#score)
                //Let the player continue to play
    */
    function evaluateScore (){
        //Check to see whether player won
            //If a win, end play by calling playerWon() function
        if (playerScore === randomNumber) {
            // console.log("Player Won");
            // console.log("Player Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
            $(playerWon);
        //Check to see whether player lost
            //If a loss, end play by calling playerLost() function
        } else if (playerScore > randomNumber) {
            // console.log("Player Lost");
            // console.log("Player Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
            $(playerLost);
        //If no win or loss
            //Add the crystal's value (stored in the playerTemp variable) to the playerScore variable
            //Display the player's score in the DOM
            //Let the player keep playing
        } else {
            // console.log("Keep playing");
            // console.log("Player temp:");
            // console.log(playerTemp);
            // console.log("Player Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
        }
    }
    /* -------------------------------------------*/

    // Player Wins
    /* 12/20/19: Tested and committed. */
    /* 
        //Add 1 to playerWins variable
        //Generate a random number between 0 and the length of arrCongrats - 1 and store in msgArrayIndex variable
        //Retrieve a congratulations message from arrCongrats using the contents of msgArrayIndex as the index
        //Assign the retrieved message to playerWonMsg variable
        //Alert congratulations message
        //Test to make sure all updates are occuring as expected.
        //Call newGame() function
    */

    function playerWon() {
        // Contents of playerWins before adding the win
        // console.log("-----Wins before counter updated---");
        // console.log(playerWins);
        // Add 1 to player's win count
        playerWins = playerWins + 1;
        // console.log("-----Wins after counter updated---");
        // console.log(playerWins);
        // alert("You won!");
        msgArrIndex = Math.floor(Math.random() * arrCongrats.length - 1) + 1;
        // console.log("-----Random Arr Index----");
        // console.log(msgArrIndex);
        // console.log("----- Message at Random Index----");
        // console.log(arrCongrats[msgArrIndex]);
        //Assign the message from arrCongrats at the randomly generated index to playerWonMsg variable
        playerWonMsg=("You won! " + arrCongrats[msgArrIndex]);
        //Alert the message
        alert(playerWonMsg);
        //Call newGame() function
        $(newGame);
    }

    /* -------------------------------------------*/

    // Player Loses
    /* 12/20/19: Tested and committed. */
    /* 
        //Add 1 to player's loss count
        //Alert "Sorry, better luck next time!"
        //Test to make sure all updates are occuring as expected.
        //Call newGame() function
    */

    function playerLost() {
        // Contents of playerLosses before adding the loss
        // console.log("-----Losses before counter updated---");
        // console.log(playerLosses);
        // Add to player's win count
        playerLosses = playerLosses + 1;
        // console.log("-----Losses after counter updated---");
        // console.log(playerLosses);
        //Alert a sorry you lost message
        alert("Sorry, but you lost.  Better luck next time!");
        //Call newGame() function
        $(newGame);
    }

    /* -------------------------------------------*/

    // New Game
    /* 12/20/19: Tested and committed. */
    /* 
       On win or loss, reset the playerScore to 0.
       Update the DOM with the players's updated win/loss totals from the playerWins and playerLosses variables.
       Test to make sure all updates are occuring as expected.
       Call the gameNumbers() function.
    */

    function newGame() {

        // Contents of playerTemp before reset
        // console.log("-----Temp before reset");
        // console.log(playerTemp);

        //Reset playerTemp
        playerTemp = 0;

        // Contents of playerTemp after reset
        // console.log("-----Temp after reset");
        // console.log(playerTemp);

        // Contents of playerScore before reset
        // console.log("-----Score before reset");
        // console.log(playerScore);

        //Reset playerScore
        playerScore = 0;

        // Contents of playerScore before reset
        // console.log("-----Score after reset");
        // console.log(playerScore);

         //Update playerScore to DOM (#score)
        document.getElementById('score').innerHTML = playerScore;
        // console.log("-------playerScore------------")
        // console.log(score)

        //Update playerWins in the DOM (#won)
        document.getElementById('won').innerHTML = playerWins;
        // console.log("-------Total Wins------------")
        // console.log(won)

        //Update playerLosses in the DOM (#loss)
        document.getElementById('lost').innerHTML = playerLosses;
        // console.log("-------Total Losses------------")
        // console.log(lost)

        //Call gameNumber() function
        $(gameNumbers);
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
