const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const compDisplay = document.getElementById('compDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() *3)];
    result = "";
    if(playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }else {
    switch (playerChoice) {
        case "rock":
           result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
            break;
        case "paper":
           result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
            break;
        case "scissors":
          result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
            break;
    }}
    playerDisplay.innerText = `You picked: ${playerChoice}`;
    compDisplay.innerText = `Computer: ${computerChoice}`;
    resultDisplay.innerText = result;

    switch (result) {
        case "YOU WIN":
            resultDisplay.style.color = 'green';
            break;
        case "YOU LOSE":
            resultDisplay.style.color = 'red';
            break;
        case "IT'S A TIE":
            resultDisplay.style.color = 'green';
            break;
    }
}