const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('./HardAddress')
var HardAddress = mongoose.model('HardAddress')

const Hospital = new Schema({
    name: {type: String},
    description: {type: String},
    address: {type: String},
    hardAddress: {type: Schema.Types.ObjectId, ref: 'HardAddress'},
})

module.exports = mongoose.model('Hospital', Hospital)
