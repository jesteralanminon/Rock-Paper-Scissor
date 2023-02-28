// function getComputerChoice() {
//   let computerSelection = "";
//   let randomInt = Math.floor(Math.random() * 3);

//   if (randomInt === 0) {
//     computerSelection = "Rock";
//   } else if (randomInt === 1) {
//     computerSelection = "Paper";
//   } else {
//     computerSelection = "Scissors";
//   }

//   return computerSelection;
// }

// function playerSelection() {
//   let playerInput = prompt("Rock, Paper or Scissors:");
//   let trimmedInput = playerInput.trim();
//   let lowerCaseInput = trimmedInput.toLowerCase();
//   let capitalizedInput =
//     lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);
//   while (!["Rock", "Paper", "Scissors"].includes(capitalizedInput)) {
//     trimmedInput = playerInput.trim();
//     lowerCaseInput = trimmedInput.toLowerCase();
//     capitalizedInput =
//       lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);
//   }
//   return capitalizedInput;
// }

// function playRound(playerSelection, computerSelection) {
//   let roundWinner = "";
//   if (playerSelection === computerSelection) {
//     roundWinner = "It's a draw!";
//   } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
//     roundWinner = "You win! Rock beats Scissors";
//   } else if (playerSelection == "Paper" && computerSelection == "Rock") {
//     roundWinner = "You lose!";
//   } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//     roundWinner = "You win!";
//   }
// }

// console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection) {
//   return console.log("You Lose! Paper beats Rock");
// }

// function game() {
//   playRound();
//   for (let i = 0; i < 5; i++) {
//     console.log();
//   }
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   const options = ["rock", "paper", "scissors"];
//   let userScore = 0;
//   let computerScore = 0;
//   const computerChoice = options[Math.floor(Math.random() * options.length)];
//   for (let i = 0; i < 3; i++) {
//     const userChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();

//     if (options.includes(userChoice)) {
//       if (userChoice === computerChoice) {
//         alert("It's a draw!");
//       } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//       ) {
//         alert(
//           `You win! The computer chose ${computerChoice},  ${userChoice} beats ${computerChoice}.`
//         );
//         userScore++;
//       } else {
//         alert(
//           `You lose! The computer chose ${computerChoice}, ${computerChoice} beats ${userChoice}.`
//         );
//         computerScore++;
//       }
//     } else {
//       alert("Invalid choice. Please choose rock, paper, or scissors.");
//     }
//   }
//   alert(`Your score: ${userScore}\nComputer score: ${computerScore}`);
//   if (userScore === computerScore) {
//     alert("It's a draw!");
//   } else if (userScore > computerScore) {
//     alert("You win against the computer! In your face!");
//   } else if (computerScore > userScore) {
//     alert("You lose against the computer! You suck!");
//   }
// }

// -------------------------------------------------
let playerScore = 0;
let comScore = 0;

function gameFunction(playerSelection) {
  const result = playRound(playerSelection, computerSelection());
  updateScore(result);
  if (playerScore >= 5 || comScore >= 5) {
    endGame();
  }
}

function computerSelection() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function displayMoves(playerSelection, comSelection) {
  // displays selected moves of both player to the input element
  document.getElementById("playerChoice").value = playerSelection;
  document.getElementById("comChoice").value = comSelection;
}

function playRound(playerSelection, comSelection) {
  displayMoves(playerSelection, comSelection);
  if (playerSelection === comSelection) {
    displayResult("tie", "Its a draw!");
    return "tie";
  } else if (
    (playerSelection === "rock" && comSelection === "scissors") ||
    (playerSelection === "scissors" && comSelection === "paper") ||
    (playerSelection === "paper" && comSelection === "rock")
  ) {
    displayResult("win", "You won agaisnt the Computer!");
    return "win";
  } else {
    displayResult("lose", "You lost against the Computer!");
    return "lose";
  }
}

function displayResult(result, msg) {
  const display = document.querySelector("#result");
  display.innerText = msg;

  const classes = display.classList;
  classes.remove(classes.item(0));
  classes.add(result);
}

function updateScore(result) {
  if (result === "win") playerScore++;
  else if (result === "lose") comScore++;

  const liveScore = document.querySelector("h1 span");
  liveScore.innerText = `${playerScore} - ${comScore}`;
}

function endGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });

  // location.reload();
  // setTimeout(500);
}
// game();
