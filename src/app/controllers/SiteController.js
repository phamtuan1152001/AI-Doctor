class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Pediatrics_doctor");
  }
}

module.exports = new SiteController();
                                 