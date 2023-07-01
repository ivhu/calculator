function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "?";
    }
    return Math.round((a / b) * 100000) / 100000;
}

function operate(op, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (op == '+') {
        return add(a, b);
    } else if (op == '-') {
        return subtract(a, b); 
    } else if (op == '*') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    } 
}

const screenDisplay = document.getElementById('display');

function display(displayValue) {
    screenDisplay.textContent += displayValue;
}

function clearDisplay() {
    screenDisplay.textContent = '';
}

let op = '';
let a = '';
let b = '';

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    clearDisplay();
    op = '';
    a = '';
    b = '';
})

const numbers = Array.from(document.getElementsByClassName('number'));
for (let number of numbers) {
    number.addEventListener('click', () => {
        if (op == '') {
            a += number.textContent;
            clearDisplay();
            display(a);
        } else {
            b += number.textContent;
            clearDisplay();
            display(b);
        }

    })
}

const operators = Array.from(document.getElementsByClassName('operator'));
for (let operator of operators) {
    operator.addEventListener('click', () => {
        if (!(b == '')) {
            clearDisplay();
            display(operate(op, a, b));
            a = operate(op, a, b);
            b = '';
        }
        if (operator.textContent == '+') {
            op = '+';
        } else if (operator.textContent == '-') {
            op = '-';
        } else if (operator.textContent == '*') {
            op = '*';
        } else {
            op = '/';
        }
    });
}

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    clearDisplay();
    display(operate(op, a, b));
    op = '';
    a = '';
    b = '';
})

