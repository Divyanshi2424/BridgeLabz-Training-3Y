
// Q7 - The Lazy Loader: Promise Combinator Practice

// Randomly select one module that will fail
const failedModule = ["Profile", "Posts", "Messages"][
    Math.floor(Math.random() * 3)
];

// Step 1: Load Profile (2 seconds)
function loadProfile() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (failedModule === "Profile") {
                reject("Profile loading failed!");
            } else {
                resolve("Profile Loaded");
            }

        }, 2000);
    });
}

// Step 2: Load Posts (1.5 seconds)
function loadPosts() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (failedModule === "Posts") {
                reject("Posts loading failed!");
            } else {
                resolve("Posts Loaded");
            }

        }, 1500);
    });
}

// Step 3: Load Messages (1 second)
function loadMessages() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (failedModule === "Messages") {
                reject("Messages loading failed!");
            } else {
                resolve("Messages Loaded");
            }

        }, 1000);
    });
}

// Step 4: Record starting time
const startTime = Date.now();

console.log("Loading dashboard modules...");

// Step 5: Use Promise.allSettled()
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {

    console.log("\nDashboard Loading Results:");

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {

        if (result.status === "fulfilled") {

            console.log(
                moduleNames[index] + ": SUCCESS - " + result.value
            );

        } else {

            console.log(
                moduleNames[index] + ": FAILED - " + result.reason
            );

        }

    });

    // Step 6: Calculate total time
    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log("\nTotal time taken:", totalTime, "ms");

    console.log("Dashboard loading completed!");

});
