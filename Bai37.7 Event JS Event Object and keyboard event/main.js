const inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function () {
//     console.log("Keydown");
// })


inp.addEventListener("keyup", function () {
    console.log("Keyup");
})


// event object
inp.addEventListener("keydown", function (e) {
    console.log(e);
})


inp.addEventListener("keydown", function (e) {
    console.log(e.key);
    console.log(e.code);
})

//Ví dụ, nếu người dùng bấm phím r
//thì thay đổi màu nền của trang web.

document.addEventListener("keydown", function (e) {
    if (e.key === "r") {
        document.body.style.backgroundColor = "cyan"
    }
})

