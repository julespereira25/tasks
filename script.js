const menuToggle = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const display = document.querySelector(".display-none");
const closeSidebar = document.querySelector(".close");
const submitButton = document.querySelector(".login-submit");
const form = document.getElementById('form')

menuToggle.addEventListener("click", () => {
  menu.classList.remove("display-none");
  menuToggle.classList.add("display-none");
});

closeSidebar.addEventListener("click", () => {
  menu.classList.add("display-none");
});

submitButton.addEventListener("click", validationLogin);

function validationLogin() {
  var loginValidate = document.querySelector(".login-validate");
  var loginEmail = document.getElementById("exampleInputEmail1").value;
  var emailformat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var loginPassword = document.getElementById("exampleInputPassword1").value;

  // if (loginEmail == "" && loginPassword == "") {
  //   loginValidate.innerHTML = "Email and password field is blank.";
  // }

  // if (loginPassword == "") {
  //   loginValidate.innerHTML = "Password field is blank.";
  // }

  // if (loginEmail == "") {
  //   loginValidate.innerHTML = "Incorrect email or password.";
  // }

  // if (loginPassword.length < 7) {
  //   loginValidate.innerHTML = "Password length must be atleast 7 characters";
  // }

  if (loginEmail != "" && emailformat1.test(loginEmail)) {
    loginValidate.innerHTML = "";
  } else {
    loginValidate.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + loginEmailValidate);

  if (loginPassword.length < 7) {
    loginValidate.innerHTML = "Password length must be atleast 7 characters";
  } else {
    loginValidate.innerHTML = "";
  }
  if (loginPassword == "") {
    loginValidate.innerHTML = "Input a value for password";
  }
}



function validationForm() {

  var signupValidate = document.querySelector(".signup-validate");
  var loginEmail = document.getElementById("exampleInputEmail1").value;
  var emailformat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var loginPassword = document.getElementById("exampleInputPassword1").value;
  var firstName = document.getElementById("examplefirstName1").value;
  var lastName = document.getElementById("examplelastName1").value;
  var mobileNumber = document.getElementById("exampleInputNumber1").value;
  var inputEmail = document.getElementById("exampleInputEmail1").value;
  var inputPassword = document.getElementById("exampleInputPassword1").value;



  form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value === '' || firstName.value == null) {
      messages.push('Name is required')
    }
  
    if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters')
    }
  
    if (password.value.length >= 20) {
      messages.push('Password must be less than 20 characters')
    }
  
    if (password.value === 'password') {
      messages.push('Password cannot be password')
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })








  

  if (name1 == "") {
    nameValidate.innerHTML = "Name field is blank...please return a value";
  } else {
    nameValidate.innerHTML = "";
  }
  if (email != "" && emailformat.test(email)) {
    emailValidate.innerHTML = "";
  } else {
    emailValidate.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + email);

  if (loginPassword.length < 7) {
  if (signupPassword.length < 7) {
    passwordValidate.innerHTML = "Password length must be atleast 7 characters";
  } else {
    passwordValidate.innerHTML = "";
  }
  if (loginPassword == "") {
  if (signupPassword == "") {
    passwordValidate.innerHTML = "Input a value for password";
  }

  console.log("this is " + loginPassword);
  console.log("this is " + signupPassword);

  if (confirmPassword != loginPassword) {
  if (confirmPassword != signupPassword) {
    password.innerHTML = "password is not matching";
  } else {
    password.innerHTML = "";
  }
  let array = [];
  let userInput = { name: name1, username: email, password: loginPassword };

  console.log(userInput);
  let userInput = { name: name1, username: email, password: signupPassword };

  array.push(userInput.username);
  console.log(array);
  console.log(userInput);

  if (array.includes(userInput.username)) {
  let existingUsersFromLocalStorage =
    JSON.parse(localStorage.getItem("users")) || [];
  if (existingUsersFromLocalStorage.includes(userInput.username)) {
    differentMail.innerHTML = "Sorry you have already entered this email";
  } else {
    differentMail.innerHTML = "";
    existingUsersFromLocalStorage.push(userInput.username);
    localStorage.setItem(
      "users",
      JSON.stringify(existingUsersFromLocalStorage)
    );
  }

  const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})