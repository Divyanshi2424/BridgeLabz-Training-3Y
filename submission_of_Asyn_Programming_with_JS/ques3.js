
// Q3 - Bug Tracker: Callback to Promise Migration

// Step 1: Promise-based function
function getBugs() {
    return new Promise((resolve, reject) => {

        console.log("Fetching bugs from server...");

        setTimeout(() => {

            // Simulate random API failure
            let apiFailure = Math.random() < 0.5;

            if (apiFailure === false) {

                // API success: return bug list
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);

            } else {

                // API failure
                reject("Failed to fetch bugs from API!");
            }

        }, 1000);
    });
}

// Step 2: Call getBugs() and handle result
getBugs()
    .then((bugs) => {

        console.log("Bugs fetched successfully:");

        // Display bugs in table format
        console.table(bugs);

    })
    .catch((error) => {

        // Handle API failure
        console.log("Error:", error);

    });
