'use strict';

const numbers = [];
let number;

// Ask for numbers until the user gives zero (zero is not stored)
do {
  number = Number(prompt('Enter a number (0 to stop):'));
  if (number !== 0) {
    numbers.push(number);
  }
} while (number !== 0);

numbers.sort((a, b) => b - a);

for (const n of numbers) {
  console.log(n);
}