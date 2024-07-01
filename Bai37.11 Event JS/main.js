const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", function () {
//     console.log("child clicked");
// })


// child.addEventListener("click", function () {
//     console.log("parent clicked");
// })


// child.addEventListener("click", function () {
//     console.log("grandparent clicked");
// })



child.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("child clicked");
})


child.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("parent clicked");
})


child.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("grandparent clicked");
})