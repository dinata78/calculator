export { render, numberButtonHandler, operatorButtonHandler, dotButtonHandler, acButtonHandler, percentageButtonHandler, deleteButtonHandler, resultButtonHandler };

const calculatorDisplay = document.querySelector("#calculator-display");

let display = "0";

function render() { //render the calculator display using the value of display variable
  calculatorDisplay.textContent = display;
}

function isDisplayLastCharacter(char) { //check if display variable's last character is equal to the value of the parameter passed to the function
  return display.charAt(display.length - 1) === char;
}

function getCurrentNumber() { //get current number, number after the latest operator
  const array = display.split(" ");
  return array[array.length - 1];
}

function addNumberToDisplay(num) { //add number to display variable
  if (isDisplayLastCharacter("%")) return; //prevent adding number after percentage symbol
 
  if (getCurrentNumber() === "0") { 
    if (num === "0" || num === "00") return; //prevent adding 0 or 00 when current number is 0
    deleteDisplayLastCharacter(); //delete the number 0 before adding new number
    display += num;
    return;
  }

  if (getCurrentNumber() === "" && num === "00") return; //prevent adding 00 when there is no number as current number

  display += num;

}

function numberButtonHandler(num) { //handle number button event
  addNumberToDisplay(num);
  render();
}

function addOperatorToDisplay(type) { //add operator to display variable
  if (isDisplayLastCharacter(" ")) deleteButtonHandler(); //delete the latest operator to prevent double operator and support changing operator
  switch(type) {
    case "add":
      display += " + ";
      break;
    case "subtract":
      display += " - ";
      break;
    case "multiply":
      display += " x ";
      break;
    case "divide":
      display += " / ";
      break;
  }
}

function operatorButtonHandler(type) { //handle operator button event
  addOperatorToDisplay(type);
  render();
}

function addDotToDisplay() { //add dot symbol to display variable
  if (isDisplayLastCharacter("%")) return; //prevent adding dot symbol after the percentage symbol
  if (getCurrentNumber() === "") return; //prevent adding dot symbol when there's no number
  if (getCurrentNumber().includes(".")) return; //prevent double dot symbol
  display += ".";
}

function dotButtonHandler() { //handle dot button event
  addDotToDisplay();
  render();
}

function acButtonHandler() { //handle AC (all clear) button event
  display = "0";
  render();
}

function addPercentageToDisplay() { //add percentage symbol to display variable
  if (isDisplayLastCharacter(".")) return; //prevent adding percentage symbol after the dot symbol
  if (getCurrentNumber() === "") return; //prevent adding percentage symbol when there's no number
  if (getCurrentNumber().includes("%")) return; //prevent double percentage symbol
  display += "%";
}

function percentageButtonHandler() { //handle percentage symbol event
  addPercentageToDisplay();
  render();
}

function deleteDisplayLastCharacter() { //delete last character of display
  display = display.slice(0, display.length - 1);
}

function deleteButtonHandler() { //handle delete button event
  if (display.length === 1) { //change display value to "0" when there's only one number in display
    display = "0";
    render();
    return;
  }
  if (isDisplayLastCharacter(" ")) { //delete operator by removing the last character of display three times
    for (let i = 0; i < 3; i++) {
      deleteDisplayLastCharacter();
    }
    render();
    return;
  }
  deleteDisplayLastCharacter();
  render();
}

function resultButtonHandler() { //handle result button event
  const filtered = display.replace("x", "*").replace("%", "/100"); //filter display to an evaluable expression
  const result = eval(filtered); //evaluate
  calculatorDisplay.textContent = result; //show result as calculator display
  display = String(result); //set previous result as display value
}