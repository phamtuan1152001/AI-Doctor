class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Internal_doctor");
  }
}

module.exports = new SiteController();
                                 