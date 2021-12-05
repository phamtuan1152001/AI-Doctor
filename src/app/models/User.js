const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    // name: {type: String, maxLength: 50},
    // ssn: {type: String, maxLength: 50},
    // dob: {type: Date},
    // phoneNumber: {type: String},
    // email: {type: String},
    // username: { type: String, maxLength: 30},
    // password: { type: String, maxLength: 50},
    // healthInsuranceID: { type: String, maxLength: 50},
    // credit: { type: String, maxLength: 16},
    // address: { type: String, maxLength: 50},
    // //hardAddress: {type: HardAddress},
    // createdAt: { type: Date, default: Date.now},
    // modifieddAt: { type: Date, default: Date.now}   
   name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', User)
