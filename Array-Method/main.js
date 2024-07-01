// Filter: Lọc các phần tử
let num = [1, 2, 3, 4]
let evensNumber = num.filter(num => num % 2 === 0);
console.log(evensNumber);

// Find: Trả về giá trị đầu tiên trong mãng
let num1 = [1, 2, 3, 4]
let firstNumber = num1.find(num1 => num1 % 2 === 0);
console.log("Số chẵn chia hết cho 2 được tìm thấy đầu tiên: " + firstNumber);

// findIndex: trả về vị trí đầu tiên trong mãng

let array1 = [5, 12, 8, 130, 44];
let isLargeNumber = array1.findIndex(array1 => array1 > 13);
console.log("Vị trí index của số lớn hơn 13: " + isLargeNumber);


//map: sử dụng để tạo ra một mảng mới với kết quả của việc gọi một hàm cung cấp (callback function) trên từng phần tử của mảng gốc
const numbers = [1, 2, 3, 4, 5, 6];
const squaredNumbers = numbers.map(numbers => numbers * numbers);
console.log(squaredNumbers);

// Tạo một mảng mới với các chuỗi miêu tả vị trí và tên của mỗi loại trái cây
const fruits = ['apple', 'banana', 'cherry'];
const fruitDescriptions = fruits.map((fruits, index) => ` Vị trí tại ${index} là ${fruits}`)
console.log(fruitDescriptions);

//some()
const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 92 },
    { name: 'Jim', grade: 80 }
];
const hasHighGrade = students.some(students => students.grade < 90);
console.log(hasHighGrade);

// every():
const numbers1 = [2, 4, 6, 8, 10];
const allEven = numbers1.every(numbers1 => numbers1 % 2 === 0);
console.log(allEven);