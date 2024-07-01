//36.12 : append, prepend :
//Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
//append: Thêm vào cuối
//prepend: Thêm vào đầu
// 🤞 Ví dụ 1:
//Bước 1. create element
//Cú pháp: document.createElement('element')    //element: tên thẻ cần tạo

const newImg = document.createElement("img");
console.log(newImg);

// Kiểm tra toàn bộ thuộc tính và phương thức newImg
console.dir(newImg)

//Bước 2: set Attribute

newImg.src = "./assets/img/most_slide_2.jpg";

//Bước 3. append: thêm vào 1 phần tử đã có sẵn

document.body.append(newImg)


//set chiều rộng 100% viewport width
newImg.style.width = "100vw"



// 🤞 Ví dụ 2: Thêm thẻ p

const newText = document.createElement("p");
newText.textContent = "toi đang học js";
document.body.append(newText)


// ví dụ 3: thêm vào 1 phần tử khác
const p = document.querySelector("p");
p.append("xin chào")


//Ví dụ 4: Thêm nhiều phần tử vào cuối phần tử cha
// Tạo các phần tử mới

let elm = document.createElement("p");
elm.textContent = "Đây là thẻ p"


let elm1 = document.createElement("span")
elm1.textContent = "Đây là thẻ span"

// Lấy phần tử cha
let container = document.querySelector(".hero__heading")


// Thêm nhiều phần tử mới vào cuối phần tử cha
container.append(elm, elm1, "Some more text")


// Prepend
//Nếu muốn thêm vào đầu phần tử cha thì dùng prepend

container.prepend("HI !")