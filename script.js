function add(a, b) {
  const ans = a + b;
  return parseFloat(ans.toString().substring(0, 7));
}

function subtract(a, b) {
  const ans = a - b;
  return parseFloat(ans.toString().substring(0, 7));
}

function multiply(a, b) {
  const ans = Math.round(a * b);
  console.log(ans);
  return parseFloat(ans.toString().substring(0, 7));
}

function divide(a, b) {
  if (b == 0) {
    return '?';
  }
  const ans = Math.round(a / b);
  console.log(ans);
  return parseFloat(ans.toString().substring(0, 7));
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
});

const numbers = Array.from(document.getElementsByClassName('number'));
for (let number of numbers) {
  number.addEventListener('click', () => {
    if (op == '') {
      a += number.textContent;
      if (a.toString().length > 7) {
        a = parseFloat(a.toString().substring(0, 7));
      }
      clearDisplay();
      display(a);
    } else {
      b += number.textContent;
      if (b.toString().length > 7) {
        b = parseFloat(b.toString().substring(0, 7));
      }
      clearDisplay();
      display(b);
    }
  });
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
});

function clickBtn(btn) {
  btn.classList.add('clicked');
  setTimeout(() => {
    btn.classList.remove('clicked');
  }, 200);
}

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    clickBtn(btn);
  });
});
