const Admin = require('../Models/admin')
const bcrypt = require('bcrypt')

const adminController = {
    getUser: async (req, res) => {
        try {
            Admin.user.GET.getAllUserInfo((err, result) => {
                if (err) throw err;
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getUserById: async (req, res) => {
        try {
            Admin.user.GET.getUserById(req.params.id, (err, result) => {
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
    updateUserPasswordById: async (req, res) => {
        try {
            Admin.user.GET.getUserById(req.params.id, async (err, result) => {
                if (err) throw err;
                if (!result[0]) {
                    res.status(404).json(`what're you looking for???!!!`);
                    return;
                }
                // console.log(req.body.password);
                // console.log(result[0].password_hashed);
                const validPassword = await bcrypt.compare(req.body.current_password_hashed, result[0].password_hashed)
                // console.log(req.body.password);
                // console.log(result[0]);
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
                Admin.user.PUT.editPassword(user, (error, result) => {
                    if (error) throw error
                    res.status(200).json('Updated Password Successfully ' + JSON.stringify(result));
                })
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const password_hashed = await bcrypt.hash(req.body.password, salt)
            // console.log("000000000000000");
            Admin.user.GET.findUserByEmail(req.body.email, (err, result) => {
                if (err) throw err
                // console.log("111111111");
                if (result[0]) {
                    res.status(302).json(`User already existed!!!`);
                    // console.log("222222222222222222");
                    return;
                }
                const user = {
                    full_name: req.body.full_name,
                    email: req.body.email,
                    address: req.body.address,
                    password_hashed: password_hashed,
                    phone: req.body.phone,
                    role_id: req.body.role_id
                }
                Admin.user.POST.addUser(user, (err, result) => {
                    if (err) throw err

                    res.status(200).json(result)
                })
            })

            const user = {
                full_name: result[0].full_name,
                email: result[0]
            }
        } catch (error) {

        }
    }
}

module.exports = adminController;
