const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('./Hospital')
var Hospital = mongoose.model('Hospital')

require('./User')
var User = mongoose.model('User')

require('./Doctor')
var Doctor = mongoose.model('Doctor')

const Booking = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    hospital: {type: Schema.Types.ObjectId, ref: 'Hospital'},
    bookingDate: {type: Date},
    creationDate: {type: Date},
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    requirement: {type: String, required: true},
})

module.exports = mongoose.model('Booking', Booking)
