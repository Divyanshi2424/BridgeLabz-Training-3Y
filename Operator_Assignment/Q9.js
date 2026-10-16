
 // Create an array to store numbers from 1 to 30
let numbers = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Create a new array to store results
let results = [];

// Check each number
for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push("FizzBuzz");
    } else if (number % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
}

// Display the results
console.log("Number Analysis:");

for (let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]}: ${results[i]}`);
}

// Display the complete results array
console.log("\nResults Array:", results);
