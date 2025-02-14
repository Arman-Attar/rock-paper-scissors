const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const options = [rock, paper, scissors];

let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";

const results = document.querySelector("#results");
const humanScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function updateScore(result) {
  results.innerText = result;
  humanScoreDisplay.innerHTML = "Player: " + humanScore;
  computerScoreDisplay.innerHTML = "Computer: " + computerScore;
  isGameFinished()
}


function playRound() {
  let result = "";
  if (humanSelection === "rock" && computerSelection === "paper") {
    result = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    result = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    result = "You lose! Scissors beats Paper";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    result = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    result = "You win! Scissors beats Paper";
    humanScore++;
  } else {
    result = "It's a draw!";
  }
  updateScore(result)
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore == 5 || computerScore == 5) {
      humanScore = 0
      computerScore = 0
    }
    humanSelection = button.id;
    computerSelection = getComputerChoice();
    playRound();
  });
});

function isGameFinished() {
  if (computerScore == 5 || humanScore == 5) {
    results.innerText = computerScore > humanScore ? "You Lose!" : "You Won!";
  }
}

