const btn = document.querySelectorAll('.btn');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scisBtn = document.querySelector('#scissors');
rockBtn.onclick = () => playerSelection = 'rock';
paperBtn.onclick = () => playerSelection = 'paper';
scisBtn.onclick = () => playerSelection = 'scissors';
btn.forEach(btn => btn.addEventListener('click', playRound));

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
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log(`Tie Game! You played ${playerSelection}, computer played ${computerSelection}`)
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`You win! You played ${playerSelection}, computer played ${computerSelection}`)
        winner = true; return winner;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log(`You lose! You played ${playerSelection}, computer played ${computerSelection}`)
        winner = false; return winner;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log(`You lose! You played ${playerSelection}, computer played ${computerSelection}`)
        winner = false; return winner;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You win! You played ${playerSelection}, computer played ${computerSelection}`)
        winner = true; return winner;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log(`You lose! You played ${playerSelection}, computer played ${computerSelection}`)
        winner = true; return winner;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You win! You played ${playerSelection}, computer played ${computerSelection}`)
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
        playerSelection = getPlayerChoice()
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