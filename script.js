// SET UP VARIABLES //

const options = document.getElementsByClassName("option");
const playGame = document.getElementById("play-game").addEventListener("click", game);
const checkChoice = document.getElementById("check").addEventListener("click", checkMe);
let playerSelection;
let playerScore = 0;
let computerScore = 0;

// BUTTON FUNCTIONALITY //

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", storeChoice);
}

function storeChoice() {
    playerSelection = this.value;
    console.log('player chose ' + playerSelection);
}   

function checkMe () {
    console.log('you chose ' + playerSelection);
}

// GAME LOGIC //

function computerPlay() { // computer input
    let num = Math.floor(Math.random()*3); // random number between 0 and 2
    if (num === 0) { // 0 = rock
        return 'rock';
    } else if (num === 1) { // 1 = paper
        return 'paper';
    } else { // 2 = scissors
        return 'scissors';
    }
}

function playRound() { // play one round of a game
    let computerSelection = computerPlay();

    // console.log(`player chose: ${playerSelection}`);
    // console.log(`computer chose: ${computerSelection}`);
    
    if (playerSelection === computerSelection) {
        // console.log('it\'s a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        // console.log(`you win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore += 1;
        // console.log(`you lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    playRound();
    console.log(`SCOREBOARD: \n PLAYER SCORE: ${playerScore}, COMPUTER SCORE: ${computerScore}`)
    checkScore(playerScore, computerScore);
}

function checkScore(playerScore, computerScore) {
    if (playerScore === 3) {
        console.log('Game Over, you are the winner!');
    } else if (computerScore === 3) {
        console.log('Game Over, you lose!');
    }
}