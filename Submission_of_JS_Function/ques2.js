
// Q2: Using callback to perform operations on an array

// Main function
function applyOperation(numbers, operation) {

    // Apply operation to every number
    let result = numbers.map(operation);

    console.log(result);
}

// Function to double each number
function doubleNumber(number) {
    return number * 2;
}

// Function to square each number
function squareNumber(number) {
    return number * number;
}

// Original array
let numbers = [1, 2, 3, 4];

// Double each number
console.log("Doubled Numbers:");
applyOperation(numbers, doubleNumber);

// Square each number
console.log("Squared Numbers:");
applyOperation(numbers, squareNumber);
