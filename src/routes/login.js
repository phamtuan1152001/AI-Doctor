const express = require('express')
const router = express.Router()

const loginFormController= require('../app/controllers/LoginFormController')

router.post('/forgotpwd',loginFormController.index)
router.post('/regis',loginFormController.index)
router.post('/login',loginFormController.index)

router.use('/forgotpwd',loginFormController.index)
router.use('/regis', loginFormController.index)
router.use('/login', loginFormController.index)


module.exports= router
