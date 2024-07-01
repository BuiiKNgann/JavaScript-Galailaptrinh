// Khai báo mảng rỗng
let arr1 = [];
console.log(arr1);

// tạo một mảng có sẵn các phần tử bên trong
let arr2 = [1, 2, 3, 4, "nam", true, [2, 3, 5]]
console.log(arr2);

//sử dụng array và constructor
// khai báo mảng rỗng sử dụng Array constructor
let arr3 = new Array();
console.log(arr3);

// tạo một mảng có sẵn các phần tử bên trong
let arr4 = new Array(1, 2, 3, 4, "nam");
console.log(arr4);

//tạo mảng với độ dài xác định, các phần tử là undefined
let arrayWithLength = new Array(5);
console.log(arrayWithLength);


// truy xuất phần tử của mảng qua vị trí index
let arr5 = [4, 6, 8, 9];
console.log(arr5[2]);
console.log(arr5[3]);

//thuộc tính length
console.log(arr4.length);

// 6. Gán, thay đổi giá trị cho mảng qua index
let arr6 = [5, 6, 7];
arr6[1] = 10;
console.log(arr6);

// Duyệt mảng
let arr7 = [1, 2, 3, 4, 5]
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
    console.log(arr7);
    arr7[i] = arr7[i] * 2
}
console.log(arr7);

//7.2 for...of
let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
    //kiểm tra điều kiện
    if (element % 2 === 0) {
        console.log(element);
        count++
    }

}
console.log("Số lượng số chẵn có trong mảng: " + count);
console.log(arr8); 