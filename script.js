// Functions to do basic mathematical operations
function operate(firstNumber, mathOperator, secondNumber) {
    switch(mathOperator) {
        case '+':
            add(firstNumber,secondNumber);
            break;
        case '-':
            subtract(firstNumber,secondNumber);
            break;
        case '*':
            multiply(firstNumber,secondNumber);
            break;
        case '/':
            divide(firstNumber,secondNumber);
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

// Variable initialization
let firstNum = 0;
let secondNum = 0;
let operator = '';

