const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const firstName = document.getElementById("fname");
const country = document.getElementById("country");
const inline = document.querySelector(".inline");
const block = document.querySelector(".block");
const nav = document.querySelector(".nav-menu");
const multiplication = document.querySelector(".second");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

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
  var x = document.getElementById("dob");
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

function backgroundColor() {
  var bgColor = document.getElementById("color").value;
  var multiplication = document.querySelector(".second");
  switch (bgColor) {
    case "Red":
      multiplication.style.backgroundColor = "red";
      break;

    case "Green":
      multiplication.style.backgroundColor = "green";
      break;

    case "Yellow":
      multiplication.style.backgroundColor = "yellow";
      break;

    case "Blue":
      multiplication.style.backgroundColor = "blue";
      break;
  }
}

function numberInput() {
  var numberInput = document.getElementById("numberInput").value;
  var multipleInput = document.querySelector(".multiple-input");

  for (let i = 1; i <= 10; i++) {
    multipleInput.innerHTML +=
      numberInput + "x" + i + "=" + numberInput * i + "<br>";
  }
}
