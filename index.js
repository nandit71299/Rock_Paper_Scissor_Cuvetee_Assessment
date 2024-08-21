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

// document.addEventListener("click", () => {
//   let currentState = rulesContainer.classList.contains("d-none");
//   if (!currentState) {
//     rulesContainer.classList.add("d-none");
//   }
// });

const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
  rulesContainer.classList.add("d-none");
});

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
