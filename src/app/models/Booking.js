const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bookingid: {
        type: String,
        required: true,
    }  
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;


/**************************************

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Hospital = mongoose.model('Hospital')
var User = mongoose.model('User')
var Doctor = mongoose.model('Doctor')

const Booking = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    hospital: {type: Schema.Types.ObjectId, ref: 'Hospital'},
    bookingDate: {type: Date},
    creationDate: {type: Date},
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
})

module.exports = mongoose.model('Booking', Booking)

****************************************/
