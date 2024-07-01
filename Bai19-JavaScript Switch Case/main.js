let number = "abc";
switch (number % 2) {
    case 0:
        console.log("Số chẵn");
        break;
    case 1:
        console.log("Số lẻ");
        break;
    default:
        console.log("Không phải số");
}


let month = parseInt(prompt("Nhập vào 1 tháng: (1-12)"));
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng có 31 ngày");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng có 30 ngày");
        break;
    case 2:
        console.log("Tháng có 28 29 ngày");
        break;
    default: console.log("Tháng không tồn tại");
}


//Cách xuất chuỗi xuống dòng
//console.log(``);

