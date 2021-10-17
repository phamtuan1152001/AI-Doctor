class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Diagnose");
  }
}

module.exports = new SiteController();
