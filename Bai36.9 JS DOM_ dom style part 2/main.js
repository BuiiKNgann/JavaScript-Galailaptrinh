let buttons = document.querySelectorAll(".btn");
// duyệt for để lấy cái phần tử
for (let btn of buttons) {
    if (btn instanceof HTMLElement) {
        btn.style.backgroundColor = "blue";
        btn.innerHTML = "Click me";
        btn.style.fontSize = "2em";
        btn.style.color = "yellow"
    }
}