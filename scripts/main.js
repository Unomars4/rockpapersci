const CHOICES = ["rock", "paper", "scissors"];









function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 10 % 3)];    
}

