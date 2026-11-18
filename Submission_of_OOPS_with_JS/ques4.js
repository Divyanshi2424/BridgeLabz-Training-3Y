
 // Parent Class

class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing general employee work.");
    }
}

// Child Class

class Manager extends Employee {

    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() method

    work() {
        console.log(this.name + " is managing the " + this.department + " department.");
    }
}

// Creating Objects

let employee1 = new Employee("Rahul", "IT");

let manager1 = new Manager("Priya", "HR");

// Calling work() method

console.log("Employee Details:");
console.log("Name:", employee1.name);
console.log("Department:", employee1.department);
employee1.work();

console.log("-----------------------");

console.log("Manager Details:");
console.log("Name:", manager1.name);
console.log("Department:", manager1.department);
manager1.work();
