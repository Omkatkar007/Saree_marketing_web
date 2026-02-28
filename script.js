/**
 * Swamini Collection - Product Display
 * Simple, reliable, beginner-friendly
 */

// ===== STATIC PRODUCTS =====
const defaultProducts = [
    {
        id: 1,
        name: "Banarasi Silk Saree",
        image: "images/saree1.jpg",
        price: 8500
    },
    {
        id: 2,
        name: "Kanjivaram Silk Saree",
        image: "images/saree2.jpg",
        price: 12500
    },
    {
        id: 3,
        name: "Bandhani Saree",
        image: "images/saree3.jpg",
        price: 6500
    },
    {
        id: 4,
        name: "Chiffon Saree",
        image: "images/saree4.jpg",
        price: 4500
    }
];

// ===== DISPLAY PRODUCTS =====
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    
    if (!productGrid) {
        console.error('Product grid not found!');
        return;
    }
    
    // Clear existing content
    productGrid.innerHTML = '';
    
    // Display each product
    for (let i = 0; i < defaultProducts.length; i++) {
        const product = defaultProducts[i];
        
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = 
            '<div class="product-image-wrapper">' +
                '<img src="' + product.image + '" alt="' + product.name + '" class="product-image">' +
            '</div>' +
            '<div class="product-info">' +
                '<h3>' + product.name + '</h3>' +
                '<p class="product-price">₹' + product.price.toLocaleString('en-IN') + '</p>' +
            '</div>';
        
        productGrid.appendChild(card);
    }
    
    console.log('Products loaded:', defaultProducts.length);
}

// ===== INITIALIZE WHEN PAGE LOADS =====
window.onload = function() {
    console.log('Page loaded, displaying products...');
    displayProducts();
};
