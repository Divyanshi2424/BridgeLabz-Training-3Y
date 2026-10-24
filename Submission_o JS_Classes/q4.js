
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    // Create the form dynamically using innerHTML
    createForm(containerId) {
        const container = document.getElementById(containerId);

        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach(field => {
            formHTML += `<label for="${field.name}">${field.label}</label>`;

            if (field.type === "textarea") {
                formHTML += `
                    <textarea
                        id="${field.name}"
                        name="${field.name}"
                        required
                    ></textarea>
                `;
            } else {
                formHTML += `
                    <input
                        type="${field.type}"
                        id="${field.name}"
                        name="${field.name}"
                        required
                    >
                `;
            }
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += '</form>';

        container.innerHTML = formHTML;

        // Handle form submission
        const form = document.getElementById("dynamicForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = this.getFormData();

            document.getElementById("output").textContent =
                "Submitted Data:\n" +
                JSON.stringify(formData, null, 2);

            console.log(formData);
        });
    }

    // Return all entered values as an object
    getFormData() {
        const form = document.getElementById("dynamicForm");
        const formData = {};

        this.fields.forEach(field => {
            formData[field.name] = form.elements[field.name].value;
        });

        return formData;
    }
}

// Define the fields required in the form
const fields = [
    {
        type: "text",
        label: "Username",
        name: "username"
    },
    {
        type: "email",
        label: "Email Address",
        name: "email"
    },
    {
        type: "password",
        label: "Password",
        name: "password"
    },
    {
        type: "number",
        label: "Age",
        name: "age"
    },
    {
        type: "textarea",
        label: "Address",
        name: "address"
    }
];

// Create FormBuilder object
const formBuilder = new FormBuilder(fields);

// Generate the form
formBuilder.createForm("formContainer");
