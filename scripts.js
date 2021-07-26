// HTML items

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




// basic functions
let numberOne = prompt('numebr');
let numberTwo = prompt('nbumrt');
let operation = prompt('what do');

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

