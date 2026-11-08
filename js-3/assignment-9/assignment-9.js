'use strict';


function even(numbers) {
  const evens = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}

const original = [2, 7, 4];
const evens = even(original);

console.log('Original array:', original);
console.log('Even numbers:', evens);