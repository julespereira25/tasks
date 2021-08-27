const menuToggle = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const display = document.querySelector(".display-none");
const closeSidebar = document.querySelector(".close");
const form = document.getElementById("form");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const featureIcon3 = document.querySelector(".feature-icon3");
const featureIcon4 = document.querySelector(".feature-icon4");
const featureIcon5 = document.querySelector(".feature-icon5");
const cardGroup = document.querySelectorAll(".cardgroup");
const disableButton = document.querySelector(".disabled");
const navTop = document.querySelector(".fixed-top");
const navZ = document.querySelector(".fixed-top-z");
const navbar = document.querySelector(".navbar");
const headerButton = document.querySelector(".header-button");
const headerWelcome = document.querySelector(".headerWelcome");
const logoutButton = document.querySelector(".logoutButton");
const passwordLost = document.querySelector(".passwordLost");
const resetDisplay = document.querySelector(".resetDisplay");
const resetCard = document.querySelector(".reset");
const loginCard = document.querySelector(".loginCard");
const cancel = document.querySelector(".cancel");
const resetButton = document.querySelector(".resetButton");
const resetmail = document.getElementById("resetEmail");
const forgot = document.querySelector(".forgot");
const navSideLogin = document.querySelector(".navSideLogin");
const navSideLogout = document.querySelector(".navSideLogout");
const modalDisplay = document.querySelector(".modalShow");

// const headerwelcomeDisplay = document.querySelector(".headerWelcomeDisplay");

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

function validationForm(event) {
  console.log("working");
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

  if (
    firstName != "" &&
    mobileNumber != "" &&
    (signUpEmail != "" &&
    emailformat2.test(signUpEmail)) &&
    signupPassword.length >= 7 &&
    signupPassword != ""
  ) {
    modalDisplay.classList.remove("modalDisplay");
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
  console.log("work");
  var loginValidate = document.querySelector(".login-validate");
  var loginEmail = document.getElementById("loginInputEmail").value;
  var loginPassword = document.getElementById("loginInputPassword").value;
  var emailformat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (loginEmail != "" && emailformat1.test(loginEmail)) {
    loginValidate.innerHTML = "";
  } else {
    loginValidate.innerHTML = "Please provide the valid email format";
  }
  console.log("this is " + loginEmail);

  if (loginPassword.length < 7) {
    loginValidate.innerHTML = "Password length must be atleast 7 characters";
  } else {
    loginValidate.innerHTML = "";
  }

  if (loginPassword == "") {
    loginValidate.innerHTML = "Password field cannot be blank";
  }

  var userInput = {
    email: loginEmail,
    password: loginPassword,
  };

  var existingUsersFromLocalStorage =
    JSON.parse(localStorage.getItem("users")) || [];

  var user = existingUsersFromLocalStorage.find(
    (usr) =>
      usr.email === userInput.email && usr.password === userInput.password
  );

  console.log(user);
  console.log(userInput.email);
  console.log(userInput.password);

  if (user) {
    let date = new Date(2021, 07, 29).toUTCString();
    console.log(user.firstName);
    document.cookie =
      "token=" + user.firstName + ";expires=" + date + "; path=/";
    window.location.href = "index.html";
  } else {
    loginValidate.innerHTML = "User does not exist";
  }
}

function getCookie(key) {
  const regexp = new RegExp(`.*${key}=([^;]*)`);
  const result = regexp.exec(document.cookie);
  if (result) {
    headerButton.classList.add("headerButtondisplay");
    headerWelcome.innerHTML = "Hi, " + result[1];
    headerWelcome.classList.remove("headerwelcomeDisplay");
    logoutButton.classList.remove("head-button");
    navSideLogin.classList.add("navLogin");
    navSideLogout.classList.remove("navLogout");
  }
}

getCookie("token");

logoutButton.addEventListener("click", deleteCookie);
function deleteCookie() {
  document.cookie =
    "token=" + "" + ";expires = Thu, 01 Jan 1970 00:00:00 GMT" + "; path=/";
  window.location.reload();
}

navSideLogout.addEventListener("click", deleteCookie1);
function deleteCookie1() {
  document.cookie =
    "token=" + "" + ";expires = Thu, 01 Jan 1970 00:00:00 GMT" + "; path=/";
  window.location.reload();
}

// form3.addEventListener("submit", newPassword);

// function newPassword() {
//   var resetPassword = document.getElementById("resetPassword").value;
//   var resetconfirmPassword = document.getElementById(
//     "resetconfirmPassword"
//   ).value;
//   var resetValidate = document.querySelector(".resetValidate");

//   if (resetPassword.length < 7) {
//     resetValidate.innerHTML = "Password length must be atleast 7 characters";
//   } else {
//     resetValidate.innerHTML = "";
//   }
//   if (resetPassword == "") {
//     resetPassword.innerHTML = "Input a value for password";
//   }

//   if (resetconfirmPassword != resetPassword) {
//     resetValidate.innerHTML = "Password is not matching";
//   } else {
//     resetValidate.innerHTML = "";
//   }

//   console.log(resetPassword);
//   console.log(resetconfirmPassword);

//   var userInput = {
//     password: resetPassword,
//   };

//   var existingUsersFromLocalStorage =
//     JSON.parse(localStorage.getItem("users")) || [];
//   var user = existingUsersFromLocalStorage.find(
//     (usr) => usr.password === userInput.password
//   );
//   // console.log(user);
//   console.log(userInput.password);
//   if (user) {
//     localStorage.setItem("users", usr.password);
//   }
// }

// logoutButton.addEventListener("click", deleteCookie);

// function deleteCookie() {
//   document.cookie =
//     "token=" + "" + ";expires = Thu, 01 Jan 1970 00:00:00 GMT" + "; path=/";
//   window.location.reload();
// }

// form2.addEventListener("submit", resetEmail);

// function resetEmail() {
//   console.log("okay");
//   var resetmail = document.getElementById("resetEmail").value;
//   var userInput = {
//     email: resetmail,
//   };
//   var existingUsersFromLocalStorage =
//     JSON.parse(localStorage.getItem("users")) || [];
//   var user = existingUsersFromLocalStorage.find(
//     (usr) => usr.email === userInput.email
//   );
//   console.log(user);
//   console.log(userInput.email);

//   if (user) {
//     forgot.classList.remove("forgotPassword");
//     resetCard.classList.add("resetDisplay");
//   }
// }

// passwordLost.addEventListener("click", () => {
//   loginCard.classList.add("loginDisplay");
//   resetCard.classList.remove("resetDisplay");
// });

// cancel.addEventListener("click", () => {
//   resetCard.classList.add("resetDisplay");
//   loginCard.classList.remove("loginDisplay");
// });

// featureIcon3.addEventListener("click", () => {
//   cardGroup.forEach((item) => {
//     item.classList.add("col-lg-4");
//     item.classList.remove("col-lg-3");
//   });
// });

// featureIcon4.addEventListener("click", () => {
//   cardGroup.forEach((item) => {
//     item.classList.add("col-lg-3");
//     item.classList.remove("col-lg-4");
//   });
// });

// featureIcon5.addEventListener("click", () => {
//   cardGroup.forEach((item) => {
//     item.classList.add("col-lg-2");
//     item.classList.remove("col-lg-4");
//     item.classList.remove("col-lg-3");
//   });
// });

// disableButton.disabled = true;

// let links = document.querySelectorAll(".nav-link");
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function () {
//     for (let j = 0; j < links.length; j++) links[j].classList.remove("active");
//     this.classList.add("active");
//   });
// }
