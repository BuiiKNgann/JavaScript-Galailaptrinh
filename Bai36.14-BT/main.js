// xác định phần tử cha
let parentElm = document.querySelector("#container");
// thêm 100 nút dùng for 
for (let i = 0; i < 100; i++) {
    let button = document.createElement("button")
    button.innerText = "Button " + (i + 1)

    // Thêm phần tử mới vào phần tử cha
    parentElm.appendChild(button)

    // nếu i lẻ thì nút có màu nền là magenta 
    if (i % 2 === 1) {
        button.style.backgroundColor = "magenta";
    }
}

