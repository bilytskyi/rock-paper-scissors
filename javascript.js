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
        answer = [`You both have ${playerSelection}! This is a DRAW!`, 0, 0];
        return answer;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        answer = [`You LOSE! ${computerSelection} beats ${playerSelection}`, 0, 1];
        return answer;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        answer = [`You WIN! ${playerSelection} beats ${computerSelection}`, 1, 0];
        return answer;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        answer = [`You LOSE! ${computerSelection} beats ${playerSelection}`, 0, 1];
        return answer;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        answer = [`You WIN! ${playerSelection} beats ${computerSelection}`, 1, 0];
        return answer;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        answer = [`You LOSE! ${computerSelection} beats ${playerSelection}`, 0, 1];
        return answer;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        answer = [`You WIN! ${playerSelection} beats ${computerSelection}`, 1, 0];
        return answer;
    }
}

// Function play 5 rounds and track score

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Rock or Paper or Scissors?");
        let roundResult = playRound(playerSelection, getComputerChoice());
        playerScore += roundResult[1];
        computerScore += roundResult[2];
        console.log(roundResult[0]);

    }

    if (playerScore > computerScore) {
        console.log(`You WIN! Score ${playerScore} : ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`You LOSE! Score ${playerScore} : ${computerScore}`);
    }
    else if (playerScore == computerScore) {
        console.log(`DRAW! Score ${playerScore} : ${computerScore}`);
    }
}

//game();

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const info = document.querySelector('.info');
const bot = document.querySelector('.bot');
const human = document.querySelector('.human');

function resetGame() {
    info.textContent = "Try again mortal..";
    bot.textContent = "0";
    human.textContent = "0";
    playerScore = 0;
    computerScore = 0;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let roundResult = playRound(button.className, getComputerChoice());
        playerScore += roundResult[1];
        computerScore += roundResult[2];

        info.textContent = roundResult[0];
        bot.textContent = computerScore;
        human.textContent = playerScore;

        if (playerScore == 5) {
            alert(`You WIN! Score ${playerScore} : ${computerScore}! You spend time in this ugly game, are you sure it's a WIN?`);
            resetGame();
        }
        else if (computerScore == 5) {
            alert(`You spend time in this ugly game! And you LOSE! Score ${playerScore} : ${computerScore}! What a LOSER!`);
            resetGame();
        }
    });
});