class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Contact_us");
  }
}

module.exports = new SiteController();
