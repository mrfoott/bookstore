const db = require('../connectionDB');

const Admin = {
    user: {
        // GET
        GET: {
            getAllUserInfo: (callback)=> {
                const sql = `SELECT * FROM users`;
                return db.query(sql, callback)
            },
            getUserById: (id, callback)=> {
                const sql = `SELECT * FROM users WHERE user_id = ${id}`;
                return db.query(sql, callback)
            },
        },
        // POST
        POST: {
            addUser: (user, callback)=> {
                const sql = `INSERT INTO users (email, phone, address, password_hashed)
                            VALUES ('${user.email}', '${user.phone}', '${user.address}', '${user.password_hashed}')`;
                return db.query(sql, callback)
            },
        },
        // PUT
        PUT: {
            editUserInfo: (user, callback)=>{
                const sql = `UPDATE users
                            SET email = '${user.email}',
                                phone = '${user.phone}',
                                address = '${user.address}'
                            WHERE user_id = ${user.user_id};`;
                return db.query(sql, callback)
            },
            editPassword: (user, callback) => {
                const sql = `UPDATE users
                            SET password_hashed = '${user.new_password_hashed}'
                            WHERE user_id = ${user.user_id};`;
                return db.query(sql, callback)
            }
        }
    },
    product: {
        // GET
        GET: {
            getAllProductInfo: (callback)=> {
                const sql = `SELECT * FROM products`;
                return db.query(sql, callback)
            },
            getProductById: ()=> {
                
            },
        },
        // POST
        POST: {
            addProduct: (product, callback)=> {
                const sql = `INSERT INTO products (genres_id, product_name, quantity, language, author, description, image, price)
                            VALUES ('${product.genres_id}', '${product.product_name}', '${product.quantity}', '${product.language}', '${product.author}', '${product.description}', '${product.image}', '${product.price}');`;
                return db.query(sql, callback)
            },

        },
        // PUT
        PUT: {
            editProductInfo: (product, callback)=>{
                const sql = `UPDATE products
                            SET language = '${product.language}'
                            WHERE product_id = ${product.product_id};`
            }
        }
    },
    order: {
        // GET
        GET: {
            getAllOrderInfo: ()=> {
                
            },
            getOrderById: ()=> {
                
            },
        },
        // PUT
        PUT: {
            editOrderInfo: ()=>{
                
            }
        }
    }
}

module.exports = Admin;
