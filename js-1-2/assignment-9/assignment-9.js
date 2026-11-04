'use strict';

const number = parseInt(prompt('Enter an integer:'));

// Numbers below 2 are not prime
let isPrime = number >= 2;

// If a number has a divisor, it has one that is at most its square root
for (let divisor = 2; divisor * divisor <= number; divisor++) {
  if (number % divisor === 0) {
    isPrime = false;
    break;
  }
}

const output = document.querySelector('#output');
if (isPrime) {
  output.textContent = `${number} is a prime number.`;
} else {
  output.textContent = `${number} is not a prime number.`;
}