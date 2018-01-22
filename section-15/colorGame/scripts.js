// Set up list of colours!
var numOfSqrs = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
init();

function init() {
  //mode button event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      //add selected class to click
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.toggle("selected");
      //figure out how many squares to show
      this.textContent === "Easy" ? numOfSqrs = 3 : numOfSqrs = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listener to sqaures
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare to pickedColor
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
      }
    });
  }

}

function reset() {
  //generate new colors to array
  colors = generateRandomColors(numOfSqrs);
  //pick a new random color
  pickedColor = pickColor();
  //change btn text
  //change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  message.textContent = "";
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    //add initial colors to squares
  }
  //reset header bg color
  h1.style.backgroundColor = "steelblue";
}

//Reset Btn Logic
resetBtn.addEventListener("click", function() {
  reset();
});


function changeColors(color) {
  //loop through all squares and change colors to match correct colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

function generateRandomColors(num) {
  //make array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color an push in to array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 to 255
  var red = Math.floor(Math.random() * 256);
  //pick green from 0 to 255
  var green = Math.floor(Math.random() * 256);
  //pick blue 0 to 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}