// Calc HTML function buttons
const calcDisplay = document.querySelector('.calc-input');
const clear = document.querySelector('.clear');
const functionDecimal = document.querySelector('.dot');
const functionAdd = document.querySelector('.add');
const functionSubtract = document.querySelector('.subtract');
const functionMultiply = document.querySelector('.multiply');
const functionDivide = document.querySelector('.divide');
const functionRemainder = document.querySelector('.percent');

const functionEqual = document.querySelector('.equals');

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

let firstNumber = '';
let secondNumber = '';

// CALULATOR LOGIC

// user inputs first number (done)

// number is stored as num1 (done)

// user selects operator (done)

// user inputs second number & it is stored (done)

// equals function takes number one and two and displays the result 



function sum(firstNumber, secondNumber) {
    return(firstNumber) + secondNumber;
}
function subract(firstNumber, secondNumber) {
    return(firstNumber) - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return(firstNumber) * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return(firstNumber) / secondNumber;
}

// Functional buttons event listeners
clear.addEventListener('click', function() {
    calcDisplay.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    console.log(firstNumber);
    console.log(secondNumber);

});
functionDecimal.addEventListener('click', function() {
    calcDisplay.append(numberDec);
});

functionAdd.addEventListener('click', function() {
    secondNumber = calcDisplay.innerHTML;
    console.log(firstNumber);
    console.log(secondNumber);
    calcDisplay.innerHTML = '';
});
functionSubtract.addEventListener('click', function() {
    secondNumber = calcDisplay.innerHTML;
    console.log(secondNumber);
    calcDisplay.innerHTML = '';
});

functionMultiply.addEventListener('click', function() {
    secondNumber = calcDisplay.innerHTML;
    console.log(secondNumber);
    calcDisplay.innerHTML = '';
});
functionDivide.addEventListener('click', function() {
    secondNumber = calcDisplay.innerHTML;
    console.log(secondNumber);
    calcDisplay.innerHTML = '';
});
functionEqual.addEventListener('click', function() {
    console.log(firstNumber);
    console.log(secondNumber);
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