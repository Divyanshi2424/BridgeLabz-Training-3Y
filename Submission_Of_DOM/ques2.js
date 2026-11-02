
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

// Update counter
function updateCounter() {

    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.style.color = "green";

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "orange";
    }

    if (remaining === 0) {
        counter.style.color = "red";
    }
}

// Prevent typing after 100 characters
message.addEventListener("keydown", function (event) {

    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "ArrowUp", "ArrowDown",
        "Tab", "Home", "End"
    ];

    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }

});

// Update counter when typing or pasting
message.addEventListener("input", updateCounter);

// Reset everything
resetButton.addEventListener("click", function () {

    message.value = "";

    updateCounter();

});
