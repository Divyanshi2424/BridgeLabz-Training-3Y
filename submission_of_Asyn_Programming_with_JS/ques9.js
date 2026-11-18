
// Q9 - Debugging the Event Loop

/*
Predicted Output:

1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Explanation:
- Synchronous code executes first.
- Promise.then() creates a microtask.
- setTimeout() creates a macrotask.
- After synchronous execution, JavaScript
  executes microtasks before macrotasks.
*/

// Step 1: Synchronous execution
console.log("Script start");

// Step 2: Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Step 3: Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Step 4: Synchronous execution
console.log("Script end");
