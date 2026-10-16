
 // Q3. Monthly Expense Tracker

// Store expenses for 5 categories
let expenses = [3000, 1500, 6000, 1200, 800];

// Calculate total expenses
let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// Calculate average expense
let average = total / expenses.length;

// Add 10% tax to the total
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display the results
console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Total Expenses: Rs. ${total.toFixed(2)}`);
console.log(`Average Expense: Rs. ${average.toFixed(2)}`);
console.log(`Tax (10%): Rs. ${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: Rs. ${finalAmount.toFixed(2)}`);
