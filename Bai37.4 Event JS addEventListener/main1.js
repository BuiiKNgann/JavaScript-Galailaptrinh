//37.4 - Event - addEventListener
//cú pháp: element.addEventListener(event, function, options)
//element: phần tử muốn thêm sự kiện
//event: tên sự kiện
//function: hàm xử lý sự kiện
//options: object, chứa các thuộc tính của sự kiện

//1. Lấy phần tử
const btn = document.getElementById("btn3")
//2.thêm sự kiện
btn.addEventListener("click", () => {
    alert("Bạn đã nhấn vào button")
})


// //3. Lợi ích của addEventListener
//3.1 Có thể thêm nhiều sự kiện cho cùng 1 phần tử
//lấy phần tử
const btn4 = document.getElementById("btn4")

function handleClick1() {
    alert("Đây là sự kiện 1")
}
function handleClick2() {
    alert("Đây là sự kiện 2")
}
btn4.addEventListener("click", handleClick1)
btn4.addEventListener("click", handleClick2)
//3.2 Có thể xóa sự kiện

btn4.removeEventListener("click", handleClick2)
//3.3 Có thể sử dụng sự kiện với options

btn4.removeEventListener("click", handleClick1, { once: true })
