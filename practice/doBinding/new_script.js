window.onload = doBindings;
function doBindings() {
  document.getElementById("btn");
  btn.onclick = handleClick;
}
function handleClick() {
  var input = document.getElementById("input");
  var toDo = document.createTextNode(input.value);
  var toDoElement = document.createElement("li");
  toDoElement.appendChild(toDo);
  var toDos = document.getElementById("toDos");
  toDos.appendChild(toDoElement);
}
