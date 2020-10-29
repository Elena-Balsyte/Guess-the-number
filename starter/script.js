'use strict';
/* Project overview (Understanding the problem): 
A game to guess a number between 0 and 20. 
You have 20 trials and they are being counted in 'Score', 
It stores your highest score in 'hihgscore' memory. 
You can play again and again by hitting Again button. 
The message displays if it is correct or not.
When the answer is correct the background color changes into Green and the container displays the number instead of ? */

/* Sub-problems:
1) Select all the DOM elements that will will be manipulated
2) Write a function to choose a random integer between 0 and 20 at the begining of game;
3) Write a function for Check button to check if the input is equal to that integer
   *if input is empty --> display message - No number
   *if input is equal --> display message Correct number, display the answer in number container and change styles
   *if input is hihger --> display message Too high and decreament score value
   *if input is lower --> display message Too low and decreament score value

4) Write a function for Again btn to reset the game:
    * new secretNumber
    * message --> Start guessing...
    * Score: 20
5) Add highscore functionality
highscore = 0;
    * won the game --> if highscore is < score, then update the highscore


!!! DBL CLICK ON SAME WORDS TO SELECT THE WORD FOR EDITING ALL OF THEM TOGETHER. 
*/

//const message = document.querySelector('.message');
const number = document.querySelector('.number');
let highScore = 0;

let score = 20;
let secretNumber = Math.trunc(Math.random() * 21);
let scoreCont = document.querySelector('.score');

function randomNumber() {
  return Math.trunc(Math.random() * 21);
}
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Button .check functionality
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //lost the game
  if (score === 1) {
    displayMessage('  You lost the game!');
    scoreCont.textContent = '0';

    //input value is empty
  } else if (!guess) {
    displayMessage('  No number!');

    //won the game
  } else if (guess === secretNumber) {
    displayMessage('  Congrats! Correct number');
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    number.style.width = '30rem';
  } else if (guess !== score) {
    displayMessage(guess < secretNumber ? '  Too low!' : '  Too high!');
    score--;
    scoreCont.textContent = score;
  }

  //guess is bigger than secret number
  //   } else if (guess > secretNumber) {
  //     message.textContent = '  Too high!';
  //     score--;
  //     scoreCont.textContent = score;

  //     //guess is lower than secret number
  //   } else if (guess < secretNumber) {
  //     message.textContent = '  Too low!';
  //     score--;
  //     scoreCont.textContent = score;
  //   }
});

// Button .again functionality
document.querySelector('.again').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = randomNumber();
  displayMessage('Start guessing...');
  score = 20;
  scoreCont.textContent = score;
});
