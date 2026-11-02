
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add new product
addButton.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter product name");
        return;
    }

    const listItem = document.createElement("li");

    const productText = document.createElement("span");
    productText.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    listItem.append(productText, editButton, deleteButton);

    productList.appendChild(listItem);

    productInput.value = "";
});

// Event delegation on parent UL
productList.addEventListener("click", function (event) {

    const action = event.target.dataset.action;

    if (action === "delete") {

        event.target.parentElement.remove();

    }

    if (action === "edit") {

        const listItem = event.target.parentElement;
        const productText = listItem.querySelector("span");

        if (listItem.querySelector("input")) {
            return;
        }

        const editInput = document.createElement("input");

        editInput.value = productText.textContent;

        listItem.replaceChild(editInput, productText);

        editInput.focus();

        // Save edited value
        function saveEdit() {

            if (!editInput.isConnected) return;

            const updatedText = document.createElement("span");

            updatedText.textContent = editInput.value.trim() ||
                                      productText.textContent;

            listItem.replaceChild(updatedText, editInput);
        }

        // Save when Enter is pressed
        editInput.addEventListener("keydown", function (e) {

            if (e.key === "Enter") {
                saveEdit();
            }

        });

        // Save when input loses focus
        editInput.addEventListener("blur", saveEdit);
    }

});

// Click outside the edited item to auto-save
document.addEventListener("click", function (event) {

    const editingInput = document.querySelector("#productList input");

    if (editingInput && !editingInput.parentElement.contains(event.target)) {
        editingInput.blur();
    }

});
