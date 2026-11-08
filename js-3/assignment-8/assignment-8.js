'use strict';

// Returns a string formed by concatenating the elements of the array
function concat(strings) {
  let result = '';
  for (const s of strings) {
    result += s;
  }
  return result;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

document.getElementById('result').textContent = concat(names);