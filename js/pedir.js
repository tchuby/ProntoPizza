document.addEventListener('DOMContentLoaded', () => {
    const pizzaSizeSelect = document.getElementById('pizzaSize');
    const pizzaPriceSpan = document.getElementById('pizzaPrice');
    const drinkSizeSelect = document.getElementById('drinkSize');
    const drinkPriceSpan = document.getElementById('drinkPrice');
    const addPizzaBtn = document.getElementById('addPizzaBtn');
    const addDrinkBtn = document.getElementById('addDrinkBtn');
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceSpan = document.getElementById('totalPrice');
    
    let total = 0;

    // Atualiza o preço da pizza
    pizzaSizeSelect.addEventListener('change', (e) => {
        const price = parseFloat(e.target.value);
        pizzaPriceSpan.textContent = `R$${price.toFixed(2)}`;
    });

    // Atualiza o preço do refrigerante
    drinkSizeSelect.addEventListener('change', (e) => {
        const price = parseFloat(e.target.value);
        drinkPriceSpan.textContent = `R$${price.toFixed(2)}`;
    });

    // Adiciona pizza ao carrinho ao clicar no botão
    addPizzaBtn.addEventListener('click', () => {
        const price = parseFloat(pizzaSizeSelect.value);
        const itemName = pizzaSizeSelect.options[pizzaSizeSelect.selectedIndex].text;
        addItemToCart(itemName, price);
    });

    // Adiciona refrigerante ao carrinho ao clicar no botão
    addDrinkBtn.addEventListener('click', () => {
        const price = parseFloat(drinkSizeSelect.value);
        const itemName = drinkSizeSelect.options[drinkSizeSelect.selectedIndex].text;
        addItemToCart(itemName, price);
    });

    // Função para adicionar item ao carrinho
    function addItemToCart(itemName, price) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${itemName} - R$${price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);

        total += price;
        totalPriceSpan.textContent = total.toFixed(2);
    }
});
