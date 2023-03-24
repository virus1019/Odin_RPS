const btn = document.querySelectorAll('.btn');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scisBtn = document.querySelector('#scissors');
rockBtn.onclick = () => playerSelection = 'rock';
paperBtn.onclick = () => playerSelection = 'paper';
scisBtn.onclick = () => playerSelection = 'scissors';
btn.forEach(btn => btn.addEventListener('click', playRound));

//

let result = document.getElementById("result").textContent;


function getComputerChoice (){
    randomRPS = Math.floor(Math.random() * 3);
    if (randomRPS == 0){
        computerSelection = 'rock';
    }
    else if (randomRPS == 1){
        computerSelection = 'paper'
    }
    else if (randomRPS == 2){
        computerSelection = 'scissors'
    }
    return computerSelection
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        result = `Tie Game! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        result = `You win! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
        winner = true; return winner;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        result = `You lose! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
        winner = false; return winner;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        result = `You lose! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
        winner = false; return winner;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        result = `You win! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
        winner = true; return winner;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        result = `You lose! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
        winner = true; return winner;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        result = `You win! You played ${playerSelection}, computer played ${computerSelection}`
        document.getElementById("result").textContent = result;
        winner = false; return winner;
    }
}


function inputGameNumber(){
    let invalidInput = true;
    while(invalidInput = true)
    { 
        inputString = prompt("How many games between 1 and 10?");
        let inputNumber = parseInt(inputString);
        let intCheck = Number.isInteger(inputNumber)
        
        if (intCheck == true && inputNumber >= 1 && inputNumber <= 10)
        {
            invalidInput = false;
            return inputNumber;
        }
    }
}

function playRound(){
    computerChoice = getComputerChoice()
    winner = checkWinner(playerSelection, computerChoice)
}

function playGame(){
    let playerScore = 0; 
    let computerScore = 0;
    inputNumber = inputGameNumber();
    
    for (i = 0; i < inputNumber; i++){
        computerChoice = getComputerChoice()
        //playerSelection = getPlayerChoice() - unnecessary since button click does this now
        winner = checkWinner(playerSelection, computerChoice)

        if (winner == true) {
            playerScore++;
        }
        else if (winner == false) {
            computerScore++;
        }
        if (i == (inputNumber - 1)){
            if (playerScore === computerScore){console.log(`Tie Game! Your Score ${playerScore}, Computer Score: ${computerScore}`)}
            else if(playerScore > computerScore ){console.log(`You Win! Your Score ${playerScore}, Computer Score: ${computerScore}`)}
            else if(playerScore < computerScore ){console.log(`You Lose! Your Score ${playerScore}, Computer Score: ${computerScore}`)}
        }
    }
}














//function no longer needed as no longer text input; button input instead
/*
function getPlayerChoice(){
    while(invalidInput = true)
    { 
        input = prompt("Rock, Paper, or Scissors?");
        playerSelection  = input.toLowerCase();
        
        if (playerSelection  === 'rock' || playerSelection  === 'paper' || playerSelection  === 'scissors')
        {
            invalidInput = false;
            return playerSelection;
        }
    }
}*/
