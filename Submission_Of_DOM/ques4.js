
function changeTheme(themeName) {

    // Remove old theme classes
    document.body.classList.remove(
        "light", "dark", "blue"
    );

    // Add selected theme
    document.body.classList.add(themeName);

    // Save theme in custom attribute
    document.body.setAttribute("data-theme", themeName);

}

// Default theme
changeTheme("light");
