const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

const options = [rock, paper, scissors]

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

function getHumanChoice() {
    let done = false
    while (!done) {
        let choice = prompt("What is your choice?")
        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors" ) {
            return choice
        } 
    }
}
