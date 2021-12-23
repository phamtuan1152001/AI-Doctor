const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
    Cid: {type: String},
    department: {type: String},
})

module.exports = mongoose.model('Category', Category)