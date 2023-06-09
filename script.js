let buttons = document.getElementsByClassName("child");
let outputElement = document.querySelector("#output p");
let subOutputElement = document.querySelector("#output a");

let numbers = [];

let operandClicked;

let resultShowed = false;

function clearPrevOutput() {
    if(resultShowed) {
        clearAll();

        resultShowed = false;
    }
}

function clearAll() {
    numbers.splice(0);

    operandClicked = undefined;

    clearOutput();

    clearSubOutput();
}

function clearOutput() {
    outputElement.innerHTML = "";
}

function clearSubOutput() {
    subOutputElement.innerHTML = "";
}

function handleClickedButton() {
    clearPrevOutput();

    let value = this.firstElementChild.innerHTML;

    if(!isNaN(value)) outputElement.innerHTML += value;
    else handleOperand(value);
}

function handleOperand(operand) {
    if(operand == "C") clearAll();

    if(!outputElement.innerHTML) return;

    numbers.push(outputElement.innerHTML);

    if(operand == "=") handleAnswer(numbers);
    else setOperandClicked(operand);
}

function setOperandClicked(operand) {
    operandClicked = operand;

    subOutputElement.innerHTML = outputElement.innerHTML;
    
    clearOutput();
}

function handleAnswer(values) {
    if(operandClicked == undefined || values.length < 1) return;

    clearSubOutput();

    switch(operandClicked) {
        case "+":
            displayResult(sum(values));

            break;
    
        case "-":
            displayResult(subtract(values));

            break;
    
        case "x":
            displayResult(multiply(values));

            break;
    
        case "/":
            displayResult(divide(values));

            break;
    
        default:
            break;
    }
}

function sum(numbers) {
    let sum = numbers.reduce((prev, value) => Number(prev) + Number(value));

    return sum;
}

function subtract(numbers) {
    let difference = numbers.reduce((prev, value) => Number(prev) - Number(value));

    return difference;
}

function multiply(numbers) {
    let product = numbers.reduce((prev, value) => Number(prev) * Number(value));

    return product;
}

function divide(numbers) {
    let quotient = numbers.reduce((prev, value) => Number(prev) / Number(value));

    return quotient;
}

function displayResult(result) {
    outputElement.innerHTML = result;

    resultShowed = true;
}

for(let i = 0; i < buttons.length; ++i) buttons.item(i).addEventListener('click', handleClickedButton);