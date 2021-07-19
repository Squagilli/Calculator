// HTML ITEMS


// CALULATOR LOGIC
//let numberOne = prompt('first number');
//let numberTwo = prompt('second number');
//const parseOne = parseInt(numberOne, 10);
//const parseTwo = parseInt(numberTwo, 10);

function operate(parseOne, parseTwo) {
    let operation = prompt('What u wanna do?');
    if (operation === 'add') {
        alert(sum(parseOne, parseTwo));
    }
    else if (operation === 'subtract') {
        alert(subract(parseOne, parseTwo));
    }
    else if (operation === 'multiply') {
        alert(multiply(parseOne, parseTwo));
    }
    else if (operation === 'divide') {
        alert(divide(parseOne, parseTwo));
    }


}

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

//operate(parseOne, parseTwo);