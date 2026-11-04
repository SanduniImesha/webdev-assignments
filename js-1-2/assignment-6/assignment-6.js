'use strict';

const output = document.querySelector('#output');

if (confirm('Should I calculate the square root?')) {
  const number = parseFloat(prompt('Enter a number:'));

  if (number < 0) {
    output.textContent = 'The square root of a negative number is not defined';
  } else {
    output.textContent = `The square root of ${number} is ${Math.sqrt(number)}`;
  }
} else {
  output.textContent = 'The square root is not calculated.';
}