'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const a = parseInt(num1.value);
  const b = parseInt(num2.value);

  if (isNaN(a) || isNaN(b)) {
    result.textContent = 'Please enter two integers';
    return;
  }

  let answer;
  switch (operation.value) {
    case 'add':
      answer = a + b;
      break;
    case 'sub':
      answer = a - b;
      break;
    case 'multi':
      answer = a * b;
      break;
    case 'div':
      if (b === 0) {
        result.textContent = 'Cannot divide by zero';
        return;
      }
      answer = a / b;
      break;
  }
  result.textContent = answer;
});