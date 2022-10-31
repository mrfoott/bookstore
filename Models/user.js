const db = require("../connectionDB");

const User = {
    // AUTHENTICATION
    registerUser: (user, callback) => {
        const sql = `INSERT INTO users (email, phone, address, password_hashed) VALUES ('${user.email}', '${user.phone}', '${user.address}', '${user.password_hashed}')`;
        return db.query(sql, callback)
    },
    loginUser: (user, callback)=> {
        const sql = `SELECT email, password_hashed, role_id FROM users WHERE email = '${user.email}'`;
        return db.query(sql, callback)
    },
    changePassword: ()=> {
              
    },
    // CART
    getCart: ()=> {

    },
    removeItemInCart: ()=> {

    },
}


module.exports = User
