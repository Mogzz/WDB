//Welcome message
alert("Welcome to the Number Guessing Game!");

//get user prompt & store in variable
var input = prompt("Please enter your guess between 1 - 10");
//generate random number
var rand = Math.floor(Math.random() * 10);
console.log(rand);
if (input === rand) {

  alert("You guessed the correct number, Well done!");
}