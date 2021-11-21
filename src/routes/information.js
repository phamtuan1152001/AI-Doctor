const express = require('express')
const router = express.Router()


const informationController  = require('../app/controllers/InformationController')



router.use('/About_us', informationController.about)
router.use('/FAQ', informationController.faq)
router.use('/', informationController.info)

module.exports = router