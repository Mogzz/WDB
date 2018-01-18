var input = prompt("Please enter what you would like to do");
var todos = [];
while (input !== "quit") {

  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    //ask for todos with prompt 
    var newToDo = prompt("Enter new todo");
    //add to array with push
    todos.push(newToDo);
  }

  input = prompt("Please enter what you would like to do");
}

console.log("Ok, quit the app!");