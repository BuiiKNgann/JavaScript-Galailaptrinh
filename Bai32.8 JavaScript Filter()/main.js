let numbers = [1, 2, 3, 4, 5];
//Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
    // Function
    (value, index, array) => value % 2 === 0
);
console.log(evenNumbers);