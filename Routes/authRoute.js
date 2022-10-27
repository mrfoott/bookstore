const route = require("express").Router()
const authController = require('../Controllers/authController')

route.post("/register", authController.registerUser)

module.exports = route;
