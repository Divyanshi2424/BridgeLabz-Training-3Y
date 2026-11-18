
 // Constructor Function

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype Method

Product.prototype.applyDiscount = function(percent) {

    let discount = (this.price * percent) / 100;

    let newPrice = this.price - discount;

    return newPrice;
};

// Creating 3 Products

let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

// Applying Different Discounts

console.log("Product:", product1.name);
console.log("Original Price:", product1.price);
console.log("Price after 10% discount:", product1.applyDiscount(10));

console.log("-----------------------");

console.log("Product:", product2.name);
console.log("Original Price:", product2.price);
console.log("Price after 20% discount:", product2.applyDiscount(20));

console.log("-----------------------");

console.log("Product:", product3.name);
console.log("Original Price:", product3.price);
console.log("Price after 15% discount:", product3.applyDiscount(15));
