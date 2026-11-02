
function nextStep(currentStep) {

    if (currentStep === 1) {

        const name = document.getElementById("name").value.trim();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

    }

    if (currentStep === 2) {

        const email = document.getElementById("email").value.trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Enter a valid email");
            return;
        }

    }

    if (currentStep === 3) {

        const password = document.getElementById("password").value;

        if (password.length < 6) {
            alert("Password must contain at least 6 characters");
            return;
        }

        showSummary();
        return;
    }

    document.getElementById("step" + currentStep).hidden = true;

    document.getElementById("step" + (currentStep + 1)).hidden = false;
}

// Go to previous step
function previousStep(currentStep) {

    document.getElementById("step" + currentStep).hidden = true;

    document.getElementById("step" + (currentStep - 1)).hidden = false;
}

// Show final summary
function showSummary() {

    document.getElementById("step3").hidden = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const summary = document.getElementById("summary");

    summary.innerHTML = `
        <h3>Registration Successful!</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `;

    summary.hidden = false;
}
