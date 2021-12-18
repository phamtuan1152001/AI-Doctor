const express = require('express');
const router = express.Router();

require('../app/models/Scheduler');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

var scheduler = mongoose.model('Scheduler');
var user = mongoose.model('User');

const Booking = require('../app/models/Booking');
const User = require('../app/models/User');
const passport = require('passport')

// post appointment into database
router.post('/', (req, res) => {

    // new booking
    var booking = new Booking({
        email: req.body.email,
        bookingid : req.body.bookingid,
        requirement : req.body.requirement
    });

    // save booking to the database
    booking.save()
        .then((result) => {
            console.log(req.body);
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Some error occur while booking!" });
        });
    
    // find appointment infor to send email
    scheduler.findOne( { bookingid : req.body.bookingid }, function(err, result) {
        if (err) throw err;
        var dname = result.doctor_name;
        var department = result.department;
        var hospital = result.hospital;
        var date = result.date;
        var email = result.email;
        var phone = result.phone;

        var transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            host: process.env.SERVICE,
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
                }
            });

        var mailOptions = {
            from: process.env.USER,
            to: req.body.email,
            subject: 'Email notification of booking progress at AI Doctor',
            html:
            '<b>Thank you for booking an appointment at AI Doctor system!</b><p>Information for booked appointment:</p><ul><li>Doctor name: ' + dname + '</li><li>Department: ' + department + '</li><li>Hospital: ' + hospital + '</li><li>Date: ' + date + '</li><li>Email: ' + email + '</li><li>Phone: ' + phone + '</li></ul>'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
})

module.exports = router;

