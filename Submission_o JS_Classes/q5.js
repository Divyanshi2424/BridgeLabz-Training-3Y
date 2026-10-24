
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seatsInput = document.getElementById("seats").value;

    const seats = Number(seatsInput);

    let isValid = true;

    // Regular expressions
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Hide previous ticket details
    document.getElementById("ticket").style.display = "none";

    // Validate Name
    if (!namePattern.test(name)) {
        showError("name", "nameError",
            "Name must contain alphabets only.");
        isValid = false;
    } else {
        showSuccess("name", "nameError");
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        showError("email", "emailError",
            "Please enter a valid email address.");
        isValid = false;
    } else {
        showSuccess("email", "emailError");
    }

    // Validate Seats: only whole numbers from 1 to 10
    if (
        seatsInput.trim() === "" ||
        !Number.isInteger(seats) ||
        seats < 1 ||
        seats > 10
    ) {
        showError("seats", "seatsError",
            "Seats must be a whole number from 1 to 10.");
        isValid = false;
    } else {
        showSuccess("seats", "seatsError");
    }

    // If all inputs are valid, create booking object
    if (isValid) {
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        console.log("Booking Information:", booking);

        // Display ticket details
        document.getElementById("ticketDetails").textContent =
            `Name: ${booking.name}\n` +
            `Email: ${booking.email}\n` +
            `Seats Booked: ${booking.seats}`;

        document.getElementById("ticket").style.display = "block";
    }
});

// Display error message with red border
function showError(inputId, errorId, message) {
    document.getElementById(inputId).style.border = "2px solid red";
    document.getElementById(errorId).textContent = message;
}

// Display green border for valid input
function showSuccess(inputId, errorId) {
    document.getElementById(inputId).style.border = "2px solid green";
    document.getElementById(errorId).textContent = "";
}
