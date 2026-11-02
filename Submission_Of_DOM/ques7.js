
const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

// Track mouse movement
mouseBox.addEventListener("mousemove", function (event) {

    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;

});

// Double click to create red dot
mouseBox.addEventListener("dblclick", function (event) {

    const rect = mouseBox.getBoundingClientRect();

    // Calculate position inside box
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement("div");

    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.backgroundColor = "red";
    dot.style.borderRadius = "50%";

    dot.style.position = "absolute";
    dot.style.left = (x - 5) + "px";
    dot.style.top = (y - 5) + "px";

    mouseBox.appendChild(dot);

});
