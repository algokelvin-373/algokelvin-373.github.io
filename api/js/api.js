// List API Documents
const api = {
    getUsers: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(data.users), 500);
        });
    },
    getUserById: (id) => {
        return new Promise((resolve) => {
            const user = data.users.find(user => user.id === id);
            setTimeout(() => resolve(user), 500);
        });
    },
    getProducts: () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(data.products), 500);
        });
    },
    getProductById: (id) => {
        return new Promise((resolve) => {
            const product = data.products.find(product => product.id === id);
            setTimeout(() => resolve(product), 500);
        });
    }
};