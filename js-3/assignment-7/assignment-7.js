'use strict';

// Returns a random dice roll between 1 and the given number of sides
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt('Enter the number of sides on the dice:'));
const list = document.getElementById('rolls');
let roll;

do {
  roll = rollDice(sides);
  const li = document.createElement('li');
  li.textContent = roll;
  list.appendChild(li);
} while (roll !== sides);