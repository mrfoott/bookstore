const route = require("express").Router()
const userSeed = require("../Seeds/userSeed")

route.get("/", userSeed.addUsers)

module.exports = route
