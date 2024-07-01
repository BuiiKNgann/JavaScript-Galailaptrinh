// slice cắt chuỗi
let s4 = "234987657"
// cắt chuỗi dùng slice
//let s5 = s4.slice(2, 5); // cắt từ index 2 đến 5 -1 =4
let s5 = s4.slice(2, 9); //cắt từ index 2 đến 9 -1 = 8
console.log(s5);

//  chỉ cho phép tin nhắn dài tối đa 20 ký tự, nếu quá thì tự cắt phần thừa, 
// và xuất chuỗi sau xử lý
// let s6 = prompt("Mời nhập vào chuỗi ");
// console.log(` Bạn đã nhập ${s6.length} ký tự `);
// if (s6.length > 20) {
//     console.log(` Bạn đã nhập quá ${s6.length - 20} ký tự `);
//     let s7 = s6.slice(0, 20);
//     console.log("Chuỗi sau xử lý: " + s7);
// }

// //code online
// console.log("Chuỗi sau xử lý: " + prompt("Mời nhập vào chuỗi 2").slice(0, 20));


// substring
let s8 = "234987657";
let s9 = s8.substring(2, 9); //cắt từ index 2 đến 9 -1 = 8
console.log(s5);

// So sánh slice() và substring

//substring()
let s10 = '0123456789'
console.log("Sử dụng substring");
console.log(s10.substring(1, 4));
console.log(s10.substring(4, 1));

//slice()
console.log("Sử dụng slice");
console.log(s10.slice(1, 4));
console.log(s10.slice(4, 1));


//. Xử lý với số âm: 

let s11 = "0123456789";
console.log("Sử dụng substring với tham số âm");
console.log(s11.substring(-3, -1));
// s11.substring(-3,-1) -> s11.substring(0,0) ->""
//TH2: substring nếu end < start đảo ngược vị tri start và end
console.log("Trường hợp substring có 1 tham số âm, end < start");
console.log(s11.substring(4, -5));
//s11.substring(4,-5) ==> s11.substring(4,0) ==> s11.substring(0.4)


console.log("Sử dụng slice với tham số âm");
console.log(s11.slice(-3, -1));
// 78 do: lấy từ index -3 đến sát -1 