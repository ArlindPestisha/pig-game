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
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
console.log(btnNewGame);

// Starting condition
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let activePlayer = 0
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
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        // Switch to the next player
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})

btnHold.addEventListener('click', function () {
    
})