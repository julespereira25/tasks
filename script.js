const menuToggle = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const display = document.querySelector(".display-none");
const closeSidebar = document.querySelector(".close");
const form = document.getElementById("form");
const form1 = document.getElementById("form1");
const featureIcon3 = document.querySelector(".feature-icon3");
const featureIcon4 = document.querySelector(".feature-icon4");
const featureIcon5 = document.querySelector(".feature-icon5");
const cardGroup = document.querySelectorAll(".cardgroup");
const disableButton = document.querySelector(".disabled");
const navTop = document.querySelector(".fixed-top");
const navZ = document.querySelector(".fixed-top-z");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  menu.classList.remove("display-none");
  menu.classList.add("menu-active");
  navbar.classList.add("fixed-top-z");
  navbar.classList.remove("fixed-top");
});

closeSidebar.addEventListener("click", () => {
  menu.classList.add("display-none");
  menuToggle.classList.remove("display-none");
});

const currentLocation = location;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validationForm();
// });

// form1.addEventListener("submit", (e1) => {
//   e1.preventDefault();

//   validationLogin();
// });

function validationForm() {
  var validateFirstname = document.querySelector(".signup-validate");
  var validateLastname = document.querySelector(".signup-validate1");
  var validatePhonenumber = document.querySelector(".signup-validate2");
  var validateEmail = document.querySelector(".signup-validate3");
  var validatePassword = document.querySelector(".signup-validate4");
  var signupMailCheck = document.querySelector(".signupMailcheck");
  var firstName = document.getElementById("signupfirstName").value;
  var lastName = document.getElementById("signuplastName").value;
  var mobileNumber = document.getElementById("signupInputNumber").value;
  var signUpEmail = document.getElementById("signupInputEmail").value;
  var signupPassword = document.getElementById("signupInputPassword").value;
  var emailformat2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstName == "") {
    validateFirstname.innerHTML = "First Name field cannot be blank";
  } else {
    validateFirstname.innerHTML = "";
  }

  console.log("this is " + firstName);

  if (lastName == "") {
    validateLastname.innerHTML = "Last Name field cannot be blank";
  } else {
    validateLastname.innerHTML = "";
  }

  if (mobileNumber == "") {
    validatePhonenumber.innerHTML = "Phone number field cannot be blank";
  } else {
    validatePhonenumber.innerHTML = "";
  }

  if (signUpEmail != "" && emailformat2.test(signUpEmail)) {
    validateEmail.innerHTML = "";
  } else {
    validateEmail.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + signUpEmail);

  if (signupPassword.length < 7) {
    validatePassword.innerHTML = "Password length must be atleast 7 characters";
  } else {
    validatePassword.innerHTML = "";
  }

  if (signupPassword == "") {
    validatePassword.innerHTML = "Password field cannot be blank";
  }

  var userInput = {
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
    email: signUpEmail,
    password: signupPassword,
  };

  var existingUsersFromLocalStorage =
    JSON.parse(localStorage.getItem("users")) || [];

  var user = existingUsersFromLocalStorage.find(
    (usr) => usr.email === userInput.email
  );

  console.log(user);

  if (user) {
    signupMailCheck.innerHTML = "This account is already registered";
  } else {
    signupMailCheck.innerHTML = "";
    existingUsersFromLocalStorage.push(userInput);
    localStorage.setItem(
      "users",
      JSON.stringify(existingUsersFromLocalStorage)
    );
  }
}

function validationLogin() {
  var loginValidate = document.querySelector(".login-validate");
  var loginEmail = document.getElementById("loginInputEmail").value;
  var loginPassword = document.getElementById("loginInputPassword").value;
  var emailformat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (loginEmail != "" && emailformat1.test(loginEmail)) {
    loginValidate.innerHTML = "";
  } else {
    loginValidate.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + loginValidate);

  if (loginPassword.length < 7) {
    loginValidate.innerHTML = "Password length must be atleast 7 characters";
  } else {
    loginValidate.innerHTML = "";
  }
  if (loginPassword == "") {
    loginValidate.innerHTML = "Input a value for password";
  }
}

// var userInput = {
//   firstName: firstName,
//   lastName: lastName,
//   mobileNumber: mobileNumber,
//   email: signUpEmail,
//   password: signupPassword,
// };

// var existingUsersFromLocalStorage =
//   JSON.parse(localStorage.getItem("users")) || [];

// var user = existingUsersFromLocalStorage.find(
//   (usr) => usr.username === loginEmail && usr.password == loginPassword
// );

// if (user) {
//   loginEmailValidate1.innerHTML = "User already exists";
// } else {
//   loginEmailValidate1.innerHTML = "";
// }

featureIcon3.addEventListener("click", () => {
  cardGroup.forEach((item) => {
    item.classList.add("col-lg-4");
    item.classList.remove("col-lg-3");
  });
});

featureIcon4.addEventListener("click", () => {
  cardGroup.forEach((item) => {
    item.classList.add("col-lg-3");
    item.classList.remove("col-lg-4");
  });
});

featureIcon5.addEventListener("click", () => {
  cardGroup.forEach((item) => {
    item.classList.add("col-lg-2");
    item.classList.remove("col-lg-4");
    item.classList.remove("col-lg-3");
  });
});

disableButton.disabled = true;

let links = document.querySelectorAll(".nav-link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    for (let j = 0; j < links.length; j++) links[j].classList.remove("active");
    this.classList.add("active");
  });
}
