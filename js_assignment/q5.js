
 // Q5. Weather Activity Planner

// Declare weather variables
let temperature = 38;
let isRaining = false;
let windSpeed = 10;

// Check weather conditions and suggest an activity
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
}
else if (temperature > 35) {
    console.log("Go swimming.");
}
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy - stay home.");
}
else {
    console.log("Perfect day for a walk.");
}
