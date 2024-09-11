document.addEventListener('DOMContentLoaded', () => {
    // Seleciona elementos do formulário e mensagem de feedback
    const form = document.querySelector('form');
    const messageElement = document.getElementById('form-message');

    // Função para lidar com o envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (nome && email && mensagem) {
            messageElement.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
        } else {
            messageElement.textContent = 'Por favor, preencha todos os campos.';
        }
    });

    // Função para ajustar o menu baseado no tamanho da tela
    function adjustMenuDisplay() {
        const itens = document.querySelector('nav ul');
        const burguer = document.getElementById('burguer');

        if (window.innerWidth >= 768) {
            itens.style.display = 'block';
            burguer.style.display = 'none';
        } else {
            itens.style.display = 'none';
            burguer.style.display = 'block';
        }
    }

    // Função para alternar a visibilidade do menu
    function toggleMenu() {
        const itens = document.querySelector('nav ul');
        if (itens.style.display === 'block') {
            itens.style.display = 'none';
        } else {
            itens.style.display = 'block';
        }
    }

    // Adiciona eventos para ajustar o menu e alternar visibilidade
    window.addEventListener('resize', adjustMenuDisplay);
    window.addEventListener('load', adjustMenuDisplay);
    document.getElementById('burguer').addEventListener('click', toggleMenu);
});


