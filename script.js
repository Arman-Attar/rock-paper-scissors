const rock = "rock"
const paper = "paper"
const scissors = "scissors"

const options = [rock, paper, scissors]

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

function getHumanChoice() {
    let done = false
    while (!done) {
        let choice = prompt("What is your choice?").toLowerCase()
        if (choice === "rock" || choice === "paper" || choice === "scissors" ) {
            return choice
        } 
    }
}

function playRound() {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    let result = ""
    if (humanSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats Rock"
        computerScore++
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats Rock"
        humanScore++
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors"
        humanScore++
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats Paper"
        computerScore++
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors"
        computerScore++
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats Paper"
        humanScore++
    } else {
        result = "It's a draw!"
    }
    return result
}


function playGame() {

    for (let index = 0; index < 5; index++) {
        console.log(playRound());
        console.log("Player score is: " + humanScore)
        console.log("Computer score is: " + computerScore)
    }
}

playGame()

