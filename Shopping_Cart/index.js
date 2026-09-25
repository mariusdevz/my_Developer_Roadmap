const inputEl = document.getElementById('input');
const inputQty = document.getElementById('inputQty')
const addItem = document.getElementById('addItem');
const cartList = document.getElementById('cartList');
const inputPrice = document.getElementById('inputPrice');
const totalPrice = document.getElementById('total');

let carts = [];

function loadCarts() {
    try {
        const saved = JSON.parse(localStorage.getItem('carts'))
        return Array.isArray(saved) ? saved : [];
    } catch {
        return []
    }
}

carts = loadCarts();

function renderCart() {
    cartList.innerHTML = "";
    carts.forEach(cart => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const spanQty = document.createElement('span');
        const spanPrice = document.createElement('span');
        const sum = document.createElement('span')
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'remove';
        deleteBtn.classList.add('add-item');
        deleteBtn.addEventListener('click', () => {
            removeItem(cart.id);
            renderCart();
        });

        const totalSum = totalCart();
        totalPrice.textContent = `Total: $${totalSum}`;
        // console.log(totalSum);

        sum.textContent = `Cost: ${cart.total}`
        spanQty.textContent = `Quantity: ${cart.quantity}`
        span.textContent = `Item: ${cart.text}`;
        spanPrice.textContent = `Price: $${cart.price}`

        cartList.appendChild(li);
        li.appendChild(span);
        li.appendChild(spanQty);
        li.appendChild(spanPrice)
        li.appendChild(sum);
        li.appendChild(deleteBtn);
    });
}

addItem.addEventListener('click', () => {
    addItems();
});

inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItems()
});

inputQty.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItems()
});

inputPrice.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItems()
});

function removeItem(id) {
    carts = carts.filter(cart => cart.id !== id);
    saveCart()
}

function saveCart() {
    localStorage.setItem('carts', JSON.stringify(carts))
}

function totalCart() {
    return carts.reduce((sum, quantity) => {
        return sum + quantity.total
    }, 0)
}


function addItems() {
    const text = inputEl.value.trim();
    const qty = Number(inputQty.value.trim())
    const price = Number(inputPrice.value.trim())
    const total = price * qty;

    if (!text || !qty || !price) return;

    const newCart = {
        id: Date.now(),
        text: text,
        quantity: qty,
        price: price,
        total: total
    }

    carts.push(newCart);
    inputQty.value = ""
    inputEl.value = ""
    inputPrice.value = ""
    renderCart()
    saveCart()
}




renderCart()