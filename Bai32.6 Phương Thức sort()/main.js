// phương thức sort
let M1 = ["b", "a", "c"];
// để xem giá trị dùng charCodeAt();
console.log("b".charCodeAt());
// Duyệt mảng để xem
for (let element of M1) {
    console.log(element);
    console.log(`${element} có mã unicode là: ${element.charCodeAt()}`);
}
let sortedM1 = M1.sort();
console.log(sortedM1);

// Trường hợp 2
let M2 = ["baa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

// ví dụ với ký tự số (vì xếp theo unicode nên kq không như mong muốn)
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3);


let M4 = [9, 3, 5, 4];
//trước khi sắp xếp
console.log(M4);
// sx tăng dần
let sortedM4 = M4.sort((a, b) => a - b)
console.log(sortedM4);

// sx giảm dần
let sortedM5 = M4.sort((a, b) => b - a)
console.log(sortedM5);