'use strict';

const diceCount = parseInt(prompt('How many dice?'));
const targetSum = parseInt(prompt('What sum of the eye numbers are you interested in?'));

const repetitions = 10000;
let hits = 0;

// Simulate: throw all the dice 10,000 times and count how often the sum matches
for (let i = 0; i < repetitions; i++) {
  let sum = 0;
  for (let j = 0; j < diceCount; j++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  if (sum === targetSum) {
    hits++;
  }
}

const probability = (hits / repetitions) * 100;

document.querySelector('#output').textContent =
  `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;