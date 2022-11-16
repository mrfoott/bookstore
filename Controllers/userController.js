const User = require('../Models/user')
const bcrypt = require('bcrypt')

const userController = {
    addToCart: async (req, res) => {
        try {
            const data = {
                user_id: req.body.user_id,
                product_id: req.body.product_id
            }
            User.POST.addToCart(data, (err, result) => {
                if (err) throw err;
                
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCartOfSelf: async (req, res) => {
        try {
            const user = {
                user_id: req.body.user_id
            }
            User.GET.getCartOfSelf(user, (err, result) => {
                if (err) throw err;
                if (!result[0]) {
                    res.status(404).json(`what're you looking for???!!!`);
                    return;
                }
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateUserInfo: async (req, res) => {
        try {
            const user = {
                user_id: req.body.user_id,
                full_name: req.body.full_name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address
            }
            User.PUT.updateUserInfo(user, (err, result) => {
                if (err) throw err;

                res.status(200).json("Updated info successfully!!!")
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addOneToTotal: async (req, res) => {
        try {
            const data = {
                user_id: req.body.user_id,
                product_id: req.body.product_id
            }
            User.PUT.addOneToTotal(data, (err, result) => {
                if (err) throw err;

                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    removeOneFromTotal: async (req, res) => {
        try {
            const data = {
                user_id: req.body.user_id,
                product_id: req.body.product_id
            }
            User.PUT.removeOneFromTotal(data, (err, result) => {
                if (err) throw err;
            
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    removeItemInCart: async (req, res) => {
        try {
            const data = {
                user_id: req.body.user_id,
                product_id: req.body.product_id
            }
            User.PUT.removeItemInCart(data, (err, result) => {
                if (err) throw err;
                
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    changePassword: async (req, res) => {
        try {
            const validPassword = await bcrypt.compare(req.body.current_password_hashed, result[0].password_hashed)

            if (!validPassword) {
                res.status(404).json(`Wrong password!!!`);
                return;
            }

            const salt = await bcrypt.genSalt(10)
            const password_hashed = await bcrypt.hash(req.body.password, salt)

            const user = {
                user_id: result[0].user_id,
                new_password_hashed: password_hashed
            }
            console.log(user);
            User.PUT.changePassword(user, async (err, result) => {
                if (err) throw err
                if (!result[0]) {
                    res.status(404).json(`what're you looking for???!!!`);
                    return;
                }
                res.status(200).json("Updated password successfully!!!")
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getTotalPrice: async (req, res) => {
        try {
            const data = {
                user_id: req.body.user_id
            }
            User.GET.getTotalPrice(data, (err, result) => {
                if (err) throw err;
                
                res.status(200).json(result)
            })
        } catch (error) {

        }
    },
}

module.exports = userController;