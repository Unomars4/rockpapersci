const CHOICES = ["rock", "paper", "scissors"];

console.log(game());

function game(){
    let computerChoice, playerChoice, playerWins = 0, computerWins = 0, roundWinner = 0;

    for (let i = 0; i < 5; i++) {
        do {
            playerChoice = prompt("Rock, Paper or Scissors").toLowerCase();
        }while (validInput(playerChoice));
        computerChoice = getComputerChoice();
        roundWinner = playRound(playerChoice, computerChoice);
        switch (roundWinner) {
            case 1:
                console.log(`You win! Round:${i+1}`);
                playerWins++;
                break;
            case 2:
                console.log(`You lose! Round:${i+1}`);
                computerWins++;
                break;
            default:
                console.log(`It's a tie! Round:${i+1}`);
                break;    
        } 
    }

    if (playerWins > computerWins){
        return `You won the game. ${playerWins} - ${computerWins}`;
    }
    else if (playerWins < computerWins){
        return `You lost the game. ${playerWins} - ${computerWins}`;
    }
    else{
        return `You both drew. ${playerWins} - ${computerWins}`;
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

function validInput(word){
    for (let i = 0, max = CHOICES.length; i < max; i++){
        if (word == CHOICES[i]) return false;
    }
    return true;
}

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)];    
}

