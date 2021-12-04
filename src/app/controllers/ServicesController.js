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
    nutri(req, res) {
      res.render('Nutrition');
    }
  }
  
  module.exports = new ServicesController();
                                   