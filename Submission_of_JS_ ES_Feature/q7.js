
"use strict";

// Q7: Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error for unknown operations
class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

// Custom error for invalid mathematical operations
class CalculatorError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculatorError";
    }
}

// Process each operation separately
for (const operation of operations) {
    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new CalculatorError("Division by zero is not allowed.");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new CalculatorError("Square root of a negative number is not supported.");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(operation);
        }

        console.log("\n========== Calculator Result ==========");
        console.log(`Operation : ${operation}`);
        console.log(`Numbers   : ${num1}, ${num2}`);
        console.log(`Result    : ${result}`);

    } catch (error) {
        console.log("\n========== Calculator Error ==========");
        console.log(`Operation : ${operation}`);
        console.log(`Error Type: ${error.name}`);
        console.log(`Message   : ${error.message}`);
    }
}
