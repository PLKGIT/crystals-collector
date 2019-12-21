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

    /* Game specific */
    var randomNumber;
    var valCrystalBlue;
    var valCrystalGreen;
    var valCrystalRed;
    var valCrystalYellow;
    // var arrCrystals = ["assets/images/gem_blue.png", "assets/images/gem_green.png", "assets/images/gem_red.png", "assets/images/gem_yellow.png",]
    var arrCongrats = ["Congrats!", "Way to go!", "You're a boss!", "Great job!", "Congratulations", "Nailed it!", "Way to play!", "Sweet!", "Oh yeah!", "What a whiz you are!"]

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
        console.log("-------Random Number------------");
        console.log(randomNumber);
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

    // Play the Game
    /* DATE: Tested and committed. */
    /* 
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
    */
    /* Blue Crystal Clicked*/
    $('#blue').click(function (event) {
        // console.log("Blue Clicked");
        if (playerScore === randomNumber) {
            // console.log("Player Won");
            // console.log("Score:");
            // console.log(playerScore);
            playerWon();
        } else if (playerScore > randomNumber) {
            // console.log("Player Lost");
            // console.log("Score:");
            // console.log(playerScore);
            playerLost();
        } else {
            playerScore += valCrystalBlue;
            // console.log("Keep playing");
            // console.log("Crystal Value:");
            // console.log(valCrystalBlue);
            // console.log("Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
        }

    })
    /* Green Crystal Clicked*/
    $('#green').click(function (event) {
        // console.log("Green Clicked");
        if (playerScore === randomNumber) {
            // console.log("Player Won");
            // console.log("Score:");
            // console.log(playerScore);
            playerWon();
        } else if (playerScore > randomNumber) {
            // console.log("Player Lost");
            // console.log("Score:");
            // console.log(playerScore);
            playerLost();
        } else {
            playerScore += valCrystalGreen;
            // console.log("Keep playing");
            // console.log("Crystal Value:");
            // console.log(valCrystalGreen);
            // console.log("Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
        }

    })
    /* Red Crystal Clicked*/
    $('#red').click(function (event) {
        // console.log("Red Clicked");
        if (playerScore === randomNumber) {
            // console.log("Player Won");
            // console.log("Score:");
            // console.log(playerScore);
            playerWon();
        } else if (playerScore > randomNumber) {
            // console.log("Player Lost");
            // console.log("Score:");
            // console.log(playerScore);
            playerLost();
        } else {
            playerScore += valCrystalRed;
            // console.log("Keep playing");
            // console.log("Crystal Value:");
            // console.log(valCrystalRed);
            // console.log("Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
        }

    })
    /* Yellow Crystal Clicked*/
    $('#yellow').click(function (event) {
        // console.log("Yellow Clicked");
        if (playerScore === randomNumber) {
            // console.log("Player Won");
            // console.log("Player Score:");
            // console.log(playerScore);
            playerWon();
        } else if (playerScore > randomNumber) {
            // console.log("Player Lost");
            // console.log("Player Score:");
            // console.log(playerScore);
            playerLost();
        } else {
            playerScore += valCrystalYellow;
            // console.log("Keep playing");
            // console.log("Crystal Value:");
            // console.log("valCrystalYellow);
            // console.log("Player Score:");
            // console.log(playerScore);
            document.getElementById('score').innerHTML = playerScore;
        }
    })
    /* -------------------------------------------*/

    // Player Wins
    /* 12/20/19: Tested and committed. */
    /* 
        //Add 1 to playerWins variable
        //Generate a random number between 0 and the length of arrCongrats - 1
        //Retrieve a congratulations message from arrCongrats using the generated random number as the index
        //Assign message to playerWonMsg
        //Alert playerWonMsg
        //Call newGame() function
    */

    function playerWon() {
        // Contents of playerWins before adding the win
        // console.log("-----Wins before counter updated");
        // console.log(playerWins);
        // Add to player's win count
        playerWins = playerWins + 1;
        // console.log("-----Wins after counter updated");
        // console.log(playerWins);
        // alert("You won!");
        playerWonMsg = Math.floor(Math.random() * arrCongrats.length - 1) + 1;
        alert(arrCongrats[playerWonMsg]);
        $(newGame);
    }

    /* -------------------------------------------*/

    // Player Loses
    /* 12/20/19: Tested and committed. */
    /* 
        //Add 1 to playerLosses
        //Alert "Sorry, better luck next time!"
        //Test to make sure all updates are occuring as expected.
        //Call newGame() function
    */

    function playerLost() {
        // Contents of playerLosses before adding the loss
        // console.log("-----Losses before counter updated");
        // console.log(playerLosses);
        // Add to player's win count
        playerLosses = playerLosses + 1;
        // console.log("-----Losses after counter updated");
        // console.log(playerLosses);
        alert("Better luck next time!");
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
        // Contents of playerScore before reset
        // console.log("-----Score before reset");
        // console.log(playerScore);

        //Reset playerScore = 0
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
