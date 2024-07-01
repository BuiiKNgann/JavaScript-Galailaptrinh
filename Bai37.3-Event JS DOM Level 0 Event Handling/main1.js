const button1 = document.getElementById("btn");
button1.onclick = () => {
    alert("Bạn đã click vào button")
}

// ví dụ 2
function mouseOver() {
    document.getElementById("message").textContent = "Mouse is over the button"
}

function mouseOut() {
    document.getElementById("message").textContent = "Mouse left the button"
}
function setup() {
    var button = document.getElementById("btn2");
    button.onmouseover = mouseOver;
    button.onmouseout = mouseOut;
}
window.onload = setup;