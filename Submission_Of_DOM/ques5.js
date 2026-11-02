
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const previewImage = document.getElementById("previewImage");
const closeButton = document.getElementById("closeButton");

// Click any gallery image
gallery.addEventListener("click", function (event) {

    if (event.target.tagName === "IMG") {

        modal.style.display = "flex";

        previewImage.src = event.target.src;
    }

});

// Clicking inside modal should not close it
modalContent.addEventListener("click", function (event) {

    event.stopPropagation();

});

// Clicking outside image closes modal
modal.addEventListener("click", function () {

    modal.style.display = "none";

});

// Close button
closeButton.addEventListener("click", function () {

    modal.style.display = "none";

});
