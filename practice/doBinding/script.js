function handleClick() {
  console.log("hello baby");
}
function doBinding() {
  var btn = document.getElementById("btn");
  btn.onclick = handleClick;
}
window.onload = doBinding;
