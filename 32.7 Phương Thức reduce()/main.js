// Bài toán khi không dùng reduce()
let M1 = [3, 2, 3];
// thực hiện tính tổng các phần tử trong mảng
// giá trị khởi tạo ban đầu
let sum = 0;
for (let element of M1) {
    console.log(element);
    sum += element;
}
console.log("Tổng các phần tử trong mảng: " + sum);

// khi dùng reduce()
let sum2 = M1.reduce(
    // Tham số thứ 1: hàm
    (accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue
    },
    // tham số thứ 2: intialValue
    0
);
console.log(sum2);

// rút gọn lại
let sum3 = M1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum3);