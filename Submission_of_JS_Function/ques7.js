
// Q7: Demonstrating Closure

// Outer function
function makeMultiplier(multiplier) {

    // Inner function
    return function(number) {

        return number * multiplier;
    };
}

// Creating multiplier functions
const triple = makeMultiplier(3);
const double = makeMultiplier(2);

// Calling functions
console.log(triple(5));
console.log(double(5));
