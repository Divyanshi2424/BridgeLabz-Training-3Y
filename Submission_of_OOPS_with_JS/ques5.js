
 // Parent Class

class User {

    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver Class inherits User

class Driver extends User {

    constructor(name, rating, vehicle, vehicleNumber) {

        super(name, rating);

        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

// Trip Class

class Trip {

    constructor(fromLocation, toLocation, distance) {

        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {

        // Validate distance

        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Distance is not provided!");
        }

        if (typeof this.distance !== "number" || !Number.isFinite(this.distance)) {
            throw new Error("Distance must be a valid number!");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative!");
        }

        // Fare calculation: Rs. 10 per km

        let fare = this.distance * 10;

        return fare;
    }
}

// Creating Driver

let driver1 = new Driver("Amit", 4.8, "Car", "UP85AB1234");

// Creating Trip

let trip1 = new Trip("Mathura", "Agra", 60);

// Display Details

console.log("Driver Name:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);
console.log("Vehicle Number:", driver1.vehicleNumber);

console.log("-----------------------");

// try-catch for fare calculation

try {

    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Distance:", trip1.distance, "KM");

    let fare = trip1.calculateFare();

    console.log("Total Fare: Rs.", fare);

}
catch(error) {

    console.log("Trip Failed!");
    console.log("Error:", error.message);

}
