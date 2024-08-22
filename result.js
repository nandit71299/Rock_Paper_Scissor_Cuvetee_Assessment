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

document.addEventListener("DOMContentLoaded", () => {
  const userChoice = localStorage.getItem("userChoice");
  const computerChoice = localStorage.getItem("computerChoice");
  const result = localStorage.getItem("result");

  const computerScore = localStorage.getItem("computerScore");
  const userScore = localStorage.getItem("userScore");

  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("user-score").innerText = userScore;

  const userChoiceImg = document.getElementById("user-choice-img");
  const computerChoiceImg = document.getElementById("computer-choice-img");
  const resultText = document.getElementById("result-text");
  const userSide = document.getElementById("user-side");
  const computerSide = document.getElementById("computer-side");
  const playAgainBtn = document.getElementById("play-again-btn");

  // Update images based on the choices
  userChoiceImg.src = `${userChoice}.png`; // Assuming you have images named 'rock.png', 'paper.png', 'scissor.png'
  computerChoiceImg.src = `${computerChoice}.png`;

  // Display result
  resultText.innerHTML =
    result === "tie"
      ? "TIE UP"
      : result === "win"
      ? "YOU WIN <br> AGAINST PC"
      : "YOU LOOSE <br> AGAINST PC";

  // Change background color based on the result
  if (result === "win") {
    // userSide.style.border = "20px solid red !important";
    document.getElementById("userbg-1").classList.add("winner-animation");
    document.getElementById("next-btn").classList.remove("invisible");
  } else if (result === "lose") {
    document.getElementById("computerSide-1").classList.add("winner-animation");
  } else {
    document.getElementById("re-play-btn").classList.remove("d-none");
    document.getElementById("next-btn").classList.add("d-none");
    document.getElementById("play-again-btn").classList.add("d-none");
  }
});
