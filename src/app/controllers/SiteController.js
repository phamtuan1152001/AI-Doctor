class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Online_Health_Diagnosis");
  }
}

module.exports = new SiteController();
