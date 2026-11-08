let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    if (randomIndex === 0) {
        return "rock";
    } else if (randomIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }

    if (humanChoice === computerChoice) {
        message.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        message.textContent = "You win! Rock beats scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        message.textContent = "You win! Paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        message.textContent = "You win! Scissors beats paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        message.textContent = "You lose! Rock beats scissors";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        message.textContent = "You lose! Paper beats rock";
    } else {
        computerScore++;
        message.textContent = "You lose! Scissors beats paper";
    }
    updateScore();

    if (humanScore === 5) {
        message.textContent = "You won the game!";
    } else if (computerScore === 5) {
        message.textContent = "You lost the game!";
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const div = document.createElement("div");

 document.body.appendChild(div);

function updateScore() {
    div.innerHTML = `
        <h1>Score first to 5 points!</h1>
        <p>Human: ${humanScore}</p>
        <p>frankieLottie: ${computerScore}</p>
    `;
}



const message = document.createElement("div");


document.body.appendChild(message);

updateScore();