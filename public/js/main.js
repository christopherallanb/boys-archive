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
<<<<<<< HEAD
});
=======
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

     // verifica se o modo escuro está ativo ou não

    if (body.classList.contains("modoescuro")) {
      localStorage.setItem("modoescuro", "ativo");
    } else {
      localStorage.setItem("modoescuro", "inativo");
    }
});

 // verifica se o modo escuro estava ativado
window.addEventListener("load", () => {
  if (localStorage.getItem("modoescuro") === "ativo") {
      trilho.classList.add("modoescuro");
      body.classList.add("modoescuro");
      navbar.classList.add("modoescuro");
      hero.classList.add("modoescuro");
  }
});
 
>>>>>>> f0e001f1d53bc643436145fafa52cf5dc1804add
