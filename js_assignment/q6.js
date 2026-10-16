
 // Q6. Progressive Discount System

const readline = require("readline");

// Take input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter total purchase amount: Rs. ", function(input) {

    let total = Number(input);
    let discountPercentage = 0;

    // Check discount eligibility
    if (total >= 10000) {
        discountPercentage = 25;
    }
    else if (total >= 5000) {
        discountPercentage = 15;
    }
    else if (total >= 2000) {
        discountPercentage = 5;
    }
    else {
        discountPercentage = 0;
    }

    // Calculate discount and final price
    let discountAmount = total * discountPercentage / 100;
    let finalPrice = Math.round(total - discountAmount);

    // Display the bill summary
    console.log("\n--- Shopping Bill ---");
    console.log(`Original Total: Rs. ${total.toFixed(2)}`);
    console.log(`Discount Percentage: ${discountPercentage}%`);
    console.log(`Discount Amount: Rs. ${discountAmount.toFixed(2)}`);
    console.log(`Final Price: Rs. ${finalPrice}`);

    rl.close();
});
