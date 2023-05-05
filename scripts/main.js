const choiceBtn = Array.from(document.querySelectorAll(".choice"));
const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0, 
playerEl = document.querySelector(".playerScore"),
aiEl = document.querySelector(".computerScore");

displayScore(playerEl, playerScore);
displayScore(aiEl, computerScore);

choiceBtn.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        let playerChoice = e.target.value, computerChoice = getComputerChoice();
        
        roundWinner = playRound(playerChoice, computerChoice);
        
        switch (roundWinner) {
            case 1:
                logActions(`You win this round`);
                playerScore++;
                displayScore(playerEl, playerScore);                
                break;
            case 2:
                logActions(`You lose this round`);
                computerScore++;
                displayScore(aiEl, computerScore);
                break;
            default:
                logActions(`It's a tie this round`);
                break;    
        }
        
        if (playerScore == 5){
            logActions(`You won the game. ${playerScore} - ${computerScore}`);
        }
        else if (computerScore == 5){
            logActions(`You lost the game. ${playerScore} - ${computerScore}`);
        } 
    });
});

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

function logActions(message) {
    const p = document.createElement("p");
    const display = document.querySelector(".actions");
    p.textContent = `${message}`;
    p.classList.add("action");
    display.appendChild(p);
}

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)];    
}

function displayScore(scoreOf, score){
    scoreOf.textContent = `${score}`;
}
