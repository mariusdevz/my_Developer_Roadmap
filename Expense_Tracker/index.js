
const expenses = [
    { name: "Food", amount: 15, category: "food" },
    { name: "Taxi", amount: 19, category: "transport" },
    { name: "Internet", amount: 20, category: "bills" },
    { name: "Lunch", amount: 12, category: "food" }
];


const names = expenses.map(expense => expense.name);
const categoryName = expenses.filter(expense => expense.category === 'food');
function total() {
    return expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);
}


console.log(names);
console.log(categoryName);
console.log(total());


