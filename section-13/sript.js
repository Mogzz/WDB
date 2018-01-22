var p = document.querySelector("#first");


p.style.fontSize = "45px";

var button = document.querySelector("button");
var text = document.querySelector("button + p");

button.addEventListener("click", function() {
  text.textContent = "Someone clicked the bitch";
});