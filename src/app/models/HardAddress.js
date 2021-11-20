const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HardAddress = new Schema({
    province: {type: String},
    district: {type: String},
    ward: {type: String},
})

module.exports = mongoose.model('HardAddress', HardAddress)