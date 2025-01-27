// This file contains the main application logic
function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
}

// Get All User
async function fetchUsers() {
    try {
        const users = await api.getUsers();
        displayResult(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Get User By ID
async function fetchUserById(id) {
    try {
        const user = await api.getUserById(id);
        displayResult(user)
    } catch (error) {
        console.error('Error fetching users by id:', error);
    }
}

// Get All Product
async function fetchProducts() {
    try {
        const products = await api.getProducts();
        displayResult(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Get Product by ID
async function fetchProductById(id) {
    try {
        const product = await api.getProductById(id);
        displayResult(product)
    } catch (error) {
        console.error('Error fetching product by id:', error);
    }
}