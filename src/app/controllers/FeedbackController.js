const Feedback = require('../models/Feedback');
//const {mongooseToObject} = require('../../util/mongoose');

class FeedbackController{
    // [GET] /feedback
    index(req, res){
        res.render('Contact_us');
    }

    // [POST] /feedback
    send_feedback(req, res){
        const feedback = new Feedback(req.body);
        feedback.save();
        
    }

    /*// [GET] /feedback/send
    show_feedback(req, res, next){
        res.render("/feedback/send")
    }*/
}

module.exports = new FeedbackController();