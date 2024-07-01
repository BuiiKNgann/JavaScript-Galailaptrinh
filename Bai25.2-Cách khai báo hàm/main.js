//2.1 function declaration
//khai báo hàm
function tong(a = 0, b = 0) {
    return a + b;
}
//gọi hàm
console.log(tong(5, 3));

//2.2 function expression

let ten_bien = function (parameters) {
    // thân hàm
    // return something
}

// khai báo
let tich = function (a = 1, b = 1) {
    return a * b;
};

// gọi hàm
console.log(tich(4, 5));