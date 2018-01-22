alert("Connected!");

var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numOfGames = document.querySelector("#numOfGames");
//players initial scores
var playerOneScore = 0;
var playerTwoScore = 0;

//bool to see if someone wins
var gameOver = false;
var winningScore = 5;

playerOne.addEventListener("click", function() {
  if (!gameOver) {
    playerOneScore++;
    if (playerOneScore === winningScore) {
      p1display.classList.add("winner");
      gameOver = true;
    }
    p1display.textContent = playerOneScore;
  }
});
playerTwo.addEventListener("click", function() {
  if (!gameOver) {
    playerTwoScore++;
    if (playerTwoScore === winningScore) {
      p2display.classList.add("winner");
      gameOver = true;
    }
    p2display.textContent = playerTwoScore;
  }
});

reset.addEventListener("click", function() {
  playerOneScore = 0;
  playerTwoScore = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  p1display.textContent = playerOneScore;
  p2display.textContent = playerTwoScore;
  gameOver = false;
});

numInput.addEventListener("change", function() {

  numOfGames.textContent = this.value;
  winningScore = Number(this.value);
  playerOneScore = 0;
  playerTwoScore = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  p1display.textContent = playerOneScore;
  p2display.textContent = playerTwoScore;
  gameOver = false;
});