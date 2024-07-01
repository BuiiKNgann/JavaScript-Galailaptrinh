// function test() {
//     setTimeout(() => console.log('1'), 0);
//     console.log('2');
//     console.log('3');
// }

// function httpGetAsync(theUrl, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
// }

// httpGetAsync('https://picsum.photo/200/300', (data) => {
//     console.log(data);
// });

// test();

const currentPromise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve('Success');
        }, 3000)
    } else {
        reject('Error')
    }

})

currentPromise.then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})