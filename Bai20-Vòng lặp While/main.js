let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// ví dụ
let n = prompt("Nhập vào số nguyên n (1-99): ");
console.log(n);
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
    n = Number(prompt("Số bạn nhập không hợp lệ, vui lòng nhập lại (1-99)"))
}
alert("Bạn đã nhập số n: " + n);