
// Q8: Creating Custom myMap() Method

// Adding myMap method to Array prototype
Array.prototype.myMap = function(callback) {

    // Creating an empty result array
    const result = [];

    // Loop through original array
    for (let i = 0; i < this.length; i++) {

        // Apply callback to each element
        result.push(callback(this[i], i, this));
    }

    // Return new array
    return result;
};


// Original array
const numbers = [1, 2, 3];

// Using custom myMap
const doubled = numbers.myMap(function(num) {
    return num * 2;
});

// Using arrow function
const squared = numbers.myMap(num => num * num);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);
console.log("Squared Array:", squared);
