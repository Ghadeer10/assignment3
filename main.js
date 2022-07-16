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
    if (playerSelection == null) {
        return "enough of this";
    }
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
    } else {
        result = "Please enter a valid choice.";
    }
    return result;
};

function game() {
    let computerWins = 0, playerWins = 0;
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt(`Round ${i} Rock, paper, or scissors?`);
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == "You win! Rock beats scissors." || result == "You win! Paper beats rock." || result == "You win! Scissors beats paper.") {
            playerWins++;
        } else if (result == "You lose! Paper beats rock." || result == "You lose! Scissors beats paper." || result == "You lose! Rock beats scissors.") {
            computerWins++;
        } else if (result == "Please enter a valid choice.") {
            i--;
        } else if (result == "enough of this") {
            break;
        }
        console.log(result);
    }
    console.log(`your wins: ${playerWins} while computer wins: ${computerWins}`);
    if (playerWins > computerWins) {
        console.log("You win! You beat the computer!");
    }
    else if (playerWins < computerWins) {
        console.log("You lose! The computer beat you!");
    } else {
        console.log("It's a tie!");
    }
}

game();
