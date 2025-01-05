// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika pakaian menu di klik
document.querySelector("#pakaian-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const pakaian = document.querySelector("#pakaian-menu");
document.addEventListener("click", function (e) {
  if (!pakaian.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
