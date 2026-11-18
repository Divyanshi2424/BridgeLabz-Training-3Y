
// Q2 - Task Scheduler: Micro vs Macro Challenge

// Step 1: Synchronous execution starts
console.log("Start");

// Step 2: Macrotask - setTimeout()
setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

// Step 3: Microtask - Promise.then()
Promise.resolve().then(() => {
    console.log("Microtask: Promise callback");
});

// Step 4: Synchronous log
console.log("Synchronous task");

// Step 5: End
console.log("End");

/*
Explanation:
1. Synchronous code executes first.
2. Promise.then() creates a microtask.
3. setTimeout() creates a macrotask.
4. After synchronous code finishes, the Event Loop
   executes all pending microtasks first.
5. After microtasks are completed, macrotasks execute.

Therefore, microtasks run before macrotasks.
*/