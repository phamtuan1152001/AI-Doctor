class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Login");
  }
}

module.exports = new SiteController();
