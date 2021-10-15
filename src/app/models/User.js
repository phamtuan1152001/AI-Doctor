const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: { type: String, maxLength: 30},
    password: { type: String, maxLength: 50},
    name: {type: String, maxLength: 50},
    dob: {type: Date},
    createdAt: { type: Date, default: Date.now},
    modifieddAt: { type: Date, default: Date.now}
    
})

module.exports = mongoose.model('User', User)