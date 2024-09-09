document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulação de envio
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Validar os campos (básico)
        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
            return;
        }

        // Aqui você pode adicionar lógica para enviar o formulário via AJAX se necessário
        setTimeout(function() {
            // Simulação de sucesso
            alert('Mensagem enviada com sucesso!');
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
        }, 1000); // Simula um atraso de 1 segundo
    });
});
