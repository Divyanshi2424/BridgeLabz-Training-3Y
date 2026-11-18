
// Q10 - The Final Delivery: Async Pipeline Debugger

// Step 1: Take Order
function takeOrder() {
    return new Promise((resolve, reject) => {

        // Random delay between 1 and 2 seconds
        let delay = 1000 + Math.random() * 1000;

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Step 1: Order taken");
            } else {
                reject("Order taking failed!");
            }

        }, delay);
    });
}

// Step 2: Prepare Food
function prepare() {
    return new Promise((resolve, reject) => {

        let delay = 1000 + Math.random() * 1000;

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Step 2: Food prepared");
            } else {
                reject("Food preparation failed!");
            }

        }, delay);
    });
}

// Step 3: Pack Food
function pack() {
    return new Promise((resolve, reject) => {

        let delay = 1000 + Math.random() * 1000;

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Step 3: Package ready");
            } else {
                reject("Food packing failed!");
            }

        }, delay);
    });
}

// Step 4: Dispatch Order
function dispatch() {
    return new Promise((resolve, reject) => {

        let delay = 1000 + Math.random() * 1000;

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Step 4: Out for delivery");
            } else {
                reject("Order dispatch failed!");
            }

        }, delay);
    });
}

// Step 5: Deliver Order
function deliver() {
    return new Promise((resolve, reject) => {

        let delay = 1000 + Math.random() * 1000;

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Delivery completed!");
            } else {
                reject("Delivery failed!");
            }

        }, delay);
    });
}

// Step 6: Run complete delivery pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // await waits for each Promise to settle.
        // The next step starts only after the current step succeeds.

        let order = await takeOrder();
        console.log(order);

        let food = await prepare();
        console.log(food);

        let packageReady = await pack();
        console.log(packageReady);

        let dispatched = await dispatch();
        console.log(dispatched);

        let delivered = await deliver();
        console.log(delivered);

    } catch (error) {

        // If any step fails, execution jumps to catch.
        // Remaining steps will not execute.

        console.log("Pipeline failed!");
        console.log("Error:", error);

    }
}

// Start the pipeline
runPipeline();

/*
ASYNC BEHAVIOR AND EVENT LOOP EXPLANATION:

1. Each function returns a Promise.

2. setTimeout() schedules a callback in the task queue
   after a random delay of 1 to 2 seconds.

3. async declares runPipeline() as an asynchronous function.

4. await pauses the execution of runPipeline()
   until the current Promise settles.

5. While waiting, JavaScript Event Loop can execute
   other available tasks.

6. If a Promise resolves, the next delivery step starts.

7. If a Promise rejects, execution moves to catch block.

8. catch handles the error and prints Pipeline failed!

9. All steps execute sequentially because we use await.
*/
