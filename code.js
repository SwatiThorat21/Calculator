const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseInt(n1) + parseInt(n2);
  } else if (operator === "subtract") {
    result = parseInt(n1) - parseInt(n2);
  } else if (operator === "multiply") {
    result = parseInt(n1) * parseInt(n2);
  } else if (operator === "divide") {
    result = parseInt(n1) / parseInt(n2);
  }

  return result;
};

let calculator = document.querySelector(".calculator");
let keys = calculator.querySelector(".calculator_keys");
let display = document.querySelector("#calculator_display");


keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let key = e.target;
    let action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
      
    }

    if (action === "clear") {
      display.textContent = '0';
    }

    if (action === "calculate") {
      let firstValue = calculator.dataset.firstValue;
      let operator = calculator.dataset.operator;
      let secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});
