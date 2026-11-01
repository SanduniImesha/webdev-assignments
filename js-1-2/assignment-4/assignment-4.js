'use strict';

const studentName = prompt("What is the student's name?");

// Math.random() gives 0 <= x < 1, so this draws 1, 2, 3 or 4
const draw = Math.floor(Math.random() * 4) + 1;

let house;
switch (draw) {
  case 1:
    house = 'Gryffindor';
    break;
  case 2:
    house = 'Slytherin';
    break;
  case 3:
    house = 'Hufflepuff';
    break;
  default:
    house = 'Ravenclaw';
}

document.querySelector('#output').textContent =
  `${studentName}, you are ${house}.`;