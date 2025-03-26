document.addEventListener('DOMContentLoaded', function() {
  // ========== SCROLL TO TOP BUTTON ==========
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  if (scrollTopBtn) {
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
  }

  // ========== MOBILE MENU TOGGLE ==========
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');
  
  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Fechar o dropdown do perfil quando o menu mobile é aberto/fechado
      const dropdownMenu = document.getElementById('dropdownMenu');
      if (dropdownMenu && dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
        const arrow = document.querySelector('.dropdown-arrow');
        if (arrow) arrow.style.transform = 'rotate(0)';
      }
    });
  }

  // ========== Modo escuro TOGGLE ==========
  const trilho = document.getElementById('trilho');
  const body = document.querySelector('body');
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  
  if (trilho) {
    trilho.addEventListener('click', () => {
      // Alternar classes de modo escuro
      trilho.classList.toggle('modoescuro');
      body.classList.toggle('modoescuro');
      if (navbar) navbar.classList.toggle('modoescuro');
      if (hero) hero.classList.toggle('modoescuro');

      // Salvar preferência no localStorage
      localStorage.setItem('modoescuro', body.classList.contains('modoescuro') ? 'ativo' : 'inativo');
    });

    // Verificar preferência de modo escuro ao carregar
    if (localStorage.getItem('modoescuro') === 'ativo') {
      trilho.classList.add('modoescuro');
      body.classList.add('modoescuro');
      if (navbar) navbar.classList.add('modoescuro');
      if (hero) hero.classList.add('modoescuro');
    }
  }

  // ========== PROFILE DROPDOWN ==========
  const profileButton = document.getElementById('profileButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  
  if (profileButton && dropdownMenu) {
    // Alternar o menu dropdown
    profileButton.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
      
      // Rotacionar a seta
      const arrow = profileButton.querySelector('.dropdown-arrow');
      if (arrow) {
        arrow.style.transform = dropdownMenu.classList.contains('show') 
          ? 'rotate(180deg)' 
          : 'rotate(0)';
      }
    });

    // Fechar o dropdown quando clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.profile-dropdown') && dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
        const arrow = profileButton.querySelector('.dropdown-arrow');
        if (arrow) arrow.style.transform = 'rotate(0)';
      }
    });

    // Fechar o dropdown quando um item for selecionado
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
        const arrow = profileButton.querySelector('.dropdown-arrow');
        if (arrow) arrow.style.transform = 'rotate(0)';
        
        // Fechar também o menu mobile se estiver aberto
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      });
    });

    // Fechar dropdown ao pressionar Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
        const arrow = profileButton.querySelector('.dropdown-arrow');
        if (arrow) arrow.style.transform = 'rotate(0)';
      }
    });
  }
});
