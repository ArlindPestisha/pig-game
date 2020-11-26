'use strict';
// Selecting #id-s and .classes
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNewGame = document.querySelector('.btn--new')
const btnRollDice = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
console.log(btnNewGame);

// Starting condition
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let currentScore = 0

btnRollDice.addEventListener('click', function () {
    // 1. Generate random num from 1 - 6
    const randomDice = Math.trunc(Math.random() * 6) + 1
    console.log(randomDice);
    // 2. Show the num to the UI
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${randomDice}.png`
    // 3. Check for rolled 1
    if (randomDice !== 1) {
        // Add dice to current score
        currentScore += randomDice
        current0El.textContent = currentScore
    } else {
        // Switch to the next player
    }
})
//To Do:
// 1. Look to the Flow chart to
// 2. Roll the dice make the function 
// 3. Add the score to the current player.