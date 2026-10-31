
// Q9: Prototype-based Inheritance

function PersonProto(name) {
    this.name = name;
}

PersonProto.prototype.showName = function() {
    console.log("Name: " + this.name);
};


function StudentProto(name, branch) {

    PersonProto.call(this, name);

    this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};


// Creating object
const student1 = new StudentProto("Divyanshi", "AI & Data Science");

console.log("Prototype Version:");
student1.showName();
student1.showBranch();



//ES6

// Q9: ES6 Class-based Inheritance

// Parent class
class Person {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}


// Child class
class Student extends Person {

    constructor(name, branch) {

        // Calling parent constructor
        super(name);

        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}


// Creating object
const student2 = new Student("Divyanshi", "AI & Data Science");

console.log("Class Version:");
student2.showName();
student2.showBranch();
