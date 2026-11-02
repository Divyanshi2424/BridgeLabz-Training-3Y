
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

// Show and hide options
dropdownButton.addEventListener("click", function () {

    options.hidden = !options.hidden;

});

// Select an option
options.addEventListener("click", function (event) {

    if (event.target.classList.contains("option")) {

        dropdownButton.textContent = event.target.textContent;

        options.hidden = true;

    }

});

// Capturing phase: close dropdown on outside click
document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {

        options.hidden = true;

    }

}, true);
