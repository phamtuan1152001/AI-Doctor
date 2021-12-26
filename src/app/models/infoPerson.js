const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infoPerson = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
   
  yyyy: {
    type: String,
    required: true
  },
  dd: {
    type: String,
    required: true
  },
  mm: {
    type: String,
    required: true
  },
  yyyy: {
    type: String,
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
  inputBackgroundisease: {
    type: String,
    required: true
  },
  inputHPC: {
    type: String,
    required: true
  },
 
 
 
}, { timestamps: true })

module.exports = mongoose.model('infoPerson', infoPerson)
