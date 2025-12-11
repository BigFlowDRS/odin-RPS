console.log("Hello World!");

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getConputerChoice(){
    const choice = Math.floor(Math.random()*3);
    return options[choice];
}

function getHumanChoice(){
    return prompt(`What will you choose? ("rock", "paper"or "scissors")"`);
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        return "Draw!";
    }else if((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")){
                humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }else{
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getConputerChoice()));
    }
    if(computerScore == humanScore) console.log("Draw");
    else if(computerScore > humanScore) console.log("You lose the game");
    else console.log("You win!!!!");
}

playGame();