
// Q1: Demonstrating Callback Function

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Calling the callback function
    callback();
}

// Function call
greetUser("Divyanshi", showEndMessage);
