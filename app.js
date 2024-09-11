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

    // Função para ajustar o layout baseado no tamanho da tela
    function mudouTamanho() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'flex';
            burguer.style.display = 'none'; // Esconde o botão burguer em telas grandes
        } else {
            itens.style.display = 'none';
            burguer.style.display = 'block'; // Mostra o botão burguer em telas pequenas
        }
    }

    // Função para exibir ou ocultar o menu ao clicar no botão de hambúrguer
    function clickMenu() {
        if (itens.style.display === 'flex') {
            itens.style.display = 'none';
        } else {
            itens.style.display = 'flex';
        }
    }

    // Adiciona os eventos de clique e redimensionamento
    burguer.addEventListener('click', clickMenu);
    window.addEventListener('resize', mudouTamanho);

    mudouTamanho(); // Inicializa o estado correto do menu
});

