const Feedback = require('../models/Feedback');
//const {mongooseToObject} = require('../../util/mongoose');

class FeedbackController{
    // [GET] /feedback
    index(req, res){
        res.render('Contact_us');
    }

    // [POST] /Contact
    send_feedback(req, res){
        const feedback = new Feedback(req.body);
        feedback.save();
        
    }
}

module.exports = new FeedbackController();