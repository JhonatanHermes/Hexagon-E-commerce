document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const totalPriceElement = document.getElementById('total-price');
    const cartItemsElement = document.getElementById('cart-items');
    let totalPrice = 0;
    let cart = [];

    // Função para adicionar o preço do produto ao carrinho
    function addToCart(event) {
        const button = event.target;
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        // Adiciona o item ao carrinho
        const cartItem = {
            id: id,
            name: name,
            price: price
        };
        cart.push(cartItem);

        // Atualiza o total e exibe os itens no carrinho
        totalPrice += price;
        updateCartUI();
    }

    // Função para remover o item do carrinho
    function removeFromCart(itemId) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            // Subtrai o preço do item do total e remove-o do array
            totalPrice -= cart[itemIndex].price;
            cart.splice(itemIndex, 1);
            updateCartUI();
        }
    }

    // Função para atualizar a interface do carrinho
    function updateCartUI() {
        // Atualiza o total do carrinho
        totalPriceElement.textContent = totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        // Limpa os itens anteriores da lista
        cartItemsElement.innerHTML = '';

        // Adiciona cada item ao carrinho com um botão de remover
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = () => removeFromCart(item.id);

            li.appendChild(removeButton);
            cartItemsElement.appendChild(li);
        });
    }

    // Adiciona o evento de clique a todos os botões "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Funções existentes (menu hambúrguer e formulário de contato)
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const itens = document.querySelector('nav ul');
    const burguer = document.getElementById('burguer');
    const formMessage = document.getElementById('form-message');

    function toggleMenu() {
        itens.classList.toggle('visible');
    }

    burguer.addEventListener('click', toggleMenu);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitButton.disabled = true;
        formMessage.textContent = 'Enviando...';

        setTimeout(() => {
            formMessage.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
            submitButton.disabled = false;
        }, 2000);
    });
});
