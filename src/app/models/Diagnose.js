const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Disease = mongoose.model('Disease')
var Symptom = mongoose.model('Symptom')
var Category = mongoose.model('Category')

const Diagnose = new Schema({
    disease: {type: Disease},
    symptom: {type: Symptom},
    category: {type: Category, default: this.symptom.name},
})

module.exports = mongoose.model('Diagnose', Diagnose)