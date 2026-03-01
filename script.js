/**
 * Swamini Collection - Product Display
 * Simple, reliable, beginner-friendly
 */

// ===== STATIC PRODUCTS =====
const defaultProducts = [
    {
        id: 1,
        name: "Sanskar sadi",
        image: "images/saree1.jpg",
        price: 1250
    },
    {
        id: 2,
        name: "Ved’s rajhans silk",
        image: "images/saree2.jpg",
        price: 1650
    },
    {
        id: 3,
        name: "Ved’s rajhans silk",
        image: "images/saree3.jpg",
        price: 1650
    },
    {
        id: 4,
        name: "Ved’s rajhans silk",
        image: "images/saree4.jpg",
        price: 1650
    
    },
    {
        id: 5,
        name: "Ved’s rajhans silk",
        image: "images/saree5.jpg",
        price: 1650
    },
    {
        id: 6,
        name: "Ved’s rajhans silk",
        image: "images/saree6.jpg",
        price: 1650
    },
    {
        id: 7,
        name: "Ved’s rajhans silk",
        image: "images/saree7.jpg",
        price: 1650
    },
    {
        id: 8,
        name: "Ved’s rajhans silk",
        image: "images/saree8.jpg",
        price: 1650
    },
    {
        id: 9,
        name: "Ved’s rajhans silk",
        image: "images/saree9.jpg",
        price: 1650
    },
    {
        id: 10,
        name: "Rajbanshi",
        image: "images/saree10.jpg",
        price: 1550
    },
    {
        id: 11,
        name: "Kalanjali Paithani with beads work blouse",
        image: "images/saree11.jpg",
        price: 1550
    },
    {
        id: 12,
        name: "blouse quality",
        image: "images/saree12.jpg",
        price: 1550
    },
        {
            id: 13,
            name: "kavita ",
            image: "images/saree13.jpg",
            price: 750
        },
    {   id: 14,
        name: "MOSS FOIL SPECIAL BANDHANI ",
        image: "images/saree14.jpg",
        price: 750
    },
    {   id: 15,
        name: "SPECIAL POUCH PACKING",
        image: "images/saree15.jpg",
        price: 750 
    },
    {   id: 16,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree16.jpg",
        price: 600
    },
    {
        id: 17,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree17.jpg",
        price: 600
    },
    {
        id: 18,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree18.jpg",
        price: 600
    },
    {
        id: 19,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree19.jpg",
        price: 600
    },
    {
        id: 20,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree20.jpg",
        price: 600
    },
    {
        id: 21,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree21.jpg",
        price: 600
    },
    {
        id: 22,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree22.jpg",
        price: 600
    },
    {
        id: 23,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree23.jpg",
        price: 600
    },
    {
        id: 24,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree24.jpg",
        price: 600
    },
    {
        id: 25,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree25.jpg",
        price: 600
    },
    {
        id: 26,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree26.jpg",
        price: 600
    },
    {
        id: 27,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree27.jpg",
        price: 600
    },
    {
        id: 28,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree28.jpg",
        price: 600
    },
    {
        id: 29,
        name: "BOLLYWOOD cotton trending pattern",
        image: "images/saree29.jpg",
        price: 600
    },
    {

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
