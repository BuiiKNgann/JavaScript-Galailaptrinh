function tinhGiaiThuaFor(n) {
    let gt = 1;
    for (let i = 1; i <= n; i++) {
        console.log(i);
        gt *= i;
    }
    return gt;
}
// nhập liệu
let n = Number(prompt("Nhập vào 1 số nguyên 0 ân=m"))
//Kiểm tra tính hợp lệ của n, sai bắt nhập lại
while (!Number.isInteger(n) || n < 0) {
    n = Number(prompt("Số không hợp lệ, vui lòng nhập lại: "));
}

let ketQuaFor = tinhGiaiThuaFor(n);
console.log(`${n}! sử dụng for = ${ketQuaFor}`);