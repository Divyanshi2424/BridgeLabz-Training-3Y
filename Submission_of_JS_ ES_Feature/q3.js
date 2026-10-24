
"use strict";

// Q3: Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays for valid transactions and categorized errors
const valid = [];
const invalid = [];

// Loop through every transaction
for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    try {
        // Breakpoint yahan laga kar variables inspect kar sakte ho
        console.log("Checking transaction:", transaction);

        // Case 1: Null transaction
        if (transaction === null) {
            const error = new Error("Transaction is null.");
            error.type = "NULL_ENTRY";
            throw error;
        }

        // Case 2: Missing ID
        if (transaction.id === undefined || transaction.id === null) {
            const error = new Error("Transaction ID is missing.");
            error.type = "MISSING_ID";
            throw error;
        }

        // Case 3: Missing amount
        if (
            !Object.prototype.hasOwnProperty.call(transaction, "amount") ||
            transaction.amount === undefined ||
            transaction.amount === null
        ) {
            const error = new Error("Transaction amount is missing.");
            error.type = "MISSING_AMOUNT";
            throw error;
        }

        // Case 4: Invalid amount type or non-finite amount
        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            const error = new Error("Transaction amount must be a valid number.");
            error.type = "INVALID_AMOUNT";
            throw error;
        }

        // Case 5: Negative amount
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative.");
            error.type = "NEGATIVE_AMOUNT";
            throw error;
        }

        // If no error occurs, transaction is valid
        valid.push(transaction);

        console.log(`SUCCESS: Transaction ID ${transaction.id} is valid.`);

    } catch (error) {
        // Save the transaction and its error category
        invalid.push({
            transaction: transaction,
            category: error.type || "UNKNOWN_ERROR",
            message: error.message
        });

        console.log(
            `FAILED: ${error.type} - ${error.message}`
        );
    }
}

// Final report
console.log("\n========== TRANSACTION REPORT ==========");

console.log("\nValid Transactions:");
for (let i = 0; i < valid.length; i++) {
    console.log(
        `ID: ${valid[i].id}, Amount: ₹${valid[i].amount}`
    );
}

console.log("\nInvalid Transactions:");
for (let i = 0; i < invalid.length; i++) {
    console.log(
        `Category: ${invalid[i].category}, ` +
        `Reason: ${invalid[i].message}`
    );
}

console.log("\nTotal transactions:", transactions.length);
console.log("Successful transactions:", valid.length);
console.log("Failed transactions:", invalid.length);
