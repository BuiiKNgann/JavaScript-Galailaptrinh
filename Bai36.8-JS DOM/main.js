//36.8 DOM style
//Chọn phần tử h1

let heading = document.querySelector("h1");

// Thay đổi style của h1 trên giao diện
// heading.style.backgroundColor = "cyan";
// heading.style.fontSize = "46px";
// heading.style.color = "red";


//Cách viết gọn nhiều thuộc tính
Object.assign(heading.style, {
    backgroundColor: "cyan",
    fontSize: "46px",
    color: "red",
})