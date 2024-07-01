// class School {
//     constructor(id, name, birthYear) {
//         this.id = id;
//         this.name = name;
//         this.birthYear = birthYear;
//     }

//     // Phương thức của lớp school
//     calcAge(currentYear) {
//         return currentYear - this.birthYear;
//     }
// }

// // Lớp Student kế thừa School (có thêm thuộc tính và phương thức riêng của lớp student)
// class Student extends School {
//     constructor(id, name, birthYear, major) {
//         super(id, name, birthYear);
//         this.major = major;
//     }

//     // Phương thức của lớp student 
//     study() {
//         console.log(`${this.name} is studying ${this.major}`);
//     }
// }



// //Tạo đối tượng của lớp school
// const p1 = new School("P2004", "Ngan", 2000);


// // truy cập thuộc tính và phương thức của class School
// console.log(p1.id);
// console.log(p1.birthYear);
// console.log(p1.calcAge(2025));

// // Tạo đối tượng của sub class Student
// const s1 = new Student("P200", "An", 2000, "CNTT");

// // truy cập thuộc tính và phương thức của class School
// console.log(s1.id);
// console.log(s1.birthYear);
// console.log(s1.calcAge(2025));

// //Truy cập thuộc tính và phương thức của sub class student
// console.log(s1.major);
// s1.study()

class School {
    constructor(id, name, birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }
    calcAge(currentYear) {
        return currentYear - this.birthYear
    }
}

class Student extends School {
    constructor(id, name, birthYear, major) {
        super(id, name, birthYear);
        this.major = major
    }
    study() {
        console.log(`${this.name} is studing ${this.major}`);
    }
}

// truy cập thuộc tính và phương thức student
const stu1 = new Student("234", "Vy", 2000, "Hoá học");
console.log(stu1.birthYear);
stu1.study()




const s1 = new School("123", "Ngân", 2003);
console.log(s1.calcAge(2025));