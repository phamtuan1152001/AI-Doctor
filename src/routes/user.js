const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')

router.use('/', userController.index)
router.use('/search/', userController.search)

module.exports = router;