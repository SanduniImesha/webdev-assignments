'use strict';

const year = parseInt(prompt('Enter a year:'));

// Divisible by 4, except century years, which must also be divisible by 400
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const output = document.querySelector('#output');
if (isLeapYear) {
  output.textContent = `${year} is a leap year.` } 
  else 
    {output.textContent = `${year} is not a leap year.`;}