const signupNav = document.querySelector(".signupNav");
const loginNav = document.querySelector(".loginNav");
const signupLink = document.querySelector(".switch");
const signupForm = document.querySelector(".signup");
const loginLink = document.querySelector(".switch1");
const loginForm = document.querySelector(".login");
const icon = document.querySelector(".icon");
const icon1 = document.querySelector(".icon1");
const loginButton = document.querySelector(".loginButton");

signupNav.addEventListener("click", () => {
  loginForm.classList.add("display-none");
  signupForm.classList.remove("display-none");
});

loginNav.addEventListener("click", () => {
  loginForm.classList.remove("display-none");
  signupForm.classList.add("display-none");
});

signupLink.addEventListener("click", () => {
  loginForm.classList.add("display-none");
  signupForm.classList.remove("display-none");
});

icon.addEventListener("click", () => {
  loginForm.classList.add("display-none");
});

icon1.addEventListener("click", () => {
  signupForm.classList.add("display-none");
});

// loginButton.addEventListener("click", validateEmail);
// loginButton.addEventListener("click", validatePassword);
//Email validation

// function validateEmail() {
//   var emailValidate = document.querySelector(".emailValidate");
//   var email = document.querySelector(".email").value;
//   var loginPassword = document.querySelector(".loginPassword").value;
//   var passwordValidate = document.querySelector(".passwordValidate");
//   var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (email.test(emailformat)) {
//     return true;
//   }
//   if (email == "") {
//     emailValidate.innerHTML = "Email field is blank...please return a value";
//     return false;
//   } else {
//     emailValidate.innerHTML = "Please provide the valid email format";
//     return false;
//   }

//   if (loginPassword == "") {
//     passwordValidate.innerHTML = "Fill the password please!";
//     return false;
//   }
//   if (loginPassword.length < 7) {
//     passwordValidate.innerHTML = "Password length must be atleast 7 characters";
//     return false;
//   } else {
//     return true;
//   }

// }

// function validateSignup() {
//   var emailValidate = document.querySelector(".emailValidate");
//   var email = document.querySelector(".email").value;
//   var loginPassword = document.querySelector(".loginPassword").value;
//   var passwordValidate = document.querySelector(".passwordValidate");
//   var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (email.test(emailformat)) {
//     return true;
//   }
//   if (email == "") {
//     emailValidate.innerHTML = "Email field is blank...please return a value";
//     return false;
//   } else {
//     emailValidate.innerHTML = "Please provide the valid email format";
//     return false;
//   }

//   if (loginPassword == "") {
//     passwordValidate.innerHTML = "Fill the password please!";
//     return false;
//   }
//   if (loginPassword.length < 7) {
//     passwordValidate.innerHTML = "Password length must be atleast 7 characters";
//     return false;
//   } else {
//     return true;
//   }
// }

function validateSignup() {
  var name1 = document.querySelector(".name1").value;
  var nameValidate = document.querySelector(".nameValidate");
  var emailValidate = document.querySelector(".emailValidate");
  var email = document.querySelector(".email").value;
  var loginPassword = document.querySelector(".loginPassword").value;
  var passwordValidate = document.querySelector(".passwordValidate");
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (name1 == "") {
    nameValidate.innerHTML = "Name field is blank...please return a value";
    return false;
  } else {
    return true;
  }

  if (loginPassword == "") {
    passwordValidate.innerHTML = "Fill the password please!";
    return false;
  }
  if (loginPassword.length < 7) {
    passwordValidate.innerHTML = "Password length must be atleast 7 characters";
    return false;
  } else {
    return true;
  }
}

function validationForm() {
  var name1 = document.querySelector(".name1").value;
  var nameValidate = document.querySelector(".nameValidate");
  var emailValidate = document.querySelector(".emailValidate");
  var email = document.querySelector(".email").value;
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var loginPassword = document.querySelector(".loginPassword").value;
  var passwordValidate = document.querySelector(".passwordValidate");
  var confirmPassword = document.querySelector(".confirmPassword").value;
  var password = document.querySelector(".password");

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

  // if (loginPassword == "") {
  //   passwordValidate.innerHTML = "Fill the password please!";
  // }
  if (loginPassword.length < 7) {
    passwordValidate.innerHTML = "Password length must be atleast 7 characters";
  } else {
    passwordValidate.innerHTML = "";
  }
  if (loginPassword == "") {
    passwordValidate.innerHTML = "Input a value for password";
  }

  console.log("this is " + loginPassword);

  if (confirmPassword != loginPassword) {
    password.innerHTML = "password is not matching";
  } else {
    password.innerHTML = "";
  }

  let userInput = { name: name1, username: email, password: loginPassword };

  console.log(userInput);

  console.log("this is " + confirmPassword);

  let array = [];

  let array1 = localStorage.getItem("users");

if (array1 ) {

 
//please assign the variable array with the value from array1 after parsing.
array = JSON.parse(array1) 

}




  array.push(userInput);
  console.log(array);

  // localStorage.setItem("users", JSON.stringify(array));

  localStorage.setItem("users", JSON.stringify(array1));

  JSON.parse(localStorage);

  localStorage.getItem("users");
}
