document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const itens = document.querySelector('nav ul');
    const burguer = document.getElementById('burguer');
    const formMessage = document.getElementById('form-message');

    // Função para alternar o menu em telas menores
    function toggleMenu() {
        itens.classList.toggle('visible');
    }

    // Adiciona o evento de clique no botão de menu
    burguer.addEventListener('click', toggleMenu);

    // Função para enviar o formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitButton.disabled = true;  // Desativa o botão para evitar múltiplos envios
        formMessage.textContent = 'Enviando...';

        // Simulação de envio (você pode substituir isso por uma requisição real)
        setTimeout(() => {
            formMessage.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
            submitButton.disabled = false;
        }, 2000);
    });
});
