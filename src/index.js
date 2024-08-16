const incrementButton = document.querySelector(".increment");
const resetButton = document.querySelector(".reset");
const decrementButton = document.querySelector(".decrement");
const counterValue = document.querySelector(".counter-value");

let count = Number(counterValue.textContent);

function updateCounter(e) {
  const classList = e.target.classList;
  if (classList.contains("increment")) {
    count++;
  } else if (classList.contains("decrement")) {
    count--;
  } else {
    count = 0;
  }
  counterValue.textContent = count;
}

incrementButton.addEventListener("click", updateCounter);
decrementButton.addEventListener("click", updateCounter);
resetButton.addEventListener("click", updateCounter);
