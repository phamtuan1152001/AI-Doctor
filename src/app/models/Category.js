const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
    department: {type: String},
})

module.exports = mongoose.model('Category', Category)