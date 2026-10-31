
// Q6: Prototype Chain using Constructor Functions

// Parent constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};


// Child constructor
function Faculty(name, subject) {

    // Calling Person constructor
    Person.call(this, name);

    this.subject = subject;
}

// Inheriting Person prototype
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};


// Grandchild constructor
function Professor(name, subject, researchArea) {

    // Calling Faculty constructor
    Faculty.call(this, name, subject);

    this.researchArea = researchArea;
}

// Inheriting Faculty prototype
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showResearch = function() {
    console.log("Research Area: " + this.researchArea);
};


// Creating Professor object
const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "Artificial Intelligence"
);


// Accessing all methods
professor1.showName();
professor1.showSubject();
professor1.showResearch();
