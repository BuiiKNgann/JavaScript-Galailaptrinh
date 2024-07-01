// 36.13 - Dom - appendChild
//Xác định phần tử cha
let parentElm = document.querySelector("#header");
console.log(parentElm);

//Tạo phần tử con mới, ví dụ thẻ p
let p_elm = document.createElement("p");
// thêm nội dung vào thẻ p
p_elm.textContent = "Một con vịt xòe ra 2 cái cánh";
// Thêm style
p_elm.style.color = "red";
//Thêm class cho thẻ p_elm
p_elm.setAttribute("Class", "doan_van");


/*
1. **Đối tượng có thể thêm**:
   - `appendChild` chỉ thêm được đối tượng `Node`.
   - `append` thêm được cả `Node` và chuỗi văn bản.
*/

// parentElm.appendChild(p_elm);
// parentElm.append(p_elm);


// //appendChild Không thêm được văn bản

// parentElm.appendChild("Hôm nay thật tuyệt")
// parentElm.append("Hôm nay thật tuyệt")

// 2. **Trả về giá trị**:
//    - `appendChild` trả về phần tử vừa được thêm.
//    - `append` không trả về giá trị.
//  
// console.log(parentElm.appendChild(p_elm));
// console.log(parentElm.append(p_elm)); 

// 3. **Thêm nhiều phần tử**:
//    - `appendChild` chỉ thêm được một phần tử mỗi lần gọi.
//    - `append` có thể thêm nhiều phần tử hoặc chuỗi văn bản trong một lần gọi.
// */
//tạo thêm 1 phần tử
let h3 = document.createElement("h3");
h3.textContent = "Đây là thẻ h3"

// parentElm.append(p_elm, h3, "new text")
parentElm.appendChild(p_elm)
parentElm.appendChild(h3)


//Do appendChild có giá trị trả về nên:
// Ta có thể Thêm và ngay lập tức thao tác với phần tử
// Tạo phần tử mới

let btn = document.createElement("button");
btn.textContent = "Click me"
// Thêm phần tử mới vào một phần tử cha và nhận giá trị trả về

let addedBtn = parentElm.appendChild(btn);

// Gán sự kiện click cho phần tử vừa được thêm
addedBtn.addEventListener("click", function () {
    alert("Bạn vừa click vào nút")
})
