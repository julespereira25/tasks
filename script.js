const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const firstName = document.getElementById("fname");
const country = document.getElementById("country");
const inline = document.querySelector(".inline");
const block = document.querySelector(".block");
const nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// function onLoad() {
//   alert("Hey there guest!!!! Welcome to my webpage.");
// }

// function onResize() {
//   alert("Hey!!!!You have changed the size of the page");
// }

function onBlur() {
  firstName.value = firstName.value.toUpperCase();
}

function onChange() {
  var x = country.value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}

function onFocus(x) {
  document.getElementById(x).style.background = "yellow";
}

function onInput() {
  var x = document.getElementById("lname").value;
  document.getElementById("lastname").innerHTML = "You wrote: " + x;
}

function onReset() {
  alert("the form was reset");
}

function onSelect() {
  alert("you have selected some text");
}

function onSubmit(e) {
  alert("the form was submitted");
  e.preventDefault();
}

function onKeydown() {
  alert("You pressed a key inside the input field");
}

function onKeyup() {
  var x = document.getElementById("age");
  x.value = x.value.toUpperCase();
}

function changeBackground() {
  document.body.style.background = "antiquewhite";
}

function onDblclick() {
  alert("you have double clicked the button");
}

function mouseDown() {
  inline.style.color = "red";
}

function mouseUp() {
  inline.style.color = "green";
}

function inlineOver(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}

function inlineOut(x) {
  x.style.height = "30px";
}

function onWheel() {
  block.style.fontSize = "50px";
}

function onScroll() {
  block.style.fontSize = "15px";
}
