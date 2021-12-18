const express = require('express')
const router = express.Router()

const FeedbackController = require('../app/controllers/FeedbackController')

//router.get('/send', FeedbackController.show_feedback)
router.post('/', FeedbackController.send_feedback)
router.use('/', FeedbackController.index)

module.exports = router;