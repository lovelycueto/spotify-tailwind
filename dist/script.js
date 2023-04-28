const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arjay = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("z-index:999;");
  headerNav.style=("transition:.5s ease");
  arjay.classList.toggle("show");

})

const kamote = document.querySelectorAll(".links__item h4");
kamote.forEach((kamoteq) => {
  kamoteq.addEventListener("click", () => {
    kamoteq.nextElementSibling.classList.toggle("open");
    kamoteq.querySelector("i").classList.toggle("open");

  })
})
  
