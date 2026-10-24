
"use strict";

// Q6: Pyramid Pattern Generator

const readline = require("readline");

// Take user input using Node.js terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid size (default = 5): ", function (input) {
    // If input is empty, use default value 5
    const limit = input.trim() === "" ? 5 : Number(input);

    // Validate user input
    if (!Number.isInteger(limit) || limit < 1) {
        console.log("Invalid input! Enter a positive whole number.");
        rl.close();
        return;
    }

    console.log("\nPyramid Pattern:\n");

    // Outer loop controls the number of rows
    for (let i = 1; i <= limit; i++) {
        let pattern = "";

        // Inner loop creates stars in each row
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }

    rl.close();
});
