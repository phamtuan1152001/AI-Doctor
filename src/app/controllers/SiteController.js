class SiteController {
  // [GET] site
  index(req, res) {
    res.render("login");
  }
}

module.exports = new SiteController();
