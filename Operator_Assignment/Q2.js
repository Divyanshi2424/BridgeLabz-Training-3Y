
 // Store product name
let productName = " wireless headphones PRO ";

// Step 1: Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Step 2: Capitalize the first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Step 4: Display the final title and its length
console.log("Product Title:", cleanedName);
console.log("Title Length:", cleanedName.length);
