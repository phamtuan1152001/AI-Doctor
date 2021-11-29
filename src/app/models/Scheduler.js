const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedulerSchema = new Schema({
    bookingid: {
        type: String,
        required: true
    },
    doctor_name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Scheduler = mongoose.model('Scheduler', schedulerSchema);
module.exports = Scheduler;