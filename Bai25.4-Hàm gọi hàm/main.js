//Hàm thực hiện phép tính cộng
function cong(a, b) {
    return a + b;
}

//Hàm thực hiện phép tính nhân
function nhan(x, y) {
    return x * y;
}

//Hàm gọi các hàm khác để thực hiện phép tính tổng và nhân
function congNhan(num1, num2, num3) {
    // Gọi hàm cộng để tính cộng num1 + num2
    let sum = cong(num1, num2);
    //Gọi hàm nhân để tính tích sum * num3
    let product = nhan(sum, num3);
    // trả về kết quả 
    return product;
}
// Sử dụng hàm cộng nhân
let result = congNhan(2, 3, 4);
console.log(result);