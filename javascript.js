var humanScore = 0;
var computerScore = 0;

var humanDisplayScore = document.querySelector(".player");
var computerDisplayScore = document.querySelector(".cpu");

const rock = document.querySelector(".rock");
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function getComputerChoice() {
  var choice = Math.floor(Math.random(3) * 3);

  if (choice == 0) {
    return "Rock";
  }

  if (choice == 1) {
    return "Paper";
  }

  if (choice == 2) {
    return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice:");
}

function displayAsWinner(yourChoice, opponentChoice) {
  alert("You win! " + yourChoice + " beats " + opponentChoice)
}

function displayAsLoser(yourChoice, opponentChoice) {
  alert("You lose! " + opponentChoice + " beats " + yourChoice);
}

function chooseRock(opponentChoice) {
  if (opponentChoice == "Scissors") {
    displayAsWinner("Rock", opponentChoice);
    humanScore++;
  }

  if (opponentChoice == "Paper") {
    displayAsLoser("Rock", opponentChoice);
    computerScore++;
  }
}

function chooseScissors(opponentChoice) {
  if (opponentChoice == "Paper") {
    displayAsWinner("Scissors", opponentChoice);
    humanScore++;
  }

  if (opponentChoice == "Rock") {
    displayAsLoser("Scissors", opponentChoice);
    computerScore++;
  }
}

function choosePaper(opponentChoice) {
  if (opponentChoice == "Rock") {
    displayAsWinner("Paper", opponentChoice);
    humanScore++;
  }

  if (opponentChoice == "Scissors") {
    displayAsLoser("Paper", opponentChoice);
    computerScore++;
  }
}

function checkWinner() {
  if (humanScore >= 5) {
    alert("You win the game!")
    humanScore = 0;
    computerScore = 0;

    humanDisplayScore.textContent = "Player: " + humanScore;
    computerDisplayScore.textContent = "CPU: " + computerScore;
  } else if (computerScore >= 5) {
    alert("You lose the game!")
    humanScore = 0;
    computerScore = 0;

    humanDisplayScore.textContent = "Player: " + humanScore;
    computerDisplayScore.textContent = "CPU: " + computerScore;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (humanChoice == computerChoice) {
    alert("Tie! No score added");
  }

  if (humanChoice == "Rock") {
    chooseRock(computerChoice);
  }

  if (humanChoice == "Scissors") {
    chooseScissors(computerChoice);
  }

  if (humanChoice == "Paper") {
    choosePaper(computerChoice);
  }

  humanDisplayScore.textContent = "Player: " + humanScore;
  computerDisplayScore.textContent = "CPU: " + computerScore;

  checkWinner();
}  

rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});

