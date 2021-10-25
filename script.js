let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const results_div = document.getElementById('results');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const reset_button = document.getElementById('reset-button');

// // //

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = `${userChoice} beats ${computerChoice}. You win! 👍`
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 500);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = `${userChoice} loses to ${computerChoice}. You lose... 😥`
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    results_div.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw. ⚔️`
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 500);
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    const choices = ['rock', 'paper', 'scissors'];
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 

    switch(userChoice+computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }

    if (userScore == 5 || computerScore == 5) {
        results_div.innerHTML='Game Over!'
        return;
    };
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = 'Please make a selection.'
}

function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    reset_button.addEventListener('click', () => resetGame());
}

function checkScore() {
    if (userScore === 5) {
        results_div.innerHTML = "Congratulations! You won!";
        return;
    } else if (computerScore === 5) {
        results_div.innerHTML = "Sorry, you lost."
        return;
    } else {
        return;
    }
}
main();
