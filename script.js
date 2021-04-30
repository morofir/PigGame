'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score1El = document.querySelector('#score--0');
const score2El = document.getElementById('score--1'); //diffrent methods

const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

let currScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  currScore = 0;
  player1El.classList.toggle('player--active'); //add the class if its not there, if its there will remove it
  player0El.classList.toggle('player--active'); //change the backgroung to white (whos playing now)
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1; //generate number 1-6

    //display:
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //if the random number is 1 switch player
    if (dice !== 1) {
      currScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currScore;
    } else {
      //if the dice rolled 1 the score will be zero,and switch to other player

      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (scores[activePlayer] < 20) scores[activePlayer] += currScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    playing = false;
  } else {
    switchPlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  currScore = 0;
  activePlayer = 0;
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  player0El.classList.toggle('player--active');
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
