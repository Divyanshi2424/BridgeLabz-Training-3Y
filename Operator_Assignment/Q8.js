
 // Shopping cart items
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart total using reduce()
let totalCartValue = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

// Calculate category-wise discounts
let totalAfterDiscount = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    // Calculate price after category discount
    let discountedPrice = product.price - (product.price * discount / 100);

    totalAfterDiscount += discountedPrice;

    console.log(
        `${product.item}: Original Price = ₹${product.price}, Discount = ${discount}%, Final Price = ₹${discountedPrice}`
    );
}

// Apply extra 5% discount if original cart total exceeds ₹50,000
let extraDiscount = 0;

if (totalCartValue > 50000) {
    extraDiscount = totalAfterDiscount * 5 / 100;
}

// Calculate final payable amount
let finalTotal = totalAfterDiscount - extraDiscount;

// Display summary
console.log("\n===== Cart Summary =====");
console.log("Original Cart Total: ₹" + totalCartValue);
console.log("Total After Category Discounts: ₹" + totalAfterDiscount);
console.log("Extra Discount: ₹" + extraDiscount);
console.log("Final Payable Amount: ₹" + finalTotal);
