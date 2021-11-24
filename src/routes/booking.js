const express = require('express');
const BookingController = require('..app/controllers/BookingController');

const router = express.Router();

// post appointment into database
router.post('/', BookingController.booking_post);

module.exports = router;
