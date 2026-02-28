/**
 * Swamini Collection - Authentication & Product Management
 * ==========================================================
 * 
 * Authentication:
 * - Admin credentials: vinitakatkar33@gmail.com / admin123
 * - Role-based access: Admin (full CRUD), Visitor (view only)
 * 
 * Product Management:
 * - Products stored in localStorage for persistence
 * - Image URL from Google Drive
 * - CRUD operations: Add, Edit, Delete
 */

// ===== CONFIGURATION =====
const ADMIN_EMAIL = 'vinitakatkar33@gmail.com';
const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'swamini_products';

// ===== DEFAULT PRODUCTS =====
const defaultProducts = [
    {
        id: 1,
        name: "Banarasi Silk Saree",
        image: "images/saree1.jpg",
        price: 8500
    },
];

// ===== STATE =====
let currentUser = null; // 'admin' or 'visitor' or null

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    initializeAuth();
    initializeAdminPanel();
    displayProducts();
});

// ===== PRODUCT MANAGEMENT =====
function initializeProducts() {
    // Load products from localStorage or use defaults
    const storedProducts = localStorage.getItem(STORAGE_KEY);
    if (!storedProducts) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    }
}

function getProducts() {
    const products = localStorage.getItem(STORAGE_KEY);
    return products ? JSON.parse(products) : defaultProducts;
}

function saveProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';
    const products = getProducts();

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // For visitor mode, show image and price only
        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='images/PLACEHOLDER.txt'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">₹${parseInt(product.price).toLocaleString('en-IN')}</p>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
}

// ===== AUTHENTICATION =====
function initializeAuth() {
    const loginBtn = document.getElementById('admin-login-btn');
    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    const modalClose = document.querySelector('.modal-close');

    // Check if already logged in
    const isLoggedIn = localStorage.getItem('swamini_admin_logged_in');
    if (isLoggedIn === 'true') {
        currentUser = 'admin';
        showAdminMode();
    }

    // Open login modal
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            loginError.classList.add('hidden');
            document.getElementById('admin-email').value = '';
            document.getElementById('admin-password').value = '';
        });
    }

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeLoginModal);
    }

    // Close modal on outside click
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                closeLoginModal();
            }
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('admin-email').value.trim();
            const password = document.getElementById('admin-password').value;

            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                // Successful admin login - go to admin mode
                currentUser = 'admin';
                localStorage.setItem('swamini_admin_logged_in', 'true');
                closeLoginModal();
                showAdminMode();
                // Scroll to admin panel
                document.getElementById('admin-panel').scrollIntoView({ behavior: 'smooth' });
            } else {
                // Wrong credentials - redirect to products page
                closeLoginModal();
                alert('Invalid credentials. You have been redirected to the products page.');
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            currentUser = 'visitor';
            localStorage.removeItem('swamini_admin_logged_in');
            hideAdminMode();
        });
    }
}

function closeLoginModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        loginModal.classList.add('hidden');
    }
}

function showAdminMode() {
    const loginBtn = document.getElementById('admin-login-btn');
    const adminIndicator = document.getElementById('admin-indicator');
    const adminPanel = document.getElementById('admin-panel');

    if (loginBtn) loginBtn.classList.add('hidden');
    if (adminIndicator) {
        adminIndicator.classList.remove('hidden');
        adminIndicator.style.display = 'flex';
    }
    if (adminPanel) adminPanel.classList.remove('hidden');

    // Load admin product list
    displayAdminProducts();
}

function hideAdminMode() {
    const loginBtn = document.getElementById('admin-login-btn');
    const adminIndicator = document.getElementById('admin-indicator');
    const adminPanel = document.getElementById('admin-panel');

    if (loginBtn) loginBtn.classList.remove('hidden');
    if (adminIndicator) {
        adminIndicator.classList.add('hidden');
        adminIndicator.style.display = 'none';
    }
    if (adminPanel) adminPanel.classList.add('hidden');
}

// ===== ADMIN PANEL =====
function initializeAdminPanel() {
    const addProductForm = document.getElementById('add-product-form');
    const editProductForm = document.getElementById('edit-product-form');
    const editModalClose = document.querySelector('.edit-modal-close');

    // Handle add product form
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            addNewProduct();
        });
    }

    // Handle edit product form
    if (editProductForm) {
        editProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            updateProduct();
        });
    }

    // Close edit modal
    if (editModalClose) {
        editModalClose.addEventListener('click', () => {
            document.getElementById('edit-modal').classList.add('hidden');
        });
    }
}

function addNewProduct() {
    const name = document.getElementById('saree-name').value.trim();
    const price = document.getElementById('saree-price').value;
    const imageUrl = document.getElementById('saree-image').value.trim();

    if (!name || !price || !imageUrl) {
        alert('Please fill all fields');
        return;
    }

    // Validate URL format
    if (!imageUrl.startsWith('http')) {
        alert('Please enter a valid Google Drive URL');
        return;
    }

    const products = getProducts();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    const newProduct = {
        id: newId,
        name: name,
        image: imageUrl, // Store Google Drive URL directly
        price: parseInt(price)
    };

    products.push(newProduct);
    saveProducts(products);
    
    // Reset form
    document.getElementById('add-product-form').reset();
    
    // Refresh displays
    displayProducts();
    displayAdminProducts();
    
    alert('Saree added successfully!');
}

function displayAdminProducts() {
    const adminProductList = document.getElementById('admin-product-list');
    if (!adminProductList) return;

    const products = getProducts();
    adminProductList.innerHTML = '';

    products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'admin-product-item';
        item.innerHTML = `
            <div class="admin-product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/PLACEHOLDER.txt'">
            </div>
            <div class="admin-product-details">
                <h4>${product.name}</h4>
                <p class="price">₹${parseInt(product.price).toLocaleString('en-IN')}</p>
            </div>
            <div class="admin-product-actions">
                <button class="edit-btn" onclick="openEditModal(${product.id})">Edit</button>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        `;
        adminProductList.appendChild(item);
    });
}

function openEditModal(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    document.getElementById('edit-product-id').value = productId;
    document.getElementById('edit-saree-name').value = product.name;
    document.getElementById('edit-saree-price').value = product.price;
    document.getElementById('edit-img-preview').src = product.image;

    document.getElementById('edit-modal').classList.remove('hidden');
}

function updateProduct() {
    const productId = parseInt(document.getElementById('edit-product-id').value);
    const name = document.getElementById('edit-saree-name').value.trim();
    const price = document.getElementById('edit-saree-price').value;

    if (!name || !price) {
        alert('Please fill all fields');
        return;
    }

    let products = getProducts();
    const index = products.findIndex(p => p.id === productId);
    
    if (index !== -1) {
        products[index].name = name;
        products[index].price = parseInt(price);
        saveProducts(products);
        
        document.getElementById('edit-modal').classList.add('hidden');
        displayProducts();
        displayAdminProducts();
        
        alert('Saree updated successfully!');
    }
}

function deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this saree?')) {
        return;
    }

    let products = getProducts();
    products = products.filter(p => p.id !== productId);
    saveProducts(products);
    
    displayProducts();
    displayAdminProducts();
    
    alert('Saree deleted successfully!');
}
