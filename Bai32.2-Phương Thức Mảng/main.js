// 1. concat(): Nối mảng hiện tại với mảng khác và trả về một mảng mới
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

//2. push(): Thêm một hoặc nhiều phần tử vào cuối mảng gốc.
let arr4 = [1, 2, 3]
arr4.push(4, 5);
console.log(arr4);

//unshift ( ) Thêm một hoặc nhiều phần tử vào đầu mảng gốc
let arr5 = [1, 2];
arr5.unshift(0, 1, "nam");
console.log(arr5);

//pop(): Loại bỏ phần tử cuối cùng của mảng( làm thay đổi mảng gốc) và trả về phần tử đã bị loại bỏ
let arr6 = [1, 2, 3, "nam"];
let removeElement = arr6.pop();
console.log(arr6);
console.log(removeElement);

// shift(): Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ
let arr7 = [1, 2, 3];
let removeElement2 = arr7.shift();
console.log(arr7);
console.log(removeElement2);

// slice(sratIndex, endIndex): Tạo một bản sao của mảng  lưu sang 1 vùng nhớ mới
//  Cắt chuỗi gốc, lấy từ startIndex đến sát endIndex chuỗi gốc (không bao endIndex).
//  Bỏ trống sẽ hiểu sao chép lấy toàn bộ mảng gốc sang mảng mới
let arr8 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4);
console.log(arr8);
console.log(sliceArr);

// includes( ): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không.
//  Trả về true nếu có và false nếu không

let arr9 = [1, 2, 3, 4, 5, "nam"];
let isPresent = arr9.includes("nam");
console.log(isPresent);