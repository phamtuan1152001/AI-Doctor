class SiteController {
  // [GET] site
  index(req, res) {
    res.render("home");
  }
}

module.exports = new SiteController();
