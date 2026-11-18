
 // Q6 - E-Commerce Dashboard: Product Card Fetcher

// Fetch product data using async/await
async function fetchProducts() {

    try {

        console.log("Fetching products from Fake Store API...");

        // API request
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        // Check API response
        if (!response.ok) {
            throw new Error("API request failed");
        }

        // Convert response into JSON
        const products = await response.json();

        console.log("Products fetched successfully!");

        // Display each product
        products.forEach((product) => {

            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);

            console.log("-----------------------------");

        });

        // Display products in table format
        console.table(
            products.map((product) => ({
                Title: product.title,
                Price: "$" + product.price,
                Image: product.image
            }))
        );

    } catch (error) {

        console.log(
            "Failed to load products. Please try again."
        );

    }
}

// Call the function
fetchProducts();
