
class UserController {

    // [GET] user
    index(req, res) {
        res.render('user');
    }

    // [SEND] user/:slug (doctor information)
    search(req, res) {
        res.send('Test search')
    }
}

module.exports = new UserController