const express = require('express')
const router = express.Router()

const DiagnoseController = require('../app/controllers/DiagnoseController')

router.post('/User/Services/Diagnose', DiagnoseController.diagnose)
router.use('/', DiagnoseController.index)

module.exports = router;
