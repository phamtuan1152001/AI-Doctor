const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Category = mongoose.model('Category')

const Symptom = new Schema({
    Sid: {type: String},
    name: {type: String},
})

module.exports = mongoose.model('Symptom', Symptom)