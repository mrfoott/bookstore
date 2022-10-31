const express = require('express')
const userRoute = require("./Routes/userRoute")
const adminRoute = require("./Routes/adminRoute")
const authRoute = require('./Routes/authRoute')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// ROUTE GET
app.use("/", userRoute)

// ROUTE POST
app.use("/v1/auth", authRoute)
app.use("/api/admin", adminRoute)

app.listen(port, () => {
    console.log("Server listening on http://localhost:" + port);
})

