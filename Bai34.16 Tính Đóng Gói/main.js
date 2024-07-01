class Wallet {
    #pin;//Private fields
    #balance; //Private fields
    #isPinEntered = false; //Private fields
    constructor(bankName, pin) {
        this.bankName = bankName;
        this.#pin = pin;
        this.#balance = 0; // Tài khoản bằng 0 lúc tạo thẻ
    }

    // Phương thức gửi tiền vào tài khoản
    deposit(value) {
        if (!this.#isPinEntered) {
            console.log("Kiểm tra lại mã pin");
            return;
        }
        this.#balance += value;

    }
    // ======================================================
    // Private method
    #validatePin(pin) {
        return this.#pin === pin;
    }


    // Public method
    enterPin(pin) {
        if (this.#validatePin(pin)) {
            this.#isPinEntered = true;
        } else {
            console.log("Invalid pin.");
        }
    }




    // ======================================================
    // Rút tiền
    withdraw(value) {
        if (!this.#isPinEntered) {
            console.log("Kiểm tra lại mã pin");
            return;
        }
        if (value > this.#balance) {
            console.log("Số tiền trong tài khoản không đủ");
        }
        else {
            this.#balance -= value;
            console.log("Rút tiền thành công");
        }
    }

    //Getter 
    get balance() {
        if (!this.#isPinEntered) {
            console.log("Kiểm tra lại mã pin");
            return;
        }
        return this.#balance;
    }
}

//Tạo đối tượng
const wallet = new Wallet("MB bank", "1234")

//Nhập mã pin
wallet.enterPin("1234")

// console.log(wallet.#balance);

//Gửi tiền
wallet.deposit(1000);
// rút tiền
wallet.withdraw(250)
//xem tài khoản, pin
// console.log(wallet.#balance);
// console.log(wallet.#pin);

console.log(wallet.balance);
// bài toán là chúng ta không muốn cho phép truy cập
// trực tiếp để kiểm tra số dư và mã pin


