const db = require("../connectionDB");

const User = {
    // AUTHENTICATION
    registerUser: (user, callback) => {
        const sql = `INSERT INTO users (email, phone, address, password_hashed) 
                    VALUES ('${user.email}', '${user.phone}', '${user.address}', '${user.password_hashed}')`;
        return db.query(sql, callback)
    },
    loginUser: (user, callback) => {
        const sql = `SELECT * FROM users 
                    WHERE email = '${user.email}'`;
        return db.query(sql, callback)
    },

    // CART
    GET: {
        getCartOfSelf: (user, callback) => {
            const sql = `SELECT * FROM shopping_cart
                        WHERE user_id = '${user.user_id}'`;
            return db.query(sql, callback)
        },
        getTotalPrice: (user, callback) => {
            const sql = `SELECT SUM(total_price) AS tong_tien FROM bookstore.total_price
                        WHERE user_id = '${user.user_id}'`
            return db.query(sql, callback)
        }
    },
    POST: {
        addToCart: (data, callback) => {
            const sql = `INSERT INTO shopping_cart(user_id, product_id, total)
                        VALUES ('${data.user_id}','${data.product_id}', 1)`
            return db.query(sql, callback)
        },
    },
    PUT: {
        changePassword: (user, callback) => {
            const sql = `UPDATE users
                        SET password_hashed = '${user.password_hashed}'
                        WHERE user_id = '${user.user_id}'`
            return db.query(sql, callback)
        },
        addOneToTotal: (data, callback) => {
            const sql = `UPDATE shopping_cart
                        SET total = total + 1
                        WHERE product_id = '${data.product_id}' AND user_id = '${data.user_id}'`
            return db.query(sql, callback)
        },
        removeOneFromTotal: (data, callback) => {
            const sql = `UPDATE shopping_cart
                        SET total = total - 1
                        WHERE product_id = '${data.product_id}' AND user_id = '${data.user_id}'`
            return db.query(sql, callback)
        },
        removeItemInCart: (data, callback) => {
            const sql = `DELETE
                        FROM shopping_cart
                        WHERE product_id = '${data.product_id}' AND user_id = '${data.user_id}'`
            return db.query(sql, callback)
        },
        updateUserInfo: (user, callback) => {
            const sql = `UPDATE users
                        SET full_name = '${user.full_name}', 
                            email = '${user.email}', 
                            phone = '${user.phone}', 
                            address = '${user.address}'
                        WHERE user_id = '${user.user_id}'`
            return db.query(sql, callback)
        }
    }
}


module.exports = User
