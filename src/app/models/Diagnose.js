const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://localhost:27017/doctorAI");
require("../models/Diseases");
require("../models/Symptom");
require("../models/Category");

// var routes = require('../routes/index');
// var diagnose = require('../routes/diagnose');

var Disease = mongoose.model('Disease')
var Symptom = mongoose.model('Symptom')
var Category = mongoose.model('Category')


const Diagnose = new Schema({
    disease: {type: Schema.Types.ObjectId, ref: 'Disease'},
    symptom: {type: Schema.Types.ObjectId, ref: 'Symptom'},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Diagnose', Diagnose)

// const Diagnose = new Schema({
//     disease: {type: String},
//     description: {type: String},
//     symptom: {type: String},
//     category: {type: String},
// })
    
//     module.exports = mongoose.model('Diagnose', Diagnose)