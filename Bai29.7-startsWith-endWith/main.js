//startsWith
let s30 = "abcdef abcdef"
console.log(s30.startsWith("ab"));
// tìm từ vị trí index số 1 xem có phải bắt đầu bằng chuỗi bc
console.log(s30.startsWith("bc", 1));

//endsWith
let s31 = "01234567890";
console.log(s31.endsWith("0"));

//endIndex = 10, chuỗi được kiểm tra từ 0 ->10-1 =9

console.log(s31.endsWith("9", 10));

// kiểm tra xem tên tệp âm thanh có kết thúc .mp3 không
let tenTepTin = "nhac.mp3";
// kiểm tra xem tệp tin có kết thúc bằng .mp3 không
if (tenTepTin.endsWith(".mp3")) {
    console.log("Tệp tin là file âm thanh .mp3");
} else {
    console.log("Tệp tin không phải file âm thanh .mp3");
}