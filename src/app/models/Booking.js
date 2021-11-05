const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    hospital: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    appoint_date: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;