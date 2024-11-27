export { setKeyboardSupportEvents };

function translateButtonType(key) { //translate button type to match each button id's
  if (key < 10) {
    switch (key) {
      case "0":
        return "zero";
      case "1":
        return "one";
      case "2":
        return "two";
      case "3":
        return "three";
      case "4":
        return "four";
      case "5":
        return "five";
      case "6":
        return "six";
      case "7":
        return "seven";
      case "8":
        return "eight";
      case "9":
        return "nine";
    }
  }

  switch (key) {
    case "Delete":
      return "ac";
    case "Backspace":
      return "delete";
    case "Enter":
      return "result";
    case ".":
      return "dot";
    case "%":
      return "percentage";
    case "+":
      return "add";
    case "-":
      return "subtract";
    case "*":
      return "multiply";
    case "/":
      return "divide";
  }
}

function setKeyboardSupportEvents() {
  //add event listener to support keyboard user
  document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (document.activeElement === document.querySelector("#theme") && key !== "Escape") return; //disable interacting with calculator via keyboards while change-theme input have focus, except for Esc key to blur the focus

    switch (key) {
      case "Control"://shortcut for focusing onto change-theme input
        document.querySelector("#theme").focus();
        return;
      case "Escape": //shortcut for removing focus from currently focused element
        document.activeElement.blur();
        return;
      case "Alt": //shortcut for opening info modal
        document.querySelector("#info").click();
        return;
    }

    const buttonType = translateButtonType(key);
    const button = document.querySelector(`#${buttonType}-button`);
    
    if (!button) return; //stop when button does not exist

    button.classList.add("button-active"); //add button active effect
    button.click();
    setTimeout(() => button.classList.remove("button-active"), 100); //remove button active effect
  })
}