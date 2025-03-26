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
 
// Dropdown do perfil
const profileButton = document.getElementById('profileButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Alternar o menu dropdown
profileButton.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('show');
  
  // Rotacionar a seta
  const arrow = profileButton.querySelector('.dropdown-arrow');
  arrow.style.transform = dropdownMenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0)';
});

// Fechar o dropdown quando clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.closest('.profile-dropdown')) {
    dropdownMenu.classList.remove('show');
    const arrow = profileButton.querySelector('.dropdown-arrow');
    arrow.style.transform = 'rotate(0)';
  }
});

// Fechar o dropdown quando um item for selecionado
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
    const arrow = profileButton.querySelector('.dropdown-arrow');
    arrow.style.transform = 'rotate(0)';
  });
});