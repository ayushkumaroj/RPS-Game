let score1 = 0;
let score2 = 0;
const ch = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const score1Para = document.querySelector("#user-score");
const score2Para = document.querySelector("#comp-score");
const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const draw = () => {
  message.innerText = "Play Again";
  message.style.backgroundColor = "#081b31";
};
const displayWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    score1++;
    score1Para.innerText = score1;
    message.innerText = `Aap Jitt gye ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    score2++;
    score2Para.innerText = score2;
    message.innerText = `Aap Haar gye ${compChoice} beats Apka ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};
const playRound = (userChoice) => {
  
  const compChoice = generateCompChoice();

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {

      userWin = compChoice === "scissors" ? false : true;
    } else {
      
      userWin = compChoice === "rock" ? false : true;
    }
    displayWinner(userWin, userChoice, compChoice);
  }
};
ch.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playRound(userChoice);
  });
});

function play(){
    let name = prompt("Enter your name");
    document.querySelector("#name").innerHTML=name;
}