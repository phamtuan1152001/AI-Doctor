const mongoose = require('mongoose')
const Schema = mongoose.Schema

//var HardAddress = mongoose.model('HardAddress')

const User = new Schema({
    name: {
        type: String, 
        maxLength: 50, 
        required: true},
    email: {
        type: String,
        required: true},
    password: { 
        type: String, 
        maxLength: 50,
        required: true},
    confirm_password: {
        type: String, 
        maxLength: 50,
        required: true},
    dob: {
        type: Date, 
        default: Date.now},
})

module.exports = mongoose.model('Login', Login)