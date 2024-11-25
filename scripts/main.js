import { render, numberButtonHandler, operatorButtonHandler, dotButtonHandler, acButtonHandler, percentageButtonHandler, deleteButtonHandler, resultButtonHandler } from "./calculatorLogic.js";
import { setTheme } from "./changeThemeLogic.js";

const calculator = (() => {
  //initialize DOM selectors
  const acButton = document.querySelector("#ac-button");
  const percentageButton = document.querySelector("#percentage-button");
  const deleteButton = document.querySelector("#delete-button");
  const addButton = document.querySelector("#add-button");
  const subtractButton = document.querySelector("#subtract-button");
  const multiplyButton = document.querySelector("#multiply-button");
  const divideButton = document.querySelector("#divide-button");
  const dotButton = document.querySelector("#dot-button");
  const resultButton = document.querySelector("#result-button");

  const oneButton = document.querySelector("#one-button");
  const twoButton = document.querySelector("#two-button");
  const threeButton = document.querySelector("#three-button");
  const fourButton = document.querySelector("#four-button");
  const fiveButton = document.querySelector("#five-button");
  const sixButton = document.querySelector("#six-button");
  const sevenButton = document.querySelector("#seven-button");
  const eightButton = document.querySelector("#eight-button");
  const nineButton = document.querySelector("#nine-button");
  const zeroButton = document.querySelector("#zero-button");
  const doubleZeroButton = document.querySelector("#double-zero-button");

  const themeInput = document.querySelector("#theme");


  function init() {
    render();
    setEvents();
    setKeyboardSupportEvents();
    setChangeThemeEvent();
  }

  function setEvents() {
    //add each button's event listener
    oneButton.addEventListener("click", () => numberButtonHandler("1"));
    twoButton.addEventListener("click", () => numberButtonHandler("2"));
    threeButton.addEventListener("click", () => numberButtonHandler("3"));
    fourButton.addEventListener("click", () => numberButtonHandler("4"));
    fiveButton.addEventListener("click", () => numberButtonHandler("5"));
    sixButton.addEventListener("click", () => numberButtonHandler("6"));
    sevenButton.addEventListener("click", () => numberButtonHandler("7"));
    eightButton.addEventListener("click", () => numberButtonHandler("8"));
    nineButton.addEventListener("click", () => numberButtonHandler("9"));
    zeroButton.addEventListener("click", () => numberButtonHandler("0"));
    doubleZeroButton.addEventListener("click", () => numberButtonHandler("00"));
  
    addButton.addEventListener("click", () => operatorButtonHandler("add"));
    subtractButton.addEventListener("click", () => operatorButtonHandler("subtract"));
    multiplyButton.addEventListener("click", () => operatorButtonHandler("multiply"));
    divideButton.addEventListener("click", () => operatorButtonHandler("divide"));
  
    dotButton.addEventListener("click", dotButtonHandler);
    acButton.addEventListener("click", acButtonHandler);
    percentageButton.addEventListener("click", percentageButtonHandler);
    deleteButton.addEventListener("click", deleteButtonHandler);
  
    resultButton.addEventListener("click", resultButtonHandler);
  }

  function setKeyboardSupportEvents() {
    //add interacting with calculator with keyboard support
    document.addEventListener("keydown", (e) => {
      if (e.key === "Delete") acButtonHandler();
      if (e.key === "%") percentageButtonHandler();
      if (e.key === "Backspace") deleteButtonHandler();
      if (e.key === "+") operatorButtonHandler("add");
      if (e.key === "-") operatorButtonHandler("subtract");
      if (e.key === "x" || e.key === "*") operatorButtonHandler("multiply");
      if (e.key === "/") operatorButtonHandler("divide");
      if (e.key < 10) numberButtonHandler(e.key);
      if (e.key === ".") dotButtonHandler();
      if (e.key === "Enter") resultButtonHandler();
    })
  }

  function setChangeThemeEvent() {
    themeInput.addEventListener("change", () => setTheme(themeInput.value));
  }

  return { init };

})();

calculator.init();

