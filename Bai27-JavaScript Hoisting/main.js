// // 27. var và let, hoisting trong js
// console.log("Giá trị của biến c = " + c);
// //khởi tạo c
// var c = 9;


//var: có phạm vi là function-scope
function exampleVar() {
    if (true) {
        var y = 20; // khởi tạo y nằm trong phạm vị block scope
        console.log(`${y} trong block scope`);
    }
    console.log(`${y} trong phạm vi function scope`);
}
exampleVar();

// 3. let, const: Có phạm vi là block scope
function exampleLet() {
    if (true) {
        let b = 40;
        console.log(`${b} trong block scope`);
    }
    //console.log(`${b} trong block scope`);
}
// Gọi hàm
exampleLet();


var diemToan
// code chương trình
var diemToan
