var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
  var choice = Math.random(3);

  if (choice == 0) {
    return "rock";
  }

  if (choice == 1) {
    return "paper";
  }

  if (choice == 2) {
    return "scissors";
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
  humanChoice = humanChoice[0].toUpperCase + humanChoice.slice(1).toLowerCase;
  computerChoice = computerChoice[0].toUpperCase + computerChoice.slice(1).toLowerCase;

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
  }

  if (opponentChoice == "Paper") {
    displayAsLoser("Rock", opponentChoice);
  }
}

function chooseScissors(opponentChoice) {
  if (opponentChoice == "Paper") {
    displayAsWinner("Scissors", opponentChoice);
  }

  if (opponentChoice == "Rock") {
    displayAsLoser("Scissors", opponentChoice);
  }
}

function choosePaper(opponentChoice) {
  if (opponentChoice == "Rock") {
    displayAsWinner("Paper", opponentChoice);
  }

  if (opponentChoice == "Scissors") {
    displayAsLoser("Paper", opponentChoice);
  }
}
