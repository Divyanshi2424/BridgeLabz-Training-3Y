
 // Global counter variable
let count = 0;

// Function to increment the counter
function increment() {
    count++;
    console.log("Count after increment:", count);
}

// Function to decrement the counter
function decrement() {
    count--;
    console.log("Count after decrement:", count);
}

// Nested function to demonstrate function scope
function counterDetails() {
    let message = "Current counter value";

    function showCount() {
        console.log(message + ":", count);
    }

    showCount();
}

// Simulate button clicks by calling functions
increment();
increment();
increment();
decrement();
counterDetails();
