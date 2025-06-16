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
