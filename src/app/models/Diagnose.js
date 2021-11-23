const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Disease = mongoose.model('Disease')
var Symptom = mongoose.model('Symptom')
var Category = mongoose.model('Category')

const Diagnose = new Schema({
    disease: {type: Schema.Types.ObjectId, ref: 'Disease'},
    symptom: {type: Schema.Types.ObjectId, ref: 'Symptom'},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Diagnose', Diagnose)