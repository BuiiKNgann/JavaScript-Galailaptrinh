// khai báo đối tượng
let student = {
    fullName: "Trần Như Nhộng",
    birthYear: 2005,
    address: {
        city: "Hà Nội",
        country: "Việt Nam",
    },
    scores: [8, 9, 10],
    // phương thức
    getAge: function () {
        return 2024 - this.birthYear
    },

    diemTrungBinh: function () {
        //tính tổng điểm
        sumScores = this.scores.reduce((a, b) => a + b, 0);
        //trả về dtb
        return sumScores;
    }
};

let teacher = {
    " 1 fullName": "Jacob",
    "@address": {
        city: "Hanoi",
        country: "VietNam",
    },
}