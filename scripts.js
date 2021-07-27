
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
const decimalButton = document.querySelector('.dot');

// calc display 
const calcDisplay = document.querySelector('.calc-input');

// operator buttons
const addButton = document.querySelector('.add');
const subButton = document.querySelector('.subtract');
const multButton = document.querySelector('.multiply');
const divButton = document.querySelector('.divide');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

// dynamic variables
let currentNumber = '';
let newNumber = '';
let operation = '';
let result = '';
let a = '';
let b = '';

// calculator functions
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
    }
    else if (operation === 'subtract') {
        result = subtract(a, b);
    }
    else if (operation === 'multiply') {
        result = multiply(a, b);
    }
    else if (operation === 'divide') {
        if (newNumber === '0') {
            alert(`don't do that!`);
        }
        else {
            result = divide(a, b);
        }
    }
}

// keyboard number event listeners
window.addEventListener('keydown', function(e) {
    if (e.key === '1') {
        calcDisplay.append('1');
    }
    else if (e.key === '2') {
        calcDisplay.append('2');
    }
    else if (e.key === '3') {
        calcDisplay.append('3');
    }
    else if (e.key === '4') {
        calcDisplay.append('4');
    }
    else if (e.key === '5') {
        calcDisplay.append('5');
    }
    else if (e.key === '6') {
        calcDisplay.append('6');
    }
    else if (e.key === '7') {
        calcDisplay.append('7');
    }
    else if (e.key === '8') {
        calcDisplay.append('8');
    }
    else if (e.key === '9') {
        calcDisplay.append('9');
    }
    else if (e.key === '0') {
        calcDisplay.append('0');
    }
    else if (e.key === '.') {
        calcDisplay.append('.');
    }
});

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
decimalButton.addEventListener('click', function() {
    calcDisplay.append('.');
});



// keyboard event listeners
document.addEventListener('keydown', function(event) {
    if (event.key === '+') {
        didAdd();
    }
    else if (event.key === '-') {
        didSubtract();
    }
    else if (event.key === '*') {
        didMultiply();
    }
    else if (event.key === '/') {
        didDivide();
    }
    else if (event.key === 'Enter') {
        didEqual();
    }
    else if (event.key === 'Delete') {
        didClear();
    }
});


// operator button event listeners
addButton.addEventListener('click', didAdd);

subButton.addEventListener('click', didSubtract);

multButton.addEventListener('click', didMultiply);

divButton.addEventListener('click', didDivide);

equalButton.addEventListener('click', didEqual);

clearButton.addEventListener('click', didClear);

// operator functions
function didAdd() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    operation = 'add';
    calcDisplay.innerHTML = '';
};
function didSubtract() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    operation = 'subtract';
    calcDisplay.innerHTML = '';
}
function didMultiply() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    operation = 'multiply';
    calcDisplay.innerHTML = '';
}
function didDivide() {
    currentNumber = calcDisplay.innerHTML;
    a = currentNumber;
    operation = 'divide';
    calcDisplay.innerHTML = '';
}
function didEqual() {
    if (!currentNumber && !newNumber) {
        alert(`don't do that!`);
    }
    else {
    newNumber = calcDisplay.innerHTML;
    b = newNumber;
    operate(a, b);
    calcDisplay.innerHTML = result.toFixed(2);
    }
}
function didClear() {
    calcDisplay.innerHTML = '';
    currentNumber = '';
    newNumber = '';
    operation = '';
    result = '';
    a = '';
    b = '';
}