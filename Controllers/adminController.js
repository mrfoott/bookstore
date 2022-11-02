const Admin = require('../Models/admin')

const adminController = {
    getUser: async(req, res) => {
        try {
            Admin.user.GET.getAllUserInfo((err, result)=>{
                if(err) throw err;
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getUserById: async(req, res) => {
        try {
            Admin.user.GET.getUserById(req.params.id, (err, result)=>{
                if(err) throw err;
                if(!result[0]){
                    res.status(404).json(`what're you looking for???!!!`);
                    return;
                }
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = adminController;
