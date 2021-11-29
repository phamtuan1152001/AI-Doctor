const mongoose = require('mongoose');
var nodemailer = require('nodemailer');

require('../models/Scheduler');
var scheduler = mongoose.model('Scheduler');

const Booking = require('../models/Booking');
const User = require('../models/User');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'aidoctor.se@gmail.com',
        pass: 'segrp32021'
        }
    });

const booking_post = (req, res) => {
    // new booking
    const booking = new Booking({
        //user : User.add(Object.assign({ userId: req.user.id }, req.body)),
        bookingid : req.body.bookingid,
        requirement : req.body.requirement
    });

    // save booking to the database
    booking.save()
        .then((result) => {
            res.redirect('/Booking.html');
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Some error occur while booking!" });
        });
    
    scheduler.findOne( { bookingid : req.body.bookingid }, function(err, result) {
        if (err) throw err;
        var dname = result.doctor_name;
        var department = result.department;
        var hospital = result.hospital;
        var date = result.date;
        var email = result.email;
        var phone = result.phone;

        var mailOptions = {
            from: 'aidoctor.se@gmail.com',
            // sửa lại thành gmail của user
            to: 'sankayou.diephason@gmail.com',
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
}

module.exports = {
    booking_post
}
