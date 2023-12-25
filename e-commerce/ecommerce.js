// Dummy product data
const product = {
    name: "Sample Product",
    price: 29.99,
    images: ["image1.jpg", "image2.jpg"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
};

// Display product information on the page
document.getElementById("product").innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.images[0]}" alt="Product Image">
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
`;

// Shopping cart functionality
let cartItems = [];

function addToCart() {
    cartItems.push(product);
    alert("Item added to cart!");
}
