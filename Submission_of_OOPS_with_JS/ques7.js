
// BankAccount Class

class BankAccount {

    // Private Field
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    // Deposit Method

    deposit(amount) {

        if (amount <= 0) {
            throw new Error("Deposit amount must be positive!");
        }

        this.#balance += amount;

        console.log("Amount deposited: Rs.", amount);
    }

    // Withdraw Method

    withdraw(amount) {

        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive!");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;

        console.log("Amount withdrawn: Rs.", amount);
    }

    // Get Balance Method

    getBalance() {
        return this.#balance;
    }
}

// Creating Bank Account

let account1 = new BankAccount(5000);

console.log("Initial Balance: Rs.", account1.getBalance());

console.log("-------------------------");

// Valid Deposit

try {

    account1.deposit(2000);

    console.log("Current Balance: Rs.", account1.getBalance());

}
catch(error) {

    console.log("Error:", error.message);

}

console.log("-------------------------");

// Valid Withdrawal

try {

    account1.withdraw(1000);

    console.log("Current Balance: Rs.", account1.getBalance());

}
catch(error) {

    console.log("Error:", error.message);

}

console.log("-------------------------");

// Invalid Withdrawal

try {

    account1.withdraw(10000);

}
catch(error) {

    console.log("Transaction Failed!");
    console.log("Error:", error.message);

}

console.log("-------------------------");

console.log("Final Balance: Rs.", account1.getBalance());
