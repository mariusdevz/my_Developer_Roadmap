
function calculateTip(bill, tipRate) {
    const tip = bill * tipRate;
    return tip;
}


function calculateTotal(bill, tip) {
    return bill + tip;
}

const tipCalc = calculateTip(50, 0.15);
console.log('$', tipCalc);

const totalCalc = calculateTotal(50, tipCalc);
console.log('$', totalCalc);



