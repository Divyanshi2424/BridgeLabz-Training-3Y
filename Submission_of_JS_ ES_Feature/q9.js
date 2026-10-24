
"use strict";

// Q9: JSON Audit

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina", "age":"22"}'
];

// Store valid users and errors separately
const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    // Line number starts from 1 for easy reporting
    const lineNumber = i + 1;

    try {
        console.log(`\nChecking line ${lineNumber}: ${rawData[i]}`);

        // Convert JSON string into a JavaScript object
        const userData = JSON.parse(rawData[i]);

        // Check whether required keys exist
        if (
            !Object.prototype.hasOwnProperty.call(userData, "user") ||
            !Object.prototype.hasOwnProperty.call(userData, "age")
        ) {
            throw new Error("Missing required key: user or age.");
        }

        // Convert age into a number
        const age = Number(userData.age);

        // Validate username and age
        if (
            typeof userData.user !== "string" ||
            userData.user.trim() === "" ||
            String(userData.age).trim() === "" ||
            !Number.isFinite(age) ||
            age < 0
        ) {
            throw new Error("Invalid user name or age.");
        }

        // Store clean, standardized data
        cleanData.push({
            user: userData.user,
            age: age
        });

        console.log("Status: VALID JSON data");

    } catch (error) {
        // Record the line number and error reason
        errors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Error on line ${lineNumber}: ${error.message}`);
    }
}

// Filter users below 18 years of age
const under18Users = cleanData.filter(user => user.age < 18);

// Final report
console.log("\n========== JSON AUDIT REPORT ==========");

console.log("\nClean Data:");
console.log(cleanData);

console.log("\nErrors:");
for (const error of errors) {
    console.log(`Line ${error.line}: ${error.message}`);
}

console.log("\nUsers under 18:");
console.log(under18Users);

console.log("\nTotal entries:", rawData.length);
console.log("Valid entries:", cleanData.length);
console.log("Invalid entries:", errors.length);
console.log("Under-18 users:", under18Users.length);
