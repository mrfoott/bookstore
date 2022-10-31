const route = require("express").Router();

const adminController = require("../Controllers/adminController");
const middleware = require('../middlewares/authMiddleware').verifyAccessTokenAdmin;

route.get('/getalluser', middleware, adminController.getUser)


module.exports = route;
