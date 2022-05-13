
function computerPlay(){
    let cpuResult;
    randomNum = Math.random();
    if (randomNum <= 0.33){
        cpuResult = "rock";
    }
    else if (randomNum > 0.33 && randomNum <= 0.66){
        cpuResult = "paper";
    }
    else if (randomNum > 0.66){
        cpuResult = "scissors";
    }
    return cpuResult;
}

function playRound(playerSelection, computerSelection){
    let result;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper"){
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        result = `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = `You win! ${playerSelection} beats ${computerSelection}`
    }    
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result = `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === computerSelection){
        result = `Draw! You both selected ${playerSelection}`
    }
    return result;
}

function game(){
    for (let i = 0; i < 5; i++){
        userPick = prompt().toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(userPick, computerSelection))
    }
}