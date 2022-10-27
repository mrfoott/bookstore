const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authController = {
    registerUser: async(req, res)=> {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const user = {
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                password_hashed: hashed
            }
            User.registerUser(user, (err, result)=> {
                if(err) throw err;
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authController