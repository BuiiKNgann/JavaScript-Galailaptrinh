// indexof 

let s25 = "abcdef abcdef"
let s26 = s25.indexOf("c");
console.log(s26);
// tìm chữ "c" nhưng bắt đầu từ vị trí index 3 
console.log(s25.indexOf("d", 4));
let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex);

//lastindexOf

let s27 = "abcdef abcdef"
let s28 = s27.lastIndexOf("a");
console.log(s28);
// tìm với tham số endIndex
console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));


//include
let s29 = "abcdef abcdef";
console.log(s29.includes("a"));
console.log(s29.includes("g"));

// tìm a bắt đầu từ vị trí index 8
console.log(s29.includes("a", 7));
