'use strict';

const count = Number(prompt('Enter the number of participants:'));
const names = [];

for (let i = 0; i < count; i++) {
  names.push(prompt(`Enter the name of participant ${i + 1}:`));
}

names.sort((a, b) => a.localeCompare(b));

const list = document.getElementById('participants');
for (const name of names) {
  const li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);
}