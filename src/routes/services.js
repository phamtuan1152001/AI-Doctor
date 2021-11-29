const express = require('express')
const router = express.Router()


const servicesController  = require('../app/controllers/ServicesController')



router.use('/Services/Booking', servicesController.booking)
router.use('/Services/Diagnose', servicesController.diagnose)


module.exports = router