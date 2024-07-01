// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//     }

//     // instance method
//     draw() {
//         console.log("Phương thức draw được gọi");
//     }
//     // Static method
//     static calcArea(radius) {
//         return Math.PI * radius * radius
//     }
// }

// //Tạo đối tượng
// const c1 = new Circle(10);
// const c2 = new Circle(5);

// console.log(c1.draw());
// console.log(c2.draw());

// // Gọi phương thức tĩnh
// console.log(Circle.calcArea(10));


// // Ví dụ dễ hiểu
// a = -10;
// console.log(Math.abs(a));


class Circle {
    constructor(radius) {
        this.radius = radius
    }

    // Instance method
    draw() {
        console.log("Phương thức instance được gọi");
    }

    // Static method
    static calcArea(radius) {
        return Math.PI * radius * radius
    }


}
const c1 = new Circle(10);
console.log(c1.draw());


// Gọi phương thức tĩnh 
console.log(Circle.calcArea(10));