let keys = document.querySelector(".calculator_keys");
let display = document.querySelector("#calculator_display");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    
    let key = e.target;
    let action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
      }else{
        display.textContent = displayedNum + keyContent
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key");
    }

    if (action === "clear") {
      console.log("clear key");
    }

    if (action === "calculate") {
      console.log("equal key");
    }
  }
});
