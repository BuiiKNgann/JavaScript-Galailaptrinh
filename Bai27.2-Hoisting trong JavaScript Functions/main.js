
//Function Declaration:
//Có hoisting. Bạn có thể gọi hàm trước khi nó được định nghĩa
hoistedFunction();
function hoistedFunction() {
    console.log("Hello");
}

//Function Expression,Arrow Function
//Không có hoisting. Phải gọi hàm sau khi đã đã định nghĩa
let nonHoitedFunction = function () {
    console.log("Hello");
}

let arrowFunction = () => {
    console.log("Hello");
};
arrowFunction()