const userController = require("../Controllers/userController")

const middleware = require("../middlewares/authMiddleware").verifyAccessToken

const route = require("express").Router()

route.get("/")
route.get("/getcartofself", middleware, userController.getCartOfSelf)
route.get("/gettotalprice", middleware, userController.getTotalPrice)
route.post("/addtocart", middleware, userController.addToCart)
route.put("/updateuserinfo", middleware, userController.updateUserInfo)
route.put("/addonetotal", middleware, userController.addOneToTotal)
route.put("/removeonefromtotal", middleware, userController.removeOneFromTotal)
route.put("/removetitemincart", middleware, userController.removeItemInCart)
route.put("/changepassword", middleware, userController.changePassword)



module.exports = route
