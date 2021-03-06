const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true
  },
    /*
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
  */
  password: {
    type: String,
    required: true
  },
 
  yyyy: {
    type: String,
    rdefault: ' '
    
  },
  dd: {
    type: String,
    default: ' '
  },
  mm: {
    type: String,
    default: ' '
  },
  yyyy: {
    type: String,
    default: ' '
  },
  phone: {
    type: String,
    default: ' '
  },
  gender: {
    type: String,
    default: ' '
  },
  address: {
    type: String,
    default: ' '
  },
  inputBackgroundisease: {
    type: String,
    default: ' '
  },
  inputHPC: {
    type: String,
    default: ' '
  },
  date: {
    type: Date,
    default: Date.now
  },
  avatarUser:{
    type: String,
    default:''
  },
  verified: {
    type: Boolean,
    default: false
  },
  resetLink: {
    type: String,
    default: ' '
  },
 
}, { timestamps: true })

module.exports = mongoose.model('User', User)
