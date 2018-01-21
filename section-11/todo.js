var input = prompt("Please enter what you would like to do");
var todos = [];
while (input !== "quit") {

  if (input === "list") {
    listToDos();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }

  input = prompt("Please enter what you would like to do");
}

console.log("Ok, quit the app!");

function listToDos() {
  todos.forEach(function(todo, index) {
    console.log("**********");
    console.log(index + ": " + todo);
    console.log("**********");
  });
}

function addToDo() {
  //ask for todos with prompt
  var newToDo = prompt("Enter new todo");
  //add to array with push
  todos.push(newToDo);
  console.log("Added Task");
}

function deleteToDo() {
  //ask for index to be deleted
  var index = prompt("Enter index of task to delete");
  //delete the index
  todos.splice(index, 1);
  console.log("Deleted task");
}