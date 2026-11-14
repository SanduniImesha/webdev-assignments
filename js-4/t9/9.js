'use strict';

const input = document.getElementById('calculation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const text = input.value.replaceAll(' ', '');
  let operator;

  if (text.includes('+')) {
    operator = '+';
  } else if (text.includes('-')) {
    operator = '-';
  } else if (text.includes('*')) {
    operator = '*';
  } else if (text.includes('/')) {
    operator = '/';
  } else {
    result.textContent = 'Use +, -, * or /';
    return;
  }

  const parts = text.split(operator);
  const a = parseInt(parts[0]);
  const b = parseInt(parts[1]);

  if (parts.length !== 2 || isNaN(a) || isNaN(b)) {
    result.textContent = 'Invalid calculation';
    return;
  }

  let answer;
  if (operator === '+') {
    answer = a + b;
  } else if (operator === '-') {
    answer = a - b;
  } else if (operator === '*') {
    answer = a * b;
  } else {
    if (b === 0) {
      result.textContent = 'Cannot divide by zero';
      return;
    }
    answer = a / b;
  }
  result.textContent = answer;
});