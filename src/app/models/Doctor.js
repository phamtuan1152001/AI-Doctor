const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Category = mongoose.model('Category')

const Doctor = new Schema({
    hospital: {type: String},
    ssn: {type: String},
    name: {type: String},
    department: {type: Category},
    phoneNumber: {type: String},
    dob: {type: Date},
    email: {type: String},
    address: {type: String},
    hardAddress: {type: String},
})

module.exports = mongoose.model('Doctor', Doctor)