// class School {
//     constructor(id, name, birthYear, score) {
//         this.id = id;
//         this.name = name;
//         this.birthYear = birthYear;
//         this._score = score;

//         //Thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected,
//         //và không nên truy cập, sửa đổi trực tiếp từ bên ngoài

//     }
//     calcAge(currentYear) {
//         return currentYear - this.birthYear;
//     }
//     //Getter cho thuộc tính score
//     get score() {
//         return this._score;
//     }
//     //  Setter thuộc tính score
//     set score(value) {
//         //Thêm các biểu thức logic để kiểm tra
//         if (value >= 0 && value <= 100) {
//             this._score = value
//         }
//         else {
//             console.log("Điểm số không hợp lệ");
//         }
//     }
// }

// //Tạo đối tượng 
// const John = new School("1323", "John", 2001, 95);
// console.log(John.id);
// console.log(John.name);
// console.log(John.birthYear);
// console.log(John._score); // không nên truy cập trực tiếp
// console.log(John.calcAge(2024));

// // Sử dụng getter 
// console.log(John.score);

// // dùng setter
// John.score = 75 


class School {
    constructor(id, name, birthYear, score) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this._score = score;
    }
    calcAge(currentYear) {
        return currentYear - this.birthYear
    }

    get score() {
        return this._score
    }

    set score(value) {
        if (value >= 0 && value <= 100) {
            this._score = value;
        } else {
            console.log("Điểm không hợp lệ");
        }
    }
}

const s1 = new School("123", "Ngân", "2003", "95")
s1.score = 100;
console.log(s1.score);