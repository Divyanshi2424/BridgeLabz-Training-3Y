// Q4 - DevOps Delay: Async Timeout Race

// Step 1: Server A - Responds in 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {

        console.log("Server A deployment started...");

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Server A deployed successfully!");
            } else {
                reject("Server A deployment failed!");
            }

        }, 2000);
    });
}

// Step 2: Server B - Responds in 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {

        console.log("Server B deployment started...");

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Server B deployed successfully!");
            } else {
                reject("Server B deployment failed!");
            }

        }, 3000);
    });
}

// Step 3: Promise.all() - Wait for all servers
Promise.all([serverA(), serverB()])
    .then((results) => {

        console.log("Deployment completed for all servers");
        console.log(results);

    })
    .catch((error) => {

        console.log("Promise.all Error:", error);

    });

// Step 4: Promise.race() - First server response
Promise.race([serverA(), serverB()])
    .then((result) => {

        console.log("Fastest response:", result);

    })
    .catch((error) => {

        console.log("Promise.race Error:", error);

    });