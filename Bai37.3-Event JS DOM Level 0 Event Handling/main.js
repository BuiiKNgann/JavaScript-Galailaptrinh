//37.3 - Event - DOM Level 0 Event Handling
//(phần function ôn lại bài 25.1 25.2)
/*
DOM Level 0 Event Handling:  
là phương pháp bắt sự kiện bằng cách gán trực tiếp một
 hàm JavaScript cho thuộc tính sự kiện của phần tử HTML

*/
//1.1 Xác định phần tử có id là btn

const button1 = document.getElementById("btn");
//1.2.gán sự kiện click cho btn, sử dụng function expression

// button1.onclick = function () {
//     alert("Bạn đã click vào button");
// }

//1.3 dùng function declaration khai báo hàm,
//sau đó gán hàm đó cho sự kiện click

// function clickHandler() {
//     alert("Bạn đã click vào button")
// }

// button1.onclick = clickHandler

//1.4 arrow function
button1.onclick = () => {
    alert("Bạn đã click vào button")
}

// Ví dụ 2:
function mouseOver() {
    document.getElementById("message").textContent = "Mouse is over the button";

}

function mouseOut() {
    document.getElementById("message").textContent = "Mouse left the button";

}
function setup() {
    var button = document.getElementById("btn2")
    button.onmouseover = mouseOver;
    button.onmouseout = mouseOut;
}



window.onload = setup;