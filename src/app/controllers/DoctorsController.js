class DoctorsController {
    // [GET] site
    home(req, res) {
      res.render('home');
    }
    internal(req, res) {
      res.render('Internal_doctor');
    }
    pediatrics(req, res) {
      res.render('Pediatrics_doctor');
    }
    otorhinolaryngology(req, res) {
        res.render('Otorhinolaryngology_doctor');
      }
  }
  
  module.exports = new DoctorsController();