class UserController {
    // [GET] site
    home(req, res) {
      res.render('Person');
    }
  }
  
  module.exports = new UserController();
                                   