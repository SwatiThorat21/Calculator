let display = document.getElementById("numfield");
let buttons = Array.from(document.getElementsByClassName("number"));
let numClick = document.querySelectorAll(".number");

let prevValue = 0;
let nextValue = "";
let operatorGiven = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.innerText;
    if (display.value == "") {
      display.value = 0;
    } else {
    try {
        let ans = eval(display.value);
        display.value = ans;
        
    } catch (error) {
        
    }
    }

    if (btn.innerText == "AC") {
      display.value = 0;
      prevValue = "";
      operatorGiven = false;
      nextValue = "";
      return;
    }
  });
});
