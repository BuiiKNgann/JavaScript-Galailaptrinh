let number = 10;
let message = number >= 0 ? "Số dương" : "Số âm";
console.log(message);


let number2 = 11;
let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẻ";
console.log(message2);

let dtb = parseFloat(prompt("Mời bạn nhập điểm"))

let xepLoai = dtb >= 8 ? "Giỏi" : dtb > 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "yếu"
console.log(`Xếp loại của học sinh là: ${xepLoai} `);