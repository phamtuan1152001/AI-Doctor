const User = require('../models/User');

class UserController {

    // [GET] user
    index(req, res) {
        // res.render('user');

        User.find({}, function (err, users) {
            if (err) res.status(400).jason({ error: 'message'})
            res.json(users)
        });
    }

    // [SEND] user/:slug (doctor information)
    search(req, res) {
        res.send('Test search')
    }
}

module.exports = new UserController


// Mysql MsSQL: Rows = MongoDB: Documents
// Mysql MsSQL: Tables = MongoDB: Collections