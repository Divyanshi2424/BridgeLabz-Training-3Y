
class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total before discount
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    // Calculate discounted total
    applyCoupon(couponCode) {
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;
        const match = couponCode.match(couponPattern);

        if (!match) {
            return {
                valid: false,
                message: "Invalid coupon! Try SAVE20 or DISC10."
            };
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 99) {
            return {
                valid: false,
                message: "Discount must be between 1% and 99%."
            };
        }

        const subtotal = this.getTotal();
        const discount = subtotal * discountPercent / 100;
        const finalTotal = subtotal - discount;

        return {
            valid: true,
            discountPercent: discountPercent,
            subtotal: subtotal,
            discount: discount,
            finalTotal: finalTotal
        };
    }
}

// Create a cart object
const cart = new Cart();

// Add items: name, price, quantity
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart items
const cartItems = document.getElementById("cartItems");

cart.items.forEach(item => {
    const listItem = document.createElement("li");

    listItem.textContent =
        `${item.name} - ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}`;

    cartItems.appendChild(listItem);
});

// Display initial total
function displayTotal(subtotal, discount = 0, finalTotal = subtotal) {
    document.getElementById("totalDetails").textContent =
        `Subtotal: ₹${subtotal.toFixed(2)}\n` +
        `Discount: ₹${discount.toFixed(2)}\n` +
        `Final Total: ₹${finalTotal.toFixed(2)}`;
}

displayTotal(cart.getTotal());

// Handle coupon form submission
document.getElementById("couponForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const couponCode = document
            .getElementById("coupon")
            .value.trim().toUpperCase();

        const result = cart.applyCoupon(couponCode);
        const message = document.getElementById("message");

        if (result.valid) {
            message.textContent =
                `${result.discountPercent}% discount applied successfully!`;

            message.style.color = "green";

            displayTotal(
                result.subtotal,
                result.discount,
                result.finalTotal
            );

            console.log("Coupon Result:", result);
        } else {
            message.textContent = result.message;
            message.style.color = "red";

            // Restore original total for an invalid coupon
            displayTotal(cart.getTotal());
        }
    }
);
