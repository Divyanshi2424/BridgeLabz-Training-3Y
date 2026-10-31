
// Q3: Understanding this with Arrow Function

// Creating user object
const user = {
    name: "Divyanshi",

    // Arrow function as object method
    showName: () => {
        console.log(this.name);
    }
};

// Calling method
user.showName();



// Q3: Fixing this using Normal Function

const usr = {
    name: "Divyanshi",

    // Normal function as object method
    showName: function() {
        console.log(this.name);
    }
};

// Calling method
usr.showName();

