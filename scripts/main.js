const CHOICES = ["rock", "paper", "scissors"];


function game(){
    let playerWins = 0, computerWins = 0, roundWinner = 0;
    let playerChoice = prompt("Rock, Paper or Scissors").toLowerCase;
    let computerChoice = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        roundWinner = playRound(playerChoice, computerChoice);
        if (roundWinner == 1) {
            console.log(`You win! `);
            playerWins += 1;
        }
        else if (roundWinner == 2) {
            console.log(`You lose! `);
            computerWins += 1;
        }
        else{
            console.log(`It's a tie!`);
        }
    }
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == CHOICES[0] && computerSelection == CHOICES[1]){
        return 2;
    }
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[0]){
        return 1;
    }
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[2]){
        return 2;
    }
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[1]){
        return 1;
    }
    else if (playerSelection == CHOICES[0] && computerSelection == CHOICES[2]){
        return 1;
    }
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[0]){
        return 2;
    }
    else {
        return 0;
    }
}



function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)];    
}

