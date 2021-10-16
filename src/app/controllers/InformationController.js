class InformationController {

    // [GET] user
    index(req, res) {
        res.render('Information');
    }

}

module.exports = new UserController