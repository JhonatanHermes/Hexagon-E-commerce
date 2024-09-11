document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const itens = document.querySelector('nav ul');
    const burguer = document.getElementById('burguer');

    // Função para enviar o formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
            return;
        }

        setTimeout(function() {
            alert('Mensagem enviada com sucesso!');
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
        }, 1000);
    });

    // Função para alternar o menu em telas menores
    window.toggleMenu = function() {
        itens.classList.toggle('visible');
    };
});
