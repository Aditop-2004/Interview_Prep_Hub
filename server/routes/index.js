const express = require('express')
const signup = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')
const searchUser = require('../controller/searchUser')
const {resetPasswordToken,resetPassword} = require("../controller/ResetPassword.js")
const { auth } = require("../middlewares/auth-middleware.js");
const {
    sendotp,
    changePassword,} = require("../controller/Authentication/authControllers.js")
const router = express.Router()

//create user api
router.post('/register',signup)
// //check user email
router.post('/email',checkEmail)
// //check user password
router.post('/password',checkPassword)
// //login user details
router.get('/user-details',userDetails)
//logout user
router.get('/logout',logout)
//update user details
router.post('/update-user',updateUserDetails)
//search user
router.post("/search-user",searchUser)

router.post("/sendotp", sendotp)

router.post("/changepassword", auth, changePassword)

router.post("/reset-password-token", resetPasswordToken)

router.post("/reset-password", resetPassword)

module.exports = router