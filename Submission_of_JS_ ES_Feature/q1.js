
"use strict";

// Q1: Dynamic Data Parser

// Step 1: Mixed API data
// Note: The question's array formatting is broken, so all values
// are placed inside one valid JavaScript array.
const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    " ",
    null,
    undefined,
    "100px",
    "3.14"
];

// Arrays to store valid and invalid numeric data
const validNumbers = [];
const invalidNumbers = [];

// Step 2: Process each value using a loop
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert value into Number, Boolean and String
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\n------------------------------");
    console.log("Original Value:", value);
    console.log("Number Form:", numberValue);
    console.log("Boolean Form:", booleanValue);
    console.log("String Form:", stringValue);

    // Skip empty strings/spaces and null/undefined as numeric data.
    // NaN values and non-numeric strings are also invalid.
    const isBlankString =
        typeof value === "string" && value.trim() === "";

    const isValidNumber =
        value !== null &&
        value !== undefined &&
        !isBlankString &&
        !Number.isNaN(numberValue);

    if (isValidNumber) {
        validNumbers.push(numberValue);
        console.log("Status: VALID numeric data");
    } else {
        invalidNumbers.push(value);
        console.log("Status: INVALID numeric data");
        console.log("Debug: Value skipped from numeric array.");
    }
}

// Step 3: Print the final report
console.log("\n========== FINAL REPORT ==========");

console.log("\nValid Numeric Data:");
for (let i = 0; i < validNumbers.length; i++) {
    console.log(`${i + 1}. ${validNumbers[i]}`);
}

console.log("\nInvalid Numeric Data:");
for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`${i + 1}.`, invalidNumbers[i]);
}

console.log("\nTotal API values:", apiData.length);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
