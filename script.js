/**
 * Swamini Collection - Product Display
 * Simple, reliable, beginner-friendly
 */

// ===== STATIC PRODUCTS (DO NOT MODIFY) =====
const defaultProducts = [
    { id: 1, name: "Sanskar sadi", image: "images/saree1.jpg", price: 1250 },
    { id: 2, name: "Ved's rajhans silk", image: "images/saree2.jpg", price: 1650 },
    { id: 3, name: "Ved's rajhans silk", image: "images/saree3.jpg", price: 1650 },
    { id: 4, name: "Ved's rajhans silk", image: "images/saree4.jpg", price: 1650 },
    { id: 5, name: "Ved's rajhans silk", image: "images/saree5.jpg", price: 1650 },
    { id: 6, name: "Ved's rajhans silk", image: "images/saree6.jpg", price: 1650 },
    { id: 7, name: "Ved's rajhans silk", image: "images/saree7.jpg", price: 1650 },
    { id: 8, name: "Ved's rajhans silk", image: "images/saree8.jpg", price: 1650 },
    { id: 9, name: "Ved's rajhans silk", image: "images/saree9.jpg", price: 1650 },
    { id: 10, name: "Rajbanshi", image: "images/saree10.jpg", price: 1550 },
    { id: 11, name: "Kalanjali Paithani with beads work blouse", image: "images/saree11.jpg", price: 1550 },
    { id: 12, name: "blouse quality", image: "images/saree12.jpg", price: 1550 },
    { id: 13, name: "kavita ", image: "images/saree13.jpg", price: 750 },
    { id: 14, name: "MOSS FOIL SPECIAL BANDHANI ", image: "images/saree14.jpg", price: 750 },
    { id: 15, name: "SPECIAL POUCH PACKING", image: "images/saree15.jpg", price: 750 },
    { id: 16, name: "BOLLYWOOD cotton trending pattern", image: "images/saree16.jpg", price: 600 },
    { id: 17, name: "BOLLYWOOD cotton trending pattern", image: "images/saree17.jpg", price: 600 },
    { id: 18, name: "BOLLYWOOD cotton trending pattern", image: "images/saree18.jpg", price: 600 },
    { id: 19, name: "BOLLYWOOD cotton trending pattern", image: "images/saree19.jpg", price: 600 },
    { id: 20, name: "BOLLYWOOD cotton trending pattern", image: "images/saree20.jpg", price: 600 },
    { id: 21, name: "BOLLYWOOD cotton trending pattern", image: "images/saree21.jpg", price: 600 },
    { id: 22, name: "BOLLYWOOD cotton trending pattern", image: "images/saree22.jpg", price: 600 },
    { id: 23, name: "BOLLYWOOD cotton trending pattern", image: "images/saree23.jpg", price: 600 },
    { id: 24, name: "BOLLYWOOD cotton trending pattern", image: "images/saree24.jpg", price: 600 },
    { id: 25, name: "BOLLYWOOD cotton trending pattern", image: "images/saree25.jpg", price: 600 },
    { id: 26, name: "BOLLYWOOD cotton trending pattern", image: "images/saree26.jpg", price: 600 },
    { id: 27, name: "BOLLYWOOD cotton trending pattern", image: "images/saree27.jpg", price: 600 },
    { id: 28, name: "BOLLYWOOD cotton trending pattern", image: "images/saree28.jpg", price: 600 },
    { id: 29, name: "BOLLYWOOD cotton trending pattern", image: "images/saree29.jpg", price: 600 },
    { id: 30, name: "Heavy mill dola silk", image: "images/saree30.jpg", price: 550 },
    { id: 31, name: "Heavy mill dola silk", image: "images/saree31.jpg", price: 550 },
    { id: 32, name: "Heavy mill dola silk", image: "images/saree32.jpg", price: 550 },
    { id: 33, name: "Heavy mill dola silk", image: "images/saree33.jpg", price: 550 },
    { id: 34, name: "Heavy mill dola silk", image: "images/saree34.jpg", price: 550 },
    { id: 35, name: "Heavy mill dola silk", image: "images/saree35.jpg", price: 550 },
    { id: 36, name: "Heavy mill dola silk", image: "images/saree36.jpg", price: 550 },
    { id: 37, name: "Heavy mill dola silk", image: "images/saree37.jpg", price: 550 },
    { id: 38, name: "", image: "images/saree38.jpg", price: 850 },
    { id: 39, name: "white Moksha", image: "images/saree39.jpg", price: 1000 },
    { id: 40, name: "Peacock", image: "images/saree40.jpg", price: 1350 },
    { id: 41, name: "Peacock", image: "images/saree41.jpg", price: 1350 },
    { id: 42, name: "Pushpa Silk", image: "images/saree42.jpg", price: 1650 },
    { id: 43, name: "Pushpa Silk", image: "images/saree43.jpg", price: 1650 },
    { id: 44, name: "Pushpa Silk", image: "images/saree44.jpg", price: 1650 },
    { id: 45, name: "Pushpa Silk", image: "images/saree45.jpg", price: 1650 },
    { id: 46, name: "Katha Tanya", image: "images/saree46.jpg", price: 1250 },
    { id: 47, name: "Katha Tanya", image: "images/saree47.jpg", price: 1250 },
    { id: 48, name: "Katha Tanya", image: "images/saree48.jpg", price: 1250 },
    { id: 49, name: "Katha Tanya", image: "images/saree49.jpg", price: 1250 },
    { id: 50, name: "Katha Tanya", image: "images/saree50.jpg", price: 1250 },
    { id: 51, name: "Katha Tanya", image: "images/saree51.jpg", price: 1250 },
    { id: 52, name: "Rajvansh Paithani", image: "images/saree52.jpg", price: 1550 },
    { id: 53, name: "Rajvansh Paithani", image: "images/saree53.jpg", price: 1550 },
    { id: 54, name: "Rajvansh Paithani", image: "images/saree54.jpg", price: 1550 },
    { id: 55, name: "Rajvansh Paithani", image: "images/saree55.jpg", price: 1550 },
    { id: 56, name: "Rajvansh Paithani", image: "images/saree56.jpg", price: 1550 },
    { id: 57, name: "Chaava Silk", image: "images/saree57.jpg", price: 1150 },
    { id: 58, name: "Chaava Silk", image: "images/saree58.jpg", price: 1150 },
    { id: 59, name: "Chaava Silk", image: "images/saree59.jpg", price: 1150 },
    { id: 60, name: "Chaava Silk", image: "images/saree60.jpg", price: 1150 },
    { id: 61, name: "Chaava Silk", image: "images/saree61.jpg", price: 1150 },
    { id: 62, name: "Ones More", image: "images/saree62.jpg", price: 1250 },
    { id: 63, name: "Ones More", image: "images/saree63.jpg", price: 1250 },
    { id: 64, name: "Black Silk", image: "images/saree64.jpg", price: 1150 },
    { id: 65, name: "Black Silk", image: "images/saree65.jpg", price: 1150 },
    { id: 66, name: "Black Silk", image: "images/saree66.jpg", price: 1150 },
    { id: 67, name: "Black Silk", image: "images/saree67.jpg", price: 1150 },
    { id: 68, name: "Black Silk", image: "images/saree68.jpg", price: 1150 },
    { id: 69, name: "Black Silk", image: "images/saree69.jpg", price: 1150 },
    { id: 70, name: "Black Silk", image: "images/saree70.jpg", price: 1150 },
    { id: 71, name: "Black Silk", image: "images/saree71.jpg", price: 1150 },
    { id: 72, name: "raftar silk", image: "images/saree72.jpg", price: 1250 },
    { id: 73, name: "Dhamal", image: "images/saree73.jpg", price: 1250 },
    { id: 74, name: "kitkat", image: "images/saree74.jpg", price: 1150 },
    { id: 75, name: "Dhamal 2", image: "images/saree75.jpg", price: 1250 },
    { id: 76, name: "Chokobar", image: "images/saree76.jpg", price: 700 },
    { id: 77, name: "Chokobar", image: "images/saree77.jpg", price: 700 },
    { id: 78, name: "Chokobar", image: "images/saree78.jpg", price: 700 },
    { id: 79, name: "Chokobar", image: "images/saree79.jpg", price: 700 },
    { id: 80, name: "Chokobar", image: "images/saree80.jpg", price: 700 },
    { id: 81, name: "Chokobar", image: "images/saree81.jpg", price: 700 },
    { id: 82, name: "Chokobar", image: "images/saree82.jpg", price: 700 },
    { id: 83, name: "Mumbai Central", image: "images/saree83.jpg", price: 650 },
    { id: 84, name: "Mumbai Central", image: "images/saree84.jpg", price: 650 },
    { id: 85, name: "Divya", image: "images/saree85.jpg", price: 650 },
    { id: 86, name: "Divya", image: "images/saree86.jpg", price: 650 },
    { id: 87, name: "Krishna Lila", image: "images/saree87.jpg", price: 650 },
    { id: 88, name: "Krishna Lila", image: "images/saree88.jpg", price: 650 },
    { id: 89, name: "Dolly", image: "images/saree89.jpg", price: 750 },
    { id: 90, name: "Dolly", image: "images/saree90.jpg", price: 750 },
    { id: 91, name: "Sadhana", image: "images/saree91.jpg", price: 950 },
    { id: 92, name: "Suchitra", image: "images/saree92.jpg", price: 850 },
    { id: 93, name: "Mahira", image: "images/saree93.jpg", price: 900 },
    { id: 94, name: "Chakori Brasso", image: "images/saree94.jpg", price: 1350 },
    { id: 95, name: "Dolla Moss", image: "images/saree95.jpg", price: 550 },
    { id: 96, name: "Moss Foil", image: "images/saree96.jpg", price: 650 },
    { id: 97, name: "Rajilaxmi Silk", image: "images/saree97.jpg", price: 750 },
    { id: 98, name: "Narangi Silk", image: "images/saree98.jpg", price: 1450 },
    { id: 99, name: "Muniya Peacock", image: "images/saree99.jpg", price: 1450 }
];

// ===== ADMIN PRODUCTS (Added via admin panel) =====
let adminProducts = [];

// ===== ADMIN CONFIG =====
const ADMIN_EMAIL = 'vinitakatkar33@gmail.com';
const ADMIN_PASSWORD = 'admin123';
const CLOUDINARY_CLOUD_NAME = 'dysbgzoxx';
const CLOUDINARY_UPLOAD_PRESET = 'swamini';

// ===== LOCAL STORAGE KEYS =====
const STORAGE_KEY_ADMIN_PRODUCTS = 'swamini_admin_products';
const STORAGE_KEY_ADMIN_LOGGED_IN = 'swamini_admin_logged_in';

// ===== LOAD ADMIN PRODUCTS FROM LOCALSTORAGE =====
function loadAdminProducts() {
    const stored = localStorage.getItem(STORAGE_KEY_ADMIN_PRODUCTS);
    if (stored) {
        try {
            adminProducts = JSON.parse(stored);
        } catch (e) {
            adminProducts = [];
        }
    }
}

// ===== SAVE ADMIN PRODUCTS TO LOCALSTORAGE =====
function saveAdminProducts() {
    localStorage.setItem(STORAGE_KEY_ADMIN_PRODUCTS, JSON.stringify(adminProducts));
}

// ===== CHECK IF ADMIN LOGGED IN =====
function isAdminLoggedIn() {
    return localStorage.getItem(STORAGE_KEY_ADMIN_LOGGED_IN) === 'true';
}

// ===== ADMIN LOGIN =====
function adminLogin(email, password) {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem(STORAGE_KEY_ADMIN_LOGGED_IN, 'true');
        return true;
    }
    return false;
}

// ===== ADMIN LOGOUT =====
function adminLogout() {
    localStorage.removeItem(STORAGE_KEY_ADMIN_LOGGED_IN);
}

// ===== UPLOAD IMAGE TO CLOUDINARY =====
function uploadToCloudinary(file) {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.secure_url) {
                resolve(data.secure_url);
            } else if (data.error) {
                reject(new Error(data.error.message));
            } else {
                reject(new Error('Upload failed'));
            }
        })
        .catch(error => reject(error));
    });
}

// ===== ADD PRODUCT =====
async function addProduct(name, price, status, imageFile) {
    try {
        const imageUrl = await uploadToCloudinary(imageFile);
        const newProduct = {
            id: Date.now(),
            name: name,
            price: parseFloat(price),
            status: status,
            image: imageUrl,
            isAdminProduct: true
        };
        adminProducts.push(newProduct);
        saveAdminProducts();
        return { success: true, product: newProduct };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// ===== GET ALL PRODUCTS (Static + Admin) =====
function getAllProducts() {
    return [...defaultProducts, ...adminProducts];
}

// ===== DISPLAY PRODUCTS =====
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    const allProducts = getAllProducts();
    
    for (let i = 0; i < allProducts.length; i++) {
        const product = allProducts[i];
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const isSoldOut = product.status === 'sold_out';
        const soldOutBadge = isSoldOut ? '<span class="sold-out-badge">Sold Out</span>' : '';
        
        card.innerHTML = 
            '<div class="product-image-wrapper">' +
                '<img src="' + product.image + '" alt="' + product.name + '" class="product-image">' +
                soldOutBadge +
            '</div>' +
            '<div class="product-info">' +
                '<h3>' + product.name + '</h3>' +
                '<p class="product-price">₹' + product.price.toLocaleString('en-IN') + '</p>' +
            '</div>';
        
        productGrid.appendChild(card);
    }
}

// ===== SHOW ADMIN LOGIN MODAL =====
function showAdminLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) modal.style.display = 'flex';
}

// ===== HIDE ADMIN LOGIN MODAL =====
function hideAdminLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) modal.style.display = 'none';
}

// ===== SHOW ADMIN DASHBOARD =====
function showAdminDashboard() {
    const dashboard = document.getElementById('admin-dashboard');
    if (dashboard) dashboard.style.display = 'block';
    const mainContent = document.querySelector('header, #products, #contact, footer');
    if (mainContent) mainContent.style.display = 'none';
}

// ===== HIDE ADMIN DASHBOARD =====
function hideAdminDashboard() {
    const dashboard = document.getElementById('admin-dashboard');
    if (dashboard) dashboard.style.display = 'none';
    const mainContent = document.querySelector('header, #products, #contact, footer');
    if (mainContent) mainContent.style.display = '';
}

// ===== REFRESH PRODUCT DISPLAY =====
function refreshProducts() {
    displayProducts();
    hideAdminDashboard();
}

// ===== INITIALIZE WHEN PAGE LOADS =====
window.onload = function() {
    loadAdminProducts();
    displayProducts();
    if (isAdminLoggedIn()) {
        showAdminDashboard();
    }
};
