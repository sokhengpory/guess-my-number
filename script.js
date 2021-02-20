// Use .textContent to access to the text
// document.querySelector(".message").textContent = "Correct number!!";

// Function

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayLives = function (live) {
  document.querySelector(".lives").textContent = live;
};

const displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};

const randomNumber = function () {
  let number = Math.floor(Math.random() * 20 + 1);
  return number;
};

const widthStyle = function (width) {
  document.querySelector(".number").style.width = width;
};

const backgroundStyle = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// Variables

let secretNumber = (document.querySelector(".number").value = randomNumber());
let lives = 20;
let highscore = 0;

// Game logic

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  // When there the number = 0 its mean that this value is FALSE
  if (!guess) {
    displayMessage("No number!!!");
  }

  // When user win
  else if (guess === secretNumber) {
    displayMessage("Correct number!!!");

    // Use DOM to style the css
    backgroundStyle("#60b347");
    // document.querySelector('`property you want to style`').style.`Where the style you want to change` = `put that value in the string` '#60b347'
    widthStyle("30rem");

    displayNumber(secretNumber);

    // Check to see if the score is greater than the current highscore
    if (lives > highscore) {
      highscore = lives;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (lives > 1) {
      // Compare the guess with secret number and display the message
      displayMessage(guess > secretNumber ? "Too high!!!" : "Too low!!!");
      lives--;
      displayLives(lives);
    } else {
      displayMessage("You lose the game!!!");
      displayLives(0);
      backgroundStyle("red");
      displayNumber(secretNumber);
    }
  }
});

// Restart the game

document.querySelector(".again").addEventListener("click", function () {
  backgroundStyle("black");
  widthStyle("15rem");
  displayMessage("Start guessing....");
  lives = 20;
  displayLives(lives);
  secretNumber = document.querySelector(".number").value = randomNumber();
  document.querySelector(".guess").value = null;
  displayNumber("?");
  console.log(secretNumber);
});

// Let the user able to click enter when input
document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.querySelector(".check").click();
  }
});

console.log(secretNumber);
