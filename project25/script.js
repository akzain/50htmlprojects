const nav = document.querySelector('.nav')
const hero = document.querySelector('.avb')
const content = document.querySelector('.content')

window.addEventListener('scroll', fixNav)

function fixNav() {
   if (window.scrollY > hero.offsetHeight - 10) {
      nav.classList.add('active')
   } else {
      nav.classList.remove('active')
   }

   if (nav.classList.contains("active")) {
      content.style.paddingBottom = '20px'
   }
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});