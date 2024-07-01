// 36.15 - Dom - removeChild & remove
//✔ 1. removeChild
//cú pháp: parentElement.removeChild(childElement)
//chọn phần tử cần xóa

let childEle = document.querySelector("#item2");

// chọn phần tử cha của phần tử cần xoá
let ul = document.querySelector("#list");
// xoá phần tử removeChild
ul.removeChild(childEle)

//✔ 2. remove
//cú pháp: element.remove()
//chọn phần tử cần xóa
let childEle2 = document.querySelector("#item3");
childEle2.remove();