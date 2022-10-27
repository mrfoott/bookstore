const express = require('express')
const userRoute = require("./Routes/userRoute")
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000
// ROUTE
app.get("/", userRoute)


app.listen(port, ()=> {
    console.log("Server listening on http://localhost:" + port);
})
