// 1. Object.key(obj)
let person = { name: "John", age: 30 };
let keys = Object.keys(person);
console.log(keys);

//2 .Object.values(obj)
let person2 = { name: "John", age: 30 };
let values = Object.values(person2)
console.log(values);

//3. Object.entries(obj);
let person3 = { name: "John", age: 30 };

let entries = Object.entries(person3)
console.log(entries);

//4. Object.assign
let target = { c: 100 };
let source1 = { a: 1 };
let source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target);


let targer2 = { ...source1, ...source2 }
console.log(targer2);

//5. Object.hasOwnProperty(prop)
let person4 = { name: "John", age: 30 };
console.log(person4.hasOwnProperty("name"));
console.log(person4.hasOwnProperty("job"));


//6/ Object.freeze(obj)
let person5 = { name: "John", age: 30 };
Object.freeze(person5)
// sửa thuộc tính
person5.age = 100;
// thêm thuộc tính
person5.email = "tuhoc.cc@gmail.com"
// xoá
delete person5.age;
console.log(person5);


//Object.seal
let person6 = { name: "John", age: 30 };
Object.seal(person6)
//thêm thuộc tính
person6.location = "New York";
// xoá thuộc tính
delete person6.age
// sửa
person6.age = 100
console.log(person6);