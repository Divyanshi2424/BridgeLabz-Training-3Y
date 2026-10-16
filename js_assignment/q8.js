
 // Q8. Employee Salary Projection

// Declare current salary and annual increment rate
let currentSalary = 30000;
let incrementRate = 10;

// Store yearly salary details
let salaryReport = [];

// Calculate salary for the next 5 years
for (let year = 1; year <= 5; year++) {

    // Apply annual increment and round the salary
    currentSalary *= (1 + incrementRate / 100);
    currentSalary = Math.round(currentSalary);

    // Store the result for the table
    salaryReport.push({
        Year: year,
        Salary: currentSalary
    });
}

// Display the salary projection
console.table(salaryReport);
