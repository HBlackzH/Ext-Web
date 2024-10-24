document.getElementById('form-contato').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (!nome || !email) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      event.preventDefault();
    }
  });
  