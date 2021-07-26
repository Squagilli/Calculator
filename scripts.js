// Calc HTML function buttons
const calcDisplay = document.querySelector('.calc-input');
const clear = document.querySelector('.clear');
const functionDecimal = document.querySelector('.dot');
const functionAdd = document.querySelector('.add');
const functionSubtract = document.querySelector('.subtract');
const functionMultiply = document.querySelector('.multiply');
const functionDivide = document.querySelector('.divide');
const functionRemainder = document.querySelector('.percent');

// HTML number buttons
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

// Number Storage
const numberZero = '0';
const numberOne = '1';
const numberTwo = '2';
const numberThree = '3';
const numberFour = '4';
const numberFive = '5';
const numberSix = '6';
const numberSeven = '7';
const numberEight = '8';
const numberNine = '9';

const numberDec = '.';



// CALULATOR LOGIC

//operate

// user inputs first number (number buttons event listeners)

// number is stored as num1
// user selects operator
// user inputs second number
// display result



function sum(parseOne, parseTwo) {
    return parseOne + parseTwo;
}
function subract(parseOne, parseTwo) {
    return parseOne - parseTwo;
}
function multiply(parseOne, parseTwo) {
    return parseOne * parseTwo;
}
function divide(parseOne, parseTwo) {
    return parseOne / parseTwo;
}



// Functional buttons event listeners
clear.addEventListener('click', function() {
    calcDisplay.innerHTML = '';
});
functionDecimal.addEventListener('click', function() {
    calcDisplay.append(numberDec);
});
functionAdd.addEventListener('click', function() {
    let firstNumber = calcDisplay.innerHTML;
    console.log(firstNumber);
    calcDisplay.innerHTML = '';
});
functionSubtract.addEventListener('click', function() {
    let firstNumber = calcDisplay.innerHTML;
    console.log(firstNumber);
    calcDisplay.innerHTML = '';
});
functionMultiply.addEventListener('click', function() {
    let firstNumber = calcDisplay.innerHTML;
    console.log(firstNumber);
    calcDisplay.innerHTML = '';
});
functionDivide.addEventListener('click', function() {
    let firstNumber = calcDisplay.innerHTML;
    console.log(firstNumber);
    calcDisplay.innerHTML = '';
});


// Number buttons event listeners
zero.addEventListener('click', function() {
    calcDisplay.append(numberZero);
});
one.addEventListener('click', function() {
    calcDisplay.append(numberOne);
});
two.addEventListener('click', function() {
    calcDisplay.append(numberTwo);
});
three.addEventListener('click', function() {
    calcDisplay.append(numberThree);
});
four.addEventListener('click', function() {
    calcDisplay.append(numberFour);
});
five.addEventListener('click', function() {
    calcDisplay.append(numberFive);
});
six.addEventListener('click', function() {
    calcDisplay.append(numberSix);
});
seven.addEventListener('click', function() {
    calcDisplay.append(numberSeven);
});
eight.addEventListener('click', function() {
    calcDisplay.append(numberEight);
});
nine.addEventListener('click', function() {
    calcDisplay.append(numberNine);
});