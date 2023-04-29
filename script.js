let buttons = document.getElementsByClassName("child");

let outputElement = document.getElementById("output").firstElementChild;

let numbers = [];

let operandClicked;

let resultShowed = false;

function clearPrevOutput() {
    if(resultShowed) outputElement.innerHTML = "";

    resultShowed = false;
}

function handleClickedButton() {
    clearPrevOutput();

    let value = this.firstElementChild.innerHTML;

    if(!isNaN(value)) outputElement.innerHTML += value;
    else handleOperand(value);
}

function handleOperand(operand) {
    if(outputElement.innerHTML) numbers.push(outputElement.innerHTML);

    outputElement.innerHTML = "";

    if(operand == "=") handleAnswer(numbers);
    else operandClicked = operand;
}

function handleAnswer(values) {
    console.log(values);
    if(operandClicked == undefined || values.length < 1) return;

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
    
    numbers.splice(0);
    
    operand = undefined;

    resultShowed = true;
}

for(let i = 0; i < buttons.length; ++i) buttons.item(i).addEventListener('click', handleClickedButton);