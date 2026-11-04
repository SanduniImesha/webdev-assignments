'use strict';

const startYear = parseInt(prompt('Enter the start year:'));
const endYear = parseInt(prompt('Enter the end year:'));

const list = document.createElement('ul');

for (let year = startYear; year <= endYear; year++) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    const item = document.createElement('li');
    item.textContent = year;
    list.appendChild(item);
  }
}

document.querySelector('#output').appendChild(list);