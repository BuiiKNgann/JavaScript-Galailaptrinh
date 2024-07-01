// Global Scope
let a = 1;
// truy xuất thử biến a
console.log(a);

function viDu_1() {
    // có thể truy xuất biến global ở trong hàm
    console.log(a);
    // thử với phạm vị block scope
    if (a % 2 == 0) {
        console.log(`${a} là số chẵn`);
    } else {
        console.log(`${a} là số lẻ`);
    }
}
//gọi hàm 
viDu_1();

// // 2. Function Scope
// function viDu_2() {
//     let b = 2;

//     // Biến b chỉ có thể truy xuất bên trong hàm
//     console.log(b);
//     // truy xuất được từ sâu bên trong
//     if (b % 2 === 0) {
//         console.log(`${b} là số chẵn`);
//     } else {
//         console.log(`${b} là số lẻ`);
//     }
// }
// // ngoài hàm
// console.log(b);

//3. Block Scope: Biến được khai báo trong {}
let n = 3;
if (n === 3) {
    let m = 1;
    console.log(m);
    if (m % 2 === 0) {
        console.log(`${m} là số chẵn`);
    } else {
        console.log(`${m} là số lẻ`);
    }
}