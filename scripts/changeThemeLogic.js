export { setTheme };
import { themes } from "./themes.js";

function setTheme(selectedTheme) {
  const theme = themes.find((theme) => theme.name === selectedTheme);

  document.body.style.backgroundImage = theme.imageUrl;

  const root = document.querySelector(":root");
  root.style.setProperty("--main-font-color", theme.mainFontColor);
  root.style.setProperty("--display-font-color", theme.displayFontColor);
  root.style.setProperty("--display-base-color", theme.displayBaseColor);
  root.style.setProperty("--display-border-color", theme.displayBorderColor);
  root.style.setProperty("--calculator-base-color", theme.calculatorBaseColor);
  root.style.setProperty("--calculator-border-color", theme.calculatorBorderColor);
  root.style.setProperty("--button-font-color", theme.buttonFontColor);
  root.style.setProperty("--number-button-color", theme.numberButtonColor);
  root.style.setProperty("--operator-button-color", theme.operatorButtonColor);
  root.style.setProperty("--result-button-color", theme.resultButtonColor);
}