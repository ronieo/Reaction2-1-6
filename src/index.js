// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const secondSentence = document.querySelector(".js-secondSentence"),
  range = document.querySelector(".js-range"),
  guessguess = document.querySelector(".js-guess"),
  resultresult = document.querySelector(".js-result");

function handleRangeChange(event) {
  const chooseRange = secondSentence.querySelector("span");
  chooseRange.innerText = range.value;
}

function handleGuessSubmmit(event) {
  event.preventDefault();
  const guessInput = guessguess.querySelector("input");
  if (guessInput.value === "") {
    return;
  }
  const max = range.value,
    random = Math.ceil(Math.random() * max),
    userGuess = parseInt(guessInput.value, 10),
    resultSpan = resultresult.querySelector("span");
  resultSpan.innerHTML = `You chose: <strong>${userGuess}</strong>, The machine chose: <strong> ${random} </strong>.<br />
  <strong> ${userGuess === random ? "YOU WON !!!" : "YOU LOSE ://"}</strong>`;
}

function init() {
  guessguess.addEventListener("submit", handleGuessSubmmit);
  range.addEventListener("input", handleRangeChange);
}
init();
