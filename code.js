let keys = document.querySelector(".calculator_keys");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let key = e.target;
    let action = key.dataset.acion;
    
    if (!action) {
      console.log("number key");
    }
    
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key");
    }

    if(action === 'clear'){
      console.log('clear key');
    }

    if(action === 'calculate'){
      console.log('equal key');
    }
  }
});
