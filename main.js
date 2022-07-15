function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch (random) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "rock";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            result = "You lose! Paper beats rock.";
        } else {
            result = "You win! Rock beats scissors.";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "You lose! Scissors beats paper.";
        } else {
            result = "You win! Paper beats rock.";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "You lose! Rock beats scissors.";
        } else {
            result = "You win! Scissors beats paper.";
        }
    }
    return result;
};

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

game();