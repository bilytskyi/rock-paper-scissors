// Function return random word from set (rock, papper, scissors)

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

// Function plays 1 round

function playRound(playerSelection, computerSelection) {

    let answer;
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        answer = `You both have ${playerSelection}! This is a DRAW!`;
        console.log(answer);
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        answer = `You LOSE! ${computerSelection} beats ${playerSelection}`;
        console.log(answer);
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        answer = `You WIN! ${playerSelection} beats ${computerSelection}`;
        console.log(answer);
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        answer = `You LOSE! ${computerSelection} beats ${playerSelection}`;
        console.log(answer);
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        answer = `You WIN! ${playerSelection} beats ${computerSelection}`;
        console.log(answer);
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        answer = `You LOSE! ${computerSelection} beats ${playerSelection}`;
        console.log(answer);
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        answer = `You WIN! ${playerSelection} beats ${computerSelection}`;
        console.log(answer);
    }
}

let myChoice = "rOcK";

playRound(myChoice, getComputerChoice());
