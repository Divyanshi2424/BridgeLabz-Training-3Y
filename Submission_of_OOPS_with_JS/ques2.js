
// Menu Items

let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

// Calculate Bill Function

function calculateBill(orderItems) {

    // Get prices using map()

    let prices = orderItems.map(function(item) {

        let food = menu.find(function(menuItem) {
            return menuItem.name === item;
        });

        // Check invalid item

        if (!food) {
            throw new Error("Invalid item ordered: " + item);
        }

        return food.price;
    });

    // Calculate total using reduce()

    let total = prices.reduce(function(sum, price) {
        return sum + price;
    }, 0);

    return total;
}

// Test the function

try {

    let order = ["Pizza", "Burger", "Pasta"];

    let bill = calculateBill(order);

    console.log("Order Items:", order);
    console.log("Total Bill: Rs.", bill);

}
catch(error) {

    console.log("Order Failed!");
    console.log("Error:", error.message);

}
