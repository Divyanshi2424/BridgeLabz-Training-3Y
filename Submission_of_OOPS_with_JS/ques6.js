
// Array of Products

let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 10 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 2 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
    { id: 5, name: "Book", category: "Education", price: 500, stock: 4 },
    { id: 6, name: "Tablet", category: "Electronics", price: 15000, stock: 6 }
];

// 1. Get Low Stock Products using filter()

function getLowStockProducts() {

    return products.filter(function(product) {
        return product.stock < 5;
    });
}

// 2. Sort Products by Price using sort()

function sortProductsByPrice() {

    return [...products].sort(function(a, b) {
        return a.price - b.price;
    });
}

// 3. Calculate Total Inventory Value using reduce()

function calculateTotalInventoryValue() {

    return products.reduce(function(total, product) {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group Products by Category using reduce()

function groupByCategory() {

    return products.reduce(function(grouped, product) {

        let category = product.category;

        if (!grouped[category]) {
            grouped[category] = [];
        }

        grouped[category].push(product);

        return grouped;

    }, {});
}

// Testing all functions

console.log("1. Low Stock Products:");

console.log(getLowStockProducts());

console.log("-------------------------");

console.log("2. Products Sorted by Price:");

console.log(sortProductsByPrice());

console.log("-------------------------");

console.log("3. Total Inventory Value:");

console.log("Rs.", calculateTotalInventoryValue());

console.log("-------------------------");

console.log("4. Products Grouped by Category:");

console.log(groupByCategory());
