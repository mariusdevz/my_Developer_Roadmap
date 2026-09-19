let shoppingList = ["milk", "bread", "butter", "cheese"];

shoppingList.push("eggs");
// console.log(shoppingList);

shoppingList.pop();
// console.log("Removed", shoppingList);

function remove() {
    shoppingList = shoppingList.filter(item => item !== 'butter')
}

remove();

console.log("New List", shoppingList);



