'use strict';

const numbers = [];
let repeated = false;

while (!repeated) {
  const number = Number(prompt('Enter a number:'));

  if (numbers.includes(number)) {
    console.log('The number has already been given.');
    repeated = true;
  } else {
    numbers.push(number);
  }
}

// Ascending order
numbers.sort((a, b) => a - b);

for (const n of numbers) {
  console.log(n);
}