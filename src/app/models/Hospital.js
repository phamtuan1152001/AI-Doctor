const mongoose = require('mongoose')
const Schema = mongoose.Schema

var HardAddress = mongoose.model('HardAddress')

const Hospital = new Schema({
    name: {type: String},
    description: {type: String},
    address: {type: String},
    hardAddress: {type: HardAddress},
})

module.exports = mongoose.model('Hospital', Hospital)