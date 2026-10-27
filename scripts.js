
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

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
    return humanChoice.toLowerCase();
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {

            console.log("It's a tie!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            
            console.log("You win! Rock beats scissors");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;

            console.log("You win! Paper beats rock");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;

            console.log("You win! Scissors beats paper");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;

            console.log("You lose! Rock beats scissors");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;

            console.log("You lose! Paper beats rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;

            console.log("You lose! Scissors beats paper");
        } else {
            console.log("Invalid choice");
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }

}

playGame();