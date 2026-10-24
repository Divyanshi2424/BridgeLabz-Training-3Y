
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let isValid = true;
    const errors = [];

    // Username must have at least 5 characters
    const usernamePattern = /^.{5,}$/;

    // Password must have uppercase, lowercase, number,
    // special character, and at least 8 characters
    const passwordPattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    // Clear previous messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("result").textContent = "";

    // Validate username
    if (!usernamePattern.test(username)) {
        document.getElementById("usernameError").textContent =
            "Username must contain at least 5 characters.";

        document.getElementById("username").style.border =
            "2px solid red";

        errors.push("Invalid username.");
        isValid = false;
    } else {
        document.getElementById("username").style.border =
            "2px solid green";
    }

    // Validate password
    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }

    if (!/\d/.test(password)) {
        errors.push("Password must contain a number.");
    }

    if (!/[^A-Za-z0-9\s]/.test(password)) {
        errors.push("Password must contain a special character.");
    }

    if (/\s/.test(password)) {
        errors.push("Password must not contain spaces.");
    }

    if (errors.some(error => error.startsWith("Password"))) {
        document.getElementById("passwordError").textContent =
            errors.filter(error => error.startsWith("Password")).join("\n");

        document.getElementById("password").style.border =
            "2px solid red";

        isValid = false;
    } else {
        document.getElementById("password").style.border =
            "2px solid green";
    }

    // Display final result
    const result = document.getElementById("result");

    if (isValid) {
        result.textContent = "Login validation successful!";
        result.style.color = "green";
    } else {
        result.textContent = "Please correct the errors above.";
        result.style.color = "red";
    }
});
