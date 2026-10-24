
"use strict";

// Q2: Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Process each employee
for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];

        // Validate employee object and required properties
        if (
            employee === null ||
            typeof employee !== "object" ||
            !("name" in employee) ||
            !("salary" in employee) ||
            !("years" in employee)
        ) {
            throw new Error("Missing employee data or property.");
        }

        // Convert salary and years from strings to numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate converted numbers
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0 ||
            String(employee.salary).trim() === "" ||
            String(employee.years).trim() === ""
        ) {
            throw new Error("Invalid salary or years value.");
        }

        // Calculate bonus based on years of service
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10; // 10% bonus
        } else {
            bonus = salary * 0.05; // 5% bonus
        }

        const totalSalary = salary + bonus;

        // Print formatted employee details using template strings
        console.log("\n========== Employee Details ==========");
        console.log(`Name: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary: ₹${totalSalary.toFixed(2)}`);

    } catch (error) {
        // Handle errors without stopping the remaining employees
        console.log(`Error for employee at index ${i}: ${error.message}`);
    }
}
