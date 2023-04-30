const CHOICES = ["rock", "paper", "scissors"];
let playerChoice = CHOICES[0];
let computerChoice = getComputerChoice();


console.log(playRound(playerChoice, computerChoice));


function playRound(playerSelection, computerSelection){
    if (playerSelection == CHOICES[0] && computerSelection == CHOICES[1]){
        return `You lose! Paper beats Rock`;
    }
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[0]){
        return `You Win! Paper beats Rock`;
    }
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[2]){
        return `You lose! Scissors beats Paper`;
    }
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[1]){
        return `You Win! Scissors beats Paper`;
    }
    else if (playerSelection == CHOICES[0] && computerSelection == CHOICES[2]){
        return `You Win! Rock beats Scissors`;
    }
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[0]){
        return `You lose! Rock beats Scissors`;
    }
    else {
        return `It's a draw. You both chose ${playerSelection}`;
    }
}



function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)];    
}

