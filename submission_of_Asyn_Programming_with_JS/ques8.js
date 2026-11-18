
// Q8 - Order Processing Flow: Async Retry Mechanism

// Step 1: Submit Order Function
function submitOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // 50% chance of success or failure
            if (Math.random() > 0.5) {

                resolve("Order submitted successfully!");

            } else {

                reject("Order submission failed!");

            }

        }, 1000);

    });
}

// Step 2: Process Order with Retry Logic
async function processOrder() {

    // Try maximum 3 times
    for (let attempt = 1; attempt <= 3; attempt++) {

        try {

            await submitOrder();

            console.log(`Attempt ${attempt}: Success`);

            return;

        } catch (error) {

            console.log(`Attempt ${attempt}: Failed`);

        }

    }

    // All 3 attempts failed
    throw new Error("Order could not be processed");

}

// Step 3: Handle Final Result
async function main() {

    try {

        await processOrder();

        console.log("Order processing completed!");

    } catch (error) {

        console.log("Final Error:", error.message);

    }

}

// Start order processing
main();
