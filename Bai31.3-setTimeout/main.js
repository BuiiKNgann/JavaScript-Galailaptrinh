// Ôn lại 3 cách khai báo hàm
// Arrow function
let helloArrow = () => {
    console.log("Hello");
}
// gọi hàm
//helloArrow()

//setTimeout(helloArrow, 3000);

//function declaration
function xinChao() {
    console.log("Hello in function declaration");

}

//setTimeout(xinChao, 3000)


// function expression
let helloExpression = function () {
    console.log("Hello in  function expression");
};
//setTimeout(helloExpression, 3000)


// 2, Truyền trực tiếp function vào setTimeout
// a. setTimeout với function declaration
// setTimeout(function xinChao() {
//     console.log("Hello in function declaration");

// }, 3000) 

// b. setTimeout với function expression
// setTimeout(function () {
//     console.log("Hello in  function expression");
// }, 3000)

// c setTimeout với Arrow function

// setTimeout(() => {
//     console.log("Hello");
// }, 3000)

//3. Sử dụng với tham số 
// Arrow function
let helloArrow2 = (yourName) => {
    console.log("Hello " + yourName);
};
// helloArrow2("Nam")
// setTimeout(helloArrow2, 3000, "Nam")


// huỷ thực hiện hàm 
let timeOut = setTimeout(helloArrow2, 3000, "Giang");
clearTimeout(timeOut)