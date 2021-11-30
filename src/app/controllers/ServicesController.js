class ServicesController {
    // [GET] site
    home(req, res) {
      res.render('home');
    }
    diagnose(req, res) {
      res.render('Diagnose');
    }
    booking(req, res) {
      res.render('Booking');
    }
  }
  
  module.exports = new ServicesController();
                                   