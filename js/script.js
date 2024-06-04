//Ini JavaScript File
// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// klik menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik mouse di luar sidebar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
