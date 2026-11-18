
class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {

        let total = this.marks.reduce(function(sum, mark) {
            return sum + mark;
        }, 0);

        let average = total / this.marks.length;

        return average;
    }

    calculateGrade() {

        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

// Creating 3 students

let student1 = new Student("Rahul", [85, 90, 80]);
let student2 = new Student("Priya", [65, 70, 60]);
let student3 = new Student("Aman", [30, 35, 40]);

// Display Results

let students = [student1, student2, student3];

students.forEach(function(student) {

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.calculateGrade());

    console.log("-------------------");
});
