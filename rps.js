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
        case 1:
            return 1;
        case 2:
            return 2;
    }
};

function playRound(computerSelection) {
    let playerSelection = prompt("Let's play Rock, Paper, Scissors!\n\nEnter 0 for rock\nEnter 1 for paper\nEnter 2 for scissors");

    let item;
    switch (true) {
        case playerSelection == 0:
            item = "rock";
            break;
        case playerSelection == 1:
            item = "paper";
            break;
        case playerSelection == 2:
            item = "scisors";
            break;
    }

    if (playerSelection == computerSelection) {
        return "Its a Tie! You both chose " + item + ". Play again!";
    } else if (playerSelection == 0 && computerSelection == 1) {
        return "You chose " + item + ".The computer chose paper. You lose!";
    } else if (playerSelection == 0 && computerSelection == 2) {
        return "You chose " + item + ".The computer chose scissors. You win!";
    } else if (playerSelection == 1 && computerSelection == 2) {
        return "You chose " + item + ".The computer chose scissors. You lose!";
    } else if (playerSelection == 1 && computerSelection == 0) {
        return "You chose " + item + ".The computer chose rock. You win!";
    } else if (playerSelection == 2 && computerSelection == 1) {
        return "You chose " + item + ".The computer chose paper. You win!";
    } else if (playerSelection == 2 && computerSelection == 0) {
        return "You chose " + item + ". The computer chose rock. You lose!";
    };
};

let computerChoiceWord;
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection));