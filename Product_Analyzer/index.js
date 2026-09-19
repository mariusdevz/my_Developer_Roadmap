const products = [
    { name: "Laptop", price: 500, category: "electronics" },
    { name: "Phone", price: 500, category: "electronics" },
    { name: "Shoes", price: 100, category: "clothing" },
    { name: "Jacket", price: 150, category: "clothing" },
];

const names = products.map(product => product.name);
console.log("Products:", names);

const categories = products.filter(product => product.category === 'electronics');
console.log("Electronics:", categories);

const total = () => {
    return products.reduce((sum, product) => {
        return sum + product.price
    }, 0)
}

console.log(`Total: $${total()}`);

