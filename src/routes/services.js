const express = require('express')
const router = express.Router()


const servicesController  = require('../app/controllers/ServicesController')



router.use('/Booking', servicesController.booking)
router.use('/Diagnose', servicesController.diagnose)
router.use('/', servicesController.home)

module.exports = router