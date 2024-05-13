function play() {
  let name = prompt("Enter your name:","Ayush");
  document.querySelector("#name").innerHTML = name;
  document.querySelector("#msg").innerHTML='Play again';

  let userScore = 0;
  let cmpScore = 0;

  const arr = ['rock', 'paper', 'scissors'];

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  rock.addEventListener('click', function () {
    playGame('rock');
  });

  paper.addEventListener('click', function () {
    playGame('paper');
  });

  scissors.addEventListener('click', function () {
    playGame('scissors');
  });

  function playGame(userChoice) {
    const ran = Math.floor(Math.random() * 3);
    const cmpChoice = arr[ran];

    if (userChoice === cmpChoice) {
      // Draw
      document.querySelector("#sms").innerHTML = "Match draw";
    } else if ((userChoice === "rock" && cmpChoice === "scissors") ||
      (userChoice === "paper" && cmpChoice === "rock") ||
      (userChoice === "scissors" && cmpChoice === "paper")) {
      // User wins
      userScore++;
      document.querySelector("#userScore").innerHTML = userScore;
      document.querySelector("#sms").innerHTML = "You win!";
    } else {
      // Computer wins
      cmpScore++;
      document.querySelector("#score").innerHTML = cmpScore;
      document.querySelector("#sms").innerHTML = "You lose!";
    }
  }
}
