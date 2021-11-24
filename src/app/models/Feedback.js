const mongoose = require('mongoose')
const Schema = mongoose.Schema

//var User = mongoose.model('User')

const Feedback = new Schema({
    description: {type: String},
    userID: {type: Schema.Types.ObjectId, ref: 'User'},
    creationDate: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Feedback', Feedback)