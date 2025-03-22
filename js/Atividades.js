document.addEventListener('DOMContentLoaded', function() {
    var atividades = document.querySelectorAll('.btn-primary');
  
    atividades.forEach(function(btn) {
      btn.addEventListener('click', function() {
        alert('Iniciando atividade: ' + this.parentElement.parentElement.querySelector('.card-title').textContent);
      });
    });
  });
  