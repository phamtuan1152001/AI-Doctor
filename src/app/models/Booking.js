const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('./Hospital')
var Hospital = mongoose.model('Hospital')

require('./User')
var User = mongoose.model('User')

require('./Doctor')
var Doctor = mongoose.model('Doctor')

const Booking = new Schema({
    email: {
        type: String, 
        required: true
    },
    bookingid: {
        type: String, 
        required: true
    },
    requirement: {
        type: String, 
        required: true
    },
    bookingDate: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Booking', Booking)
