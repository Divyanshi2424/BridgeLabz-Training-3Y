
 // Q2. Multi-Type Data Summary

// Declare variables of different data types
let userName = "Divyanshi";                // String
let userAge = 20;                          // Number
let isStudent = true;                     // Boolean
let subjects = ["JavaScript", "HTML", "CSS"]; // Array
let user = { name: "Divyanshi", age: 20 }; // Object
let userAddress = null;                    // Null
let userEmail;                             // Undefined

// Create a summary report
let report = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "User Age",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "Student Status",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Subjects",
        value: subjects.join(", "),
        type: Array.isArray(subjects) ? "Array" : typeof subjects
    },
    {
        label: "User Object",
        value: JSON.stringify(user),
        type: Array.isArray(user) ? "Array" : typeof user
    },
    {
        label: "Address",
        value: userAddress,
        type: userAddress === null ? "null" : typeof userAddress
    },
    {
        label: "Email",
        value: userEmail,
        type: typeof userEmail
    }
];

// Print the complete report in table format
console.table(report);
