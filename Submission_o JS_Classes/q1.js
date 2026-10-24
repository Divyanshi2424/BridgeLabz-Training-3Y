
class Product {
    // Constructor initializes product properties
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount
    applyDiscount(discountPercentage) {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    // Method to display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const product1 = new Product(1, "Laptop", 50000, "Electronics");
const product2 = new Product(2, "Mouse", 800, "Accessories");
const product3 = new Product(3, "Smartphone", 20000, "Electronics");
const product4 = new Product(4, "Keyboard", 1500, "Accessories");

// Store products in an array
const products = [product1, product2, product3, product4];

// Apply a 10% discount to product1
product1.applyDiscount(10);

// Display all product details
console.log("All Products:");
products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products whose price is greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with price greater than ₹1000:");
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});
