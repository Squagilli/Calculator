// HTML items

// number buttons
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const zeroButton = document.querySelector('.zero');

// calc display 
const calcDisplay = document.querySelector('.calc-input');



// basic functions
let numberOne = 0;
let numberTwo = 0;
let operation = 0;

operate(numberOne, numberTwo);

console.log(numberOne);
console.log(numberTwo);

function add(numberOne, numberTwo) {
    return Number(numberOne) + Number(numberTwo);
}
function subtract(numberOne, numberTwo) {
    return Number(numberOne) - Number(numberTwo);
}
function multiply(numberOne, numberTwo) {
    return Number(numberOne) * Number(numberTwo);
}
function divide(numberOne, numberTwo) {
    return Number(numberOne) / Number(numberTwo);
}

function operate(numberOne, numberTwo) {
    let result = '';
    if (operation === 'add'){
        result = add(numberOne, numberTwo);
        alert(result);
    }
    else if (operation === 'subtract') {
        result = subtract(numberOne, numberTwo);
        alert(result);
    }
    else if (operation === 'multiply') {
        result = multiply(numberOne, numberTwo);
        alert(result);
    }
    else if (operation === 'divide') {
        result === divide(numberOne, numberTwo);
        alert(result);
    }
    
}

// event listeners

oneButton.addEventListener('click', function() {
    calcDisplay.append('1');
});
twoButton.addEventListener('click', function() {
    calcDisplay.append('2');
});
threeButton.addEventListener('click', function() {
    calcDisplay.append('3');
});
fourButton.addEventListener('click', function() {
    calcDisplay.append('4');
});
fiveButton.addEventListener('click', function() {
    calcDisplay.append('5');
});
sixButton.addEventListener('click', function() {
    calcDisplay.append('6');
});
sevenButton.addEventListener('click', function() {
    calcDisplay.append('7');
});
eightButton.addEventListener('click', function() {
    calcDisplay.append('8');
});
nineButton.addEventListener('click', function() {
    calcDisplay.append('9');
});
zeroButton.addEventListener('click', function() {
    calcDisplay.append('0');
});