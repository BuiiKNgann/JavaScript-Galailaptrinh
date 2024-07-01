let dtb = Number(prompt("Mời bạn nhập điểm: "));

// Kiểm tra điều kiện

if (dtb <= 10 && dtb >= 8) {
    console.log("Học sinh giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
    console.log("Học sinh khá");
} else if (dtb < 6.5 && dtb > 5) {
    console.log("Học sinh TB")
} else if (dtb >= 0 && dtb < 5) {
    console.log("Học sinh yếu");
} else {
    console.log("Điểm không tồn tại");
}