const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = mongoose.model('User')
var Disease = mongoose.model('Disease')

const MedicalRecord = new Schema({
    userID: User, 
    creationDate: {type: Date, default: Date.now},
    desease: {type: Disease},
    description: {type: String},
})

module.exports = mongoose.model('MedicalRecord', MedicalRecord)