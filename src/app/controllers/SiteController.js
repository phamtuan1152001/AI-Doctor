class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Personal_business_healthcare");
  }
}

module.exports = new SiteController();
                                 