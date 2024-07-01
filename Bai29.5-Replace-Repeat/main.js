// string replace
let s14 = "học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));

//Để thay thế tất cả dùng biểu thức chính quy (regular expression)

console.log(s14.replace(/học/g, "ngủ"));

//5.13 repeat

let s23 = "Hello, ";
let s24 = s23.repeat(3);
console.log(s24);