'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Enter the name of dog ${i + 1} of 6:`));
}

dogs.sort((a, b) => b.localeCompare(a));

const list = document.getElementById('dogs');
for (const dog of dogs) {
  const li = document.createElement('li');
  li.textContent = dog;
  list.appendChild(li);
}