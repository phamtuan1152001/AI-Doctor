const mongoose = require('mongoose')
const Schema = mongoose.Schema

require("../models/Diseases");
require("../models/Category");

// var routes = require('./routes/index');
// var diagnose = require('./routes/diagnose');

var Category = mongoose.model('Category')

const Disease = new Schema({
    name: {type: String},
    description: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Disease', Disease)
