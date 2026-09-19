
function discountPrice(discount, price) {
    const discountPrice = discount * price;
    return discountPrice;
}

function totalPrice(price, discountPrice) {
    return price - discountPrice
}

const discount = discountPrice(200, 0.20);
console.log(`Discount: $${discount}`);

const total = totalPrice(200, discount);
console.log(`Total: $${total}`);

