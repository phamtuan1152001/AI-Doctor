class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Online_medical_records");
  }
}

module.exports = new SiteController();
