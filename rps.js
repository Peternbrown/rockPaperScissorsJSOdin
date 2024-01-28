// Function that randomly selects rock paper or scissors and assigns it to the computerChoice variable
function getComputerChoice() {
    
    // This function randomly selects a number between 0 and 2
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };

    // switch fuction to convert the random number into RPS
    switch (getRandomInt(3)) {
        case 0:
            return 0;
            computerChoiceWord = "rock";
            break;
        case 1:
            return 1;
            computerChoiceWord = "paper";
            break;
        case 2:
            return 2;
            computerChoiceWord = "scissors";
            break;
    }
};

function playRound(computerSelection) {
    let playerSelection = prompt("Let's play Rock, Paper, Scissors!\n\nEnter 0 for rock\nEnter 1 for paper\nEnter 2 for scissors");

    if (playerSelection === computerSelection) {
        return concat("Its a Tie! You both chose ", computerChoiceWord, ". Play again!");
    } else if (playerSelection == 0 && computerSelection == 1) {
        return "The computer chose paper. You lose!";
    } else if (playerSelection == 0 && computerSelection == 2) {
        return "The computer chose scissors. You win!";
    } else if (playerSelection == 1 && computerSelection == 2) {
        return "The computer chose scissors. You lose!";
    } else if (playerSelection == 1 && computerSelection == 0) {
        return "The computer chose rock. You win!";
    } else if (playerSelection == 2 && computerSelection == 1) {
        return "The computer chose paper. You win!";
    } else if (playerSelection == 2 && computerSelection == 0) {
        return "The computer chose rock. You lose!";
    };
};

let computerChoiceWord;
const computerSelection = 0;
console.log(playRound(computerSelection));