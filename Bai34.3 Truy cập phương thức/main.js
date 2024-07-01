// khai báo đối tượng
let student = {
    fullName: "Trần Như Nhộng",
    birthYear: 2005,
    address: {
        city: "Hà Nội",
        country: "Việt Nam",
    },
    scores: [8, 9, 10],
    // phương thức
    getAge: function () {
        return 2024 - this.birthYear
    },
    // Phương thức được viết lại, để trả về 1 thuộc tính
    getAge2: function () {
        this.age = 2024 - this.birthYear
        return this.age;
    },
    diemTrungBinh: function () {
        //tính tổng điểm
        sumScores = this.scores.reduce((a, b) => a + b, 0);
        //trả về dtb
        return sumScores / 3;
    }
};

let teacher = {
    " 1 fullName": "Jacob",
    "@address": {
        city: "Hanoi",
        country: "VietNam",
    },
}

//Kiểm tra kiểu loại 
console.log(typeof student);
console.log(typeof teacher);

// 2.1 Sử dụng dot (.) - Dot Notation
console.log(student.address);
console.log(student.fullName);
console.log(student.scores);


//2.2 Sử dụng []
console.log(teacher[" 1 fullName"]);
console.log(student["address"]);

// Linh động sử dụng [] với biến
// let inputKey = prompt("Mời nhập key: (address, scores)");
let inputKey = "address"
console.log("Truy xuất đến key dùng với tên biến inputkey: ");
console.log(student[inputKey]);

// Ví dụ: Kiểm tra xem nếu nhập key không tồn tại thì báo lỗi
if (student[inputKey]) {
    console.log(student[inputKey]);
} else {
    console.log("Key bạn nhập không tồn tại");
}

// 3.1 Truy cập phương thức
console.log("Truy cập phương thức");
console.log(student.getAge());
console.log(student.diemTrungBinh());


/*
3.2 Vấn đề : (Giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge 
--> Chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại
*/

// Gọi phương thức getAge2
student.getAge2();

//Xuất thử tuối thông qua thuộc tính age mới được thêm từ phương thức getAge2

console.log(student.age)