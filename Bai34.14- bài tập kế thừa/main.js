// class cha
class Shape {
    constructor(name) {
        this.name = name;
    }

    // Phương thức tính diện tích, mặc định return về 0
    calculateArea() {
        return 0;
    }

}

// Lớp con của shape - Hình Vuông
class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;

    }
    //Override phương thức tính diện tích
    calculateArea() {
        return this.side * this.side;
    }
}

//Lớp con của shape - Hình Vuông
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    //Override phương thức tính diện tích
    calculateArea() {
        return this.width * this.height;
    }
}

// Tạo các đối tượng hình
const sq1 = new Square("Hình Vuông", 5);
const rec1 = new Rectangle("Hình chữ nhật", 4, 6)

//Tính diện tích và in kết quả
console.log(sq1.calculateArea());
console.log(rec1.calculateArea());
console.log(` Diện tích của ${sq1.name} là ${sq1.calculateArea()}`);
console.log(` Diện tích của ${rec1.name} là ${rec1.calculateArea()}`);