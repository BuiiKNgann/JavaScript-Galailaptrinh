// Loại bỏ phần tử từ mảng
let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(2, 2); //xoá từ vị trí 2, xoá đi 2 phần tử
arr11.splice(-2, 2); //xoá từ vị trí 2, xoá đi 2 phần tử
console.log(arr11);


// thay thế phần tử trong mảng
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 1, 6); // xoá từ vị trí 2, xoá 1 ký tự
// thêm phần tử 6 từ vị trí index 2
console.log(arr12);



// Thêm phần tử trong mảng

let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 7, 8, 9);
// xoá 0 phần tử, thêm 6,7,8,9 từ phần tử 2
console.log(arr13);