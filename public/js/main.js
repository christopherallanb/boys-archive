const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// botão de modo escuro
let trilho = document.getElementById("trilho");
let body = document.querySelector("body")
let navbar = document.querySelector(".navbar")
let hero = document.querySelector(".hero")


trilho.addEventListener("click", ()=>{
    trilho.classList.toggle("modoescuro")
    body.classList.toggle("modoescuro")
    navbar.classList.toggle("modoescuro")
    hero.classList.toggle("modoescuro")
})