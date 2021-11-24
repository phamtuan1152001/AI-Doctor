const Booking = require('../models/Booking');

const booking_post = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // new booking
    const booking = new Booking({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.address,
        bookingid : req.body.bookingid
    });

    // save booking to the database
    booking.save()
        .then((result) => {
            res.redirect('/Booking.html');
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Some error occur while booking!" });
        });
}

module.exports = {
    booking_post
}
