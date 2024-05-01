const display = document.getElementById("display")
let lever = false;
let firstNumber, secondNumber, operator;

const handleClick = (value) => {
    if (!lever) {
        display.value += value
    } else {
        display.value = ""
        display.value += value
        lever = false
    }
}