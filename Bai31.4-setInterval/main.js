//setInterval
// function declaration
function showNotification() {
    console.log("Bạn có xxx tin nhắn chưa đọc");
}
// setInterval(showNotification, 2000)

// ví dụ 2:
function updateTime() {
    let currentTime = new Date();
    console.log(currentTime);
}
// setInterval(updateTime, 1000)


let counter = 0;
// function declaration
// function count() {
//     console.log(counter++);
// }
//   setInterval(count, 1000)


// function expression
// let count = function () {
//     console.log(counter++);
// }
// setInterval(count, 1000)

//arrow function
// let count = () => {
//     console.log(counter++);
// }
// setInterval(count, 1000)

//huỷ lặp

let count = () => {
    console.log(counter++);
    if (counter === 5) {
        //step 2:Dừng lặp dùng clearInterval
        clearInterval(stopInterval)
    }
}
setInterval(count, 1000)

//step 1: Gán biến để nhận giá trị trả về 
let stopInterval = setInterval(count, 1000)