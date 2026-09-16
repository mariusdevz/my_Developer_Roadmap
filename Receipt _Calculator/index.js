const prices = {
    item1: 10,
    item2: 15,
    item3: 5
}

const subtotal = prices.item1 + prices.item2 + prices.item3;
console.log(`subtotal: $${subtotal}`);

const tax = subtotal * 0.1;
console.log(`Tax: $${tax}`);

const total = subtotal + tax;
console.log(`Total: ${total}`)

// ALL GOOD!!