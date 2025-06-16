var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
  var choice = Math.floor(Math.random(3) * 3);
  console.log(choice);

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
  console.log("You win! " + yourChoice + " beats " + opponentChoice)
}

function displayAsLoser(yourChoice, opponentChoice) {
  console.log("You lose! " + opponentChoice + " beats " + yourChoice);
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (humanChoice == computerChoice) {
    console.log("Tie! No score added")
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);

playRound(humanSelection, computerSelection);
