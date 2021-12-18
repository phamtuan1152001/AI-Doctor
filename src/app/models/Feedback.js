const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Feedback = new Schema({
    fullname: {type: String, maxLength: 30},
    message: {type: String},
    evaluate: {type: String},
    creationDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('feedback', Feedback)