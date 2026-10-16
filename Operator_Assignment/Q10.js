
 // Store department names and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Loop through each department
for (let department of departments) {
    let name = department[0];
    let score = department[1];

    // Evaluate performance using nested if-else
    if (score >= 90) {
        console.log(`${name}: Excellent`);
    } else {
        if (score >= 75) {
            console.log(`${name}: Good`);
        } else {
            if (score >= 60) {
                console.log(`${name}: Average`);
            } else {
                console.log(`${name}: Needs Improvement`);
            }
        }
    }
}
