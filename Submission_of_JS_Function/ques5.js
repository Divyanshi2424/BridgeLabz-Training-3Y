
// Q5: Inheritance using Prototype Chain

// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {

    // Calling parent constructor
    Person.call(this, name);

    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Fixing constructor reference
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Creating student object
const student1 = new Student("Divyanshi", "AI & Data Science");

// Calling parent and child methods
student1.showName();
student1.showBranch();

// Checking prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
