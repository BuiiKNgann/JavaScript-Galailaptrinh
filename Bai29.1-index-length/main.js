// 2 khởi tạo chuỗi

let s1 = `Hi các bạn
Mình mới học lập trình`
console.log(s1);


// index chuỗi: index bắt đầu từ 0
let ten = "Linh";
console.log(ten[3]);

// 4. string length
let s3 = "abcdef"
console.log(s3.length);

// Ví dụ vận dụng : Nhập vào 1 tin nhắn, giới hạn ký tự nhập tối đa 140,
// nếu quá báo số ký tự vượt quá
let message = prompt("Mời nhập vào chuỗi ");
if (message.length <= 140) {
    alert(`Banj đã nhập ${message.length}`)
}
else {
    alert(` Bạn đã nhập quá ${message.length - 140} ký tự`)
}