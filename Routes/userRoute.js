const route = require("express").Router()

route.get("/", (req, res)=> {
    res.send("hello i'm noicamlon")
})

module.exports = route
