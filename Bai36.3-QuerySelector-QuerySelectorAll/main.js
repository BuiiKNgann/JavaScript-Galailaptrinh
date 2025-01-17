//36.3. querySelector and querySelectorAll
//6. querySelector
// Chọn phần tử có id là "heading_title" và thay đổi nội dung của nó
let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "new title"



// Chọn phần tử đầu tiên có lớp là "list" thay đổi nội dung
let firstListItem = document.querySelector(".list");
// firstListItem.innerHTML = "Trang chủ";

//Quan trọng, querySelector có thể chọn css kết hợp

let firstLinkInList = document.querySelector("ul a");
console.log(firstLinkInList);

// Chọn phần tử input checkbox và đặt thuộc tính checked cho nó

let checkbox = document.querySelector("input");
checkbox.checked = true;


//querySelectorAll
let list_item = document.querySelectorAll("li");
console.log(list_item);
list_item[1].innerText = "Liên hệ"