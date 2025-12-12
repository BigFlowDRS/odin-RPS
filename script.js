const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector(".PlayerScore");
const ComputerScoreDisplay = document.querySelector(".ComputerScore");

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

const resultZone = document.querySelector(".resultZone");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    return options[choice];
}

function displayRoundResult(num, humanChoice, computerChoice){
    if(num == 0){
        p1.textContent = `Draw!!!`;
        p2.textContent = `You both chose ${humanChoice}`;
    }else if(num == 1){
        p1.textContent = `You win!!!`;
        p2.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}`;
    }else{
        p1.textContent = `You lose!!!`;
        p2.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}`;
    }
}
function resetGame() {
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");

    if (humanScore === 5) {
        p3.textContent = "You won the Game!";
        p3.style.color = "green"; 
    } else {
        p3.textContent = "You lost the Game!";
        p3.style.color = "red";
    }

    p4.textContent = "Click anywhere to play again";
    p4.style.fontWeight = "400";

    resultZone.appendChild(p3);
    resultZone.appendChild(p4);

    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;

    setTimeout(() => {
        document.addEventListener("click", () => location.reload());
    }, 100); 
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        displayRoundResult(0,humanChoice,computerChoice);
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")){
                humanScore++;
                displayRoundResult(1,humanChoice,computerChoice);
    }else{
        computerScore++;
        displayRoundResult(2,humanChoice,computerChoice);
    }

    updatescores();
    if(humanScore === 5 || computerScore === 5){
        resetGame();
    } 
}

function updatescores(){
    humanScoreDisplay.textContent = "Player - " + humanScore;
    ComputerScoreDisplay.textContent = "Computer - " + computerScore;
}

rockbtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperbtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsbtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
