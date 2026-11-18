
class FitnessAnalytics {

    constructor(workoutData) {
        this.workoutData = workoutData;
    }

    // Check if dataset is empty

    checkData() {

        if (this.workoutData.length === 0) {
            throw new Error("Workout data is empty!");
        }
    }

    // 1. Get Active Users using filter()

    getActiveUsers() {

        this.checkData();

        return this.workoutData.filter(function(user) {
            return user.steps > 7000;
        });
    }

    // 2. Get Average Calories using reduce()

    getAverageCalories() {

        this.checkData();

        let totalCalories = this.workoutData.reduce(function(sum, user) {
            return sum + user.calories;
        }, 0);

        return totalCalories / this.workoutData.length;
    }

    // 3. Get User Summary using map()

    getUserSummary() {

        this.checkData();

        return this.workoutData.map(function(user) {

            return user.user + " walked " + user.steps +
                   " steps and burned " + user.calories + " calories.";

        });
    }
}

// Workout Data

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

// Creating Object

let fitness = new FitnessAnalytics(workoutData);

// Executing Methods

try {

    // Active Users

    console.log("1. Active Users:");

    console.log(fitness.getActiveUsers());

    console.log("-------------------------");

    // Average Calories

    console.log("2. Average Calories:");

    console.log(fitness.getAverageCalories());

    console.log("-------------------------");

    // User Summary

    console.log("3. User Summary:");

    console.log(fitness.getUserSummary());

}
catch(error) {

    console.log("Error:", error.message);

}
