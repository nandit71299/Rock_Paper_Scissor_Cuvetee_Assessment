const root = document.getElementById("root");
root.style.backgroundColor = "#8CC461";

const rulesBtn = document.getElementById("rules-btn");
const rules = document.getElementById("rules");
const rulesContainer = document.getElementById("rulesContainer");
rulesBtn.addEventListener("click", () => {
  let currentState = rulesContainer.classList.contains("d-none");
  currentState
    ? rulesContainer.classList.remove("d-none")
    : rulesContainer.classList.add("d-none");
});

const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  rulesContainer.classList.add("d-none");
});

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");

let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

userScoreElement.textContent = userScore;
computerScoreElement.textContent = computerScore;

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissor.addEventListener("click", () => playGame("scissor"));

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    result = "win";
    userScore++;
    localStorage.setItem("userScore", userScore);
  } else {
    result = "lose";
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
  }

  localStorage.setItem("result", result);
  localStorage.setItem("userChoice", userChoice);
  localStorage.setItem("computerChoice", computerChoice);

  // Redirect to result page
  window.location.href = "result.html";
}

document.getElementById("reset-score").addEventListener("click", () => {
  localStorage.setItem("computerScore", 0);
  localStorage.setItem("userScore", 0);
  location.reload();
});
