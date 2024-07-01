let M1 = [1, 2, 3];
let M2 = [...M1];
console.log(M2);

//Mảng M2 là clone của M1 và thay đổi gia trị của M2 không liên quan đến M1
M2[0] = 99;
console.log("Mảng M2 = " + M2);
console.log("Mảng M1 = " + M1);

// truyền đối số vào hàm: 
function sum(a, b, c) {
    return a + b + c;

}
let numbers = [1, 2, 3];
let result = sum(...numbers);
console.log(result);

// 13.3 Kết hợp mảng
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArr = [...arr1, ...arr2];
console.log(combineArr);

// tạo mảng mới với thêm phần tử: 
let M3 = [1, 2, 3];
let M4 = [...M3, 4, 5, 9];
console.log(M4);

//Chuyển đổi iterable thành mảng:

let myName = "jacky";
let chars = [...myName];
console.log(chars);