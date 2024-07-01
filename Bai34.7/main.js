// Khai báo đối tượng sử dụng let
let person = {
    name: "John",
    age: 30,
}
// Thử thay đổi giá trị của person
person = 5;
console.log(person);

// Để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
const person2 = {
    name: "John",
    age: 30,
}
console.log(person2);
// Thử thay đổi giá trị của person
// person2 = 5;
// console.log(person2);


// thêm sửa xoá thuộc tính bình thường
person2.isAdmin = true; //thêm thuộc tính 
person.name = "Tom"; // sửa thuộc tính 
delete person2.age; // xoá thuộc tính
console.log(person2);