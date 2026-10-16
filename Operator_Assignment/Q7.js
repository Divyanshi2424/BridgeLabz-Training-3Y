
 // Store customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count the words in feedback
let words = feedback.split(" ");
let wordCount = words.length;

// Convert feedback to lowercase for checking
let lowerFeedback = feedback.toLowerCase();

// Check for negative words
if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

// Display the total word count
console.log("Total Words:", wordCount);
