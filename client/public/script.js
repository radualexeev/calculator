const display = document.getElementById("display");
let lever = false;
let result = false;
let [firstNumber, secondNumber, operator] = "";
const regex = /^(?!0\d)(?!.*\.\..*)(?!^\.0$)\d{1,7}(?:\.\d*)?$/

const handleClick = (value) => {
    if (!lever && !result) {
      (isAcceptableNumber()) ? display.value += value : null;
    } else if (result && isAcceptableNumber()) {
        display.value = "";
        display.value += value;
        lever = false;
        result = false;
    } else {
        display.value = "";
        display.value += value;
        lever = false;
    };
};

const handleOperation = (value) => {
  if (!lever && !firstNumber) {
    firstNumber = display.value;
    lever = true;
  } else {
    secondNumber = display.value;
    lever = false;
  };

  if (operator) {
    calculate();
  }

  switch (value) {
    case "+":
      operator = "+";
      break;

    case "-":
      operator = "-";
    break;

    case "/":
      operator = "/";
    break;

    case "*":
      operator = "*";
    break;

    case "=":
      if (!secondNumber) {
        firstNumber = display.value;
      } else if (firstNumber && operator && secondNumber) {
        calculate();
      };
    break;

    default:
      break;
  };

};

const calculate = () => {
  if (!secondNumber || !operator) {
    operator = "";
    lever = true;
  } else {
    display.value = eval(`${firstNumber} ${operator} ${secondNumber}`);
    secondNumber = "";
    operator = "";
    firstNumber = display.value;
    lever = false;
  }

  result = true;
};

const handleReset = () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  display.value = "";
};

const isAcceptableNumber = () => {
  if (display.value === "") {
    return true;
  } else {
    return regex.test(display.value)
  }
}