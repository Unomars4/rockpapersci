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
                playerScore++;
                displayScore(playerEl, playerScore);                
                break;
            case 2:
                computerScore++;
                displayScore(aiEl, computerScore);
                break;
            default:
                break;    
        }
        
        if (playerScore == 5){
        }
        else if (computerScore == 5){
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

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)];    
}

function displayScore(scoreOf, score){
    scoreOf.textContent = `${score}`;
}
