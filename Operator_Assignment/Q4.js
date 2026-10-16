
 // Create an array of 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

// Calculate highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average score using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Filter students who passed (score >= 50)
let passedScores = scores.filter(score => score >= 50);
let passedStudents = passedScores.length;

// Use map() to display each score with its student number
let studentResults = scores.map((score, index) => {
    return `Student ${index + 1}: ${score}`;
});

// Display formatted summary using template literals
console.log(`
===== Student Performance Report =====

${studentResults.join("\n")}

Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents}
Students Failed: ${scores.length - passedStudents}
Total Students: ${scores.length}
`);
