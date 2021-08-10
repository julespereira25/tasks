const menuToggle = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const display = document.querySelector(".display-none");
const closeSidebar = document.querySelector(".close");

menuToggle.addEventListener("click", () => {
  menu.classList.remove("display-none");
  menuToggle.classList.add("display-none");
});

closeSidebar.addEventListener("click", () => {
  menu.classList.add("display-none");
});

// menuToggle.classList.toggle("active");
// showcase.classList.toggle("active");
