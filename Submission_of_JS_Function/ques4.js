
// Q4: Constructor Function and Prototype

// Creating constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function() {
    console.log("Car Brand: " + this.brand);
    console.log("Car Model: " + this.model);
};

// Creating two car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

// Calling prototype method
car1.getDetails();

console.log("----------------");

car2.getDetails();

// Checking method sharing
console.log(car1.getDetails === car2.getDetails);
