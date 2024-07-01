// set thời gian theo ý muốn
// Cách 1: new Date(year, monthIndex, day, hour,...)
let myDate1 = new Date(2024, 1, 14);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

// Cách 2: new Date(dateString)
let myDate2 = new Date("2024-02-15T12:30:45");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

// Cách 3: sử dụng setFullYear, setMOnth, setDate
let myDate3 = new Date();
console.log(myDate3);
myDate3.setFullYear(2023);
myDate3.setMonth(9);
myDate3.setDate(9);
console.log(myDate3);
console.log(myDate3.toLocaleDateString());


// Xuất ngày tháng năm theo mong muốn (tự code)
console.log(` Ngày ${myDate3.getDate()}/ Tháng ${myDate3.getMonth() + 1}/${myDate3.getFullYear()}`);

// thêm số 0 để xuất ngày tháng dạng 01, 02

let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";

console.log(` Ngày ${prefixDate}${myDate3.getDate()}/ Tháng ${prefixMonth}${myDate3.getMonth() + 1}/${myDate3.getFullYear()}`);
