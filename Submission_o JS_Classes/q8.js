
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");

// Display current object details in the DOM
function displayUser() {
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);
}

// Fill the form with existing object values
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

// Update object when the form is submitted
userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Update existing object properties
    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    // Display updated object
    displayUser();

    console.log("Updated User:", user);
});

// Show initial object details
displayUser();
