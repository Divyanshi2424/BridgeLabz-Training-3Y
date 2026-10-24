
const studentForm = document.getElementById("studentForm");

// Run validation when the form is submitted
studentForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    let isFormValid = true;

    // Regular expressions for validation
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/;

    // Validate Name
    if (!namePattern.test(name)) {
        showError("name", "nameError",
            "Name must contain only alphabets.");
        isFormValid = false;
    } else {
        showSuccess("name", "nameError");
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        showError("email", "emailError",
            "Please enter a valid email address.");
        isFormValid = false;
    } else {
        showSuccess("email", "emailError");
    }

    // Validate Phone
    if (!phonePattern.test(phone)) {
        showError("phone", "phoneError",
            "Phone number must contain exactly 10 digits.");
        isFormValid = false;
    } else {
        showSuccess("phone", "phoneError");
    }

    // Validate Password
    if (!passwordPattern.test(password)) {
        showError("password", "passwordError",
            "Password needs an uppercase letter, a number, and a special character.");
        isFormValid = false;
    } else {
        showSuccess("password", "passwordError");
    }

    // Display final result
    const result = document.getElementById("result");

    if (isFormValid) {
        result.textContent = "Registration successful!";
        result.style.color = "green";
    } else {
        result.textContent = "Please correct the errors above.";
        result.style.color = "red";
    }
});

// Function to show error message and red border
function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    input.style.border = "2px solid red";
    error.textContent = message;
}

// Function to show green border for valid input
function showSuccess(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    input.style.border = "2px solid green";
    error.textContent = "";
}
