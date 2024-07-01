// 36.15 - Dom - removeChild & remove
//✔ 1. removeChild
//cú pháp: parentElement.removeChild(childElement)
//chọn phần tử cần xóa

let childElement = document.querySelector("#item2");

//chọn phần tử cha của phần tử cần xóa

let ul = document.querySelector("#list")

// xoá phần tử removeChild
ul.removeChild(childElement)


//hoặc cách 2 ngắn gọn hơn, dùng kiến thức đã học để không cần chọn phần tử cha
//lấy phần tử cần xóa

let childEle2 = document.querySelector("#item3");
childEle2.parentElement.removeChild(childEle2)

//✔ 2. remove
//cú pháp: element.remove()
//chọn phần tử cần xóa
let childEle3 = document.querySelector("#item4")
//Xoá phần tử
childEle3.remove();