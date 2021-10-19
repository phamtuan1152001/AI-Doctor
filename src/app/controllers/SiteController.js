class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Person");
  }
}

module.exports = new SiteController();
