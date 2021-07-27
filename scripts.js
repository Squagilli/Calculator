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

// operator buttons
const addButton = document.querySelector('.add');
const subButton = document.querySelector('.subtract');
const multButton = document.querySelector('.multiply');
const divButton = document.querySelector('.divide');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');


let currentNumber = '';
let newNumber = '';
let operation = '';
let result = '';
let a = '';
let b = '';

// basic functions


function add(a, b) {
    return Number(a) + Number(b);
}
function subtract(a, b) {
    return Number(a) - Number(b);
}
function multiply(a, b) {
    return Number(a) * Number(b);
}
function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(a, b) {
    if (operation === 'add'){
        result = add(a, b);
        //calcDisplay.innerHTML = result;
    }
    else if (operation === 'subtract') {
        result = subtract(a, b);
        //calcDisplay.innerHTML = result;
    }
    else if (operation === 'multiply') {
        result = multiply(a, b);
        //calcDisplay.innerHTML = result;
    }
    else if (operation === 'divide') {
        result = divide(a, b);
        //calcDisplay.innerHTML = result;
    }
    
}

// number button event listeners
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


// operator button event listeners
addButton.addEventListener('click', function() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    console.log(currentNumber);
    operation = 'add';
    console.log(operation);
    calcDisplay.innerHTML = '';

})
subButton.addEventListener('click', function() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    console.log(currentNumber);
    operation = 'subtract';
    console.log(operation);
    calcDisplay.innerHTML = '';
})
multButton.addEventListener('click', function() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    console.log(currentNumber);
    operation = 'multiply';
    console.log(operation);
    calcDisplay.innerHTML = '';
})
divButton.addEventListener('click', function() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    console.log(currentNumber);
    operation = 'divide';
    console.log(operation);
    calcDisplay.innerHTML = '';
})
equalButton.addEventListener('click', function() {
    newNumber = calcDisplay.innerHTML;
    b = newNumber;
    operate(a, b);

    console.log(currentNumber);
    console.log(operation);
    console.log(newNumber);
    console.log(result);

    calcDisplay.innerHTML = result;
})
clearButton.addEventListener('click', function() {
    calcDisplay.innerHTML = '';
    currentNumber = '';
    newNumber = '';
    operation = '';
    result = '';
    a = '';
    b = '';
})