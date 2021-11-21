class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Nutrition");
  }
}

module.exports = new SiteController();
                                 