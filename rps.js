//initialize computer player's random selection for RPS in the correct scope
let computerChoice;

// Function that randomly selects rock paper or scissors and assigns it to the computerChoice variable
function getComputerChoice() {
    
    // This function randomly selects a number between 0 and 2
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };

    // switch fuction to convert the random number into RPS
    switch (getRandomInt(3)) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

};

function playRound() {
    let playerSelection = prompt("Let's play Rock, Paper, Scissors!\n\nEnter 1 for rock\nEnter 2 for paper\nEnter 3 for scissors");

    return playerSelection;
};