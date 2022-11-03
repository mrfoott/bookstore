const route = require("express").Router();

const adminController = require("../Controllers/adminController");
const middleware = require('../middlewares/authMiddleware').verifyAccessTokenAdmin;

route.get('/getalluser', middleware, adminController.getUser)
route.get('/getuser/:id', middleware, adminController.getUserById)
route.put('/editPasswordById/:id', middleware, adminController.updateUserPasswordById)


module.exports = route;
