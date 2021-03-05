function add(a,b){
    let c = a+b;
    console.log(`The sum of a + b = ${c}`);
}
function subtract(a,b){
    let c = a-b;
    console.log(`The difference of a - b = ${c}`);
}
function multiply(a,b){
    let c = a*b;
    console.log(`The product of a x b = ${c}`);
}
function divide(a,b){
    let c = a/b;
    console.log(`The quotient of a / b = ${c}`);
}

module.exports={add,subtract, multiply};