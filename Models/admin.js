const db = require('../connectionDB')

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
                            VALUES ('${user.email}', '${user.phone}', '${user.address}', '${user.password_hashed}')
                            WHERE user_id = ${id}`;
            },
        },
        // PUT
        PUT: {
            editUserInfo: ()=>{

            }
        }
    },
    product: {
        // GET
        GET: {
            getAllProductInfo: ()=> {

            },
            getProductById: ()=> {
                
            },
        },
        // POST
        POST: {
            addProduct: ()=> {

            },

        },
        // PUT
        PUT: {
            editProductInfo: ()=>{

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
