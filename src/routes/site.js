const express = require('express')
const router = express.Router()


const siteController = require('../app/controllers/SiteController')

router.use('/Contact', siteController.contact)
router.use('/Appointment_with_a_doctor', siteController.Utilities1)
router.use('/Immediately_pills_sent', siteController.Utilities2)
router.use('/Multi-function pharmacy', siteController.Utilities3)
router.use('/Online_Health_Diagnosis', siteController.Utilities4)
router.use('/Online_medical_records', siteController.Utilities5)
router.use('/Personal_business_healthcare', siteController.Utilities6)
router.use('/Log_in', siteController.log)
router.use('/Reg', siteController.reg)
router.use('/ForgotPassword', siteController.fwd)

router.use('/', siteController.home)

module.exports = router