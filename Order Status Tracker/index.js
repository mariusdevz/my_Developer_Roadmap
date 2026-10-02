const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const placeOrder = document.getElementById('order');

function orderPlaced() {
    return new Promise((resolve) => {
        setTimeout(() => {
            first.textContent = "Place Order";
            resolve();
        }, 1000)
    })
}
function paymentConfirmed() {
    return new Promise((resolve) => {
        setTimeout(() => {
            second.textContent = "payment confirmed!";
            resolve();
        }, 1000)
    })
}
function outForDelivery() {
    return new Promise((resolve) => {
        setTimeout(() => {
            third.textContent = "Out for delivery";
            resolve();
        }, 1000)
    })
}
function delivered() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fourth.textContent = "Delivered!"
            resolve();
        }, 1000)
    })
}

placeOrder.addEventListener('click', () => {
    orderPlaced().
        then(paymentConfirmed)
        .then(outForDelivery)
        .then(delivered)
})

// ALL GOOD