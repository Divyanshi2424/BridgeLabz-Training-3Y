
 // Q4. Academic Performance Evaluator

const readline = require("readline");

// Create interface for terminal input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Store marks of 5 subjects
let marks = [];

function getMarks(index) {
    if (index === 5) {
        // Calculate total marks
        let total = 0;

        for (let i = 0; i < marks.length; i++) {
            total += marks[i];
        }

        // Calculate average and percentage
        let average = total / marks.length;
        let percentage = (total / 500) * 100;

        console.log("\n--- Academic Performance Report ---");
        console.log(`Total Marks: ${total}/500`);
        console.log(`Average Marks: ${average.toFixed(2)}`);
        console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

        // Check promotion criteria
        let hasFailed = marks.some(mark => mark < 35);

        if (hasFailed || percentage < 50) {
            console.log("Result: Detained");
        }
        else if (percentage >= 85) {
            console.log("Result: Promoted with Distinction");
        }
        else {
            console.log("Result: Promoted");
        }

        rl.close();
        return;
    }

    rl.question(`Enter marks for subject ${index + 1} (0-100): `, (input) => {
        let mark = Number(input);

        if (input.trim() === "" || !Number.isFinite(mark) ||
            mark < 0 || mark > 100) {
            console.log("Invalid marks! Enter a number from 0 to 100.");
            getMarks(index);
            return;
        }

        marks.push(mark);
        getMarks(index + 1);
    });
}

getMarks(0);
