// tính tổng 2 số

// a. 7, 5
let a = 7;
let b = 5;
let tong = a + b;
console.log(tong);

// 2. ví dụ đơn giản
//khai báo
function xinChao() {
    console.log("Chào mừng đến với tuhoc.cc");
}
//bước 2: gọi hàm
xinChao();
xinChao();

// 3, function với tham số (parameters)
// let inputName = prompt("Mời nhập vào tên của bạn: ");
//khai báo hàm
function xinChao2(name) {
    console.log(` Chào mừng ${name} đến với tuhoc.cc`);
}

// xinChao2(inputName)
xinChao2("Bùi Kim Ngân");

// ví dụ 2 
function tinhTong(a, b) {
    // let ketQua = a + b;
    // return ketQua
    return a + b;
}
// gọi hàm
console.log(tinhTong(5, 7));
// gán biến cho hàm (lưu giá trị trả về vào biến)
let diemToan = 8;
let diemVan = 9.5;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(` tongDiem = ${tongDiem}`);
console.log(`DTB = ${tongDiem / 2}`);

// 5. truyền giá trị mặc định cho parameter
function tinhTong2(a = 0, b = 0) {
    // let ketQua = a + b;
    // return ketQua
    return a + b;
}
console.log(tinhTong2(10));