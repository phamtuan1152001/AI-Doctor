const mongoose = require('mongoose')
const Schema = mongoose.Schema


require("../models/Diseases");
require("./Symptom");
require("../models/Category");

// var routes = require('../routes/index');
// var diagnose = require('../routes/diagnose');

var Disease = mongoose.model('Disease')
var Symptoms = mongoose.model('Symptom')
var Category = mongoose.model('Category')


const Diagnose = new Schema({
    Did: {type: Schema.Types.ObjectId, ref: 'Disease'},
    Sid: {type: Schema.Types.ObjectId, ref: 'Symptom'},
    //category: {type: Schema.Types.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Diagnose', Diagnose)
