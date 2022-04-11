'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',
  function() {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input
    if (!guess) {
      displayMessage('⛔ no number!');
    }
    // when guessed number is not equal to SecretNumber
    else if (guess !== SecretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = (guess > SecretNumber)? '📈 Too high':'📉 Too low';
        displayMessage((guess > SecretNumber)? '📈 Too high':'📉 Too low');
        score--;
        document.querySelector('.score').textContent = score;

      } else {
        displayMessage('💥 You lost the game');
        document.querySelector('.score').textContent = 0;
      }
    }
    //when player wins
    else if (guess === SecretNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = SecretNumber;
      displayMessage('Congrats 🎉🎉🎉');
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

  });

document.querySelector('.again').addEventListener('click',
  function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
