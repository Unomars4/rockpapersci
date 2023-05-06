const choiceBtn = Array.from(document.querySelectorAll(".choice"));

const CHOICES = [{"name":"rock", "img": "👊"}, 
                {"name":"paper", "img": "📃"}, 
                {"name":"scissors","img": "✂️"}];

let playerScore = 0, computerScore = 0, 
playerEl = document.querySelector(".playerScore"),
aiEl = document.querySelector(".computerScore");

displayScore(playerEl, playerScore);
displayScore(aiEl, computerScore);
displayPicks();

choiceBtn.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        let playerChoice = e.target.value, computerChoice = getComputerChoice();
        
        displayPicks(playerChoice, computerChoice);
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
            displayModal("Congrats, You won!");
        }
        else if (computerScore == 5){
            displayModal("Sorry, You lost!");
        } 
    });
});

function playRound(playerSelection, computerSelection){
    if (playerSelection == CHOICES[0]["img"] && computerSelection == CHOICES[1]["img"]){
        return 2;
    }
    else if (playerSelection == CHOICES[1]["img"] && computerSelection == CHOICES[0]["img"]){
        return 1;
    }
    else if (playerSelection == CHOICES[1]["img"] && computerSelection == CHOICES[2]["img"]){
        return 2;
    }
    else if (playerSelection == CHOICES[2]["img"] && computerSelection == CHOICES[1]["img"]){
        return 1;
    }
    else if (playerSelection == CHOICES[0]["img"] && computerSelection == CHOICES[2]["img"]){
        return 1;
    }
    else if (playerSelection == CHOICES[2]["img"] && computerSelection == CHOICES[0]["img"]){
        return 2;
    }
    else {
        return 0;
    }
}

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)]["img"];    
}

function displayScore(scoreOf, score){
    scoreOf.textContent = `${score}`;
}

function displayPicks(playerPick="❔", computerPick="❔") {
    const player = document.querySelector(".playerPick");
    const computer = document.querySelector(".computerPick");
    player.textContent = `${playerPick}`;
    computer.textContent = `${computerPick}`;
}

function displayModal(message) {
    const restart = document.querySelector(".restart");
    const title = document.querySelector(".modal-title");
    const overlay = document.querySelector(".overlay");  
    title.textContent = message;
    overlay.style.display = "flex";

    restart.addEventListener("click", () => {
        playerScore = 0; computerScore = 0;
        displayScore(playerEl, playerScore); displayScore(aiEl, computerScore)
        document.querySelector(".overlay").style.display = "none";
    })
}