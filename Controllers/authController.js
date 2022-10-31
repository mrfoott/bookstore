const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const user = {
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                password_hashed: hashed
            }
            User.registerUser(user, (err, result) => {
                if (err) throw err;
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            role_id: user.role_id
        }, process.env.SECRET_KEY_ACCESSTOKEN, {
            expiresIn: "1h"
        })
    },
    loginUser: async (req, res) => {
        try {
            const user = {
                email: req.body.email
            }
            User.loginUser(user, async (err, result) => {
                if (err) {
                    res.status(500).json(err);
                }
                else if (!result[0]) {
                    res.status(404).json("Wrong email or password!!")
                    return;
                };
                const validEmail = await result[0].email;
                const validPassword = await bcrypt.compare(req.body.password, result[0].password_hashed)
                if (!validPassword) {
                    res.status(404).json("Wrong password!!")
                    return;
                };
                if (validEmail && validPassword) {
                    const accessToken = authController.generateAccessToken(result[0])
                    const { password_hashed, ...orther } = result[0]
                    // const password_hashed = result[0].password_hashed
                    res.status(200).json({ ...orther, accessToken })
                }
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = authController