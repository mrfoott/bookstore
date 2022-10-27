const db = require("../connectionDB");

const User = {
    registerUser: (user, callback) => {
        const sql = `INSERT INTO users (email, phone, address, password_hashed) VALUES ('${user.email}', '${user.phone}', '${user.address}', '${user.password_hashed}')`;
        return db.query(sql, callback)
    }
}


module.exports = User
