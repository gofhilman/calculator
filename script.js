// Functions to do basic mathematical operations
function operate(firstNumber, mathOperator, secondNumber) {
    switch(mathOperator) {
        case 'addition':
            return add(firstNumber,secondNumber);
        case 'subtraction':
            return subtract(firstNumber,secondNumber);
        case 'multiplication':
            return multiply(firstNumber,secondNumber);
        case 'division':
            return divide(firstNumber,secondNumber);
    }
}
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    if(b==0) {
        return 'LOL';
    }
    return a/b;
}
function putDecimal(noDecimalNumber) {
    if(!noDecimalNumber.includes('.')) {
        displayNumber.textContent = noDecimalNumber + '.';
    }
}
function negate(number) {
    displayNumber.textContent = (-1 * +number).toString();
}
function clear() {
    displayNumber.textContent = '0';
}

// Function to convert button ID to number
function convertButtonToMath(buttonID) {
    switch (buttonID) {
        default:
            return buttonID;
        case 'zero':
            return '0';
        case 'one':
            return '1';
        case 'two':
            return '2';
        case 'three':
            return '3';
        case 'four':
            return '4';
        case 'five':
            return '5';
        case 'six':
            return '6';
        case 'seven':
            return '7';
        case 'eight':
            return '8';
        case 'nine':
            return '9';  
    }
} 

// Function to populate display
function populateDisplay(number) {
    displayNumber.textContent = (displayNumber.textContent == '0') ? 
    number : displayNumber.textContent + number;
}

// Variable initialization
let firstNum = 0;
let secondNum = 0;
let operator = '';

// DOM element selections
const buttons = document.querySelector('#button-wrapper');
const displayNumber = document.querySelector('#display');

// Initialize display
clear();

// Click event listener for the calculator
buttons.addEventListener('click', (event) => {
    let tempMath = convertButtonToMath(event.target.id);
    if (!Number.isNaN(+tempMath)) {
        populateDisplay(tempMath);
    } else if (tempMath == 'point') {
        putDecimal(displayNumber.textContent);
    } else if (tempMath == 'negation') {
        negate(displayNumber.textContent);
    } else if (tempMath == 'clear') {
        clear();
    } else if (event.target.classList.contains('operator')) {
        firstNum = +displayNumber.textContent;
        operator = tempMath;
        clear();
    } else if (tempMath == 'result') {
        secondNum = +displayNumber.textContent;
        displayNumber.textContent = operate(firstNum, operator, secondNum);
    } else if (tempMath == 'reset') {
        firstNum = 0;
        secondNum = 0;
        operator = '';
        clear();
    }  
});

// Keyboard event listener to input numbers
document.addEventListener('keypress', (event) => {
    if(!Number.isNaN(+event.key)) populateDisplay(event.key);
});