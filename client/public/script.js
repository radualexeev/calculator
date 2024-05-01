const display = document.getElementById("display")
let lever = false;
let [firstNumber, secondNumber, operator] = "";

const handleClick = (value) => {
    if (!lever) {
        display.value += value
    } else {
        display.value = ""
        display.value += value
        lever = false
    }
}

const handleOperation = (value) => {
  if (!lever) {
    firstNumber = display.value;
    lever = true;
  } else {
    secondNumber = display.value;
    lever = false;
  };

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
      calculate()
    break;

    default:
      if (firstNumber && operator && secondNumber) {
        calculate()
      }
      break;
  }

};

const calculate = () => {
  if (!secondNumber || !operator) {
    display.value = firstNumber;
  } else {
    display.value = eval(`${firstNumber} ${operator} ${secondNumber}`)
  }
};