const express = require('express')
const userRoute = require("./Routes/userRoute")
const app = express()
const port = process.env.PORT || 3000

app.get("/", userRoute)

app.listen(port, ()=> {
    console.log("Server listening on: " + port);
})
