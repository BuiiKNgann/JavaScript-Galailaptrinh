//Function expression
let multiply = function (a, b) {
    return a * b;
};
// gọi hàm 
console.log(multiply(5, 4));
// Arrow function (hàm mũi tên)
let multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(5, 5));


// Tuy nhiên với trường hợp hàm phức tạp, cần khối {}
// Function Expression
let multiplyAndAdd = function (a, b) {
    let product = a * b;
    let sum = a + b;
    return product + sum;
};

// Arrow function
let multiplyAndAddArrow = (a, b) => {
    let product = a * b;
    let sum = a + b;
    return product + sum;
}

// gọi hàm
console.log(multiplyAndAdd(3, 5));
console.log(multiplyAndAddArrow(3, 5));
