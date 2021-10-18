class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Appointment_with_a_doctor");
  }
}

module.exports = new SiteController();
