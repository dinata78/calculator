export { setKeyboardSupportEvents };

function translateButtonType(key) {
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
  //add interacting with calculator with keyboard support
  document.addEventListener("keydown", (e) => {
    if (document.activeElement === document.querySelector("#theme")) return;

    const key = e.key;

    if (key === "Control") {
      document.querySelector("#theme").focus();
      return;
    }

    const buttonType = translateButtonType(key);
    const button = document.querySelector(`#${buttonType}-button`);
    
    button.classList.add("button-active");
    button.click();
    setTimeout(() => button.classList.remove("button-active"), 100);
  })
}